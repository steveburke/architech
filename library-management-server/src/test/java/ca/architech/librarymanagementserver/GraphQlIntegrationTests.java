package ca.architech.librarymanagementserver;

import static org.junit.jupiter.api.Assertions.assertTrue;

import java.awt.print.Book;

import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.graphql.tester.AutoConfigureHttpGraphQlTester;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.graphql.test.tester.HttpGraphQlTester;

@AutoConfigureHttpGraphQlTester
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK)
class GraphQlIntegrationTests {

    @Test
    void shouldListBooks(@Autowired HttpGraphQlTester graphQlTester) {
        HttpGraphQlTester tester = graphQlTester.mutate().build();
        tester.document("{ listBooks { title author } }")
            .execute()
            .path("listBooks")
            .entityList(Book.class)
            .hasSizeGreaterThan(0);
    }

    @Test
    void shouldFindBook(@Autowired HttpGraphQlTester graphQlTester) {
        HttpGraphQlTester tester = graphQlTester.mutate().build();
        //should find 4 books containing "ca"
        tester.document("{ searchBooks(searchTerm:\"ca\") { title author } }")
            .execute()
            .path("searchBooks")
            .entityList(Book.class)
            .hasSize(4);
    }

    @SuppressWarnings("null")
    @Test
    void shouldFailAuth(@Autowired HttpGraphQlTester graphQlTester) {
        HttpGraphQlTester tester = graphQlTester.mutate().build();
        tester.document("mutation updateBook {\n" + //
                        "  updateBook(id: \"1\", \n" + //
                        "    title: \"Destined to fail\"\n" + //
                        "  \tauthor: \"Test\"\n" + //
                        "  \tgenre:\"test\"\n" + //
                        "    ISBN: \"1234\"\n" + //
                        "    publishDate:\"1987-02-15\"\n" + //
                        "  ){\n" + //
                        "    id \n" + //
                        "  }\n" + //
                        "}")
            .execute()
            .errors().satisfy(errors -> {
                errors.forEach(err -> {
                    assertTrue(err.getMessage().equals("Unauthorized"));
                });
            });
        }   
    }

