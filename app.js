
const form = document.getElementById('message-form');

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const messageInput = document.getElementById('message');
    const messageRecieved = document.getElementById('passed-message');

    messageRecieved.textContent = messageInput.value;
    messageInput.value = ''
})
