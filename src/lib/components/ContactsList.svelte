<script lang="ts">
	import type { ContactItem } from '$lib/types/content';
	export let contacts: ContactItem;
</script>

<div class="contacts-list">
	<p class="contact-item"><strong>Sähköposti: </strong>{contacts?.email}</p>
	<p class="contact-item"><strong>Y-tunnus: </strong>{contacts?.yTunnus}</p>
	<p class="contact-item"><strong>Tilinumero: </strong>{contacts?.IBAN}</p>
	<p class="contact-item"><strong>Osoite: </strong>{contacts?.address}</p>
</div>

<style>
	.contacts-list {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		@media screen and (max-width: 768px) {
			gap: 0.3rem;
		}
	}

	.contact-item {
		margin: 0;
	}
</style>
