import './movie-item';

class MovieList extends HTMLElement {
  set movies(movies) {
    this._movies = movies;
    this.render();
  }

  renderError(message) {
    this.innerHTML = '';
    this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }

  render() {
    this.innerHTML = '';
    const movielist = document.querySelector('movie-list');
    movielist.classList.add('row', 'movie-container');
    this._movies.forEach((movie) => {
      const movieItemElement = document.createElement('movie-item');
      movieItemElement.classList.add('col-md-3', 'my-5');
      movieItemElement.movie = movie;

      this.appendChild(movieItemElement);
    });
  }
}

customElements.define('movie-list', MovieList);
