package ca.architech.librarymanagementserver.controller;

import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;

import ca.architech.librarymanagementserver.entity.Genre;
import ca.architech.librarymanagementserver.repository.GenreRepository;

@Controller
public class GenreController {
    private final GenreRepository genreRepository;

    public GenreController(GenreRepository genreRepository) {
        this.genreRepository = genreRepository;
    }

    @MutationMapping
    public Genre addGenre(@Argument String name) {
        Genre genre = new Genre();
        genre.setName(name);
        genreRepository.save(genre);
        return genre;
    }

    @MutationMapping
    public Genre updateGenre(@Argument Genre genre){
        genreRepository.save(genre);
        return genre;
    }

    @MutationMapping
    public boolean deleteGenre(@Argument Genre genre){
        genreRepository.delete(genre);
        return true;
    }

    @QueryMapping
    @PreAuthorize("permitAll")
    public Genre genreById(@Argument Long id) {
        return genreRepository.findById(id).get();
    }

    @QueryMapping 
    @PreAuthorize("permitAll")
    public Iterable<Genre> listGenres(){
        return genreRepository.findAll();
    }
}
