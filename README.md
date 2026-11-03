# U-People — downloads

Public home of the U-People employee app's downloads, and of its landing page:
**https://uiscomp.github.io/upeople-releases/**

| Where | Link |
|---|---|
| App Store (iPhone, iPad) | https://apps.apple.com/app/id6475875100 |
| Google Play (Android) | https://play.google.com/store/apps/details?id=com.uis.uismandooob |
| TestFlight (iPhone beta) | https://testflight.apple.com/join/CpDypqE6 |
| Direct APK (Android, permanent link) | https://github.com/UisComp/upeople-releases/releases/latest/download/upeople.apk |

The APK link always points at the latest release of this repository. It is a
download only: the app does not update itself from it, and the Google Play copy
and this copy are signed differently, so neither updates the other.

## The landing page

- `index.html` + `assets/` — the page (Arabic and English). Screenshots are real
  captures of the app's built-in demo with sample data.
- `config.json` — every link, the version shown, an optional banner, which
  sections show, and the footer contact. **This is the only file to edit.**
- `admin.html` — a small dashboard that edits `config.json`: preview first, then
  publish with a fine-grained GitHub token (Contents: read and write on this
  repository only). The token stays in the browser tab; it is never stored here.
