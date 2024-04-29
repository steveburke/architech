package ca.architech.librarymanagementserver.entity;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
@Table(name = "genre")  
@GenericGenerator(
    name = "genre-sequence-generator",
    strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator",
    parameters = {
            @Parameter(name = "sequence_name", value = "genre_seq"),
            @Parameter(name = "initial_value", value = "1000"),
            @Parameter(name = "increment_size", value = "1")
    })
public class Genre {
    @Id  
    @GeneratedValue(generator = "genre-sequence-generator")  
    @Column(name = "id", nullable = false)  
    private Long id;
    @Column(name = "genre_name")
    private String name;
}