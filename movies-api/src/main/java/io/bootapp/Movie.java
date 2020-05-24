package io.bootapp;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@Table(name="Movies")
public class Movie {
	
	@Id
	@Column(name="movieId")
	private String id;
	
	@Column(name="movieName")
	private String name;
	
	private Number premiere;
	
	private Number duration;
	
	private String imageURL;
	
	private String country;
	
	@ManyToOne
	@JsonIgnoreProperties("movies")
	private Person director;
	
	@JsonIgnoreProperties("movies")
	@ManyToMany
	private List<Genere> generes = new ArrayList<>();
	
		
	@Column(name="movieDescription")
	private String description;
	
	public Movie() {}

	public Movie(String id, String name, Number premiere, Number duration, String imageURL, String country,
			Person director, String description) {
		super();
		this.id = id;
		this.name = name;
		this.premiere = premiere;
		this.duration = duration;
		this.imageURL = imageURL;
		this.country = country;
		this.director = director;
		this.description = description;
	}

	
	
	public List<Genere> getGeneres() {
		return generes;
	}

	public void addGenere(Genere genere) {
		this.generes.add(genere);
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
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Person getDirector() {
		return director;
	}
	public void setDirector(Person director) {
		this.director = director;
	}


	public Number getDuration() {
		return duration;
	}

	public void setDuration(Number duration) {
		this.duration = duration;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}


	public String getImageURL() {
		return imageURL;
	}


	public void setImageURL(String pictureLink) {
		this.imageURL = pictureLink;
	}



	public Number getPremiere() {
		return premiere;
	}



	public void setPremiere(Number premiere) {
		this.premiere = premiere;
	}


	
}
