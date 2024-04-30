package ca.architech.librarymanagementserver.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import ca.architech.librarymanagementserver.entity.Book;

@Repository
public interface BookRepository extends CrudRepository<Book, Long> {

    Iterable<Book> findByTitleContainingIgnoreCase(String title);
    Iterable<Book> findByTitleIgnoreCaseContainingOrAuthorIgnoreCaseContainingOrGenreIgnoreCaseContaining(String searchTerm,String searchTerm1,String searchTerm2);
    
}
