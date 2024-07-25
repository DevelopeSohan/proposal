document.addEventListener('DOMContentLoaded', function() {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');
  
    noButton.addEventListener('click', function() {
      noButton.textContent = 'Yes';
      noButton.classList.add('yes');
      
      setTimeout(function() {
        alert('Congratulations! From now we are couples. ❤️');
      }, 100);
  
      noButton.disabled = true;
  
      yesButton.disabled = false;
    });
  
    yesButton.addEventListener('click', function() {
      alert('Congratulations! From now we are coupels. ❤️');
    });
  });
  