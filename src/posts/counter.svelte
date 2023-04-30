<script lang="ts">
	let count = 0

	const increment = () => (count = count + 1)
</script>

<button on:click={increment}>+ {count}</button>
