/* =====================================================
   CHATBOT OPEN / CLOSE FUNCTION
   This function runs when the robot icon is clicked
===================================================== */

function toggleChat(){

const chat = document.getElementById("chatbot");

if(chat.style.display === "block"){
chat.style.display = "none";
}else{
chat.style.display = "block";
}

}


/* =====================================================
   WAIT UNTIL PAGE LOADS
   This ensures HTML elements exist before JS runs
===================================================== */

document.addEventListener("DOMContentLoaded", function(){

const input = document.getElementById("chat-input");
const chatBody = document.getElementById("chat-body");


/* =====================================================
   CHATBOT MESSAGE SYSTEM
   When user presses ENTER the bot responds
===================================================== */

if(input){

input.addEventListener("keypress", function(e){

if(e.key === "Enter"){

let msg = input.value.toLowerCase().trim();

if(msg === "") return;


/* ================= USER MESSAGE ================= */

chatBody.innerHTML += `<div class="user-message">${msg}</div>`;


/* ================= DEFAULT REPLY ================= */

let reply = `I'm here to help 🙂<br>
You can ask about:<br>
• Pricing<br>
• Instructor details<br>
• Address<br>
• Session duration<br>
• Booking`;


/* ================= GREETING ================= */

if(msg.includes("hi") || msg.includes("hello") || msg.includes("hey")){
reply = `👋 Welcome to <b>MasterDrive Kochi</b>.<br><br>

I can help you with:<br>

• Pricing<br>
• Instructor details<br>
• Session duration<br>
• Address<br>
• Session booking<br><br>

Just type your question 🙂`;
}


/* ================= PRICING ================= */

else if(msg.includes("price") || msg.includes("cost") || msg.includes("pricing")){
reply = `💰 <b>Pricing Details</b><br><br>

Each driving session costs:<br>

<b>₹499 per session</b><br><br>

Session duration:<br>
• 1 Hour professional driving training<br>
• One-on-one instructor guidance<br>
• Practical road experience`;
}


/* ================= SESSION TIME ================= */

else if(msg.includes("duration") || msg.includes("time") || msg.includes("session")){
reply = `⏱ <b>Session Duration</b><br><br>

Each training session lasts <b>1 hour</b>.<br><br>

During the session you will learn:<br>

• Basic driving techniques<br>
• Traffic awareness<br>
• Confidence building for beginners`;
}


/* ================= INSTRUCTOR ================= */

else if(msg.includes("instructor") || msg.includes("trainer") || msg.includes("teacher")){
reply = `👨‍🏫 <b>Instructor Details</b><br><br>

Our instructor is an experienced trainer based in <b>Vyttila, Kochi</b>.<br><br>

Students appreciate the instructor for:<br>

• Very patient teaching style<br>
• Clear step-by-step explanations<br>
• Helping beginners gain confidence quickly<br><br>

Many students feel comfortable driving within just a few sessions.`;
}


/* ================= ADDRESS ================= */

else if(msg.includes("address") || msg.includes("location") || msg.includes("where")){
reply = `📍 <b>Address</b><br><br>

MasterDrive Kochi<br>
Vyttila, Kochi<br><br>

Driving sessions are conducted in safe and beginner-friendly roads around the area.`;
}


/* ================= PROCEDURE ================= */

else if(msg.includes("procedure") || msg.includes("how")){
reply = `🚗 <b>Training Procedure</b><br><br>

• Share your location<br>
• Instructor arrives at your home<br>
• Conducts the driving session<br>
• Drops you safely after training`;
}


/* ================= BOOKING ================= */

else if(msg.includes("book") || msg.includes("slot") || msg.includes("appointment")){
reply = `📅 <b>Session Booking</b><br><br>

⚠️ Limited slots available.<br><br>

To reserve your session quickly:<br><br>

<a href="https://wa.me/917994065904" target="_blank" style="color:#ff2c78;font-weight:bold;">
Chat on WhatsApp
</a>`;
}


/* ================= BOT MESSAGE ================= */

chatBody.innerHTML += `<div class="bot-message">${reply}</div>`;


/* ================= CLEAR INPUT ================= */

input.value = "";


/* ================= AUTO SCROLL ================= */

chatBody.scrollTop = chatBody.scrollHeight;

}

});

}


/* =====================================================
   STATS COUNTER ANIMATION
   This animates numbers like 0 → 100
===================================================== */

/* =====================================================
   STATS COUNTER ANIMATION
   Animates numbers smoothly from 0 → target
===================================================== */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

const target = parseInt(counter.getAttribute("data-target"));
let current = 0;

const speed = 200;   // bigger = slower animation
const increment = target / speed;

function updateCounter(){

if(current < target){

current += increment;
counter.innerText = Math.ceil(current);

requestAnimationFrame(updateCounter);

}else{

counter.innerText = target;

}

}

updateCounter();

});

});
