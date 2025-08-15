// document.getElementById('welcome-btn').addEventListener('click', function(){
//     alert('Welcome to my site!');
// });

// 
// document.getElementById('welcome-btn').addEventListener('click', function () {
//     document.getElementById('message').textContent = "You just clicked the magic button!";
// });


document.getElementById('welcome-btn').addEventListener('click', function () {
    const msg = document.getElementById('message');
    msg.textContent = "You just clicked the magic button!";
    msg.style.opacity = 0;
    setTimeout(() => {
        msg.style.transition = 'opacity 0.5s';
        msg.style.opacity = 1;
    }, 50);
});

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('messagBox').value.trim();
    const status = document.getElementById('formStatus');

    if (name && email && message) {
        status.style.color = 'green';
        status.textContent = `Thank you, ${name}! Your message has been sent.`;
        this.reset();
    } else {
        status.style.color = 'red';
        status.textContent = 'Please fill out all fields.'
    }
});

document.getElementById('welcome-btn').addEventListener('click', function () {
    const msg = document.getElementById('message');
    msg.textContent = "You just clickedthe magic button!";
    msg.style.opacity = 0;
    setTimeout(() => msg.style.opacity = 1, 10);

});

document.getElementById("topBtn").onclick =() => window.scrollTo({top: 0, behaviour: 'smooth'});

// show or hide the button on scroll
window.addEventListener('scroll', function() {
    const topBtn =this.document.getElementById('topBtn');
    if (this.window.scrollY >300) {
        topBtn.classlist.add('show');
    } else {
        topBtn.classList.remove('show');
    }
});

// smoth scroll to top
document.getElementById('topBtn').addEventListener('click', function() {
    window.scrollTo({top: 0, behaviour: 'smoth'});
});