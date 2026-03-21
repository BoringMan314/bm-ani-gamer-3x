(function () {
  var EXTRA_RATE = 3;

  /** 動畫瘋的 Video.js 常包在 bundle 內，主控台沒有 window.videojs；改直接操作 <video>。 */
  function getHost() {
    var a = document.getElementById("ani_video");
    if (a) return a;
    var vc = document.getElementById("video-container");
    if (vc) {
      var vj = vc.querySelector("video-js.video-js, .video-js");
      if (vj) return vj;
    }
    return document.querySelector(".container-player .video-js");
  }

  function getMainVideo() {
    var byApi = document.getElementById("ani_video_html5_api");
    if (byApi && byApi.tagName === "VIDEO") return byApi;
    var host = getHost();
    if (host) {
      var v = host.querySelector("video");
      if (v) return v;
    }
    return document.querySelector("#video-container video");
  }

  function getMenuContent() {
    var host = getHost();
    if (host) {
      var m = host.querySelector(".vjs-playback-rate .vjs-menu-content");
      if (m) return m;
    }
    return document.querySelector("#video-container .vjs-playback-rate .vjs-menu-content");
  }

  function bindDom3xClick(menuContent) {
    if (menuContent.__aniExt3xBound) return;
    menuContent.__aniExt3xBound = true;
    menuContent.addEventListener(
      "click",
      function (e) {
        var t = e.target;
        if (!t || !t.closest) return;
        if (!t.closest("[data-ani-ext-3x]")) return;
        e.stopImmediatePropagation();
        e.preventDefault();
        var v = getMainVideo();
        if (v) v.playbackRate = EXTRA_RATE;
      },
      true
    );
  }

  function ensureDomMenuItem3x() {
    var menuContent = getMenuContent();
    if (!menuContent) return;
    bindDom3xClick(menuContent);
    if (menuContent.querySelector("[data-ani-ext-3x]")) return;
    var sample = menuContent.querySelector(".vjs-menu-item");
    if (!sample) return;
    var node = sample.cloneNode(true);
    node.setAttribute("data-ani-ext-3x", "1");
    node.classList.remove("vjs-selected");
    var txt = node.querySelector(".vjs-menu-item-text");
    if (txt) txt.textContent = EXTRA_RATE + "x";
    menuContent.insertBefore(node, menuContent.firstElementChild || menuContent.firstChild);
  }

  function tick() {
    ensureDomMenuItem3x();
  }

  setInterval(tick, 400);
  tick();

  var root = document.getElementById("video-container");
  if (root) {
    var deb = null;
    new MutationObserver(function () {
      clearTimeout(deb);
      deb = setTimeout(tick, 120);
    }).observe(root, { childList: true, subtree: true });
  }
})();
