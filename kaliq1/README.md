# Henkilökohtainen Verkkosivusto - Business CV

Tämä on moderni, responsiivinen henkilökohtainen verkkosivusto, joka on suunniteltu Business CV -tyyliseksi. Sivusto sisältää etusivun, ansioluettelon, portfolion ja yhteystiedot. Sivusto on toteutettu HTML:llä, CSS:llä ja JavaScriptillä.

## Projektin rakenne

```
henkilokohtainen-sivusto/
├── index.html        # Etusivu
├── cv.html           # Ansioluettelosivu
├── portfolio.html    # Portfolio-sivu
├── contact.html      # Yhteystietosivu
├── css/
│   └── styles.css    # Tyylitiedosto
├── js/
│   └── main.js       # JavaScript-toiminnallisuudet
├── images/
│   └── ...           # Kuvamateriaali (profiilikuva, projektikuvia jne.)
└── README.md         # Projektin yleiskuvaus & ohjeet
```

## Ominaisuudet

- Moderni Business CV -tyylinen ulkoasu
- Responsiivinen suunnittelu, joka toimii kaikilla laitteilla
- Selkeä ja tyylikäs käyttöliittymä animaatioilla
- Sulavat siirtymät ja skrollausanimaatiot
- Ansioluettelosivu, jossa voi ladata CV:n PDF-muodossa
- Portfolio-sivu, jossa on suodattimet ja modaali-ikkuna
- Yhteystietosivu, jossa on yhteydenottolomake
- Graafinen ilme noudattaa määriteltyä väripalettia ja fontteja

## Käytetyt teknologiat

- HTML5
- CSS3 (Flexbox, Grid, Media Queries, CSS-animaatiot)
- JavaScript (ES6+)
- Google Fonts (Montserrat, Roboto)
- Font Awesome -ikonit

## GitHub Pages -julkaisuohjeet

### 1. Luo GitHub-tili

Jos sinulla ei ole vielä GitHub-tiliä, luo sellainen osoitteessa [github.com](https://github.com).

### 2. Luo uusi repository GitHubissa

1. Kirjaudu GitHub-tilillesi
2. Napsauta oikeassa yläkulmassa olevaa `+`-kuvaketta ja valitse "New repository"
3. Anna repositoriolle nimi (esim. `portfolio` tai `käyttäjänimi.github.io`)
   - Jos nimeät repositorion muodossa `käyttäjänimi.github.io`, sivustosi on käytettävissä suoraan osoitteessa `https://käyttäjänimi.github.io`
   - Muuten se on käytettävissä osoitteessa `https://käyttäjänimi.github.io/repositorion-nimi`
4. Lisää halutessasi kuvaus
5. Valitse "Public" (GitHub Pages toimii vain julkisissa repositorioissa ilmaisella tilillä)
6. Napsauta "Create repository"

### 3. Lataa projektitiedostot GitHubiin

#### Vaihtoehto A: Käyttäen selainta (helpoin tapa)

1. Mene luomaasi repositorioon
2. Napsauta "Add file" ja valitse "Upload files"
3. Lataa kaikki projektikansiosi tiedostot (`index.html`, `css/styles.css` jne.)
   - Varmista, että säilytät kansiorakenteen (esim. css-tiedostot css-kansioon)
4. Napsauta "Commit changes"

#### Vaihtoehto B: Käyttäen Git-komentoriviä (edistyneempi)

1. Avaa terminaali koneellasi
2. Siirry projektikansioon komentorivillä:
   ```
   cd polku/projektiin
   ```
3. Alusta Git-repositorio, lisää tiedostot ja tee ensimmäinen commit:
   ```
   git init
   git add .
   git commit -m "Ensimmäinen versio sivustosta"
   ```
4. Yhdistä paikallinen repositorio GitHub-repositorioon:
   ```
   git remote add origin https://github.com/käyttäjänimi/repositorion-nimi.git
   git branch -M main
   git push -u origin main
   ```

### 4. Aktivoi GitHub Pages

1. Mene repositoriosi asetuksiin GitHubissa napsauttamalla "Settings"
2. Siirry vasemmasta valikosta kohtaan "Pages"
3. Valitse "Source"-kohdasta "Deploy from a branch" ja sitten "Branch"-kohdasta "main" ja "/root"
4. Napsauta "Save"
5. Odota muutama minuutti, GitHubin julkaisujärjestelmä valmistelee sivustoasi
6. Kun sivu on julkaistu, näet vihreän ilmoituksen ja linkin sivustoosi

### 5. Tarkista sivustosi

1. Napsauta GitHub Pages -osiossa näkyvää linkkiä (muodossa `https://käyttäjänimi.github.io/repositorion-nimi`)
2. Tarkista, että sivusto näyttää ja toimii kuten pitäisi
3. Huomaa, että sivuston latautuminen voi kestää muutaman minuutin ensimmäisellä kerralla

## Muokkausohjeet

### Henkilökohtaisten tietojen muokkaaminen

1. Avaa HTML-tiedostot ja korvaa "Oma Nimesi" omalla nimelläsi
2. Päivitä yhteystiedot (sähköposti, puhelin, sosiaalisen median linkit)
3. Lisää oma profiilikuvasi `images`-kansioon ja päivitä viittaus HTML-tiedostoissa

### Ansioluettelon muokkaaminen

1. Avaa `cv.html` ja päivitä koulutus- ja työkokemustiedot
2. Lisää omat taitosi ja osaamisalueesi
3. Lisää linkki PDF-muotoiseen CV:hen

### Portfolion muokkaaminen

1. Avaa `portfolio.html` ja lisää omat projektisi
2. Lisää projektikuvat `images`-kansioon
3. Päivitä projektien kuvaukset ja linkit

### Tyylien muokkaaminen

1. Avaa `css/styles.css` ja muokkaa värejä `:root`-osassa
2. Muokkaa fontteja ja muita tyylejä tarpeen mukaan

## Sivuston päivittäminen GitHub Pagesissa

Kun haluat päivittää sivustoasi:

1. Tee muutokset tiedostoihin paikallisesti
2. Lataa muutetut tiedostot GitHubiin (joko selaimessa tai komentoriviltä)
3. GitHub Pages päivittää sivustosi automaattisesti muutaman minuutin kuluessa

## Lisenssi

Tämä projekti on lisensoitu MIT-lisenssillä.
