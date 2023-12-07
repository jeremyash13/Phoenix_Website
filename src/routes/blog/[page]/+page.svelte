<script lang="ts">
	import BlogPost from '$lib/components/BlogPost.svelte';
	import LatestBlogPost from '$lib/components/LatestBlogPost.svelte';
	import { ChevronRight, ChevronLeft } from 'lucide-svelte';

	export let data;
	const itemsPerPage = 9;
	const totalPages = Math.ceil(data.posts.length / itemsPerPage);
	const currentPageNumber = parseInt(data.page);
	const previousPageNumber = currentPageNumber <= 1 ? currentPageNumber : currentPageNumber - 1;
	const nextPageNumber = currentPageNumber >= totalPages ? currentPageNumber : currentPageNumber + 1;
	const pageNumbersArray = [];
	const endOffset = currentPageNumber * itemsPerPage;
	const startOffset = endOffset - itemsPerPage;
	const latestBlogPost = data.posts.shift();
	const currentPagePosts = data.posts.slice(startOffset, endOffset);

	createPaginationItems();

	function createPaginationItems() {
		// console.log(totalPages);
		if (currentPageNumber < 3) {
			pageNumbersArray.push(currentPageNumber);
			pageNumbersArray.push(currentPageNumber + 1);
			pageNumbersArray.push(currentPageNumber + 2);
			pageNumbersArray.push(currentPageNumber + 3);
			pageNumbersArray.push(currentPageNumber + 4);
		} else if (currentPageNumber > totalPages - 3) {
			pageNumbersArray.push(currentPageNumber - 4);
			pageNumbersArray.push(currentPageNumber - 3);
			pageNumbersArray.push(currentPageNumber - 2);
			pageNumbersArray.push(currentPageNumber - 1);
			pageNumbersArray.push(currentPageNumber);
		} else {
			pageNumbersArray.push(currentPageNumber - 2);
			pageNumbersArray.push(currentPageNumber - 1);
			pageNumbersArray.push(currentPageNumber);
			pageNumbersArray.push(currentPageNumber + 1);
			pageNumbersArray.push(currentPageNumber + 2);
		}
	}
</script>

<svelte:head>
    <meta name="robots" content="noindex, follow">
	<title>Phoenix | Blog</title>
</svelte:head>

<section class="section-a">
	<div class="section-wrapper flex-col">
		<div id="blog-page-wrapper">
			<h2 class="">Blog</h2>
			<span class="subheading">Latest Articles</span>

			<LatestBlogPost blogPost={latestBlogPost} />

			<ul id="blog-post-list">
				{#each currentPagePosts as post}
					<BlogPost blogPost={post} />
				{/each}
			</ul>

			<ul id="blog-pagination">
				<li class="list-item">
					<a
						class="pagination-link"
						href={`/blog/${previousPageNumber}`}
						><ChevronLeft /></a
					>
				</li>
				{#each pageNumbersArray as page, index (index)}
					<li class={`list-item ${currentPageNumber === page ? 'active-page' : ''}`}>
						<a class="pagination-link" href={`/blog/${page}`}>{page}</a>
					</li>
				{/each}
				<li class="list-item">
					<a class="pagination-link" href={`/blog/${nextPageNumber}`}><ChevronRight /></a>
				</li>
			</ul>
		</div>
	</div>
</section>

<style>
	#blog-post-list {
		list-style-type: none;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		padding-left: 0;
		margin-top: 4rem;
	}

	#blog-pagination {
		background-color: var(--main-color-black);
		border-radius: 0.25rem;
		display: flex;
		list-style: none;
		justify-content: space-between;
		max-width: 750px;
		margin: 0 auto;
		margin-top: 10rem;
		padding: 0;
	}

	.list-item {
		margin: auto 0;
	}

	.active-page {
		border-radius: 0.25rem;
		border: solid 1px var(--browser-links-border);
		background-color: var(--browser-links-background);
	}

	.pagination-link {
		padding: 1rem 1.75rem;
		border: solid 1px transparent;
		border-radius: 0.25rem;
		display: block;
	}

	.pagination-link:hover {
		border: solid 1px var(--browser-links-border);
		background-color: var(--browser-links-background);
		color: white;
	}
</style>
