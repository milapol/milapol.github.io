<script>
	import '../../app.scss';
</script>

<svelte:head>
	<script src="../../../node_modules/bootstrap/dist/js/bootstrap.js"></script>
</svelte:head>

<svelte:window
	onload={(e) => {
		const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
		const tooltipList = [...tooltipTriggerList].map(
			(tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
		);
	}}
/>

<div class="container">
	<div class="row p-3">
		<div class="p-4 bg-dark rounded w-100" style="opacity: 85%;">
			<div class="opacity-100">
				<slot />
			</div>
		</div>
	</div>
</div>
