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
    <div class="global-wrap">
        <div class="address">
            <ContactsList {contacts} />
        </div>
    </div>
</div>

<style>
    .sopo-bg {
        margin: 0 auto;
        padding: 0.1rem 0 0.5rem 0;
        background-color: var(--bark);
        color: var(--white);
    }

    .sopo-bg :global(a) {
        color: inherit;
    }

    .contacts {
        background-color: rgba(var(--dark-gray-rgb), 0.8);
        color: var(--white);
        & .address {
            padding: 3rem 0;
            @media screen and (max-width: 768px) {
                padding: 2rem 0;
            }
        }
    }
</style>
