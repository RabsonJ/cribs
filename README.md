# 🏛️ CRIBS

*A new perspective to design*

> Cribs is a website created for an imaginary architectural company **Cribs.** It was designed and developed for **Mr. Mushili Mubanga**, the owner of the idea.


The live site can be found [here](https://www.cribsdesign.live)

<p align="center">
  <img width="460" height="300" src="./cribs-screenshot.png">
</p>

## Languages Used
* HTML
* CSS (SCSS)
* JavaScript

## Third Party Libraries
* [Animation On Scroll (AOS)](https://github.com/michalsnik/aos) for the scroll and fade animations

* [purecounterjs](https://github.com/srexi/purecounterjs) for the counting animations

* [Line Awesome](https://icons8.com/line-awesome) for the icons

## How The Project Is Set Up

* ##### `dist`  folder

   contains the minified code

   ```
  📦dist
   ┣ 📂css
   ┣ 📂img
   ┃ ┣ 📂vendors
   ┗ 📂js
   ```

* ##### `src`  folder

   contains the source files

   ```
    📦src
      ┣ 📂js
      ┗ 📂sass
      ┃ ┣ 📂abstracts
      ┃ ┣ 📂base
      ┃ ┣ 📂components
      ┃ ┣ 📂pages
      ┃ ┣ 📜about.scss
      ┃ ┣ 📜faq.scss
      ┃ ┣ 📜main.scss
      ┃ ┗ 📜projects.scss
   ```

   The `components` subfolder holds all potentially reusable parts of the site and can exist independently. These can be copied and pasted anywhere even in a different project, provided the corresponding class is added to the `HTML`.

* ##### root  files

   ```
      ┣ 📜about.html
      ┣ 📜cribs-screenshot.png
      ┣ 📜faq.html
      ┣ 📜favicon.ico
      ┣ 📜index.html
      ┣ 📜projects.html
      ┗ 📜README.md
   ```
   
## License
The project can be used for private projects. You can preserve the project structure, markup and styles but **NOT** the content, e.g. the name, any body text or images (some images are from [pexels](www.pexels.com) and are therefore royalty free).
