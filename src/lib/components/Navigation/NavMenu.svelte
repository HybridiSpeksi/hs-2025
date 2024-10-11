<script lang="ts">
	import { page } from '$app/stores';
	import type { NavigationItem, NavigationObject } from '$lib/types/content';
	// import { Moon } from 'svelte-loading-spinners'
	import { toggleSidebar } from './stores';

	let navigations: NavigationObject[] = $page.data.navigations;

	let topNavigation = navigations.find((nav) => nav.navigation_name === 'top-navigation');
	let topNavItems: NavigationItem[] = [];
	if (topNavigation && topNavigation.items) {
		topNavItems = topNavigation.items;
	}

	// Toggle sidebar of when link is clicked on mobile
	function linkToggleSidebar() {
		if (window.innerWidth <= 768) {
			toggleSidebar();
		}
	}
</script>

<nav class="nav-menu">
	{#if topNavItems?.length > 0}
		<ul class="link-flex">
			{#each topNavItems as item (item.id)}
				<li class="link-item">
					<a on:click={linkToggleSidebar} href={item.link}>{item.title}</a>
				</li>
			{/each}
		</ul>
	{:else}
		<div class="loading">
			<!--<Moon size="60" color="var(--white-hex)" unit="px" duration="1s" />-->
			<h4>Ladataan...</h4>
		</div>
	{/if}
</nav>

<style>
	.nav-menu {
		display: flex;
		height: 100%;
		width: 100%;
		max-width: 100vw;
		flex-direction: row;
		align-items: end;
		justify-content: start;
		text-align: right;
	}

	.link-flex {
		display: flex;
		gap: 0.5rem;
	}

	/* Vertical toggle navigation on mobile */
	@media (max-width: 768px) {
		.nav-menu {
			display: flex;
			max-width: 100vw;
			flex-direction: column;
			overflow: hidden;
			overflow-x: hidden;
		}
		.link-flex {
			flex-direction: column;
			gap: 0.8rem;
		}
	}

	.link-item {
		margin-bottom: 0rem;
		padding-right: 2rem;
	}

	.nav-menu a {
		color: white;
		text-decoration: none;
		font-size: 1.1rem;
		padding-right: 0rem;
	}
	/* Row-directon on desktop menu */
	@media (min-width: 768px) {
		.link-flex {
			display: flex;
			height: 100%;
			flex-direction: row;
			gap: 1.2rem;
		}
		.link-item {
			margin-bottom: 0rem;
			padding-right: 0rem;
		}
	}

	.nav-menu a {
		transition: color 0.2s ease;
	}

	.nav-menu a:hover {
		color: var(--gray-hex);
	}

	.nav-menu ul {
		padding: 0;
		margin: 0;
		list-style: none;
	}

	.loading {
		padding: 0.5rem 1.1rem;
	}
</style>
