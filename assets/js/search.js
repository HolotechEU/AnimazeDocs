(function () {
  var input = document.getElementById("site-search-input");
  var results = document.getElementById("site-search-results");
  if (!input || !results) return;

  var indexUrl = input.getAttribute("data-search-url");
  var pages = null;
  var activeIndex = -1;

  function ensureLoaded(callback) {
    if (pages) return callback();
    fetch(indexUrl)
      .then(function (r) { return r.json(); })
      .then(function (data) {
        pages = data;
        callback();
      })
      .catch(function () {
        pages = [];
      });
  }

  function clearResults() {
    results.innerHTML = "";
    results.hidden = true;
    activeIndex = -1;
  }

  function render(matches, query) {
    results.innerHTML = "";
    if (!matches.length) {
      var empty = document.createElement("div");
      empty.className = "search-empty";
      empty.textContent = "No results for \"" + query + "\"";
      results.appendChild(empty);
      results.hidden = false;
      return;
    }
    matches.slice(0, 8).forEach(function (page) {
      var a = document.createElement("a");
      a.href = page.url;
      a.className = "search-result";
      var title = document.createElement("div");
      title.className = "search-result-title";
      title.textContent = page.title;
      var snippet = document.createElement("div");
      snippet.className = "search-result-snippet";
      snippet.textContent = page.content;
      a.appendChild(title);
      a.appendChild(snippet);
      results.appendChild(a);
    });
    results.hidden = false;
  }

  function search(query) {
    var q = query.trim().toLowerCase();
    if (!q) {
      clearResults();
      return;
    }
    ensureLoaded(function () {
      var matches = pages.filter(function (page) {
        return (
          page.title.toLowerCase().indexOf(q) !== -1 ||
          page.content.toLowerCase().indexOf(q) !== -1
        );
      });
      render(matches, query.trim());
    });
  }

  input.addEventListener("input", function () {
    search(input.value);
  });

  input.addEventListener("keydown", function (e) {
    var items = results.querySelectorAll(".search-result");
    if (e.key === "ArrowDown") {
      e.preventDefault();
      activeIndex = Math.min(activeIndex + 1, items.length - 1);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      activeIndex = Math.max(activeIndex - 1, 0);
    } else if (e.key === "Enter") {
      if (activeIndex >= 0 && items[activeIndex]) {
        e.preventDefault();
        window.location.href = items[activeIndex].href;
      }
      return;
    } else if (e.key === "Escape") {
      clearResults();
      input.blur();
      return;
    } else {
      return;
    }
    items.forEach(function (el, i) {
      el.classList.toggle("is-active", i === activeIndex);
    });
  });

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".site-search")) clearResults();
  });
})();
