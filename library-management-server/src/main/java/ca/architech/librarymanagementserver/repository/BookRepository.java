package ca.architech.librarymanagementserver.repository;

import org.springframework.data.repository.CrudRepository;

import ca.architech.librarymanagementserver.entity.Book;

public interface BookRepository extends CrudRepository<Book, Long> {
    
}
