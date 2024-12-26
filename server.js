const express = require('express');
const path = require('path');
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.delete('/api/delete/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const response = await axios.delete(`http://localhost:8080/producers/${id}`);

        if (response.status === 204) {
            res.status(204).send();
        } else {
            res.status(400).json({ error: `Failed to delete producer` });
        }
    } catch (error) {
        console.error('Error deleting producer:', error);
        res.status(500).json({ error: `Failed to delete producer` });
    }
});

app.post('/api/create', async (req, res) => {
    try {
        const producerData = req.body;

        const response = await axios.post('http://localhost:8080/producers', producerData);

        res.json(response.data);
    } catch (error) {
        console.error('Error posting data:', error);
        res.status(500).json({ error: 'Failed to send data to the external API' });
    }
});

app.get('/api/storeFront', async (req, res) => {
    try {
        const axios = require('axios');
        const response = await axios.get('http://localhost:8080/producers');
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching:', error);
        res.status(500).json({ error: 'Failed to fetch data from API' });
    }
});

app.use(express.static(path.join(__dirname)));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = 50005;

app.listen(PORT, () => {
    console.log('Server is running on port: ' + PORT);
});
