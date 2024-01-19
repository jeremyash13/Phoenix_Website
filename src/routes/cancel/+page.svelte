<script lang="ts">
	// import type { PageData } from './$types';

	import Faq from "$lib/components/FAQ.svelte";

	// export let data: PageData;
</script>

<svelte:head>
	<meta name="robots" content="noindex, nofollow" />
	<title>Phoenix | Error</title>
</svelte:head>

<section id="" class="section-a">
	<div class="section-wrapper flex-col">
		<div id="success-cancel-page-header">
			<h1 class="">Oops!</h1>
			<span class="section-subtext">Something went wrong.</span>
			<span>Your purchase did not go through.</span>
		</div>

		<span id="try-again-text">Try again</span>

		<div id="pricing-card" class="">
			<div id="pricing-card-left" class="">
				<div class="pricing-card-heading-wrapper">
					<h4 class="pricing-card-header">Phoenix</h4>
					<span class="pricing-card-sub-header">Lifetime Access</span>
				</div>

				<hr />

				<div class="pricing-card-main">
					<p>Free lifetime updates</p>
					<p>
						One purchase grants a license key that can support
						<span class="bold">up to 5 devices simultaneously</span>
					</p>
				</div>
			</div>

			<div id="pricing-card-right" class="">
				<div>
					<p class="text-center">Pay once, own forever</p>
					<h3 class="text-center">US $19.99</h3>
				</div>

				<div id="pricing-card-right-footer" class="">
					<span
						>Download the <a
							href="ms-windows-store://pdp?hl=en-us&gl=us&productid=9N5D4DRVSJWJ&mode=mini&pos=3832%2C711%2C2576%2C1456&referrer=storeforweb"
							>Phoenix client</a
						></span
					>
					<a href="https://stripecheckout-74xkiqshaa-uc.a.run.app" class="call-to-action">
						<div class="flex-row">
							<img class="call-to-action-icon" src="./images/windows-icon.svg" />
							<h5>Buy Now</h5>
						</div>
					</a>
					<span class="accent">*Supports Windows 10/11</span>
					<span class="accent">*MacOS support coming soon</span>
				</div>
			</div>
		</div>
	</div>
</section>

<section id="browser-extension-links" class="section-b">
	<div class="section-wrapper flex-col">
		<h2 class="section-heading">Curious what Phoenix has to offer?</h2>
		<a href="/features" class="call-to-action">
			<h5>Explore Features</h5>
		</a>
	</div>
</section>

<section class="section-a">
	<Faq/>
</section>
