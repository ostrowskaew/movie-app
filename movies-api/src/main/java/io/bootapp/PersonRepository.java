package io.bootapp;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface PersonRepository extends CrudRepository<Person, String> {

	public List<Person> findByName(String name);

}
