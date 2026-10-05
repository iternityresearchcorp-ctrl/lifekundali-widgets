/* Life Kundali widgets, one line (4 Oct 2026).
   <div data-lk="festivals" data-city="Brampton" data-theme="light"></div>
   <script src="https://lifekundali.com/embed/lk.js" async></script>
   Kinds: panchang, festivals, gurdwara, gurughar, muhurta, birth-chart, matching.
   No cookies, no tracking, nothing sold. Each widget is an iframe from lifekundali.com. */
(function () {
  var K = {
    "panchang": ["panchang.html", 510, ""], "festivals": ["festivals.html", 600, ""],
    "gurdwara": ["festivals.html", 600, "mode=sikh"], "gurughar": ["gurughar.html", 640, ""],
    "muhurta": ["muhurta.html", 520, ""], "birth-chart": ["birth-chart.html", 800, ""],
    "matching": ["compatibility.html", 900, ""]
  };
  function run() {
    var els = document.querySelectorAll("[data-lk]:not([data-lk-done])");
    for (var i = 0; i < els.length; i++) {
      var el = els[i], k = K[el.getAttribute("data-lk")];
      if (!k) continue;
      var q = [];
      if (el.getAttribute("data-city")) q.push("city=" + encodeURIComponent(el.getAttribute("data-city")));
      if (el.getAttribute("data-theme")) q.push("theme=" + encodeURIComponent(el.getAttribute("data-theme")));
      if (el.getAttribute("data-n")) q.push("n=" + encodeURIComponent(el.getAttribute("data-n")));
      if (k[2]) q.push(k[2]);
      var f = document.createElement("iframe");
      f.src = "https://lifekundali.com/embed/" + k[0] + (q.length ? "?" + q.join("&") : "");
      f.loading = "lazy";
      f.title = "Life Kundali " + el.getAttribute("data-lk");
      f.style.cssText = "width:100%;max-width:" + (k[1] > 700 ? 560 : 520) + "px;height:" + (el.getAttribute("data-height") || k[1]) + "px;border:0;display:block";
      el.appendChild(f);
      el.setAttribute("data-lk-done", "1");
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run); else run();
})();
