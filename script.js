const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true, 
    autoplay: {
        delay: 3000, 
        disableOnInteraction: false, 
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const emailInput = document.getElementById('newsletter1');
    const email = emailInput.value;

    if (email === '') {
        alert('Please enter a valid email address.');
        return;
    }

   
    alert(`Subscribed successfully with email: ${email}`);

    
    emailInput.value = '';
});

 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
