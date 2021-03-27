const functions = require("firebase-functions");
const express = require("express")
const cors = require("cors");
const stripe = require("stripe")('sk_test_51IZUf4K7jcDuKVnZt1aCDwxE1HporKgVAyXEvEbMk0Ep7GxN7TjDI9XWsUZ1jTh2N3bFqM8AUKCFrWsPvQbL2zXE00g8Y9DlKS')

// API 

// - App config
const app = express()

// - Middlewares
app.use(cors({origin: true}))
app.use(express.json())

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'))
app.post('/payments/create', async (request, response) => {
    const total = request.query.total
    console.log('Payment request received >>> ', total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'aud',
    })
    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

// - Listen command
exports.api = functions.https.onRequest(app)

//example endpoint 
// http://localhost:5001/clone-8406c/us-central1/api