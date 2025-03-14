chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "generateQuiz") {
        console.log("📤 Sending request to GPT API...");
        
        // Replace with your actual API endpoint and key
        const API_URL = "https://api.openai.com/v1/completions";
        const API_KEY = "your_openai_api_key"; 

        fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [
                    { role: "system", content: "Generate 3 quiz questions based on the given YouTube video title and description." },
                    { role: "user", content: `Title: ${request.title}\nDescription: ${request.description}` }
                ],
                max_tokens: 150
            })
        })
        .then(response => response.json())
        .then(data => {
            const questions = data.choices[0]?.message?.content || "No questions generated.";
            console.log("✅ Quiz Questions:", questions);
            sendResponse({ questions });
        })
        .catch(error => {
            console.error("❌ Error fetching GPT API:", error);
            sendResponse({ questions: "Error fetching quiz questions." });
        });

        return true; // Keeps the response channel open
    }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("📥 Received message in background.js:", request);
    sendResponse({ message: "Background script is running!" });
});

