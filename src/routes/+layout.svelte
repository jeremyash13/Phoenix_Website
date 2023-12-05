<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { URL_DOMAIN_NAME } from '$lib/config';
	import { page } from '$app/stores'
</script>

<svelte:head>
		<link rel="canonical" href={`https://${URL_DOMAIN_NAME}${$page.url.pathname}`}/>
</svelte:head>

<Navbar />
<slot />
<Footer />