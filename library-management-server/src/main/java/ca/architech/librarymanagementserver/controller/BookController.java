package ca.architech.librarymanagementserver.controller;

import java.time.LocalDate;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;

import ca.architech.librarymanagementserver.entity.Book;
import ca.architech.librarymanagementserver.repository.BookRepository;

@Controller
public class BookController {
    @Autowired
    private final BookRepository bookRepository;

    public BookController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @MutationMapping
    @PreAuthorize("isAuthenticated()")
    public Book addBook(@Argument String title,
            @Argument String author,
            @Argument String ISBN,
            @Argument LocalDate publishDate,
            @Argument String genre,
            @Argument String summary) {
        Book book = new Book();
        book.setTitle(title);
        book.setAuthor(author);
        book.setISBN(ISBN);
        book.setPublishDate(publishDate);
        book.setGenre(genre);
        book.setSummary(summary);
        bookRepository.save(book);
        return book;
    }

    @MutationMapping
    @PreAuthorize("isAuthenticated()")
    public Book updateBook(@Argument Long id,
            @Argument String title,
            @Argument String author,
            @Argument String ISBN,
            @Argument LocalDate publishDate,
            @Argument String genre,
            @Argument String summary) {
        Book book = new Book();
        book.setId(id);
        book.setTitle(title);
        book.setAuthor(author);
        book.setISBN(ISBN);
        book.setPublishDate(publishDate);
        book.setGenre(genre);
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
    public Iterable<Book> listBooks() {
        return bookRepository.findAll();
    }

    @QueryMapping
    @PreAuthorize("permitAll")
    public Iterable<Book> searchBooks(@Argument String searchTerm) {
        return bookRepository.findByTitleIgnoreCaseContainingOrAuthorIgnoreCaseContainingOrGenreIgnoreCaseContaining(searchTerm,searchTerm,searchTerm);
    }
}
