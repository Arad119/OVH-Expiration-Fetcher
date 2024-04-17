
<div id="top"></div>


<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Arad119/OVH-Expiration-Fetcher">
    <img src="images/Logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">OVH Expiration Fetcher</h3>

  <p align="center">
    An Express server which fetches expiration date from the OVH API.
    <br />
    <br />
    <a href="https://github.com/Arad119/OVH-Expiration-Fetcher/issues">Report Bug</a>
    ·
    <a href="https://github.com/Arad119/OVH-Expiration-Fetcher/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#example-output-with-explanation">Example Output With Explanation</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#running-the-server">Running the Server</a></li>
        <li><a href="#usage">Usage</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![OVH-Expiration-Fetcher Screenshot][product-screenshot]

OVH Data Fetcher is a Node.js Express server designed to fetch the expiration information from a chosen VPS service from the OVH API. It provides an endpoint to retrieve the fetched data and also saves the data locally in a JSON format.


<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [NodeJS](https://nodejs.org/)
* [Express](https://www.npmjs.com/package/express)
* [OVH](https://www.npmjs.com/package/ovh)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- OUTPUT EXAMPLE -->
### Example Output With Explanation

![OVH-Expiration-Fetcher Preview][product-preview]

  - The fetched expiration date, which is June 1, 2024.
  - The local date and time when the data was fetched is April 17, 2024, at 04:21:57 AM.

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

To get the server up and running follow these simple steps.

### Prerequisites

- Node.js installed on your machine
- OVH API credentials in your environment variables (OVH_ENDPOINT, APP_KEY, APP_SECRET, CONSUMER_KEY)
- A VPS service name set in your environment variables

### Running The Server

1. Clone the repo  - ```git clone https://github.com/Arad119/OVH-Expiration-Fetcher.git```
2. Go into the directory and install NPM packages -  `npm install`
3. Set up environment variables by creating a `.env` file in the root directory and adding your OVH credentials and VPS service name 
```
OVH_ENDPOINT=your_ovh_endpoint
APP_KEY=your_app_key
APP_SECRET=your_app_secret
CONSUMER_KEY=your_consumer_key
VPS_NAME=your_vps_service_name
```
4. Run the server - `npm start`

### Usage

Once the server is running, you can access the OVH data by sending a GET request to the root endpoint (`/`). The server fetches the data from the OVH API when it starts and then at a regular interval (24 hours by default) to keep it updated.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Twitter [@Arad119](https://twitter.com/Arad119) - Email contact@arad119.com

Project Link: [https://github.com/Arad119/OVH-Expiration-Fetcher](https://github.com/Arad119/OVH-Expiration-Fetcher)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Arad119/OVH-Expiration-Fetcher.svg?style=for-the-badge
[contributors-url]: https://github.com/Arad119/OVH-Expiration-Fetcher/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Arad119/OVH-Expiration-Fetcher.svg?style=for-the-badge
[forks-url]: https://github.com/Arad119/OVH-Expiration-Fetcher/network/members
[stars-shield]: https://img.shields.io/github/stars/Arad119/OVH-Expiration-Fetcher.svg?style=for-the-badge
[stars-url]: https://github.com/Arad119/OVH-Expiration-Fetcher/stargazers
[issues-shield]: https://img.shields.io/github/issues/Arad119/OVH-Expiration-Fetcher.svg?style=for-the-badge
[issues-url]: https://github.com/Arad119/OVH-Expiration-Fetcher/issues
[license-shield]: https://img.shields.io/github/license/Arad119/Fragfinder-GUI.svg?style=for-the-badge
[license-url]: https://github.com/Arad119/Fragfinder-GUI/blob/master/LICENSE.txt
[product-screenshot]: images/Program.png
[product-preview]: images/Output.png
