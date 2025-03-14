function addButtonToVideo() {
    const videoControls = document.querySelector(".ytp-right-controls"); // Get the right-side controls

    if (!videoControls) {
        console.log("Waiting for video player...");
        setTimeout(addButtonToVideo, 1000);
        return;
    }

    // Remove any existing button to prevent duplicates
    if (document.getElementById("quiz-button")) return;

    // Create the button
    const button = document.createElement("button");
    button.id = "quiz-button";
    button.innerText = "📋 Quiz";
    button.style.background = "rgba(255, 0, 0, 0.8)";
    button.style.color = "white";
    button.style.border = "none";
    button.style.padding = "3px 8px";
    button.style.fontSize = "16px";
    button.style.cursor = "pointer";
    button.style.borderRadius = "5px";
    button.style.position = "absolute";
    button.style.top = "-40px"; // Moves the button **up**
    button.style.right = "10px"; // Aligns to the right
    button.style.zIndex = "1000";
    button.style.fontWeight = "bold";

    // Make sure the container is positioned correctly for absolute positioning
    videoControls.style.position = "relative";
    
    // Add button to the player
    videoControls.appendChild(button);

    // Button click event
    button.addEventListener("click", () => {
        console.log("Quiz button clicked!");
    });

    console.log("Quiz button added to video!");
}

// Run function
addButtonToVideo();


function getVideoDetails() {
    const titleElement = document.querySelector("h1.title yt-formatted-string");
    const descriptionElement = document.querySelector("#description yt-formatted-string");

    if (!titleElement || !descriptionElement) {
        console.log("Waiting for video details...");
        setTimeout(getVideoDetails, 1000);
        return;
    }

    const videoTitle = titleElement.innerText;
    const videoDescription = descriptionElement.innerText;

    console.log("Video Title:", videoTitle);
    console.log("Video Description:", videoDescription);

    return { title: videoTitle, description: videoDescription };
}

// Call the function when the button is clicked
button.addEventListener("click", () => {
    const videoData = getVideoDetails();
    if (videoData) {
        console.log("Sending video data:", videoData);
    }
});

