(function () {
	'use strict';

	const root = document.documentElement;
	root.setAttribute('data-bm-ani-3x-standalone', '1');
	if (root.getAttribute('data-bm-ani-tool') === '1') return;

	const s = document.createElement('script');
	s.src = chrome.runtime.getURL('injected.js');
	s.onload = function () {
		s.remove();
	};
	(document.head || root).appendChild(s);
})();
