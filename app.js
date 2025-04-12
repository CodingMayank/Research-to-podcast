const express = require('express');
const multer = require('multer');
const pdfParse = require('pdf-parse');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Memory storage (safe for deployment)
const upload = multer({ storage: multer.memoryStorage() });

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/upload', upload.single('pdf'), async (req, res) => {
  try {
    const data = await pdfParse(req.file.buffer);
    const text = data.text.slice(0, 3000); // truncate for API safety

    // Summarize via OpenRouter
    const summaryResponse = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: "mistralai/mistral-7b-instruct",
        messages: [
          { role: "system", content: "Summarize this research paper." },
          { role: "user", content: text }
        ]
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const summary = summaryResponse.data.choices[0].message.content;

    // Text-to-speech
    const tts = await axios.get('https://api.streamelements.com/kappa/v2/speech', {
      params: {
        voice: 'Brian',
        text: summary
      },
      responseType: 'arraybuffer'
    });

    const audioBase64 = Buffer.from(tts.data).toString('base64');

    res.render('result', {
      summary,
      audioBase64
    });

  } catch (error) {
    console.error('Error:', error);
    res.send('An error occurred while processing the PDF. Please try again.');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
