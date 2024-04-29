package ca.architech.librarymanagementserver.repository;

import org.springframework.data.repository.CrudRepository;

import ca.architech.librarymanagementserver.entity.Author;

public interface AuthorRepository extends CrudRepository<Author, Long> {

}