<script lang="ts">
	// import type { PageData } from './$types';

	// export let data: PageData;
</script>

<svelte:head>
    <title>Phoenix | Features</title>
</svelte:head>

<section class="section-a">
	<div class="section-wrapper flex-col">
		<h1 class="section-heading">Features</h1>
		<div class="features-wrapper">
			<div class="features-body">
				<h4>Website Blocking</h4>
				<div class="flex-row">
					<img class="checkmark" src="./images/checkmark.svg" alt="" />
					<div class="feature-body flex-col">
						<span class="subheading"> Block Domains </span>
						<p>
							Adding <b>instagram.com</b> to the block list will block all webpages on Instagram including
							subdomains.
						</p>
					</div>
				</div>
				<div class="flex-row">
					<img class="checkmark" src="./images/checkmark.svg" alt="" />
					<div class="feature-body flex-col">
						<span class="subheading"> Block URLs </span>
						<p>
							Adding <b>reddit.com/r/dankmemes</b> will block that specific page only.
						</p>
					</div>
				</div>
				<div class="flex-row">
					<img class="checkmark" src="./images/checkmark.svg" alt="" />
					<div class="feature-body flex-col">
						<span class="subheading"> Use wildcards </span>
						<p>
							Use * to represent any text. Adding
							<b>reddit.com/search/*q=*memes*</b> to the block list will prevent any searches containing
							the word “memes”.
						</p>
					</div>
				</div>
				<div class="flex-row">
					<img class="checkmark" src="./images/checkmark.svg" alt="" />
					<div class="feature-body flex-col">
						<span class="subheading"> Whitelist domains and URLs </span>
						<p>Adding a domain or URL to the exemption list will exempt it from being blocked.</p>
					</div>
				</div>
				<div class="flex-row">
					<img class="checkmark" src="./images/checkmark.svg" alt="" />
					<div class="feature-body flex-col">
						<span class="subheading"> Import block lists from presets </span>
						<p>
							Phoenix has 11 site categories available as presets to add to the block list. (Social
							Media, Gambling, Porn, etc.)
						</p>
					</div>
				</div>
			</div>
			<img class="feature-img" src="./images/website-blocking.jpg" alt="block websites" />
		</div>
	</div>
</section>

<section class="section-b">
	<div class="section-wrapper flex-col">
		<div class="features-wrapper">
			<div class="features-body">
				<h4>App Blocking</h4>
				<div class="flex-row">
					<img class="checkmark" src="./images/checkmark.svg" alt="" />
					<div class="feature-body flex-col">
						<span class="subheading"> Block files </span>
						<p>Browse to the .exe file and add it to the block list.</p>
					</div>
				</div>
				<div class="flex-row">
					<img class="checkmark" src="./images/checkmark.svg" alt="" />
					<div class="feature-body flex-col">
						<span class="subheading"> Block folders </span>
						<p>
							Adding a folder to the block list will block all .exe files in that folder. Great for
							blocking your entire steam or game library all at once.
						</p>
					</div>
				</div>
			</div>
			<img class="feature-img" src="./images/app-blocking.jpg" alt="block apps" />
		</div>
	</div>
</section>

<section class="section-a">
	<div class="section-wrapper flex-col">
		<div class="features-wrapper">
			<div class="features-body">
				<h4>Block Policies</h4>
				<div class="flex-row">
					<img class="checkmark" src="./images/checkmark.svg" alt="" />
					<div class="feature-body flex-col">
						<span class="subheading"> Breaks </span>
						<p>Set a number of breaks you can take at anytime during block.</p>
					</div>
				</div>
				<div class="flex-row">
					<img class="checkmark" src="./images/checkmark.svg" alt="" />
					<div class="feature-body flex-col">
						<span class="subheading"> Block duration </span>
						<p>Define the duration of the block in hours and minutes.</p>
					</div>
				</div>
				<div class="flex-row">
					<img class="checkmark" src="./images/checkmark.svg" alt="" />
					<div class="feature-body flex-col">
						<span class="subheading"> Lock blocks </span>
						<p>
							Locking a block prevents the block from being started and stopped at will. Locking a
							block will force it to run its entire duration before being disabled.
						</p>
					</div>
				</div>
				<div class="flex-row">
					<img class="checkmark" src="./images/checkmark.svg" alt="" />
					<div class="feature-body flex-col">
						<span class="subheading"> Distraction Free YouTube mode </span>
						<p>
							Modify your YouTube experience to be more focused. DF YouTube hides all YouTube feeds,
							but still allows you to search and watch specific content.
						</p>
					</div>
				</div>
			</div>
			<img class="feature-img" src="./images/block-policies.jpg" alt="block policies" />
		</div>
	</div>
</section>

<section class="section-b">
	<div class="section-wrapper flex-col">
		<h2 class="section-heading">Interested in learning more?</h2>
		<a href="/pricing" class="call-to-action">
			<h5>View Pricing</h5>
		</a>
	</div>
</section>