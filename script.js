
document.addEventListener('DOMContentLoaded', function() {

    function isMobileDevice() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    
    function isNarrowScreen() {
        return window.innerWidth <= 794; 
    }
    
    function redirectToMobile() {
        if (isMobileDevice() || isNarrowScreen()) {
            window.location.href = 'mobile.html';
            return true;
        }
        return false;
    }

    if (redirectToMobile()) {
        return; 
    }
    

    window.addEventListener('resize', function() {
        if (redirectToMobile()) {
            return;
        }
    });

    const cursor = document.createElement('div');
    cursor.className = 'cursor-dot';
    document.body.appendChild(cursor);
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });


    const bigLogo = document.querySelector('.big-logo');
    const monkeySound = document.getElementById('monkey-sound');
    bigLogo.addEventListener('click', () => {
        bigLogo.classList.add('shake');
        monkeySound.currentTime = 0;
        monkeySound.play();
        setTimeout(() => bigLogo.classList.remove('shake'), 500);
    });


    const gallery = document.querySelector('.gallery');
    gallery.style.opacity = '0';
    gallery.style.transform = 'translateY(50px)';
    gallery.style.transition = 'all 0.8s ease';
    
    window.addEventListener('scroll', () => {
        const galleryTop = gallery.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (galleryTop < windowHeight * 0.8) {
            gallery.style.opacity = '1';
            gallery.style.transform = 'translateY(0)';
        } else {
            gallery.style.opacity = '0';
            gallery.style.transform = 'translateY(50px)';
        }
    });
});