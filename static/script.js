// ================= CHATBOT =================

document.addEventListener("DOMContentLoaded", function(){

const input = document.getElementById("chat-input");
const chatBody = document.getElementById("chat-body");

if(input){

input.addEventListener("keypress", function(e){

if(e.key === "Enter"){

let msg = input.value.toLowerCase().trim();

if(msg === "") return;

chatBody.innerHTML += `<div class="user-message">${msg}</div>`;

let reply = "Please contact WhatsApp for booking.";

if(msg.includes("price") || msg.includes("cost")){
reply = "Each session costs ₹499 and lasts 1 hour.";
}

else if(msg.includes("instructor")){
reply = "Instructor Mr. Niyad has 5+ years experience and has trained 100+ students.";
}

else if(msg.includes("address") || msg.includes("location")){
reply = "We operate from Vyttila, Kochi.";
}

else if(msg.includes("procedure")){
reply = "Share your location and the instructor will come to your home, conduct the session and drop you safely.";
}

else if(msg.includes("book")){
reply = "Please click the Book Now button or contact via WhatsApp.";
}

chatBody.innerHTML += `<div class="bot-message">${reply}</div>`;

input.value = "";

chatBody.scrollTop = chatBody.scrollHeight;

}

});

}


// ================= STATS COUNTER =================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

const target = +counter.getAttribute("data-target");
let count = 0;

const updateCounter = () => {

const increment = target / 100;

if(count < target){

count += increment;
counter.innerText = Math.ceil(count);

requestAnimationFrame(updateCounter);

}else{

counter.innerText = target;

}

};

updateCounter();

});
