const toggleButton = document.getElementById('click');
    const menu = document.getElementById('menu');

    toggleButton.addEventListener('click', () => {
      menu.classList.toggle('max-md:hidden');
    });

    
      // Get the button
  var scrollBtn = document.getElementById("scrollBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
 