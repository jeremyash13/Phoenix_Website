<script lang="ts">
	let isMobileNavOpen = false;
	function openMobileNavMenu() {
		isMobileNavOpen = true;
	}
	function closeMobileNavMenu() {
		isMobileNavOpen = false;
	}
</script>

<header>
	<nav id="navbar" class="">
		<a id="nav-logo" class="nav-item-primary" href="/">
			<h6>Phoenix</h6>
		</a>
		<a href="/blog/1" class="nav-item-secondary">
			<h6>Blog</h6>
		</a>
		<a href="/features" class="nav-item-secondary">
			<h6>Features</h6>
		</a>
		<a href="/pricing" class="nav-item-secondary">
			<h6 id="nav-item-download">Download</h6>
		</a>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<img
			id="menu-icon-hamburger"
			src="/images/hamburger-menu.svg"
			alt="open mobile nav menu"
			on:click={openMobileNavMenu}
		/>
	</nav>
	<nav id="mobile-nav-menu-open" class={isMobileNavOpen ? '' : 'hidden'}>
		<div class="mobile-nav-menu-open-wrapper">
			<a class="" href="/" on:click={closeMobileNavMenu}>
				<h6>Phoenix</h6>
			</a>
			<a href="/blog/1" class="" on:click={closeMobileNavMenu}>
				<h6>Blog</h6>
			</a>
			<a href="/features" class="" on:click={closeMobileNavMenu}>
				<h6>Features</h6>
			</a>
			<a href="/pricing" class="" on:click={closeMobileNavMenu}>
				<h6 id="nav-item-download">Download</h6>
			</a>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
			<img
				id="menu-icon-close"
				src="/images/close.svg"
				alt="close mobile nav menu"
				on:click={closeMobileNavMenu}
			/>
		</div>
	</nav>
</header>
