document.addEventListener('DOMContentLoaded', () => {
    const chatArea = document.getElementById('chat-area');
    const addMessagePrompt = document.getElementById('add-message-prompt');
    const messageModal = document.getElementById('message-modal');
    const messageInput = document.getElementById('message-input');
    const saveMessageButton = document.getElementById('save-message-button');
    const cancelButton = document.getElementById('cancel-button');
    const senderDropdown = document.getElementById('sender-dropdown'); // Get the new dropdown element

    // Clear previous messages if any for a clean slate
    chatArea.innerHTML = '';

    addMessagePrompt.addEventListener('click', () => {
        messageInput.value = ''; // Clear previous input
        senderDropdown.value = 'אני - אבא ישי'; // Set default selected sender
        messageModal.classList.add('visible');
    });

    saveMessageButton.addEventListener('click', () => {
        const messageText = messageInput.value.trim();
        const selectedSender = senderDropdown.value; // Get value from dropdown

        if (messageText) {
            const messageContainer = document.createElement('div');
            messageContainer.classList.add('message-container');

            // Determine sender class based on selected sender
            if (selectedSender === "אני - אבא ישי") { // Assuming "אני - אבא ישי" is "me"
                messageContainer.classList.add('me'); 
            } else {
                messageContainer.classList.add('other'); // All other senders are "other"
            }

            const senderNameElement = document.createElement('div');
            senderNameElement.classList.add('sender-name');
            senderNameElement.textContent = selectedSender;
            messageContainer.appendChild(senderNameElement);

            const messageElement = document.createElement('div');
            messageElement.classList.add('message');
            // Add sender class to message element for specific bubble styling
            if (selectedSender === "אני - אבא ישי") {
                messageElement.classList.add('me');
            } else {
                messageElement.classList.add('other');
            }
            messageElement.textContent = messageText;
            messageContainer.appendChild(messageElement);

            chatArea.appendChild(messageContainer);
            chatArea.scrollTop = chatArea.scrollHeight; // Scroll to bottom

            // Add 'visible' class after a short delay for animation
            setTimeout(() => {
                messageContainer.classList.add('visible');
            }, 50);
        }
        messageModal.classList.remove('visible');
    });

    cancelButton.addEventListener('click', () => {
        messageModal.classList.remove('visible');
    });

    let messages = [
        // All previous anonymous messages have been removed
    ];

    // The automatic message rendering function is no longer needed since there are no initial messages
    // and the prompt implies only adding messages dynamically.
});
