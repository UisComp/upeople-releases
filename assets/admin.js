// Links dashboard: edits config.json, previews it on the landing page, and
// commits it through the GitHub contents API with a token the editor types in.
(function () {
  "use strict";

  var REPO = "UisComp/upeople-releases";
  var PATH = "config.json";
  var LINKS = [
    ["appStore", "App Store", "https://apps.apple.com/"],
    ["googlePlay", "Google Play", "https://play.google.com/"],
    ["testFlight", "TestFlight (public link)", "https://testflight.apple.com/join/"],
    ["apk", "Direct APK", "https://github.com/" + REPO + "/releases/latest/download/upeople.apk"]
  ];
  var $ = function (id) { return document.getElementById(id); };
  var status = $("status");

  function say(text, kind) { status.textContent = text; status.className = "status " + (kind || ""); }

  $("links").innerHTML = LINKS.map(function (l) {
    return '<div class="linkrow"><label class="switch"><input type="checkbox" id="on-' + l[0] + '"> ' + l[1] + "</label>" +
      '<div class="field"><label for="url-' + l[0] + '">URL</label><input id="url-' + l[0] + '" type="url" placeholder="' + l[2] + '"></div>' +
      '<a class="test" id="test-' + l[0] + '" target="_blank" rel="noopener">Open link ↗</a></div>';
  }).join("");

  function fill(c) {
    c = c || {};
    var links = c.links || {};
    LINKS.forEach(function (l) {
      var v = links[l[0]] || {};
      $("on-" + l[0]).checked = !!v.enabled;
      $("url-" + l[0]).value = v.url || "";
      $("test-" + l[0]).href = v.url || "#";
    });
    $("version").value = c.version || "";
    $("defaultLanguage").value = c.defaultLanguage || "ar";
    var s = c.sections || {};
    ["features", "screens", "apkDetails"].forEach(function (k) { $("sec-" + k).checked = s[k] !== false; });
    var a = c.announcement || {};
    $("ann-enabled").checked = !!a.enabled;
    $("ann-ar").value = a.ar || "";
    $("ann-en").value = a.en || "";
    var ct = c.contact || {};
    $("email").value = ct.email || "";
    $("website").value = ct.website || "";
  }

  function collect() {
    var links = {};
    LINKS.forEach(function (l) {
      links[l[0]] = { enabled: $("on-" + l[0]).checked, url: $("url-" + l[0]).value.trim() };
    });
    return {
      version: $("version").value.trim(),
      defaultLanguage: $("defaultLanguage").value,
      announcement: { enabled: $("ann-enabled").checked, ar: $("ann-ar").value.trim(), en: $("ann-en").value.trim() },
      links: links,
      sections: { features: $("sec-features").checked, screens: $("sec-screens").checked, apkDetails: $("sec-apkDetails").checked },
      contact: { email: $("email").value.trim(), website: $("website").value.trim() }
    };
  }

  function problems(c) {
    var out = [];
    LINKS.forEach(function (l) {
      var v = c.links[l[0]];
      if (v.enabled && !/^https:\/\/\S+$/i.test(v.url)) out.push(l[1] + ": an enabled link needs an https:// URL");
    });
    if (c.contact.website && !/^https:\/\//i.test(c.contact.website)) out.push("Website must start with https://");
    if (c.contact.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(c.contact.email)) out.push("Support email is not valid");
    if (c.announcement.enabled && !c.announcement.ar && !c.announcement.en) out.push("The banner is on but has no text");
    return out;
  }

  function json(c) { return JSON.stringify(c, null, 2) + "\n"; }
  function b64(text) {
    var bytes = new TextEncoder().encode(text), bin = "";
    for (var i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
    return btoa(bin);
  }

  function loadLive() {
    say("Loading the live config…");
    return fetch("config.json?v=" + Date.now(), { cache: "no-store" }).then(function (r) { return r.json(); })
      .then(function (c) { fill(c); say("Loaded the live config.", "ok"); })
      .catch(function () { say("Could not load config.json.", "err"); });
  }

  document.addEventListener("input", function (e) {
    var m = /^url-(.+)$/.exec(e.target.id || "");
    if (m) $("test-" + m[1]).href = e.target.value || "#";
  });

  $("preview").addEventListener("click", function () {
    var c = collect(), p = problems(c);
    if (p.length) { say(p.join(" · "), "err"); return; }
    try { localStorage.setItem("upeople-config-draft", JSON.stringify(c)); } catch (e) { say("This browser blocks storage; preview is unavailable.", "err"); return; }
    window.open("./?preview=1", "_blank", "noopener");
  });

  $("download").addEventListener("click", function () {
    var c = collect(), p = problems(c);
    if (p.length) { say(p.join(" · "), "err"); return; }
    var a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([json(c)], { type: "application/json" }));
    a.download = "config.json";
    a.click();
    URL.revokeObjectURL(a.href);
  });

  $("reset").addEventListener("click", loadLive);

  try { $("token").value = sessionStorage.getItem("upeople-gh-token") || ""; } catch (e) {}

  $("publish").addEventListener("click", function () {
    var c = collect(), p = problems(c);
    if (p.length) { say(p.join(" · "), "err"); return; }
    var token = $("token").value.trim();
    if (!token) { say("Enter a GitHub token first.", "err"); return; }
    try { sessionStorage.setItem("upeople-gh-token", token); } catch (e) {}
    var api = "https://api.github.com/repos/" + REPO + "/contents/" + PATH;
    var headers = { Authorization: "Bearer " + token, Accept: "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28" };
    say("Publishing…");
    fetch(api + "?ref=main", { headers: headers, cache: "no-store" })
      .then(function (r) {
        if (r.status === 401) throw new Error("The token was refused (401).");
        if (!r.ok) throw new Error("Could not read config.json (" + r.status + ").");
        return r.json();
      })
      .then(function (cur) {
        return fetch(api, {
          method: "PUT", headers: headers,
          body: JSON.stringify({
            message: $("message").value.trim() || "Landing page: update links",
            content: b64(json(c)), sha: cur.sha, branch: "main"
          })
        });
      })
      .then(function (r) {
        if (r.status === 403 || r.status === 404) throw new Error("The token cannot write to " + REPO + " (" + r.status + ").");
        if (r.status === 409) throw new Error("config.json changed meanwhile — reload the live config and try again.");
        if (!r.ok) throw new Error("GitHub refused the change (" + r.status + ").");
        return r.json();
      })
      .then(function (res) {
        try { localStorage.removeItem("upeople-config-draft"); } catch (e) {}
        status.className = "status ok";
        status.innerHTML = "Published. The live page updates within about a minute. ";
        var a = document.createElement("a");
        a.href = res.commit.html_url; a.target = "_blank"; a.rel = "noopener"; a.textContent = "View the commit ↗";
        status.appendChild(a);
      })
      .catch(function (e) { say(e.message || "Publishing failed.", "err"); });
  });

  loadLive();
})();
