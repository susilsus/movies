import React, { Component } from "react";
import { getMovies } from "../fakeMovieService";
import { getGenres } from "../fakeGenreService";
import ListGroup from "./ListGroup";
import Pagination from "./pagination";
import Paginate from "../ut/paginate";
class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
  };
  componentDidMount() {
    const movies = [...getMovies()];
    const genres = [{ name: "All Genres" }, ...getGenres()];
    this.setState({ movies });
    this.setState({ genres });
  }
  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };
  handleGenreSelected = (g) => {
    console.log(g);
    this.setState({ slectedItem: g, currentPage: 1 });
  };
  handlePage = (page) => {
    this.setState({ currentPage: page });
  };
  render() {
    const {
      movies: allmovies,
      genres,
      slectedItem,
      pageSize,
      currentPage,
    } = this.state;
    const filteredmovies =
      slectedItem && slectedItem._id
        ? allmovies.filter((l) => l.genre._id === slectedItem._id)
        : allmovies;
    const movies = Paginate(filteredmovies, currentPage, pageSize);

    const { length: count } = filteredmovies;
    if (count === 0) return <p>There are no movies</p>;
    return (
      <div className="row">
        <div className="col-2"></div>
        <div className="col-2">
          <ListGroup
            lists={genres}
            onItemSelected={this.handleGenreSelected}
            slectedItem={slectedItem}
          />
        </div>
        <div className="col">
          <p>There are {count} movies</p>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>numberInStock</th>
                <th>dailyRentalPrice</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {movies.map((m) => (
                <tr key={m._id}>
                  <td>{m.title}</td>
                  <td>{m.genre.name}</td>
                  <td>{m.numberInStock}</td>
                  <td>{m.dailyRentalRate}</td>
                  <td>
                    <button
                      className="btn btn-danger bt-sm"
                      onClick={() => this.handleDelete(m)}
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageSelect={this.handlePage}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
