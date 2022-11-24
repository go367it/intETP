const socket = io("http://localhost:3000/")
const messageContainer = document.getElementById('message-container')
const inputText = document.getElementById('text-container')
const sendButton = document.getElementById('submit-button')

const name = prompt('what is your name?')
appendMessage('you Joined')
socket.emit('new', name)

socket.on('new-user', name=>{
    appendMessage(`${name} connected`)
})

socket.on('message-recieved', data=>{
    appendMessage(`${data.name}: ${data.message}`)
})


sendButton.addEventListener('click', (e)=>{
    console.log('clicked')
    e.preventDefault()
    appendMessage(`you: ${inputText.value}`)
    socket.emit('message', inputText.value)
    inputText.value=''
})

function appendMessage(message){
    const messageElement = document.createElement('div')
    messageElement.innerText = message
    messageContainer.append(messageElement)
}