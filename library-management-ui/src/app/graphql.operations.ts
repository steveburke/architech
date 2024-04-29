import { gql } from "apollo-angular";

const LIST_BOOKS = gql`
query listBooks {
    listBooks {
        id
        ISBN
        author {
        firstName
        lastName
        }
        genre {
            name
        }
        title
        summary
        publishDate
    }
}
`

const LIST_GENRES = gql`
query listGenres {
    listGenres {
        name
    }
}
`
const LIST_AUTHORS = gql`
query listAuthors {
    listAuthors
  	{
      firstName
      lastName
    }
}
`
const FIND_BOOK_BY_ID = gql`
query findBookById {
  bookById(id: ID) {
    id
        ISBN
        author {
        firstName
        lastName
        }
        genre {
            name
        }
        title
        summary
        publishDate
  }
}
`

const SEARCH_BOOKS = gql`
query searchBooks($searchTerm: String!){
    searchBooks(searchTerm: $searchTerm) {
    id
    ISBN
    author {
        firstName
        lastName
    }
    genre {
        name
    }
    title
    summary
    publishDate
  }
}
`


//const LIST_BOOKS_BY_GENRE = gql``
//const LIST_BOOKS_BY_AUTHOR = gql``

const UPDATE_BOOK = gql`
mutation updateBook{
    addBook(book:Book){
    id
    ISBN
    author {
        firstName
        lastName
    }
    genre {
        name
    }
    title
    summary
    publishDate
    }
}
`
const ADD_BOOK = gql`
mutation addBook{
    addBook(id: ID, title: String, authorId: ID, ISBN: String,publishDate: String, genre: ID, summary:String){
    id
    ISBN
    author {
        firstName
        lastName
    }
    genre {
        name
    }
    title
    summary
    publishDate
    }
}
`
const DELETE_BOOK = gql`
mutation deleteBook {
  deleteBook(id: ID)
}
`


export { 
    LIST_BOOKS, 
    LIST_AUTHORS, 
    LIST_GENRES, 
    //LIST_BOOKS_BY_AUTHOR, 
    //LIST_BOOKS_BY_GENRE, 
    SEARCH_BOOKS, 
    FIND_BOOK_BY_ID, 
    ADD_BOOK, 
    UPDATE_BOOK, 
    DELETE_BOOK 
}