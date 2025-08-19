# HybridiSpeksin nettisivut 2025

## Ohje

1. Lataa ja asenna tietokoneellesi [git](https://git-scm.com/downloads) tämän repon lataamiseen, lisää ohjeita täällä: [Set up Git](https://docs.github.com/en/get-started/getting-started-with-git/set-up-git)

2. Asenna esimerkiksi [PNPM](https://pnpm.io/installation), jonka avulla voit asentaa vaaditun Node-version komennolla   
`pnpm env use --global lts`. Vaihtoehtoisesti voit ladata ja asentaa Noden manuaalisesti [täältä](https://nodejs.org/en/download/current)

3. Käyttämällä komentorivisovellusta (CMD, PowerShell, [Bash](https://gitforwindows.org/)), mene hakemistoon johon haluat ladata projektin

4. Kloonaa projekti hakemistoon komennolla `git clone https://github.com/HybridiSpeksi/hs-2025` ja siirry uuteen kansioon komennolla `cd hs-2025`

5. Asenna projektin riippuvuudet komennolla `pnpm install` tai `npm install` jos latasit Noden manuaalisesti

6. Uudelleennimeä juurihakemiston .env.example -> .env ja lisää siihen puuttuvat osoitteet.

7. Käynnistä Vite-kehitysserveri komennolla `pnpm dev --open` tai `npm run dev -- --open`. Sivu avautuu selaimeesi ja koodiin tehdyt muutokset päivittyvät reaaliaikaisesti.  
Voit myös lisätä komennon loppuun lipun `--host`, jolloin kehitysserverille pääsee myös lähiverkostasi esim. kirjoittamalla puhelimen selaimen hakukenttään saadun **Network** IP-osoitteen

8. Voit rakentaa projektin tuotantoversion komennolla `pnpm build` tai `npm run build`, tämä on projektin optimoitu, palvelimella ajettava versio ja voit testata sitä komennolla `pnpm preview` 


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

Tests can be ran using the following commands

```bash
  pnpm test # Run all tests
  pnpm test:unit # Only Vitest unit-tests
  pnpm test:e2e # Only Playwright e2e-tests
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