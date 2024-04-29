package ca.architech.librarymanagementserver.repository;

import org.springframework.data.repository.CrudRepository;

import ca.architech.librarymanagementserver.entity.Genre;

public interface GenreRepository extends CrudRepository<Genre, Long> {
    
}