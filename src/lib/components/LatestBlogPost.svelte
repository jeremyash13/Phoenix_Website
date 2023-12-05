<script lang="ts">
	// import type { Post } from '$lib/types';
	import { formatDate } from '$lib/utils';
	import { Flame } from 'lucide-svelte';
	export let blogPost;
</script>

<div class="card hover-effect">
	<a href={`/blog/posts/${blogPost.slug}`}>
		<img src={blogPost.image} alt={blogPost.title} />
		<div id="content-wrapper">
			<div class="release-date-wrapper">
				<div class="flex-row">
					<Flame strokeWidth={1.25} size={23} /><span> Newest</span>
				</div>
				<span>{formatDate(blogPost.date)}</span>
			</div>
			<h4 id="post-title">{blogPost.title}</h4>
			<p>{blogPost.description}</p>
			<br />
			<span>Read more</span>
		</div>
	</a>
</div>

<style>
	.card {
		max-width: 750px;
		margin: 0 auto;
		margin-top: 4rem;
		border-radius: 1.2rem;
		box-shadow: 0 7px 25px -7px rgba(0, 0, 0, 0.3);

		& #post-title {
			margin-bottom: 1rem;
			margin-top: 0.5rem;
			text-align: left;
		}

		& img {
			border-radius: 1rem 1rem 0 0;
			object-fit: cover;
			object-position: center;
			max-height: 400px;
			width: 100%;
		}

		& p {
			overflow: hidden;
			display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
		}
	}

	.release-date-wrapper {
		display: flex;
		justify-content: space-between;
	}

	#content-wrapper {
		padding: 2rem;
		background-color: var(--main-color-4);
		border-radius: 0 0 1rem 1rem;
		max-height: 400px;
		transition: background-color 0.2s ease-out;

		& svg {
			margin: auto 0;
			margin-right: 0.25rem;
		}
	}
</style>
