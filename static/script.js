// MasterDrive Kochi Rule-Based Chatbot

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
Hi 👋 Welcome to <b>MasterDrive Kochi</b>.<br>
I can help you with:<br>
• pricing<br>
• instructor details<br>
• address<br>
• session procedure<br>
• booking
</p>

</div>

<input id="chatInput" placeholder="Ask something..." />

<div class="chat-footer">
<a href="https://wa.me/917994065904" target="_blank">
Book on WhatsApp
</a>
</div>
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

let reply = "Please contact us on WhatsApp for detailed assistance."

if(msg.includes("price") || msg.includes("cost") || msg.includes("fee")){
reply = "Each session costs ₹499 and the duration is 1 hour."
}

else if(msg.includes("instructor") || msg.includes("teacher")){
reply = "Your instructor is <b>Mr. Niyad</b>. He has 5+ years experience and has trained 100+ drivers successfully."
}

else if(msg.includes("address") || msg.includes("location") || msg.includes("where")){
reply = "We operate in <b>Vyttila, Kochi</b> and nearby areas including Kakkanad, Aluva and Edappally."
}

else if(msg.includes("procedure") || msg.includes("session") || msg.includes("how")){
reply = "Procedure: Share your home location. Instructor Niyad will come to your location, conduct the driving session and drop you back safely."
}

else if(msg.includes("book") || msg.includes("booking")){
reply = "To book a session, click the WhatsApp button below."
}

messages.innerHTML += `<p class="bot">${reply}</p>`

input.value = ""

messages.scrollTop = messages.scrollHeight

}

})

})
