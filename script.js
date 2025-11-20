    // Starfield animation
    const canvas = document.getElementById('stars');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const stars = [];
    for (let i = 0; i < 100; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        speed: Math.random() * 0.5
      });
    }
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#fff';
        ctx.fill();
        star.y += star.speed;
        if (star.y > canvas.height) star.y = 0;
      });
      requestAnimationFrame(animate);
    }
    animate();

    // Typing effect
    const roles = ['Aspiring Developer', 'Tech Enthusiast', 'Cybersecurity Learner'];
    const descriptions = ['Passionate about coding and ethical hacking.', 'Building innovative solutions.', 'Exploring the digital world.'];
    let roleIndex = 0;
    let descIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    function typeWriter() {
      const currentRole = roles[roleIndex];
      const currentDesc = descriptions[descIndex];
      const roleElement = document.getElementById('typing-role');
      const descElement = document.getElementById('typing-desc');
      if (!isDeleting) {
        roleElement.innerHTML = currentRole.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentRole.length) {
          isDeleting = true;
          setTimeout(typeWriter, 2000);
          return;
        }
      } else {
        roleElement.innerHTML = currentRole.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          descIndex = (descIndex + 1) % descriptions.length;
        }
      }
      setTimeout(typeWriter, isDeleting ? 100 : 200);
    }
    typeWriter();

    // Menu toggle with animation
    function toggleMenu() {
      const hamburgerBtn = document.getElementById('hamburgerBtn');
      const nav = document.getElementById('navMenu');
      const toggle = document.querySelector('.menu-toggle');
      nav.classList.toggle('show');
      toggle.classList.toggle('active');
    }

   hamburgerBtn.addEventListener('click', () => {
      navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
      });
        
    // Music toggle
    function toggleMusic() {
      const audio = document.getElementById('bgMusic');
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    }

    // Smooth scrolling for nav links
    document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
          behavior: 'smooth'
        });
        // Close menu on mobile after click
        const nav = document.getElementById('navMenu');
        const toggle = document.querySelector('.menu-toggle');
        if (nav.classList.contains('show')) {
          nav.classList.remove('show');
          toggle.classList.remove('active');
        }
      });
    });