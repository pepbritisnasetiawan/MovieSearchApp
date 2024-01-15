import axios from 'axios';

class PopularDataSource {
  static getPopularMovies() {
    return axios
      .get(
        'https://api.themoviedb.org/3/movie/popular?api_key=68f30be1474675a5b667a150350d0f5c',
      )
      .then((response) => {
        const dataResult = response.data.results;
        const carouselInner = document.getElementById('carousel-inner');

        dataResult.forEach((item, index) => {
          const div = document.createElement('div');
          div.className = 'carousel-item';
          if (index === 0) {
            div.classList.add('active');
          }
          div.innerHTML = `<img src="https://image.tmdb.org/t/p/w500/${item.poster_path}" class="d-block w-100" alt="...">
                          <div class="carousel-caption d-none d-md-block">
                            <h3>${item.title}</h3>
                            <p>${item.overview}</p>
                          </div>`;

          carouselInner.appendChild(div);
        });
      })
      .catch((error) => console.error('Error:', error));
  }
}

export default PopularDataSource;
