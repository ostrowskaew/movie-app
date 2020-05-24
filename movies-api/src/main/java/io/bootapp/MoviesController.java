package io.bootapp;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class MoviesController {
	
	@Autowired
	private MoviesService movieService;
	
	@Autowired
	private GeneresService genereService;
	
	
	@RequestMapping("/movies")
	public List<Movie> getAllMovies() {
		return movieService.getAllMovies();
	}
	
	@RequestMapping("/movies/{id}")
	public Movie getMovie(@PathVariable String id) {
		return movieService.getMovie(id);
	}
	
	@RequestMapping("/movies/bytitle/{term}")
	public List<Movie> getMovieByTitle(@PathVariable String term) {
		return movieService.getMovieByTitle(term);
	}
	
	
	@RequestMapping(method=RequestMethod.POST, value="/persons/{personId}/movies")
	public void addMovie(@RequestBody Movie movie, @PathVariable String personId) {
		movie.setDirector(new Person(personId,"",""));
		movieService.addMovie(movie);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="movies/{movieId}/genere/{genId}")
	public void addGenere(@PathVariable String movieId, @PathVariable String genId) {
		Movie mov = movieService.getMovie(movieId);
		Genere gen = genereService.getGenere(genId);
		mov.addGenere(gen);
		movieService.addMovie(mov);
	}
	
	
	@RequestMapping(method=RequestMethod.DELETE, value="/movies/{id}")
	public void deleteMovie(@PathVariable String id) {
		movieService.deleteMovie(id);
	}
}
