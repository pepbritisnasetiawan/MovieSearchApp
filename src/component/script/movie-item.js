class MovieItem extends HTMLElement {
  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="card h-100 shadow">
        <img
          src="https://image.tmdb.org/t/p/w500/${this._movie.poster_path}"
          class="card-img-top"
        />
        <div class="card-body">
          <h5 class="card-title">${this._movie.title}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">
            ${this._movie.release_date}
          </h6>
          <button
            type="button"
            class="btn btn-primary modal-detail-button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-tmdbid="${this._movie.id}"
          >
            Details
          </button>
        </div>
      </div>
    `;
  }
}

customElements.define('movie-item', MovieItem);
