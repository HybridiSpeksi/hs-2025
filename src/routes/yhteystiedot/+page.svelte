<script lang="ts">
	import ContactsList from '$lib/components/ContactsList.svelte';
	import PeopleGroup from './components/PeopleGroup.svelte';
	import BlockContent from '$lib/components/BlockContent.svelte';
	import type { Person } from '$lib/types/common';

	export let data;

	let people: Person[];
	data.people ? (people = data.people) : (people = []);
	const contacts = data.address;

	const uniqueTypes = [...new Set(people.map((person) => person.type))];

	// Sort the unique types alphabetically
	uniqueTypes.sort((a, b) => a.localeCompare(b));
</script>

<div class="sopo-bg">
	<BlockContent blockTitle={data?.sopoTitle} blockHTML={data?.sopoHTML} />
</div>
<div>
	{#each uniqueTypes as type, index}
		<PeopleGroup {type} {index} peopleGroup={people.filter((person) => person.type == type)} />
	{/each}
</div>

<div class="contacts">
	<div class="wrap">
		<div class="address">
			<ContactsList {contacts} />
		</div>
	</div>
</div>

<style>
	@media only screen and (max-width: 768px) {
		.wrap {
			padding: 0 20px;
		}
	}

	.sopo-bg {
		padding: 0.1rem 0 0.5rem 0;
		background-color: rgba(var(--gray-rgb), 0.7);
	}

	.contacts {
		background-color: rgba(var(--gray-rgb), 0.7);
		color: var(--white-hex);
		& .address {
			padding: 3rem 0;
		}
	}
</style>
