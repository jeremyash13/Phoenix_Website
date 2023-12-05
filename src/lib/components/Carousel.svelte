<script lang="ts">
	// import type { PageData } from './$types';

	// export let data: PageData;

	let chromeIsInvisible = false;
	let firefoxIsInvisible = true;

	let interval = setInterval(() => {
		chromeIsInvisible = !chromeIsInvisible;
		firefoxIsInvisible = !firefoxIsInvisible;
	}, 6000);

	function startTimer(e) {
		if (e.target.tagName === 'IMG') {
			interval = setInterval(() => {
				chromeIsInvisible = !chromeIsInvisible;
				firefoxIsInvisible = !firefoxIsInvisible;
			}, 6000);
		}
	}

	function pauseTimer(e) {
		if (e.target.tagName === 'IMG') {
			clearInterval(interval);
		}
	}
</script>

<div id="browser-permissions-img-row">
	<div id="carousel-label-wrapper">
		<span class="carousel-label {chromeIsInvisible ? 'invisible' : ''}">Chrome</span>
		<span class="carousel-label {firefoxIsInvisible ? 'invisible' : ''}">Firefox</span>
	</div>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		id="browser-permissions-img-wrapper"
		on:mouseover={pauseTimer}
		on:focus={pauseTimer}
		on:mouseout={startTimer}
		on:blur={startTimer}
	>
		<img
			id="browser-permissions-img-chrome"
			src="./images/browser-extension-permissions-chrome.jpg"
			alt="chrome browser extension permissions"
			class={chromeIsInvisible ? 'invisible' : ''}
		/>
		<img
			id="browser-permissions-img-firefox"
			src="./images/browser-extension-permissions-firefox.jpg"
			alt="firefox browser extension permissions"
			class={firefoxIsInvisible ? 'invisible' : ''}
		/>
	</div>
</div>
