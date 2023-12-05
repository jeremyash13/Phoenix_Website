<script lang="ts">
	// import type { PageData } from './$types';

	import Carousel from "$lib/components/Carousel.svelte";

	// export let data: PageData;
</script>

<svelte:head>
    <title>Phoenix | Success!</title>
</svelte:head>

<section id="" class="section-a">
	<div class="section-wrapper flex-col">
		<div id="success-cancel-page-header">
			<h1 class="">Success!</h1>
			<span class="section-subtext">Thank you for your purchase!</span>
			<span>You will receive an email shortly containing your product key.</span>
		</div>
		<div id="success-page-instructions-wrapper">
			<div id="activation-instructions">
				<span class="list-header">Here are your next steps to get up and running:</span>
				<ol>
					<li>
						Download the <span class="phoenix-accent">Phoenix</span> client
						<a
							class="link-underlined"
							href="ms-windows-store://pdp?hl=en-us&gl=us&productid=9N5D4DRVSJWJ&mode=mini&pos=3832%2C711%2C2576%2C1456&referrer=storeforweb"
							>here.</a
						>
					</li>
					<li>
						Install and run <span class="phoenix-accent">Phoenix</span>.
					</li>
					<li>Enter the product key received in your email.</li>
					<li>
						Install the <span class="phoenix-accent">Phoenix</span>
						<a class="link-underlined" href="#browser-extension-links">browser extension</a>
						for each browser you own.
					</li>
				</ol>
			</div>
			<img class="activation-img" src="./images/activation.jpg" alt="phoenix activation" />
		</div>
	</div>
</section>

<section id="browser-extension-links" class="section-b">
	<div class="section-wrapper flex-col">
		<span class="section-subheading"
			>Open the links below in their respective browsers to download the browser extension</span
		>
		<div id="browser-links-wrapper">
			<div class="browser-link-group">
				<a
					href="#"
					onclick="window.open('https://addons.mozilla.org/en-US/firefox/addon/phoenix-blocker', '_blank', 'location=no,height=275,width=962,scrollbars=yes,status=no'); return false;"
				>
					<div class="browser-link-wrapper">
						<img src="./images/firefox-logo.svg" alt="" />
						<span>Firefox</span>
					</div>
				</a>
				<a
					href="#"
					onclick="window.open('https://chrome.google.com/webstore/detail/phoenix-blocker/hpjjnppmoneeehooommkicnbelklahlg', '_blank', 'location=no,height=275,width=962,scrollbars=yes,status=no'); return false;"
				>
					<div class="browser-link-wrapper">
						<img src="./images/chrome-logo.svg" alt="" />
						<span>Chrome</span>
					</div>
				</a>
				<a
					href="#"
					onclick="window.open('https://chrome.google.com/webstore/detail/phoenix-blocker/hpjjnppmoneeehooommkicnbelklahlg', '_blank', 'location=no,height=275,width=962,scrollbars=yes,status=no'); return false;"
				>
					<div class="browser-link-wrapper">
						<img src="./images/opera-logo.svg" alt="" />
						<span>Opera</span>
					</div>
				</a>
			</div>

			<div class="browser-link-group">
				<a
					href="#"
					onclick="window.open('https://chrome.google.com/webstore/detail/phoenix-blocker/hpjjnppmoneeehooommkicnbelklahlg', '_blank', 'location=no,height=275,width=962,scrollbars=yes,status=no'); return false;"
				>
					<div class="browser-link-wrapper">
						<img src="./images/brave-logo.svg" alt="" />
						<span>Brave</span>
					</div>
				</a>
				<a
					href="#"
					onclick="window.open('https://chrome.google.com/webstore/detail/phoenix-blocker/hpjjnppmoneeehooommkicnbelklahlg', '_blank', 'location=no,height=275,width=962,scrollbars=yes,status=no'); return false;"
				>
					<div class="browser-link-wrapper">
						<img src="./images/edge-logo.svg" alt="" />
						<span>Edge</span>
					</div>
				</a>
				<a
					href="#"
					onclick="window.open('https://chrome.google.com/webstore/detail/phoenix-blocker/hpjjnppmoneeehooommkicnbelklahlg', '_blank', 'location=no,height=275,width=962,scrollbars=yes,status=no'); return false;"
				>
					<div class="browser-link-wrapper">
						<img src="./images/vivaldi-logo.svg" alt="" />
						<span>Vivaldi</span>
					</div>
				</a>
			</div>
		</div>
	</div>
</section>

<section id="browser-extension-permissions" class="section-a">
	<div class="section-wrapper">
		<div id="browser-extension-permissions-wrapper">
			<div>
				<div class="content-wrapper">
					<span>STEP 1</span>
					<h4>Install Browser Extensions</h4>
					<p>
						Follow the links above to install the Phoenix browser extension on <b
							>every browser you own.</b
						>
					</p>
					<p>
						Chrome, Edge, Opera, Brave, and Vivaldi
						<b>all use the Google Chrome Webstore</b> to install browser extensions.
					</p>
				</div>
				<div class="content-wrapper-desktop">
					<span>STEP 2</span>
					<h4>Double Check Extension Permissions</h4>
					<p>
						<br />
						<span class="phoenix-accent"> Chromium browsers:</span>
						(Chrome, Edge, Brave, Vivaldi, Opera)
						<br />
						Ensure that the permission <b>Allow in incognito</b> is set to
						<b>on</b> and the permission for <b>site access</b> is set to
						<b>on all sites.</b>
					</p>
					<br />
					<p>
						<span class="phoenix-accent">Mozilla Firefox:</span> <br />
						Under the <b>Details</b> tab, ensure that the permission
						<b>Run in Private Windows</b> is set to <b>Allow.</b>
						<br />
						Under the <b>Permissions</b> tab, the permissions to access
						<b>site data</b> for <b>all websites</b> and
						<b>youtube.com</b> is set to <b>on</b>
					</p>
				</div>
			</div>

			<Carousel />
		</div>
	</div>
</section>

<section class="section-b">
	<div class="section-wrapper flex-col">
		<h2 class="section-heading">FAQ</h2>
		<div id="faq-items" class="">
			<div class="faq-item">
				<h5 class="faq-item-header">Can I use my product/license key on more than one computer?</h5>
				<p>
					Yes, you can use your key on up to 5 devices simultaneously. Activating the key on a 6th
					device will automatically deactivate one of the 5 previously used devices.
				</p>
			</div>
			<div class="faq-item">
				<h5 class="faq-item-header">Is my purchase valid for both Windows and MacOS?</h5>
				<p>
					Currently only Windows is supported, but support for MacOS is coming soon. Yes, you will
					be able to use your key on either Windows or MacOS devices.
				</p>
			</div>
			<div class="faq-item">
				<h5 class="faq-item-header">Is my payment secure?</h5>
				<p>Yes, we use Stripe as our payment processor, one of the biggest names in the game.</p>
			</div>
			<div class="faq-item">
				<h5 class="faq-item-header">I never received an email or product key, what do I do?</h5>
				<p>
					First, double check your spam folder. In rare cases it can take up to an hour to receive
					your email confirmation. If you still haven’t received your key within an hour, send an
					email to
					<a class="link-underlined" target="_blank" href="mailto:support@phoenixblocker.com"
						>support@phoenixblocker.com</a
					>
				</p>
			</div>
			<div class="faq-item">
				<h5 class="faq-item-header">Phoenix isn’t what I expected, can I get a refund?</h5>
				<p>
					All sales are final. However, Phoenix is constantly improving and any feedback on how it
					can be further improved is very much appreciated. Let us know your thoughts. Send an email
					to
					<a class="link-underlined" target="_blank" href="mailto:feedback@phoenixblocker.com"
						>feedback@phoenixblocker.com</a
					>
				</p>
			</div>
		</div>
	</div>
</section>