package ca.architech.librarymanagementserver;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.time.LocalDate;
import java.util.Optional;
import java.util.Collection;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.ActiveProfiles;

import ca.architech.librarymanagementserver.entity.Book;
import ca.architech.librarymanagementserver.repository.BookRepository;

@DataJpaTest
@ActiveProfiles("test")
public class BookRepositoryTest {

    @Autowired
    private BookRepository bookRepository;
    @Test
    public void testSaveBook() {
        Book book = new Book();
        book.setTitle("The Test Book");
        book.setISBN("1234567890987654321");
        book.setAuthor("Test Author");
        book.setGenre("Testing");
        book.setPublishDate(LocalDate.now());
        book.setSummary("This is the summary for the book about testing.");

        Book savedBook = bookRepository.save(book);

        assertNotNull(savedBook.getId());

        Optional<Book> optionalBook = bookRepository.findById(savedBook.getId());

        assertTrue(optionalBook.isPresent()); 
               
        Book retrievedBook = optionalBook.get();
        assertEquals(savedBook.getId(), retrievedBook.getId());
        assertEquals(savedBook.getTitle(), savedBook.getTitle());
        assertEquals(savedBook.getAuthor(), savedBook.getAuthor());
        assertEquals(savedBook.getISBN(), savedBook.getISBN());
        assertEquals(savedBook.getGenre(), savedBook.getGenre());
        assertEquals(savedBook.getSummary(), savedBook.getSummary());
        assertEquals(savedBook.getPublishDate(), savedBook.getPublishDate());
    }

    @Test
    public void testListBooks(){
        Iterable<Book> books = bookRepository.findAll();
        assert(((Collection<?>) books).size() == 7);
    }

    @Test
    public void testDeleteBook() {
        Book book = new Book();
        book.setTitle("The Test Book");
        book.setISBN("1234567890987654321");
        book.setAuthor("Test Author");
        book.setGenre("Testing");
        book.setPublishDate(LocalDate.now());
        book.setSummary("This is the summary for the book about testing.");

        Book savedBook = bookRepository.save(book);
        assertNotNull(savedBook.getId());
        Long id = savedBook.getId();
        bookRepository.delete(savedBook);
        Optional<Book> deletedOptionalBook = bookRepository.findById(id);
        assertTrue(!deletedOptionalBook.isPresent());

    }

}
