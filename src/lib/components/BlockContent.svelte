<script lang="ts">
	import '../../styles/wordpress/common.css';
	import '../../styles/wordpress/style.css';
	import '../../styles/wordpress/theme.css';

	export let blockTitle;
	export let blockHTML;
</script>

<div class="block page wrap-1100">
	{#if blockTitle.length > 0}
		<h1 class="title">{blockTitle}</h1>
	{/if}
	{#if blockHTML.length > 0}
		<div class="content">{@html blockHTML}</div>
	{/if}
</div>

<style>
	.block {
		@media (max-width: 768px) {
			margin: 0 auto;
			width: 85% !important;
		}
	}

	.title {
		text-align: center;
		font-size: 1.9rem;
		margin-bottom: 1.5rem;
	}

	.content {
		max-width: 1000px;
		margin: 0 auto;
		@media (max-width: 768px) {
			& img {
				max-height: 300px;
				max-width: 100%;
				object-fit: scale-down;
			}
		}
		& p {
			font-size: 17px;
		}
	}
</style>
