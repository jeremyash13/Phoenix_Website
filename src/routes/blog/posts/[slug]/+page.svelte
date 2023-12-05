<script lang="ts">
	import { formatDate } from '$lib/utils.js';
	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta name="description" content={data.meta.description} />

	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.description} />
	<meta property="og:image" content={`https://www.phoenixblocker.com${data.meta.image}`} />
	<meta property="og:url" content={`https://www.phoenixblocker.com/blog/posts/${data.slug}`} />
	<meta property="og:site_name" content="phoenixblocker.com" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="phoenixblocker.com" />
	<meta
		property="twitter:url"
		content="https://www.phoenixblocker.com/blog/posts/dopamines-role-in-motivation-and-pleasure"
	/>
	<meta name="twitter:title" content={data.meta.title} />
	<meta name="twitter:description" content={data.meta.description} />
	<meta name="twitter:image" content={`https://www.phoenixblocker.com${data.meta.image}`} />
</svelte:head>

<div id="blog-post-page-wrapper">
	<div id="blog-post-wrapper">
		<article class="">
			<hgroup>
				<h2>{data.meta.title}</h2>
				<span>Published on {formatDate(data.meta.date)}</span>
			</hgroup>

			<div class="blog-category-tags-wrapper">
				{#each data.meta.categories as category}
					<a class="blog-category-tag" href="#"
                    >
                    <!-- href={`/blog/posts/category/${category.toLowerCase()}`} -->
						&num;{category}
					</a>
				{/each}
			</div>

			<div class="prose">
				<svelte:component this={data.content} />
			</div>
		</article>
	</div>
</div>
