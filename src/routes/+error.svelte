<script>
	import { page } from '$app/stores'
</script>

<div class="global-center error">
	<h1>{$page.status} - {$page.error?.message}</h1>
</div>

<style>
	.error{
		min-height: 60vh;
  		overflow-x: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
	}
</style>
