document.getElementById('welcome-btn').addEventListener('click', function() {
    alert('Welcome to my site!');
});

document.getElementById('welcome-btn').addEventListener('click', function(){
    document.getElementById('message').textContent = "You just clicked the magic button!";
});