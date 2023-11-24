# Comic Generator App

Welcome to the Comic Generator App! This app allows users to create and download comic strips with custom panels and titles.

## Live Link: https://comic-e.netlify.app/

## Overview

The Comic Generator App is a web application that enables users to generate comic strips by providing instructions for each panel. The generated comics are displayed in a grid, and users can download them as a PDF.

## Key Features:
- **Dynamic Comic Generation**: Users can dynamically provide instructions for each panel, and the app generates comic images accordingly.
- **PDF Download**: Users can download the generated comic strip as a PDF file.
- **Responsive Design**: The app is designed to work seamlessly on various devices, ensuring a great user experience.

## Snapshots:
![Screenshot 2023-11-24 192603](https://github.com/mrin247/Comic-App/assets/72962881/abfc2cce-c207-4a45-8743-1900c2d7e216)
![Screenshot 2023-11-23 002140](https://github.com/mrin247/Comic-App/assets/72962881/63d58221-e239-4ea8-bfc1-23afd88028cd)
![Screenshot 2023-11-23 000348](https://github.com/mrin247/Comic-App/assets/72962881/b91c056c-f9b2-4ce3-b97a-88f1917cbcc2)
![Screenshot 2023-11-23 000421](https://github.com/mrin247/Comic-App/assets/72962881/dfb82eba-52f4-470a-9f31-5234ee8577cb)
![Screenshot 2023-11-23 001817](https://github.com/mrin247/Comic-App/assets/72962881/52aa14b8-5c90-492f-9251-6150c3cf0755)

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

![Screenshot 2023-11-23 001954](https://github.com/mrin247/Comic-App/assets/72962881/dab619a5-38d7-4f05-8a83-721c5fb8ea9f)



