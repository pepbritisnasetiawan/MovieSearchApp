import 'regenerator-runtime';
import '../scss/styles.scss';
import * as bootstrap from 'bootstrap';

import '../component/script/app-bar';
import '../component/script/carousel';
import '../component/script/search-bar';
import '../component/script/movie-list';

import PopularDataSource from '../component/data/popular-datasource';
import SearchMoviesDataSource from '../component/data/search-movie-datasource';
import DetailMoviesDataSource from '../component/data/detail-movies-datasource';

const main = () => {
  const movieListElement = document.querySelector('movie-list');
  const searchButton = document.querySelector('search-bar');

  // show Carousel
  window.onload = () => {
    PopularDataSource.getPopularMovies();
  };

  const updateUI = (results) => {
    movieListElement.movies = results;
  };

  // search movie
  searchButton.addEventListener('click', async () => {
    const movies = await SearchMoviesDataSource.getMovies(searchButton.value);
    updateUI(movies);
  });

  const showMovieDetail = (m) => `
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-3">
            <img
              src="https://image.tmdb.org/t/p/w500/${m.poster_path}"
              alt=""
              class="img-fluid"
            />
          </div>
          <div class="col-md">
            <ul class="list-group">
              <li class="list-group-item">
                <h4>
                  ${m.title} (${m.release_date})
                </h4>
              </li>
              <li class="list-group-item">
                <strong>
                  Popularity: <strong>${m.popularity}</strong>
                </strong>
              </li>
              <li class="list-group-item">
                <strong>
                  Vote: <strong>${m.vote_average}</strong>
                </strong>
              </li>
              <li class="list-group-item">
                <strong>
                  Overview: <strong>${m.overview}</strong>
                </strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    `;

  // show modal when details button clicked
  const updateUIDetail = (m) => {
    const movieDetail = showMovieDetail(m);
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = movieDetail;
  };

  // show modal, event binding
  document.addEventListener('click', async (e) => {
    if (e.target.classList.contains('modal-detail-button')) {
      const { tmdbid } = e.target.dataset;
      const movieDetail = await DetailMoviesDataSource.getMoviesDetail(tmdbid);
      updateUIDetail(movieDetail);
    }
  });
};

export default main;
