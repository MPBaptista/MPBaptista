// Dark / light mode toggle.
// Default follows the OS setting. A manual choice is remembered per browser.
(function () {
  var root = document.documentElement;
  var KEY = "theme";

  function readSaved() {
    try {
      return localStorage.getItem(KEY);
    } catch (e) {
      return null; // storage blocked (private mode, etc.)
    }
  }

  function save(value) {
    try {
      localStorage.setItem(KEY, value);
    } catch (e) {
      /* ignore */
    }
  }

  function currentTheme() {
    if (root.getAttribute("data-theme")) return root.getAttribute("data-theme");
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    var btn = document.getElementById("theme-toggle");
    if (btn) {
      var next = theme === "dark" ? "light" : "dark";
      btn.setAttribute("aria-label", "Switch to " + next + " mode");
      btn.setAttribute("title", "Switch to " + next + " mode");
    }
  }

  var saved = readSaved();
  if (saved === "light" || saved === "dark") {
    root.setAttribute("data-theme", saved);
  }

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("theme-toggle");
    apply(currentTheme());

    if (!btn) return;
    btn.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      save(next);
      apply(next);
    });
  });
})();
