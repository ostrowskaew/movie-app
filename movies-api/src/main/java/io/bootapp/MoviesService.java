package io.bootapp;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MoviesService {
	
	@Autowired
	private MoviesRepository movieRepository;
	
	public List<Movie> getAllMovies(){
		List<Movie> movies = new ArrayList<>();
		movieRepository.findAll().forEach(movies::add);
		return movies;
	}
	
	public Movie getMovie(String id) {
		Optional<Movie> mov = movieRepository.findById(id);
		if (mov.isPresent()){
		    Movie movie = mov.get();
		    return movie;
		}
		else{
			return null;
		}
		   
	}
	
	public List<Movie> getMovieByTitle(String title) {
		return movieRepository.findByNameIgnoreCaseContaining(title);
	}
	
	
	public void addMovie(Movie movie) {
		movieRepository.save(movie);
	}
	
	
	
	public void deleteMovie(String id) {
		movieRepository.deleteById(id);
	}
	
	
}
