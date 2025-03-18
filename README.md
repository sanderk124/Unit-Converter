# Node Unit Converter

This project is a simple Node.js application using [Express](https://expressjs.com/), [EJS](https://ejs.co/), and [body-parser](https://github.com/expressjs/body-parser) to convert between different length and weight units.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
  - [Length Conversion](#length-conversion)
  - [Weight Conversion](#weight-conversion)
- [Troubleshooting](#troubleshooting)
- [License](#license)

---

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14+ recommended)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

---

## Installation

1. **Clone the repository** (or download the .zip file):
   ```bash
   git clone <your-repo-url>
   ```
2. **Navigate into the project folder**:
   ```bash
   cd <project-folder>
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn
   ```

---

## Project Structure

A brief overview of the key files and directories:

```
.
├── index.ejs           # EJS template for rendering the UI
├── package.json        # Project metadata and scripts
├── README.md           # This readme file
└── server.js           # Main server file (as shown in the code sample)
```

- **server.js**: Contains the Express.js server setup, route definitions, and unit conversion logic.
- **index.ejs**: EJS template for rendering forms and displaying conversion results.

> **Note**: Make sure your `index.ejs` file is located in a folder named `views` or update the `res.render` paths accordingly in your server code (e.g., `res.render('index.ejs')` by default expects a `views` folder).  

---

## Usage

1. **Start the server**:
   ```bash
   npm start
   ```
   or
   ```bash
   node server.js
   ```
   After running this command, you should see a message like:
   ```
   server started on port 3000
   ```

2. **Open your browser** and navigate to:
   ```
   http://localhost:3000/length
   ```
   or
   ```
   http://localhost:3000/weight
   ```

### Length Conversion

- Go to `http://localhost:3000/length`.
- You will see a form allowing you to input:
  - **Length value** (e.g., 100)
  - **Convert from** (e.g., `m`, `cm`, `inch`, etc.)
  - **Convert to** (e.g., `km`, `ft`, etc.)
- After submitting the form, the result will be displayed on the page.

### Weight Conversion

- Go to `http://localhost:3000/weight`.
- You will see a similar form allowing you to input:
  - **Weight value** (e.g., 200)
  - **Convert from** (e.g., `kg`, `g`, `po`, etc.)
  - **Convert to** (e.g., `mg`, `on`, etc.)
- After submitting the form, the result will be displayed on the page.

---

## Troubleshooting

- **Port conflicts**: If port `3000` is already in use, you can either stop the conflicting service or change the port number in `server.js` to something else (e.g., `4000`).
- **Template not found**: Ensure `index.ejs` is correctly placed in a `views` directory or adjust the path in your render calls.
- **Install issues**: If you run into issues installing dependencies, make sure you’re using the correct version of Node.js and npm.

---

## License

This project is open source and available under the [MIT License](LICENSE). Feel free to modify and use it for your own projects!

---

**Happy converting!** If you have any questions or suggestions, feel free to open an issue or submit a pull request.

## project link roadmap.sh

project link roadmap.sh: https://roadmap.sh/projects/unit-converter