const bg = document.getElementById('swictbg');
const icon = document.getElementById('icon');
const htmlElement = document.documentElement;

bg.addEventListener('click', function() {
   const currentTheme = htmlElement.getAttribute('data-bs-theme');
   const newTheme = currentTheme === 'light' ? 'dark' : 'light';
   htmlElement.setAttribute('data-bs-theme', newTheme)
   if (newTheme === 'dark') {
      icon.className = 'bi bi-brightness-high'      
   } else
      icon.className = 'bi bi-moon-fill'
})
