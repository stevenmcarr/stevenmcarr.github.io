// Shared by the *-install.html pages. Looks up the latest release of the
// repo named in <body data-repo="owner/name"> and points the download link
// at its source zip. Arriving with ?download (from the VACCS page) also
// starts the download.
(function () {
  var repo = document.body.dataset.repo;
  var name = repo.split("/")[1];
  var autoDownload = /[?&]download\b/.test(location.search);
  if (autoDownload) {
    history.replaceState(null, "", location.pathname + location.hash);
  }
  var status = document.getElementById("download-status");
  fetch("https://api.github.com/repos/" + repo + "/releases/latest")
    .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then(function (rel) {
      var tag = rel.tag_name;
      var dir = name + "-" + tag.replace(/^v/, "");
      var zip = "https://github.com/" + repo + "/archive/refs/tags/" + tag + ".zip";
      var link = document.getElementById("download-link");
      link.href = zip;
      link.textContent = dir + ".zip";
      document.querySelectorAll(".zip-name").forEach(function (e) { e.textContent = dir + ".zip"; });
      document.querySelectorAll(".dir-name").forEach(function (e) { e.textContent = dir; });
      if (autoDownload) {
        status.textContent = "Your download of " + tag + " should start shortly. If it does not, click";
        window.location.href = zip;
      } else {
        status.textContent = "Download the latest release (" + tag + "):";
      }
    })
    .catch(function () {
      // Keep the link to the GitHub releases page.
      if (autoDownload) {
        status.textContent = "Download the zip file under \"Assets\" on the latest release page:";
      }
    });
})();
