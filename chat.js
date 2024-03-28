function toggleChatbox() {
    var chatbox = document.getElementById('chatbox');
    if (chatbox.style.display === 'none') {
        chatbox.style.display = 'block';
    } else {
        chatbox.style.display = 'none';
    }
}

function sendMessage() {
    var inputField = document.getElementById('chatbox-input');
    var message = inputField.value;
    inputField.value = ''; // Clear the input field

    // Display the user's message in the chatbox
    var chatBody = document.getElementById('chatbox-body');
    var userMessageDiv = document.createElement('div');
    userMessageDiv.textContent = 'You: ' + message;
    chatBody.appendChild(userMessageDiv);

    // Send the message to your server
    fetch('/send-message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: message }),
    })
    .then(response => response.json())
    .then(data => {
        // Display Dialogflow's response in the chatbox
        var replyMessageDiv = document.createElement('div');
        replyMessageDiv.textContent = 'Bot: ' + data.reply;
        chatBody.appendChild(replyMessageDiv);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
