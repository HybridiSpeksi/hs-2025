# HybridiSpeksi Frontend App 2025

Here you can find instructions on setting up the development environment, building and deploying the website. If you get stuck just remember google exists.


## Roadmap

- Improve songbook and fetch songs directly from WordPress

- Plan and implement content improvements

- Add tests for the project

- Add GitHub Actions workflow which runs tests and handles deployment

- ???

## Ohje

1. Lataa ja asenna tietokoneellesi [git](https://git-scm.com/downloads) tämän repon lataamiseen, lisää ohjeita täällä: [Set up Git](https://docs.github.com/en/get-started/getting-started-with-git/set-up-git)

2. Asenna mielellään [PNPM](https://pnpm.io/installation), jonka avulla voit asentaa vaaditun Node-version komennolla   
`pnpm env use --global lts`, voit ladata ja asentaa Noden manuaalisesti [täältä](https://nodejs.org/en/download/current)

3. Käyttämällä komentorivisovellusta kuten CMD, PowerShell tai [Bash](https://gitforwindows.org/), mene kansioon johon haluat ladata tämän repon,  
esim. Windowsilla `C:\Users\<nimi>\repos`

4. Kloonaa projekti koneellesi aktiiviseen hakemistoon komennolla `git clone https://github.com/HybridiSpeksi/hs-2025`  
and siirry uuteen kansioon komennolla `cd hs-2025`

5. Asenna projektin riippuvuudet komennolla `pnpm install` tai `npm install` jos latasit Noden manuaalisesti

6. Luo projektin kansioon tiedosto .env.local jonka sisältö on alla *Environment Variables* kohdassa,  
korvaa \<URL> kohdat osoitteilla jotka löytyvät verkkosivutiimin drivestä

7. Aloita Vite kehitysserveri komennolla `pnpm dev --open` tai `npm run dev -- --open`. Sivu avautuu oletusselaimessasi ja koodiin tehdyt muutokset päivittyvät reaaliaikaisesti.  
Voit lisätä komennon loppuun lipun `--host` jolloin kehitysserverille pääsee myös lähiverkostasi esim. kirjoittamalla puhelimen selaimen hakukenttään saadun **Network** IP-osoitteen

8. Voit rakentaa projektin tuotantoversion komennolla `pnpm build` tai `npm run build`, tämä on projektin optimoitu, palvelimella ajettava versio ja voit katsella sitä komennolla `pnpm preview` 

## Environment Variables

To run this ap, you will **NEED** to add the following lines to a .env file in the root of the project.
You can find the values for these variables in the team's Google Drive.

```env
WP_REST_API_URL=<...>
WP_MEDIA_API_URL=<...>
DIRECTUS_API_URL=<...>

PUBLIC_WP_REST_API_URL=<...>
PUBLIC_WP_MEDIA_API_URL=<...>
PUBLIC_DIRECTUS_API_URL=<...>
```

## Develop Locally

Clone the project

```bash
  git clone https://github.com/HybridiSpeksi/hs-2025
```

Go to the project directory

```bash
  cd hs-2025
```

Install dependencies

```bash
  pnpm install
```

Start the development server

```bash
  pnpm dev
```

## Running Tests

To run tests, run the following command

```bash
  pnpm test # Run all tests
  pnpm test:unit # Only Vitest unit-tests
  pnpm test:integration # Only Playwright e2e-tests
```

You can also lint the project using ESlint and Prettier with

```bash
  pnpm lint
```
And check the project using svelte-check with

```bash
  pnpm check
```

## License

[MIT](https://choosealicense.com/licenses/mit/)