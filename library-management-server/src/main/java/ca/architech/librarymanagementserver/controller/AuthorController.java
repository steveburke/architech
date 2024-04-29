package ca.architech.librarymanagementserver.controller;

import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;

import ca.architech.librarymanagementserver.entity.Author;
import ca.architech.librarymanagementserver.repository.AuthorRepository;

@Controller
public class AuthorController {
    private final AuthorRepository authorRepository;

    public AuthorController(AuthorRepository authorRepository) {
        this.authorRepository = authorRepository;
    }

    @MutationMapping
    public Author addAuthor(@Argument String firstName,
            @Argument String lastName) {
        Author author = new Author();
        author.setFirstName(firstName);
        author.setLastName(lastName);
        authorRepository.save(author);
        return author;
    }

    @MutationMapping
    public Author updateAuthor(@Argument Author author){
        authorRepository.save(author);
        return author;
    }

    @MutationMapping boolean deleteAuthor(@Argument Author author){
        authorRepository.delete(author);
        return true;
    }

    @QueryMapping
    @PreAuthorize("permitAll")
    public Author authorById(@Argument Long id) {
        return authorRepository.findById(id).get();
    }

    @QueryMapping 
    @PreAuthorize("permitAll")
    public Iterable<Author> listAuthors(){
        return authorRepository.findAll();
    }
}
