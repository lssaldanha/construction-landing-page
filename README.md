# NovaObra — Construction & Renovation Landing Page

Responsive landing page developed as a portfolio project for a fictional construction and renovation company.

The project focuses on presenting services clearly, guiding potential clients through the quotation process and providing an interactive quote request experience.

## Overview

NovaObra was created to simulate a real website for a small construction and renovation business.

The main goal is to transform a visitor into a structured quote request through a simple and responsive interface.

The current version represents the first functional version of the project.

## Features

- Responsive layout for desktop, tablet and mobile
- Modern hero section with clear call-to-action buttons
- Construction and renovation services section
- Step-by-step explanation of the quotation process
- Demonstrative project gallery
- Interactive quotation form
- Dynamic guidance based on the selected service
- Form validation using native HTML attributes
- JavaScript form handling
- Automatic form reset after submission
- Contextual success message
- WhatsApp message generation
- Demonstration mode when no WhatsApp number is configured
- Smooth scrolling navigation

## Technologies

- HTML5
- CSS3
- JavaScript
- CSS Grid
- Flexbox
- Font Awesome

## Interactive Quote Form

The quotation form provides different instructions depending on the service selected by the user.

Examples include:

- Construction
- Renovation
- Painting
- Electrical work
- Plumbing
- Repairs

JavaScript is used to update the interface dynamically and prepare a structured WhatsApp message containing the information entered by the user.

## WhatsApp Integration

The project includes the logic required to generate a WhatsApp message containing:

- Name
- Location
- Selected service
- Service description

For privacy reasons, no real WhatsApp number is included in the public repository.

When no number is configured, the website operates in demonstration mode.

A real business implementation can configure a commercial WhatsApp number in the JavaScript file.

## Project Structure

```text
construction-landing-page/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
    ├── hero-construcao.jpg
    ├── projeto-casa-banho.jpg
    ├── projeto-sala.jpg
    └── projeto-quarto.jpg
```

## Responsive Design

The interface adapts to different screen sizes using CSS media queries.

The layout changes between:

- Desktop
- Tablet
- Mobile

Cards, navigation, hero content and project sections reorganize according to the available screen width.

## Project Status

### Version 1

The first version includes:

- Complete landing page
- Responsive design
- Interactive quote form
- Dynamic service guidance
- WhatsApp message preparation
- Demonstration submission flow

Further improvements will be developed in future versions.

## Disclaimer

NovaObra is a fictional company created exclusively for educational and portfolio purposes.

The projects, company information and quotation flow shown on the website are demonstrative.

The form does not currently send or store information on a server.

## Author

**Lucas Saldanha**

Full Stack Developer in training.

GitHub: `lssaldanha`
