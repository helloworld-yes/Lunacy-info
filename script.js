function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  
  // Получаем все содержимое вкладок
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    tabcontent[i].classList.remove("active");
  }
  
  // Получаем все кнопки вкладок
  tablinks = document.getElementsByClassName("tab-button");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    tablinks[i].setAttribute("aria-selected", "false");
    tablinks[i].setAttribute("tabindex", "-1");
  }
  
  // Активируем выбранную вкладку
  document.getElementById(tabName).style.display = "block";
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.className += " active";
  evt.currentTarget.setAttribute("aria-selected", "true");
  evt.currentTarget.setAttribute("tabindex", "0");
  
  // Фокус на активную кнопку для доступности
  evt.currentTarget.focus();
}

// Функция для смены языка
function changeLanguage(event) {
  const lang = event.target.value;
  if (lang) {
    // Для translated страниц, редирект на Translate/index_[lang].html
    // Для main страницы, то же
    window.location.href = `Translate/index_${lang}.html`;
  }
}

// Загрузка языков при инициализации страницы
document.addEventListener('DOMContentLoaded', function() {
  const select = document.getElementById('language-select');
  if (select) {
    fetch('Translate/languages.json')
      .then(response => response.json())
      .then(data => {
        data.languages.forEach(lang => {
          const option = document.createElement('option');
          option.value = lang.code;
          option.textContent = lang.name;
          select.appendChild(option);
        });
      })
      .catch(error => {
        console.error('Error loading languages:', error);
      });
  }
  
  // Создание анимированных звезд
  createStars();
});

function createStars() {
  const starsContainer = document.createElement('div');
  starsContainer.className = 'stars';
  document.body.appendChild(starsContainer);
  
  for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.width = Math.random() * 3 + 1 + 'px';
    star.style.height = star.style.width;
    star.style.animationDelay = Math.random() * 20 + 's';
    star.style.animationDuration = (Math.random() * 10 + 10) + 's';
    starsContainer.appendChild(star);
  }
}