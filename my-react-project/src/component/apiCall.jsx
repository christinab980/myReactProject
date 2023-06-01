import React from 'react';

// API URLS with specific categories

//https://quizapi.io/api/v1/questions?apiKey=YOUR_API_KEY&category=sql&limit=10&tags=MySQL
//https://quizapi.io/api/v1/questions?apiKey=YOUR_API_KEY&category=linux&difficulty=Easy&limit=10&tags=Linux

//https://quizapi.io/api/v1/questions?apiKey=YOUR_API_KEY&category=code&difficulty=Easy&limit=10&tags=HTML
//https://quizapi.io/api/v1/questions?apiKey=YOUR_API_KEY&category=code&difficulty=Easy&limit=10&tags=JavaScript
//https://quizapi.io/api/v1/questions?apiKey=YOUR_API_KEY&category=code&difficulty=Easy&limit=10&tags=WordPress
//https://quizapi.io/api/v1/questions?apiKey=YOUR_API_KEY&category=code&difficulty=Easy&limit=10&tags=Docker
//https://quizapi.io/api/v1/questions?apiKey=YOUR_API_KEY&category=code&difficulty=Easy&limit=10&tags=PHP

//api documentation to start api call 

// curl https://quizapi.io/api/v1/questions -G \
// -d apiKey="w9Rvsy8CdKGevTtBTBwe0aGMiqhMO7sHiJx57y8Y" 
// -d category=Programming
// -d limit=10

const apiKey = "w9Rvsy8CdKGevTtBTBwe0aGMiqhMO7sHiJx57y8Y"

async function fetchCallforHTML() {
    const url = `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&category=code&difficulty=Easy&limit=10&tags=HTML`
    const response = await fetch(url);
    const data = await response.json()
    console.log(data)
}

fetchCallforHTML()