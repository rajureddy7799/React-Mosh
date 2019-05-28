import React from 'react';
import Like from '../components/common/like';
import Pagination from '../../src/components/common/pagination';
import {getMovies} from '../services/fakeMovieService';
import {paginate} from '../utils/paginate';

class Movies extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: getMovies(),
            pageSize: 3,
            currentPage: 1
        }
    }

    handleDeleteMovie = movie => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
       // console.log(movie.genre);
       // console.log(movie);
        this.setState({movies: movies});
    }

    handleLikeClick = movie => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...this.state.movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({movies});
    }

    handlePageChange = (page) => {
        this.setState({currentPage: page});
    }

    

    render(){

        const {length:count} = this.state.movies;
        let {currentPage, pageSize, movies: allMovies} = this.state;

        const movies =  paginate(allMovies, currentPage, pageSize);

        if(count === 0){
            return <h1>There are no movies to show form database</h1>
        }
        return (
            <React.Fragment>
                <h3>showing Available {count} Movies </h3>
                <table className="table  table-hover">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genere</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                   <tbody>
                       {movies.map(movie => (
                        <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td>
                                <Like liked={movie.liked} onLikeClick ={() => this.handleLikeClick(movie)}/>
                            </td>
                            <td> 
                                <button onClick={()=>{
                                    this.handleDeleteMovie(movie)
                                }} className='btn btn-danger btn-sm rounded' > Delete</button>
                            </td>
                        </tr>
                       ))}
                   </tbody>
                </table>

                <Pagination 
                itemsCount={count} 
                currentPage={currentPage}
                pageSize={pageSize}
                onPageChange={this.handlePageChange}
                />
            </React.Fragment>
        )
    }
}
 export default Movies;