<script lang="ts">
	import NavMenu from '$lib/components/Navigation/NavMenu.svelte'
	import { sidebarVisible } from './stores'

	// Subscribe to the sidebar store
	let showSidebar: boolean
	sidebarVisible.subscribe((value) => {
		showSidebar = value
	})
</script>

<div class="sidebar" class:showSidebar>
	<NavMenu />
</div>

<style>
	.sidebar {
		position: fixed;
		padding-top: 5.5rem;
		padding-right: 0rem;
		box-shadow: 1rem;
		width: 100vw;
		max-width: 100vw;
		z-index: 1000;
		height: 100vh;
		top: 0;
		background-color: var(--sidebar-bg);
		right: -100vw;
		transition: right 0.3s ease-in-out;
	}
	.showSidebar {
		right: 0;
	}
</style>
