package io.bootapp;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface GeneresRepository extends CrudRepository<Genere, String> {

	public List<Genere> findByName(String name);

}
