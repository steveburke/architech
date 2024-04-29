package ca.architech.librarymanagementserver.controller;

import java.time.LocalDate;
import java.util.Arrays;

import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;

import ca.architech.librarymanagementserver.entity.Author;
import ca.architech.librarymanagementserver.entity.Book;
import ca.architech.librarymanagementserver.entity.Genre;
import ca.architech.librarymanagementserver.repository.AuthorRepository;
import ca.architech.librarymanagementserver.repository.BookRepository;
import ca.architech.librarymanagementserver.repository.GenreRepository;

@Controller
public class BookController {
    private final BookRepository bookRepository;
    private final AuthorRepository authorRepository;
    private final GenreRepository genreRepository;

    public BookController(BookRepository bookRepository, AuthorRepository authorRepository,
        GenreRepository genreRepository) {
        this.bookRepository = bookRepository;
        this.authorRepository = authorRepository;
        this.genreRepository = genreRepository;
    }

    @MutationMapping
    @PreAuthorize("isAuthenticated()")
    public Book addBook(@Argument String title,
            @Argument Long authorId,
            @Argument String ISBN,
            @Argument LocalDate publishDate,
            @Argument Long genreId,
            @Argument String summary) {
        Book book = new Book();
        book.setTitle(title);
        book.setAuthor(authorRepository.findById(authorId).get());
        book.setISBN(ISBN);
        book.setPublishDate(publishDate);
        book.setGenre(genreRepository.findById(genreId).get());
        book.setSummary(summary);
        bookRepository.save(book);
        return book;
    }

    @MutationMapping
    @PreAuthorize("isAuthenticated()")
    public Book updateBook(@Argument Long id,
            @Argument String title,
            @Argument Long authorId,
            @Argument String ISBN,
            @Argument LocalDate publishDate,
            @Argument Long genreId,
            @Argument String summary) {
        Book book = new Book();
        book.setId(id);
        book.setTitle(title);
        book.setAuthor(authorRepository.findById(authorId).get());
        book.setISBN(ISBN);
        book.setPublishDate(publishDate);
        book.setGenre(genreRepository.findById(genreId).get());
        book.setSummary(summary);        
        bookRepository.save(book);
        return book;
    }

    @MutationMapping
    @PreAuthorize("isAuthenticated()")
    public Boolean deleteBook(@Argument Long id) {
        bookRepository.deleteAllById(Arrays.asList(id));
        return true;
    }    

    @QueryMapping
    @PreAuthorize("permitAll")
    public Book bookById(@Argument Long id) {
        return bookRepository.findById(id).get();
    }

    @QueryMapping
    @PreAuthorize("permitAll")
    public Iterable<Book> listBooks(){
        return bookRepository.findAll();
    }

    @QueryMapping
    @PreAuthorize("permitAll")
    public Iterable<Book> searchBooks(@Argument String searchTerm){
        return bookRepository.findByTitleContains(searchTerm);
    }
}
