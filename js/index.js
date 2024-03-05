const films = [
    { name: 'film1', date: '29.02.24 18:00' },
    { name: 'film2', date: '12.03.24 17:00' },
    { name: 'film3', date: '15.04.24 15:00' },
]

const filmListContainer = document.getElementById('film-list');

function displayFilms() {
  films.forEach(film => {
    const filmItem = document.createElement('div');
    filmItem.innerHTML = `<strong>${film.name}</strong> - ${film.date}`;
    
    const buyButton = document.createElement('button');
    buyButton.textContent = 'Купити квиток';
    buyButton.addEventListener('click', () => handleBuyTicket(film));

    const returnButton = document.createElement('button');
    returnButton.textContent = 'Повернути квиток';
    returnButton.addEventListener('click', () => handleReturnTicket(film));

    filmItem.appendChild(buyButton);
    filmItem.appendChild(returnButton);
    
    filmListContainer.appendChild(filmItem);
  });
}

function handleBuyTicket(film) {
  const currentTime = new Date();
  const filmTime = new Date(film.date.replace(/(\d{2}).(\d{2}).(\d{2}) (\d{2}):(\d{2})/, '20$3-$2-$1T$4:$5'));
  
  if (currentTime < filmTime) {
    alert('Квиток успішно куплено!');
  } else {
    alert('Сеанс розпочато. Квиток неможливо придбати.');
  }
}

function handleReturnTicket(film) {
  const currentTime = new Date();
  const filmTime = new Date(film.date.replace(/(\d{2}).(\d{2}).(\d{2}) (\d{2}):(\d{2})/, '20$3-$2-$1T$4:$5'));
  const oneHourBeforeFilm = new Date(filmTime.getTime() - 60 * 60 * 1000);
  
  if (currentTime < oneHourBeforeFilm) {
    alert('Квиток успішно повернуто!');
  } else {
    alert('Занадто пізно повертати квиток.');
  }
}

// Display films on page load
displayFilms();