# Comic Generator App

Welcome to the Comic Generator App! This app allows users to create and download comic strips with custom panels and titles.

## Live Link: https://comic-e.netlify.app/

## Overview

The Comic Generator App is a web application that enables users to generate comic strips by providing instructions for each panel. The generated comics are displayed in a 5x2 grid, and users can download them as a PDF.

## Key Features:
- **Dynamic Comic Generation**: Users can dynamically provide instructions for each panel, and the app generates comic images accordingly.
- **PDF Download**: Users can download the generated comic strip as a PDF file.
- **Responsive Design**: The app is designed to work seamlessly on various devices, ensuring a great user experience.

## Snapshots:
![image](https://github.com/mrin247/Comic-App/assets/72962881/75589508-9750-4f73-9c98-91229438bde3)
![image](https://github.com/mrin247/Comic-App/assets/72962881/61587de5-d69d-4bdd-b152-bfa610ceb79c)
![image](https://github.com/mrin247/Comic-App/assets/72962881/0f039b9e-54dc-434a-b8d2-6785d79b6da3)
![image](https://github.com/mrin247/Comic-App/assets/72962881/8a9b999d-696d-4b7d-9265-351ca71edf3f)
![image](https://github.com/mrin247/Comic-App/assets/72962881/1053c173-3fa8-4695-96db-629c12070991)





## Folder Structure

The project follows a standard React folder structure:

```plaintext
.
├── public
├── src
│   ├── components
|   |   |── CoicForm
|   |   |── CoicPanel
|   |   |── CoicStrip
|   |   |── Layout
|   |   |── Footer
│   ├── pages
|   |   |── homePage
|   |   |── generatePage
│   ├── api.js
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## Input Format

```plaintext
Panel 1 instructions...
Panel 2 instructions...
...
Panel 10 instructions...
```

## API

```bash
curl -X POST \
  https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud \
  -H 'Accept: image/png' \
  -H 'Authorization: Bearer YOUR_API_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
    "inputs": "Panel 1 instructions..."
  }'
```

## Features that can be added:
- Authentication
- Community sharing
- Multiple page pdf
- Random generated instructions

  ## Now Let's create a comic:
  Instructions:
  1. Begin in a Peaceful Village
  2. Discover a Mysterious Old Book
  3. Transport to a Magical World
  4. Meet a Wise Talking Plant
  5. Embark on a Quest for the Crystal of Radiance
  6. Encounter Dancing Robots
  7. Befriend Friendly Aliens
  8. Time-Traveling Scientist's Involvement
  9. Superhero Pancakes Come to Life
  10. Final Showdown and Return Home


Generated PDF:

![image](https://github.com/mrin247/Comic-App/assets/72962881/327979c2-fd2a-4463-9595-28cd58cd6559)


