   // Array of background images (replace with your own images)
   const backgrounds = [
    'imgn/1.webp',
    'imgn/3.jpg',
    'imgn/4.jpg',
    'imgn/5.jpg',
    'imgn/6.jpg',
    'imgn/7.jpg'
  ];

  let currentIndex = 0;

  // Function to change background image
  function changeBackground() {
    // Fade out the current background by adding a class
    document.body.classList.add('fade');
    
    // Change the background image after the fade-out transition
    setTimeout(() => {
      document.body.style.backgroundImage = `url('${backgrounds[currentIndex]}')`;
      currentIndex = (currentIndex + 1) % backgrounds.length; // Loop back to the first image

      // Remove fade class after transition to make it ready for the next background
      document.body.classList.remove('fade');
    }, 2000); // Time for fade-out effect (same as the transition duration)
  }

  // Change background every 8 seconds
  setInterval(changeBackground, 8000);

  // Initially set the first background
  changeBackground('imgn/3.jpg');