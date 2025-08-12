// document.getElementById('welcome-btn').addEventListener('click', function(){
//     alert('Welcome to my site!');
// });

// 
// document.getElementById('welcome-btn').addEventListener('click', function () {
//     document.getElementById('message').textContent = "You just clicked the magic button!";
// });


document.getElementById('welcome-btn').addEventListener('click', function () {
    const msg =  document.getElementById('message');
    msg.textContent = "You just clicked the magic button!";
    msg.style.opacity = 0;
    setTimeout(() => {
        msg.style.transition = 'opacity 0.5s';
        msg.style.opacity = 1;
    }, 50);
});
