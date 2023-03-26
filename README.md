[![Stargazers][stars-shield]][stars-url]
[![Forks][forks-shield]][forks-url]
[![Issues][issues-shield]][issues-url]
[![GLP-3.0 License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<samp>
<p align="center">
  <a href="https://silasrodrigues.vercel.app">
    <img src="assets/img/logo-large.svg" alt="Logo" height="40">
  </a>

  <h3 align="center">Portfolio</h3>

  <p align="center">
    Portfolio to show my projects.
    <br />
    <a href="https://silasrodrigues.vercel.app"><strong>View Demo »</strong></a>
    <br />
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a>
          <ul>
            <li><a href="#desktop-view">Desktop View</a></li>
            <li><a href="#404-view">404 View</a></li>
            <li><a href="#mail-message-view">Mail Message View</a></li>
            <li><a href="#mobile-view">Mobile View</a></li>
            <li><a href="#lighthouse-report">Lighthouse Report</a></li>
          </ul>
        </li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

### Desktop View

## [![About View Desktop][product-screenshot9]](https://silasrodrigues.vercel.app)

### Desktop Dark View

## [![About View Desktop][product-screenshot]](https://silasrodrigues.vercel.app)

### Desktop Light View

## [![About View Desktop][product-screenshot8]](https://silasrodrigues.vercel.app)

### 404 View

[![About View 404][product-screenshot2]](https://silasrodrigues.vercel.app/Example404)

### Mail Message View

###### NOTE: Due to the site being hosted on GitHub and deployed at Vercel, the function adopted with PHP mailer for sending e-mails does not work, but I kept the settings for future use. The files are located in the [Portfolio/src/](https://github.com/SilasRodrigues19/Portfolio/tree/main/src) folder.

###### Just make some adjustments in the `mail.php` file, informing the `$mail->Username` and `$mail->Password`, change the `action` of the form and change it from `index.html` to `index.php`

```php

  // src/mail.php
  $mail->Username = 'your-email@gmail.com';
  $mail->Password = '1e4c964f1026621f'; // Generate this hash the following URL -> https://myaccount.google.com/apppasswords

  // Rename index.html to index.php and change action in the form
  <form action="src/mail.php" method="POST" id="formContact">
```

###### Expanding and collapsing the items below, you can see how it looks in the implementation with PHPMailer and how it looks with GetForm

<details>
  <summary>PHPMailer</summary>

[![Error Mail][product-screenshot5]](https://silasrodrigues.vercel.app)
[![Success Mail][product-screenshot6]](https://silasrodrigues.vercel.app)

</details>

<hr>

<details open>
  <summary>GetForm</summary>

[![Get Form Message][product-screenshot10]](https://silasrodrigues.vercel.app)

</details>

### Mobile View

[![About View 404][product-screenshot3]](https://silasrodrigues.vercel.app/Example404)
[![About View 404][product-screenshot4]](https://silasrodrigues.vercel.app/Example404)

## Lighthouse Report

[![Lighthouse Report][product-screenshot7]](https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Fsilasrodrigues.vercel.app%2F&strategy=mobile&category=performance&category=accessibility&category=best-practices&category=seo&category=pwa&utm_source=lh-chrome-ext)

This project was built to show some of my projects and my freelancing services.

The main sections and features are described below:

- **Light / Dark**: toggle between dark and light mode. The last theme chosen will be saved to localStorage to be displayed on the next access.
- **Header**: contains navigation menu and button to switch between light and dark mode.
- **Home**: presentation about me with name and professional focus.
- **About** describes about my background, about me, experience and my future plans.
- **Services**: it shows my main skills and technologies that I use in my projects.
- **Projects**: it has some projects that I developed.
- **Certificates**: as the name suggests is a part that's show my certificates.
- **Form**: form to get in touch with me.
- **Footer**: contains links to contact, location, to view my resume and back to top.

### Built With

Technologies used in the project.

### Web Frameworks

- [Bootstrap](https://getbootstrap.com)
- [Animate CSS](https://animate.style)
- [Aos Animate](https://michalsnik.github.io/aos/)

### JavaScript Libraries

- [jQuery](https://jquery.com)
- [LightBox](https://lokeshdhakar.com/projects/lightbox2/) or cdn [LightBox CDN](https://cdnjs.com/libraries/lightbox2)
- [Sweet Alert](https://sweetalert2.github.io)
- [Iconify](https://iconify.design)

### PHP Libraries

- [PHPMailer](https://github.com/PHPMailer/PHPMailer) this repo contains everything you need to set up and use

- [GetForm](https://getform.io/) smart form endpoints
  for developers.

### Font Script

- [Google Fonts](https://fonts.google.com/)

### Plugins

- [jQuery Validator](https://jqueryvalidation.org)
- [jQuery Mask](https://igorescobar.github.io/jQuery-Mask-Plugin/docs.html)

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

This work is licensed under a GNU Affero General Public License v3.0 License. See [`LICENSE`](https://github.com/SilasRodrigues19/Portfolio/blob/main/LICENSE) for more information

<!-- CONTACT -->

## Contact

Silas Rodrigues - [@jinuye1](https://twitter.com/jinuye1) - silasrodrigues.fatec@gmail.com

Project Link: [silasrodrigues.vercel.app](https://silasrodrigues.vercel.app)

   <!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/SilasRodrigues19/Portfolio.svg?style=for-the-badge
[contributors-url]: https://github.com/SilasRodrigues19/Portfolio/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/SilasRodrigues19/Portfolio.svg?style=for-the-badge
[forks-url]: https://github.com/SilasRodrigues19/Portfolio/network/members
[stars-shield]: https://img.shields.io/github/stars/SilasRodrigues19/Portfolio.svg?style=for-the-badge
[stars-url]: https://github.com/SilasRodrigues19/Portfolio/stargazers
[forks-shield]: https://img.shields.io/github/forks/SilasRodrigues19/Portfolio.svg?style=for-the-badge
[forks-url]: https://github.com/SilasRodrigues19/Portfolio/network/members
[issues-shield]: https://img.shields.io/github/issues/SilasRodrigues19/Portfolio.svg?style=for-the-badge
[issues-url]: https://github.com/SilasRodrigues19/Portfolio/issues
[license-shield]: https://img.shields.io/github/license/SilasRodrigues19/Portfolio.svg?style=for-the-badge
[license-url]: https://github.com/SilasRodrigues19/Portfolio/blob/master/LICENSE
[product-screenshot]: ./assets/img/preview.png
[product-screenshot2]: ./assets/img/preview404.png
[product-screenshot3]: ./assets/img/preview2.gif
[product-screenshot4]: ./assets/img/preview404-mobile.png
[product-screenshot5]: ./assets/img/previewErrorMail.png
[product-screenshot6]: ./assets/img/previewSuccessMail.png
[product-screenshot7]: ./assets/img/previewLighthouse.png
[product-screenshot8]: ./assets/img/preview2.png
[product-screenshot9]: ./assets/img/preview.gif
[product-screenshot10]: ./assets/img/previewGetForm.png

<br><hr>
[🔼 Back to top](#Portfolio)
