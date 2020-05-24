package io.bootapp;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonService {
	
	@Autowired
	private PersonRepository personRepository;
	
	public List<Person> getAllPersons(){
		List<Person> persons = new ArrayList<>();
		personRepository.findAll().forEach(persons::add);
		return persons;
	}
	
	public Person getPerson(String id) {
		Optional<Person> optPerson = personRepository.findById(id);
		if (optPerson.isPresent()){
		    Person pers = optPerson.get();
		    return pers;
		}
		else{
			return null;
		}
	}
	
	public void addPerson(Person person) {
		personRepository.save(person);
	}
	
	public void updatePerson(Person person, String id) {
		personRepository.save(person);
		
	}
	
	public void deletePerson(String id) {
		personRepository.deleteById(id);
	}
}
