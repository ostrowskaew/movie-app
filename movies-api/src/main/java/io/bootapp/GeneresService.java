package io.bootapp;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GeneresService {
	
	@Autowired
	private GeneresRepository genereRepository;
	
	public List<Genere> getAllGeneres(){
		List<Genere> generes = new ArrayList<>();
		genereRepository.findAll().forEach(generes::add);
		return generes;
	}
	
	public Genere getGenere(String id) {
		Optional<Genere> gen = genereRepository.findById(id);
		if (gen.isPresent()){
		    Genere genere = gen.get();
		    return genere;
		}
		else{
			return null;
		}
	}
	
	public List<Genere> getGenereByName(String name) {
		return genereRepository.findByName(name);
	}
	
	
	public void addGenere(Genere genere) {
		genereRepository.save(genere);
	}
	
	public void updateGenere(Genere genere, String id) {
		genereRepository.save(genere);
		
	}
	
	public void deleteGenere(String id) {
		genereRepository.deleteById(id);
	}
}

