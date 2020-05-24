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
public class GeneresController {
	
	@Autowired
	private GeneresService genereService;
	
	@RequestMapping("/generes")
	public List<Genere> getAllGeneres() {
		return genereService.getAllGeneres();
	}
	
	@RequestMapping("/generes/{id}")
	public Genere getGenere(@PathVariable String id) {
		return genereService.getGenere(id);
	}
	
	
	@RequestMapping(method=RequestMethod.POST, value="/generes")
	public void addGenere(@RequestBody Genere genere) {
		genereService.addGenere(genere);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/generes/{id}")
	public void updateGenere(@RequestBody Genere genere ,@PathVariable String id) {
		genereService.updateGenere(genere, id);
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/generes/{id}")
	public void deleteGenere(@PathVariable String id) {
		genereService.deleteGenere(id);
	}
}
