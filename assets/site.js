// U-People landing page. Every link comes from config.json (edited from
// admin.html); ?preview=1 shows the dashboard's unsaved draft instead.
(function () {
  "use strict";

  var REPO = "UisComp/upeople-releases";

  var T = {
    ar: {
      navFeatures: "المزايا", navScreens: "الشاشات", navDownload: "التحميل",
      heroPill: "الإصدار",
      heroTitle: "كل يوم عملك في تطبيق واحد",
      heroLead: "سجّل حضورك بلمسة، اعرف ورديتك، قدّم إجازاتك وأذوناتك ومأمورياتك، واطّلع على راتبك — بالعربية والإنجليزية، على الآيفون والآيباد والأندرويد.",
      featEyebrow: "المزايا", featTitle: "كل ما يحتاجه الموظف",
      featLead: "خدمات الموارد البشرية اليومية في مكان واحد، متصلة مباشرة بنظام U-People في شركتك.",
      scrEyebrow: "من داخل التطبيق", scrTitle: "شاشات حقيقية من التطبيق",
      scrLead: "لقطات من وضع التجربة ببيانات نموذجية — يمكنك تجربته بنفسك من شاشة الدخول دون حساب.",
      dlEyebrow: "التحميل", dlTitle: "حمّل U-People",
      dlLead: "اختر المتجر المناسب لجهازك. حسابك يعمل على أي منها بعد تفعيله من الموارد البشرية.",
      trustEyebrow: "الأمان", trustTitle: "مصمم ليحمي بياناتك",
      appStore: "App Store", appStoreSmall: "حمّله من", appStoreBody: "للآيفون والآيباد — الإصدار الرسمي.",
      googlePlay: "Google Play", googlePlaySmall: "احصل عليه من", googlePlayBody: "لأجهزة أندرويد — الإصدار الرسمي مع التحديث التلقائي.",
      testFlight: "TestFlight", testFlightSmall: "النسخة التجريبية", testFlightBody: "جرّب الإصدارات القادمة على الآيفون قبل نشرها، عبر تطبيق TestFlight من Apple.",
      apk: "APK مباشر", apkSmall: "تحميل", apkBody: "لأجهزة أندرويد بدون متجر Google Play. لا يتحدث تلقائيًا.",
      tagOfficial: "رسمي", tagBeta: "تجريبي", tagDirect: "مباشر",
      apkMeta: "الإصدار {v} · {size} · {date}", sha: "بصمة SHA-256:",
      apkNote: "نسخة المتجر ونسخة الرابط موقّعتان بشكل مختلف، فلا تحدّث إحداهما الأخرى — احذف إحداهما قبل تثبيت الأخرى.",
      contact: "تواصل معنا",
      features: [
        ["checkin", "تسجيل الحضور بلمسة", "حضور وانصراف بصورة سيلفي مع التحقق من الحيوية والموقع، والخادم هو من يتحقق."],
        ["calendar", "حضورك الشهري", "حضور وتأخير وغياب وإجازات ومأموريات لكل يوم في الشهر بنظرة واحدة."],
        ["clock", "ورديتك ونوافذ البصمة", "متى تبدأ ورديتك، ومتى تُفتح نافذة الحضور والانصراف."],
        ["swap", "الجدول وتبديل الورديات", "جدول ورديات الفريق وطلبات التبديل بين الزملاء ومتابعة القرار."],
        ["history", "سجل الحضور", "أيام الشهر بالتفصيل: الأوقات وساعات العمل والتأخير والإضافي والموقع."],
        ["leave", "الإجازات والأرصدة", "قدّم طلب الإجازة واعرف رصيدك وتابع الطلب حتى القرار."],
        ["excuse", "الأذونات", "تأخير عن الحضور أو خروج أثناء اليوم أو انصراف مبكر."],
        ["mission", "المأموريات والسلف", "طلبات المأموريات والسلف مع الحالة والملاحظات لكل طلب."],
        ["payslip", "مفردات الراتب", "الإضافات والخصومات وملخص الحضور لكل شهر، محمية ببصمتك."],
        ["bell", "الإشعارات", "إشعار فوري عند البت في طلبك أو تعديل ورديتك أو قرب انتهاء مستند."],
        ["user", "ملفك الوظيفي", "بياناتك ووظيفتك وفرعك ومستنداتك في مكان واحد."],
        ["globe", "عربي وإنجليزي", "واجهة كاملة من اليمين لليسار، ووضع ليلي، وتصميم للآيباد."]
      ],
      trust: [
        ["finger", "الدخول بالبصمة", "رمز PIN خاص بك، مع دخول بالبصمة أو Face ID لكل حساب على حدة."],
        ["device", "ربط الجهاز", "الحساب مرتبط بجهازك، ونقله لجهاز جديد يتم بموافقة الموارد البشرية."],
        ["shield", "التحقق على الخادم", "التطبيق يرسل الملاحظات فقط؛ الصورة والموقع يتحقق منهما الخادم."]
      ],
      shots: ["سجّل حضورك بلمسة", "حضورك الشهري بوضوح", "ورديتك ونوافذ البصمة", "سجل حضورك", "إجازاتك وأرصدتك", "الأذونات بسهولة", "مفردات راتبك", "تابع كل طلب", "لا يفوتك أي قرار", "كل خدماتك في قائمة واحدة"]
    },
    en: {
      navFeatures: "Features", navScreens: "Screens", navDownload: "Download",
      heroPill: "Version",
      heroTitle: "Your whole working day in one app",
      heroLead: "Check in with one tap, see your shift, request leave, permissions and missions, and read your payslip — in Arabic and English, on iPhone, iPad and Android.",
      featEyebrow: "Features", featTitle: "Everything an employee needs",
      featLead: "Everyday HR services in one place, connected directly to your company's U-People system.",
      scrEyebrow: "Inside the app", scrTitle: "Real screens from the app",
      scrLead: "Captured from the built-in demo with sample data — try it yourself from the sign-in screen, no account needed.",
      dlEyebrow: "Download", dlTitle: "Get U-People",
      dlLead: "Pick the store for your device. Your account works on any of them once HR has enabled it.",
      trustEyebrow: "Security", trustTitle: "Built to protect your data",
      appStore: "App Store", appStoreSmall: "Download on the", appStoreBody: "For iPhone and iPad — the official release.",
      googlePlay: "Google Play", googlePlaySmall: "Get it on", googlePlayBody: "For Android — the official release, updated automatically.",
      testFlight: "TestFlight", testFlightSmall: "Beta on", testFlightBody: "Try upcoming iPhone releases before they ship, through Apple's TestFlight app.",
      apk: "Direct APK", apkSmall: "Download the", apkBody: "For Android devices without Google Play. It does not update itself.",
      tagOfficial: "Official", tagBeta: "Beta", tagDirect: "Direct",
      apkMeta: "Version {v} · {size} · {date}", sha: "SHA-256:",
      apkNote: "The store copy and the link copy are signed differently, so neither updates the other — uninstall one before installing the other.",
      contact: "Contact us",
      features: [
        ["checkin", "One-tap check-in", "Check in and out with a selfie, liveness and location — verified by the server, not the phone."],
        ["calendar", "Your month at a glance", "Present, late, absent, leave and missions for every day of the month."],
        ["clock", "Shift and punch windows", "When your shift starts, and when check-in and check-out open."],
        ["swap", "Roster and shift swaps", "Your team's roster, swap requests with colleagues, and the decision."],
        ["history", "Attendance history", "Every day in detail: times, hours worked, lateness, overtime and place."],
        ["leave", "Leave and balances", "Request leave, see your balance and follow the request until it is decided."],
        ["excuse", "Permissions", "Late arrival, time out during the day, or early leave."],
        ["mission", "Missions and loans", "Mission and loan requests, with the status and notes of each."],
        ["payslip", "Payslips", "Earnings, deductions and the month's attendance — behind your fingerprint."],
        ["bell", "Notifications", "Notified the moment a request is decided, your shift changes or a document is expiring."],
        ["user", "Employee profile", "Your details, job, branch and documents in one place."],
        ["globe", "Arabic and English", "Full right-to-left interface, dark mode, and a layout made for iPad."]
      ],
      trust: [
        ["finger", "Biometric sign-in", "Your own PIN, with fingerprint or Face ID sign-in kept per account."],
        ["device", "Device binding", "Your account is bound to your phone; moving it to a new one goes through HR."],
        ["shield", "Verified on the server", "The app sends observations only; the server checks the selfie and the location."]
      ],
      shots: ["Check in with one tap", "Your month of attendance", "Your shift and its punch windows", "Your attendance history", "Leave and balances", "Permissions made simple", "Your payslip, line by line", "Follow every request", "Never miss a decision", "All your services in one menu"]
    }
  };

  var SHOTS = ["01_dashboard", "02_attendance", "03_shift_schedule", "04_attendance_history", "05_leave_requests",
    "06_permissions_excuses", "07_salary_overview", "08_request_tracking", "09_notifications", "10_employee_services"];

  var P = 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
  var ICONS = {
    checkin: '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><path d="m10 17 5-5-5-5"/><path d="M15 12H3"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    swap: '<path d="m16 3 4 4-4 4"/><path d="M20 7H4"/><path d="m8 21-4-4 4-4"/><path d="M4 17h16"/>',
    history: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/>',
    leave: '<path d="M22 12a10.06 10.06 1 0 0-20 0Z"/><path d="M12 12v8a2 2 0 0 0 4 0"/><path d="M12 2v1"/>',
    excuse: '<path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"/><path d="M12 8v4M12 16h.01"/>',
    mission: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    payslip: '<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8M12 17.5v-11"/>',
    bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
    user: '<circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20"/>',
    finger: '<path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"/><path d="M14 13.12c0 2.38 0 6.38-1 8.88"/><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"/><path d="M2 12a10 10 0 0 1 18-6"/><path d="M2 16h.01"/><path d="M21.8 16c.2-2 .131-5.354 0-6"/><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"/><path d="M8.65 22c.21-.66.45-1.32.57-2"/><path d="M9 6.8a6 6 0 0 1 9 5.2v2"/>',
    device: '<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>',
    shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>'
  };
  function icon(name) { return '<svg viewBox="0 0 24 24" ' + P + ' aria-hidden="true">' + (ICONS[name] || "") + "</svg>"; }

  var STORE_ICONS = {
    appStore: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.37 12.62c-.02-2.2 1.8-3.26 1.88-3.31-1.03-1.5-2.62-1.7-3.18-1.73-1.35-.14-2.64.8-3.33.8-.69 0-1.74-.78-2.86-.76-1.47.02-2.83.86-3.59 2.17-1.53 2.66-.39 6.6 1.1 8.75.73 1.05 1.6 2.24 2.73 2.2 1.1-.04 1.51-.71 2.84-.71 1.32 0 1.7.71 2.86.69 1.18-.02 1.93-1.07 2.65-2.13.84-1.22 1.18-2.4 1.2-2.46-.03-.01-2.28-.88-2.3-3.5ZM14.2 6.17c.6-.73 1.01-1.75.9-2.76-.87.04-1.92.58-2.54 1.31-.56.64-1.05 1.67-.92 2.66.97.08 1.96-.49 2.56-1.21Z"/></svg>',
    googlePlay: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#34a853" d="M3.6 2.3 13.8 12 3.6 21.7a1.5 1.5 0 0 1-.6-1.2V3.5c0-.5.2-.9.6-1.2Z"/><path fill="#fbbc04" d="m17.2 15.4-3.4-3.4 3.4-3.4 3.9 2.2c1.1.6 1.1 1.8 0 2.4l-3.9 2.2Z"/><path fill="#ea4335" d="M3.6 21.7 13.8 12l3.4 3.4-11.9 6.7c-.6.3-1.2.2-1.7-.4Z"/><path fill="#4285f4" d="M3.6 2.3c.5-.6 1.1-.7 1.7-.4l11.9 6.7-3.4 3.4L3.6 2.3Z"/></svg>',
    testFlight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>',
    apk: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/></svg>'
  };
  var STORE_CLASS = { appStore: "", googlePlay: "", testFlight: "tf", apk: "apk" };
  var STORE_TAG = { appStore: "tagOfficial", googlePlay: "tagOfficial", testFlight: "tagBeta", apk: "tagDirect" };
  var ORDER = ["appStore", "googlePlay", "testFlight", "apk"];

  var cfg = null, lang = "ar", apkInfo = null;

  function store(key, url, t) {
    return '<a class="store ' + STORE_CLASS[key] + '" href="' + esc(url) + '" target="_blank" rel="noopener">' +
      STORE_ICONS[key] + "<span><small>" + esc(t[key + "Small"]) + "</small><strong>" + esc(t[key]) + "</strong></span></a>";
  }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function safeUrl(u) { return /^https:\/\//i.test(u || "") ? u : ""; }
  function enabled(key) { var l = cfg.links && cfg.links[key]; return !!(l && l.enabled && safeUrl(l.url)); }

  function render() {
    var t = T[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = lang === "ar" ? "U-People — تطبيق الموظف" : "U-People — the employee app";
    document.getElementById("lang").textContent = lang === "ar" ? "EN" : "ع";
    document.querySelectorAll("[data-i18n]").forEach(function (el) { el.textContent = t[el.getAttribute("data-i18n")] || ""; });
    document.getElementById("ver").textContent = cfg.version || "";

    var n = document.getElementById("notice");
    var a = cfg.announcement || {};
    n.hidden = !(a.enabled && a[lang]);
    n.textContent = a[lang] || "";

    document.getElementById("heroStores").innerHTML = ORDER.filter(function (k) { return k !== "testFlight" && enabled(k); })
      .map(function (k) { return store(k, cfg.links[k].url, t); }).join("");
    document.getElementById("heroShot").src = "assets/shots/" + lang + "/01_dashboard.webp";
    document.getElementById("heroShot").alt = t.shots[0];

    var sec = cfg.sections || {};
    document.getElementById("features").hidden = sec.features === false;
    document.getElementById("screens").hidden = sec.screens === false;
    document.getElementById("featGrid").innerHTML = t.features.map(function (f) {
      return '<article class="card"><div class="icon">' + icon(f[0]) + "</div><h3>" + esc(f[1]) + "</h3><p>" + esc(f[2]) + "</p></article>";
    }).join("");
    document.getElementById("trust").innerHTML = t.trust.map(function (f) {
      return '<article class="card"><div class="icon">' + icon(f[0]) + "</div><h3>" + esc(f[1]) + "</h3><p>" + esc(f[2]) + "</p></article>";
    }).join("");
    document.getElementById("strip").innerHTML = SHOTS.map(function (s, i) {
      return '<img loading="lazy" src="assets/shots/' + lang + "/" + s + '.webp" alt="' + esc(t.shots[i]) + '" width="560" height="1214">';
    }).join("");

    document.getElementById("dlCards").innerHTML = ORDER.filter(enabled).map(function (k) {
      var extra = "";
      if (k === "apk" && sec.apkDetails !== false) {
        if (apkInfo) {
          extra = '<p class="meta">' + esc(t.apkMeta.replace("{v}", apkInfo.v).replace("{size}", apkInfo.size).replace("{date}", apkInfo.date)) + "</p>";
          if (apkInfo.sha) extra += '<p class="meta">' + esc(t.sha) + " <code>" + esc(apkInfo.sha) + "</code></p>";
        }
        extra += '<p class="meta">' + esc(t.apkNote) + "</p>";
      }
      return '<article class="card"><span class="tag">' + esc(t[STORE_TAG[k]]) + "</span><h3>" + esc(t[k]) + "</h3><p>" +
        esc(t[k + "Body"]) + "</p>" + extra + store(k, cfg.links[k].url, t) + "</article>";
    }).join("");

    var c = cfg.contact || {}, parts = [];
    if (c.email) parts.push('<a href="mailto:' + esc(c.email) + '">' + esc(c.email) + "</a>");
    if (safeUrl(c.website)) parts.push('<a href="' + esc(c.website) + '" target="_blank" rel="noopener">' + esc(c.website.replace(/^https:\/\//, "")) + "</a>");
    document.getElementById("contact").innerHTML = parts.length ? esc(t.contact) + ": " + parts.join(" · ") : "";
  }

  function loadApkInfo() {
    fetch("https://api.github.com/repos/" + REPO + "/releases/latest").then(function (r) { return r.ok ? r.json() : null; }).then(function (rel) {
      if (!rel) return;
      var asset = (rel.assets || []).filter(function (x) { return x.name === "upeople.apk"; })[0];
      if (!asset) return;
      var m = /SHA-256[^`]*`([0-9a-f]{64})`/i.exec(rel.body || "");
      var v = /U-People\s+([0-9.]+\s*\(\d+\))/.exec(rel.name || "");
      apkInfo = {
        v: v ? v[1] : rel.tag_name,
        size: (asset.size / 1048576).toFixed(1) + " MB",
        date: new Date(rel.published_at).toISOString().slice(0, 10),
        sha: m ? m[1] : ""
      };
      render();
    }).catch(function () {});
  }

  function readDraft() {
    if (!/[?&]preview=1/.test(location.search)) return null;
    try { return JSON.parse(localStorage.getItem("upeople-config-draft") || "null"); } catch (e) { return null; }
  }

  function start(config) {
    cfg = config;
    var q = /[?&]lang=(ar|en)/.exec(location.search);
    var saved = null;
    try { saved = localStorage.getItem("upeople-lang"); } catch (e) {}
    lang = (q && q[1]) || saved || cfg.defaultLanguage || ((navigator.language || "").indexOf("ar") === 0 ? "ar" : "en");
    if (!T[lang]) lang = "ar";
    render();
    loadApkInfo();
  }

  document.getElementById("lang").addEventListener("click", function () {
    lang = lang === "ar" ? "en" : "ar";
    try { localStorage.setItem("upeople-lang", lang); } catch (e) {}
    render();
  });
  document.getElementById("year").textContent = new Date().getFullYear();

  var strip = document.getElementById("strip");
  function scrollBy(dir) {
    var rtl = document.documentElement.dir === "rtl";
    strip.scrollBy({ left: (rtl ? -dir : dir) * 280, behavior: "smooth" });
  }
  document.getElementById("next").addEventListener("click", function () { scrollBy(1); });
  document.getElementById("prev").addEventListener("click", function () { scrollBy(-1); });

  var lb = document.getElementById("lightbox");
  strip.addEventListener("click", function (e) {
    if (e.target.tagName !== "IMG") return;
    lb.querySelector("img").src = e.target.src;
    lb.querySelector("img").alt = e.target.alt;
    lb.classList.add("open");
  });
  lb.addEventListener("click", function () { lb.classList.remove("open"); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") lb.classList.remove("open"); });

  var draft = readDraft();
  if (draft) { start(draft); return; }
  fetch("config.json?v=" + Date.now(), { cache: "no-store" }).then(function (r) { return r.json(); }).then(start).catch(function () {
    start({ version: "", defaultLanguage: "ar", links: {}, sections: {} });
  });
})();
