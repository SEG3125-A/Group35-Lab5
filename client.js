const express = require('express');
const json = express.json;
const { SessionsClient } = require('@google-cloud/dialogflow');
const { v4 } = require('uuid');

const app = express();
app.use(json());

const projectId = "clientapp-418520"; // Replace with your Dialogflow project ID
const sessionId = v4();
const sessionClient = new SessionsClient({
    keyFilename: "C:\Users\Dahveed\Desktop\SEG3125\clientapp-418520-325bc79cfc21.json" // Path to your service account key file
});
const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);
// Add this to serve static files from 'public' directory (if you have a frontend there)
app.use(express.static('public'));

// Add a root route
app.get('/', (req, res) => {
    res.send('Hello, the server is running and can communicate with Dialogflow!');
});

app.post('/send-message', async (req, res) => {
    console.log('Received message:', req.body.message);
    const text = req.body.message;

    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text: text,
                languageCode: 'en-US',
            },
        },
    };

    try {
        const responses = await sessionClient.detectIntent(request);
        const result = responses[0].queryResult;
        res.json({ reply: result.fulfillmentText });
    } catch (error) {
        console.error('ERROR:', error);
        res.status(500).json({ error: 'Error processing your request' });
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
