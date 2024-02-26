<script lang="ts">
	// import type { PageData } from './$types';

	import Faq from "$lib/components/FAQ.svelte";

	// export let data: PageData;
</script>

<svelte:head>
	<title>Phoenix | Pricing</title>
</svelte:head>

<section id="pricing-section" class="section-a">
	<div class="section-wrapper flex-col">
		<h1 class="section-heading">Pricing</h1>
		<div id="testimonials" class="">
			<aside class="testimonial">
				<p>
					I've struggled for years with procrastination, and my university work suffered because of
					it. “Distraction free YouTube” mode is great because it allows me to use YouTube as an
					education resource without getting distracted by the YouTube feed. Phoenix has been a
					tremendous help in improving my focus. I Highly recommend for anyone looking to regain
					control of their time and habits.
				</p>
				<div class="avatar-wrapper flex-col">
					<div class="avatar-img">
						<img src="./images/charles-cropped.jpg" alt="Charles M." />
					</div>
					<span class="avatar-name"> • Charles M. </span>
				</div>
				<img id="quote-icon-left" class="quote-icon" src="./images/quotes.svg" />
			</aside>
			<aside class="testimonial">
				<p>
					I can't express how grateful I am for Phoenix. It's been a lifesaver for my mental health.
					I used to spend hours mindlessly scrolling through social media and consuming explicit
					content on adult websites, which took a toll on my self-esteem and productivity. This app
					has become my shield against those habits. This app is a must-try for anyone struggling
					with any form of digital addiction.
				</p>
				<div class="avatar-wrapper flex-col">
					<div class="avatar-img">
						<img src="./images/mason-cropped.jpg" alt="Mason S." />
					</div>
					<span class="avatar-name"> • Mason S. </span>
				</div>
				<img id="quote-icon-right" class="quote-icon" src="./images/quotes.svg" />
			</aside>
		</div>
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
						>Download the
						<a
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
					<span class="accent-red">*Not compatible with Windows S Mode</span>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="section-b">
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
