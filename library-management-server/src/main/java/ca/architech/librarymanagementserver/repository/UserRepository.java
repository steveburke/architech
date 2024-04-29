package ca.architech.librarymanagementserver.repository;

import ca.architech.librarymanagementserver.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}