<script lang="ts">
	import * as config from "$lib/config"
	import { formatDate } from "$lib/utils.js"
	export let data
	const posts = data.posts
</script>

<svelte:head>
	<title>
		{config.title}
	</title>
</svelte:head>

<section>
	<ul class="posts">
		{#each posts as { title, date, description, categories, slug }}
			<ul class="post">
				<a href={slug} class="title">
					{title}
				</a>
				<p class="date">{formatDate(date)}</p>
				<p class="description">{description}</p>
			</ul>
		{/each}
	</ul>
</section>

<style>
	.posts {
		display: grid;
		gap: var(--size-7);
	}
	.post {
		max-inline-size: var(--size-content-3);
	}

	.post:not(:last-child) {
		border-bottom: 1px solid var(--border);
		padding-bottom: var(--size-7);
	}

	.title {
		font-size: var(--font-size-fluid-3);
		text-transform: capitalize;
	}

	.date {
		color: var(--text-2);
	}

	.description {
		margin-top: var(--size-3);
	}
</style>
