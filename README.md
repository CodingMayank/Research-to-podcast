# Research-to-Podcast

A web application that allows users to upload research papers in PDF format, summarizes the content, and generates an audio summary for easy listening.

## Features

- **PDF Upload**: Upload research papers in PDF format.
- **Text Summarization**: Automatically summarizes the content of the uploaded PDF using OpenRouter's AI model.
- **Audio Generation**: Converts the summary into an audio file using a text-to-speech API.
- **User-Friendly Interface**: Built with TailwindCSS for a clean and responsive design.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: EJS templates, TailwindCSS
- **APIs**:
  - OpenRouter for text summarization
  - StreamElements for text-to-speech conversion
- **File Handling**: Multer for file uploads
- **PDF Parsing**: pdf-parse library
- **Environment Management**: dotenv

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/CodingMayank/research-to-podcast.git
   cd research-to-podcast
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following:

   ```env
   OPENROUTER_API_KEY=your_openrouter_api_key
   ```

   Replace `your_openrouter_api_key` with your actual OpenRouter API key.

4. Ensure the `.gitignore` file includes the `.env` file to keep your API key secure:

   ```plaintext
   .env
   node_modules
   ```

## Usage

1. Start the development server:

   ```bash
   npm run dev
   ```

   This will start the server with `nodemon` for live reloading.

2. Open your browser and navigate to:

   ```
   http://localhost:3000
   ```

3. Upload a PDF file, and the application will generate a summary and an audio file.

## Deployment

For production, use the following command to start the server:

```bash
npm start
```

You can deploy this application to platforms like [Heroku](https://www.heroku.com/), [Vercel](https://vercel.com/), or [Render](https://render.com/).

## File Structure

```
.
├── .env                # Environment variables
├── .gitignore          # Ignored files
├── app.js              # Main application logic
├── package.json        # Project metadata and dependencies
├── public/             # Static files (CSS, JS, images)
├── views/              # EJS templates
│   ├── index.ejs       # Upload page
│   └── result.ejs      # Summary and audio result page
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgments

- [OpenRouter](https://openrouter.ai/) for text summarization
- [StreamElements](https://streamelements.com/) for text-to-speech API
- [TailwindCSS](https://tailwindcss.com/) for styling