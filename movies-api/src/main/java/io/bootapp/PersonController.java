package io.bootapp;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PersonController {
	
	@Autowired
	private PersonService personService;
	
	@RequestMapping("/persons")
	public List<Person> getAllPersons() {
		return personService.getAllPersons();
	}
	
	@RequestMapping("/persons/{id}")
	public Person getPerson(@PathVariable String id) {
		return personService.getPerson(id);
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/persons")
	public void addPerson(@RequestBody Person person) {
		personService.addPerson(person);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/persons/{id}")
	public void updatePerson(@RequestBody Person person, @PathVariable String id) {
		personService.updatePerson(person, id);
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/persons/{id}")
	public void deletePerson(@PathVariable String id) {
		personService.deletePerson(id);
	}
}
