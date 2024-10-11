<script lang="ts">
	import type { ContactItem, NavigationObject, NavigationItem } from '$lib/types/content';
	import ContactsList from '$lib/components/ContactsList.svelte';
	import '$styles/app.scss';
	import { page } from '$app/stores';
	import logo from '$lib/images/logo_white.avif';
	let contacts: ContactItem = $page.data.address;
	let navigations: NavigationObject[] = $page.data.navigations;

	let bottomNavigation = navigations.find((nav) => nav.navigation_name === 'bottom-navigation');
	let botNavItems: NavigationItem[] = [];
	if (bottomNavigation && bottomNavigation.items) {
		botNavItems = bottomNavigation.items;
	}

	let importantLinks = navigations.find((nav) => nav.navigation_name === 'important-links');
	let impLinkItems: NavigationItem[] = [];
	if (importantLinks && importantLinks.items) {
		impLinkItems = importantLinks.items;
	}
</script>

<section>
	<div class="wrap">
		<div class="footer-top">
			<div class="pages">
				<h2>Sivut</h2>
				<ul>
					{#each botNavItems as item (item.id)}
						<li><a href={item.link}>{item.title}</a></li>
					{/each}
				</ul>
			</div>
			<div class="address">
				<h2>Yhteystiedot</h2>
				<ContactsList {contacts} />
			</div>
			<div class="socials">
				<h2>Tärkeät linkit</h2>
				<ul>
					{#each impLinkItems as item (item.id)}
						<li><a href={item.link}>{item.title}</a></li>
					{/each}
				</ul>
			</div>
		</div>
		<div class="footer-bottom">
			<div class="logo"><a href="/"><img src={logo} alt="HybridiSpeksi logo" /></a></div>
			<div class="links">
				<ul>
					<li><a href="/hybridispeksi-ry-yhdistyksen-saannot">Yhdistyksen säännöt</a></li>
					<li>
						<a href="/hybridispeksi-ryn-merkkiohjesaanto"
							>Yhdistyksen merkkiohjesääntö</a>
					</li>
					<li><a href="/rekisteriseloste">Rekisteriseloste</a></li>
				</ul>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	section {
		padding-top: 2rem;
		padding-bottom: 0.5rem;
		background-color: var(--black-hex);
		color: var(--white-hex);
		display: flex;
		flex-direction: column;

		a {
			color: var(--white-hex);
			text-decoration: underline;
		}
		li {
			list-style: none;
		}
		h2 {
			padding: 0;
			margin: 0;
		}
	}
	.footer-top {
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 2rem;
		div {
			flex: 1 1 calc(33.33% - 25px);
			min-width: 300px;
		}
	}
	.footer-bottom {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.links {
			margin-left: auto;

			ul {
				display: flex;
				flex-wrap: wrap;
				li {
					margin: 0 5px;
				}
			}
			@media (max-width: 650px) {
				margin-left: 0;
				ul {
					padding-left: 0;
				}
			}
		}
	}

	.logo {
		height: 100px;
		img {
			height: 100%;
		}
	}
</style>
