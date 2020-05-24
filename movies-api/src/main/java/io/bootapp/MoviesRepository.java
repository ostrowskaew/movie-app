package io.bootapp;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface MoviesRepository extends CrudRepository<Movie, String> {

	public List<Movie> findByName(String name);
	
	public List<Movie> findByNameIgnoreCaseContaining(String name);

}
