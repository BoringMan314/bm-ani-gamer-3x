(function () {
	const s = document.createElement('script');
	s.src = chrome.runtime.getURL('injected.js');
	s.onload = function () {
		s.remove();
	};
	(document.head || document.documentElement).appendChild(s);
})();
