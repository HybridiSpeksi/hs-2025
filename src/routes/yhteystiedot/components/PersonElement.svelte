<script lang="ts">
	import type { Person } from '$lib/types/common';

	export let person: Person;
</script>

<div class="person">
	<div class="info">
		<p class="name">{person.name}</p>
		<!-- Reverse the user email to possibly avoid spam? -->
		<span class="email" style="unicode-bidi:bidi-override; direction: rtl;">
			{person.email?.split('').reverse().join('')}
		</span>
		<p class="job">{person.jobs}</p>
	</div>
</div>

<style>
	.person {
		display: flex;
		flex-direction: column;
		padding-bottom: 0rem;
		padding-top: 0rem;

		& .info {
			text-align: center;

			& .name {
				font-size: 1.5rem;
				font-weight: 700;
				display: block;
				margin-bottom: 0.2rem;
				@media (max-width: 768px) {
					margin-bottom: 0.2rem;
				}
			}

			& .email {
				font-size: 1.1rem;
				margin-bottom: 0.2rem;
				display: inline-block;
				@media (max-width: 768px) {
					margin-bottom: 3px;
				}
			}

			& .job {
				font-size: 1.3rem;
				line-height: 1.6rem;
				display: flex;
				align-items: center;
				justify-content: center;
				min-height: 1.5rem;
			}

			& p {
				line-height: 24px;
				margin: 0;
			}
		}
	}
</style>
