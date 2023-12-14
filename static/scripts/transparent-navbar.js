document.addEventListener('DOMContentLoaded', () => {
	let doc = document.querySelector('html');
	let hero = document.querySelector('#hero');
	let mainNav = document.querySelector('#navbar');

	const mutationObserverCallback = (mutationList) => {
		for (const mutation of mutationList) {
			if (mutation.type === 'childList') {
				hero = document.querySelector('#hero');

				if (hero) {
					console.log('#hero found');
					heroObserver.observe(hero);
				}

				if (!hero) {
					mainNav.classList.remove('transparent-nav');

					if (heroObserver) {
						heroObserver.unobserve(hero);
					}
				}
			}
		}
	};

	const mutationObserverConfig = { attributes: false, childList: true, subtree: true };
	const mutationObserver = new MutationObserver(mutationObserverCallback);

	let heroObserver = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && !mainNav.classList.contains('tranparent-nav')) {
					mainNav.classList.add('transparent-nav');
				} else {
					mainNav.classList.remove('transparent-nav');
        }
			});
		},
		{ threshold: 0.15 }
	);

	mutationObserver.observe(doc, mutationObserverConfig);
});