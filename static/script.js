/* ================= CHAT BUTTON ================= */

.chat-button{
position:fixed;
bottom:20px;
right:20px;
background:#ff2a7f;
width:55px;
height:55px;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
font-size:24px;
cursor:pointer;
box-shadow:0 0 15px rgba(255,42,127,0.6);
z-index:1000;
}


/* ================= CHAT BOX ================= */

.chat-box{
position:fixed;
bottom:90px;
right:20px;
width:280px;
background:#0f0f0f;
border-radius:12px;
display:none;
overflow:hidden;
box-shadow:0 0 25px rgba(255,42,127,0.4);
z-index:1000;
}

.chat-header{
background:#ff2a7f;
padding:12px;
font-weight:bold;
text-align:center;
}

.chat-messages{
height:220px;
overflow-y:auto;
padding:10px;
font-size:14px;
}

.bot{
background:#1a1a1a;
padding:8px;
border-radius:6px;
margin-bottom:8px;
}

.user{
background:#ff2a7f;
padding:8px;
border-radius:6px;
margin-bottom:8px;
text-align:right;
}

#chatInput{
width:100%;
border:none;
outline:none;
padding:10px;
background:#111;
color:#fff;
}

.chat-footer{
text-align:center;
padding:10px;
background:#000;
}

.chat-footer a{
color:#ff2a7f;
text-decoration:none;
font-size:14px;
}
// ================= STATS COUNTER =================

document.addEventListener("DOMContentLoaded", () => {

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

});
