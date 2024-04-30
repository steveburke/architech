package ca.architech.librarymanagementserver;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.ActiveProfiles;

import ca.architech.librarymanagementserver.entity.User;
import ca.architech.librarymanagementserver.repository.UserRepository;

@DataJpaTest 
@ActiveProfiles("test")
public class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;

    @Test
    public void testSaveUser() {
        // Create a new user
        User user = new User();
        user.setId(2L);
        user.setUsername("johndoe");
        user.setPassword("somepassword");

        // Save the user using the repository
        User savedUser = userRepository.save(user);

        // Verify that the user was saved successfully
        assertNotNull(savedUser.getId()); // Ensure that the saved user has an ID assigned by the repository

        // Retrieve the saved user from the repository by ID
        Optional<User> optionalUser = userRepository.findById(savedUser.getId());

        // Verify that the saved user can be retrieved from the repository
        assertTrue(optionalUser.isPresent()); // Ensure that the user is present in the repository

        // Verify that the retrieved user matches the saved user
        User retrievedUser = optionalUser.get();
        assertEquals(savedUser.getId(), retrievedUser.getId());
        assertEquals(savedUser.getUsername(), retrievedUser.getUsername());
    }
}
