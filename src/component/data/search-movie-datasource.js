import axios from 'axios';

class SearchMoviesDataSource {
  static async getMovies(keyword) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=68f30be1474675a5b667a150350d0f5c`,
    );
    return response.data.results;
  }
}

export default SearchMoviesDataSource;
