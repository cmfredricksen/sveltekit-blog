<script lang="ts">
	import * as config from "$lib/config"
	import Toggle from "../../routes/toggle.svelte"
</script>

<nav>
	<a href="/" class="title">
		<b>
			{config.title}
		</b>
	</a>
	<ul class="links">
		<li>
			<a href="/about">About</a>
		</li>
		<li>
			<a href="/contact">Contact</a>
		</li>
		<li>
			<a href="/rss.xml" target="_blank">RSS</a>
		</li>
	</ul>

	<Toggle />
	<!-- <button>Toggle</button> -->
</nav>

<style>
	nav {
		padding-block: var(--size-7);
		display: flex;
		justify-content: space-between;
		align-items: baseline;
	}

	.links {
		margin-block: var(--size-7);
	}

	ul {
		display: flex;
	}

	ul a {
		margin: 0 1rem;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	@media (min-width: 768) {
		nav {
			display: flex;
			justify-content: space-between;
		}
		.links {
			display: flex;
			gap: var(--size-7);
			margin-block: 0;
		}
	}
</style>
