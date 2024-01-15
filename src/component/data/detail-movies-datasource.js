import axios from 'axios';

class DetailMoviesDataSource {
  static async getMoviesDetail(tmdbid) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${tmdbid}?api_key=68f30be1474675a5b667a150350d0f5c`,
    );
    return response.data;
  }
}

export default DetailMoviesDataSource;
