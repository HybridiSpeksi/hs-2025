<script>
	import { PUBLIC_WP_MEDIA_API_URL } from '$env/static/public';
	import { onMount } from 'svelte';
	import { Pie } from 'svelte-chartjs';
	import 'chart.js/auto';

	let data = null;
	let currentQuestionIndex = -1;
	let points = {};
	let maxPoints = {};
	let characters = {};
	let finalPoints = {};
	let total = 0;
	let finalTotal = 0;
	let pieData;
	let finalPointsArray;
	let sortedFinalPoints = [];
	let sortedFinalCharacters = [];
	let selectedAnswers = {};
	export let id;

	let isLoading = true;

	onMount(() => {
		fetch(`https://wp.hybridispeksi.fi/wp-json/ifeelquizzy/v1/data/${id}`)
			.then((response) => response.json())
			.then(async (json) => {
				data = json;
				// Initialize points object with characters
				for (const character of data.characters) {
					points[character.id] = 0;
					maxPoints[character.id] = 0;
					characters[character.id] = {};
					characters[character.id]['name'] = character.name;
					characters[character.id]['description'] = character.description;
					characters[character.id]['image_id'] = character.image;
					finalPoints[character.id] = 0;
				}
				data.questions.forEach((question) => {
					let tempMaxPoints = {};
					question.answers.forEach((answer) => {
						answer.points.forEach((point) => {
							tempMaxPoints[point.character_id] =
								tempMaxPoints[point.character_id] > parseInt(point.points)
									? tempMaxPoints[point.character_id]
									: parseInt(point.points);
						});
					});
					Object.keys(tempMaxPoints).forEach((key) => {
						maxPoints[key] += tempMaxPoints[key];
					});
				});
				isLoading = false;
			})
			.catch((error) => console.error('Error:', error));
		isLoading = false;
	});

	async function selectAnswer(answer) {
		selectedAnswers[answer.question_id] = answer;

		await new Promise((resolve) => setTimeout(resolve, 500));
		if (currentQuestionIndex < data.questions.length) {
			currentQuestionIndex++;
		}

		if (currentQuestionIndex === data?.questions.length) {
			Object.entries(selectedAnswers).forEach((answer) => {
				answer[1].points.forEach((point) => {
					points[point.character_id] += parseInt(point.points);
				});
			});

			Object.keys(points).forEach((key) => {
				if (maxPoints[key] == 0) {
					delete finalPoints[key];
					delete characters[key];
				} else {
					finalPoints[key] = Math.ceil(points[key] * (points[key] / maxPoints[key]));
					total += finalPoints[key];
				}
			});

			Object.keys(finalPoints).forEach((key) => {
				if (finalPoints[key] / total < 0.1) {
					delete finalPoints[key];
					delete characters[key];
				} else {
					finalTotal += finalPoints[key];
				}
			});

			Object.keys(finalPoints).forEach((key) => {
				finalPoints[key] = (finalPoints[key] / finalTotal) * 100;
			});

			finalPointsArray = Object.entries(finalPoints);
			finalPointsArray.sort((a, b) => b[1] - a[1]);

			finalPointsArray.forEach((entry) => {
				sortedFinalPoints.push(entry[1]);
				sortedFinalCharacters.push(characters[entry[0]].name);
			});

			pieData = {
				labels: sortedFinalCharacters,
				datasets: [
					{
						data: sortedFinalPoints,
						backgroundColor: [
							'rgba(128, 0, 128, 0.2)', // Purple
							'rgba(0, 128, 128, 0.2)', // Teal
							'rgba(128, 128, 0, 0.2)', // Olive
							'rgba(0, 0, 128, 0.2)', // Navy
							'rgba(128, 0, 0, 0.2)', // Maroon
							'rgba(0, 128, 0, 0.2)', // Green
							'rgba(128, 128, 128, 0.2)', // Grey
							'rgba(0, 0, 0, 0.2)', // Black
							'rgba(255, 0, 0, 0.2)', // Red
							'rgba(0, 255, 0, 0.2)', // Lime
							'rgba(0, 0, 255, 0.2)', // Blue
							'rgba(255, 255, 0, 0.2)', // Yellow
							'rgba(0, 255, 255, 0.2)', // Aqua
							'rgba(255, 0, 255, 0.2)', // Fuchsia
							'rgba(192, 192, 192, 0.2)' // Silver
						],
						borderColor: [
							'rgba(128, 0, 128, 1)', // Purple
							'rgba(0, 128, 128, 1)', // Teal
							'rgba(128, 128, 0, 1)', // Olive
							'rgba(0, 0, 128, 1)', // Navy
							'rgba(128, 0, 0, 1)', // Maroon
							'rgba(0, 128, 0, 1)', // Green
							'rgba(128, 128, 128, 1)', // Grey
							'rgba(0, 0, 0, 1)', // Black
							'rgba(255, 0, 0, 1)', // Red
							'rgba(0, 255, 0, 1)', // Lime
							'rgba(0, 0, 255, 1)', // Blue
							'rgba(255, 255, 0, 1)', // Yellow
							'rgba(0, 255, 255, 1)', // Aqua
							'rgba(255, 0, 255, 1)', // Fuchsia
							'rgba(192, 192, 192, 1)' // Silver
						],
						borderWidth: 1
					}
				]
			};
		}
	}

	function nextQuestion() {
		if (currentQuestionIndex < data.questions.length - 1) {
			currentQuestionIndex++;
		}
	}

	function previousQuestion() {
		if (currentQuestionIndex > 0) {
			currentQuestionIndex--;
		}
	}
</script>

<div class="container">
	{#if isLoading}
		<p>Ladataan...</p>
	{/if}
	{#if !isLoading && currentQuestionIndex == -1}
		<button on:click={nextQuestion}>Aloita kysely!</button>
	{/if}
	{#if data && currentQuestionIndex > -1 && currentQuestionIndex < data.questions.length}
		{#each [data.questions[currentQuestionIndex]] as question (currentQuestionIndex)}
			<p class="question">{question.question_text}</p>
			{#each question.answers as answer (answer.id)}
				<label class="answer">
					<input type="radio" name="answers" on:change={() => selectAnswer(answer)} />
					<span>{answer.answer}</span>
				</label>
			{/each}
		{/each}
		<div class="buttons">
			{#if currentQuestionIndex > 0}
				<button on:click={previousQuestion}>Edellinen</button>
			{/if}
			{#if currentQuestionIndex < data.questions.length - 1}
				<button on:click={nextQuestion}>Seuraava</button>
			{/if}
		</div>
	{/if}
	{#if pieData}
		<h2>Tulokset</h2>
		<div class="pie-chart"><Pie data={pieData} options={{ responsive: true }} /></div>
		{#if finalPointsArray}
			<div class="characters">
				{#each finalPointsArray as [key, value]}
					<div class="character">
						<div class="image-container">
							<img
								src={`${PUBLIC_WP_MEDIA_API_URL}/${characters[key]['image_id']}`}
								alt={characters[key].name} />
						</div>
						<div class="text">
							<p class="you-are">
								Olet {value.toFixed(1)}% kuten {characters[key].name}
							</p>
							{characters[key].description}
						</div>
					</div>
				{/each}
			</div>
		{/if}
	{/if}
</div>

<style lang="scss">
	.characters {
		width: 100%;
		display: flex;
		flex-direction: column;
		.character {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			@media (max-width: 800px) {
				flex-direction: column;
			}
			.you-are {
				font-size: 24px;
				font-weight: bold;
			}
			.text,
			.you-are {
				width: 66.7%;
				@media (max-width: 800px) {
					width: 100%;
				}
			}
			.image-container {
				display: flex;
				min-width: 100px;
				width: 33.3%;
				@media (max-width: 800px) {
					width: 100%;
					height: fit-content;
					align-items: center;
					justify-content: center;
				}
				img {
					width: 100%;
					max-width: 400px;
					object-fit: contain;
				}
			}
		}
	}
	.buttons {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}
	button {
		margin-top: 25px;
		border: var(--black) solid 3px;
		font-size: 16px;
		&:hover {
			background-color: var(--black);
			color: var(--white);
		}
	}
	.container {
		display: flex;
		flex-direction: column;
		background-color: var(--white);
		border: var(--gray) 10px solid;
		border-radius: 30px;
		color: var(--black);
		width: 80%;
		padding: 25px;
		margin: auto;
		align-items: center;
		margin: 50px auto;
	}
	.question {
		display: flex;
		flex-direction: column;
		font-size: 24px;
		font-weight: bold;
		width: 100%;
	}

	.answer {
		width: 100%;
		padding: 10px 0;
	}

	/* Hide the default radio button */
	.answer input[type='radio'] {
		display: none;
	}

	/* Create a custom radio button */
	.answer input[type='radio'] + span {
		position: relative;
		padding-left: 25px;
		cursor: pointer;
		display: inline-block;
	}

	/* Create the indicator (the dot/circle - hidden when not checked) */
	.answer input[type='radio'] + span:before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		width: 18px;
		height: 18px;
		border: 2px solid #555;
		border-radius: 50%;
	}

	/* Style the indicator (dot/circle) when radio is checked */
	.answer input[type='radio']:checked + span:before {
		background-color: #555;
	}

	.pie-chart {
		max-width: 500px;
		width: 50%;
		@media (max-width: 800px) {
			width: 100%;
		}
	}
</style>
