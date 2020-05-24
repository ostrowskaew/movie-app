package io.bootapp;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="Generes")
public class Genere {
	
	@Id
	@Column(name="genereId")
	private String id;
	
	@Column(name="genereName")
	private String name;
	
	@ManyToMany(mappedBy = "generes")
	private List<Movie> movies = new ArrayList<Movie>();
	
	
	public Genere() {}


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

	
	public Genere(String id, String name) {
		super();
		this.id = id;
		this.name = name;
	}


	public List<Movie> getMovies() {
		return movies;
	}


	
	@Override
	public String toString() {
		return  name;
	}
	
	
}
	