// Simple rule-based chatbot for MasterDrive Kochi

document.addEventListener("DOMContentLoaded", function(){

const chatBtn = document.createElement("div")
chatBtn.className = "chat-button"
chatBtn.innerHTML = "💬"
document.body.appendChild(chatBtn)

const chatBox = document.createElement("div")
chatBox.className = "chat-box"
chatBox.innerHTML = `
<div class="chat-header">MasterDriveKochiAI</div>
<div class="chat-messages" id="chatMessages">
<p class="bot">
Hi 👋 Welcome to MasterDriveKochi.<br>
I can help you with pricing, instructor details, address, session procedure and booking.
</p>
</div>

<input id="chatInput" placeholder="Ask something..." />
`
document.body.appendChild(chatBox)

chatBtn.onclick = () => {

chatBox.style.display =
chatBox.style.display === "block" ? "none" : "block"

}

const input = document.getElementById("chatInput")

input.addEventListener("keypress", function(e){

if(e.key === "Enter"){

let msg = input.value.toLowerCase()
let messages = document.getElementById("chatMessages")

messages.innerHTML += `<p class="user">${msg}</p>`

let reply = "Please contact WhatsApp for booking."

if(msg.includes("price") || msg.includes("cost"))
reply = "Each session costs ₹499 and lasts 1 hour."

if(msg.includes("instructor"))
reply = "Instructor Mr. Niyad has 5+ years experience and has trained 100+ students."

if(msg.includes("address") || msg.includes("location"))
reply = "We operate from Vyttila, Kochi."

if(msg.includes("procedure"))
reply = "Procedure: You share your location. Instructor Niyad will come to your home, conduct the driving session and drop you safely."

if(msg.includes("book"))
reply = "Click the WhatsApp booking button to schedule your session."

messages.innerHTML += `<p class="bot">${reply}</p>`

input.value = ""

messages.scrollTop = messages.scrollHeight

}

})

})
