package io.bootapp;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;


@Entity
@Table(name="Persons")
public class Person {
	
	@Id
	@Column(name="personId")
	private String id;
	
	@Column(name="personName")
	private String name;
	
	@Column(name="personSurname")
	private String surname;

	@OneToMany(mappedBy = "director")
	private final List<Movie> movies = new ArrayList<>();
	
	public Person() {
		
	}
	
	
	public Person(String id, String name, String surname) {
		super();
		this.id = id;
		this.name = name;
		this.surname = surname;
	}


	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSurname() {
		return surname;
	}
	public void setSurname(String surname) {
		this.surname = surname;
	}


	public List<Movie> getMovies() {
		return movies;
	}
}