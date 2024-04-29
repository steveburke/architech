import { gql } from "apollo-angular";

const LIST_BOOKS = gql`
query listBooks {
    listBooks {
        id
        ISBN
        author 
        genre
        title
        summary
        publishDate
    }
}
`
const FIND_BOOK_BY_ID = gql`
query findBookById {
  bookById(id: ID) {
    id
        ISBN
        author 
        genre 
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
    author 
    genre 
    title
    summary
    publishDate
  }
}
`


//const LIST_BOOKS_BY_GENRE = gql``
//const LIST_BOOKS_BY_AUTHOR = gql``

const UPDATE_BOOK = gql`
mutation updateBook($id: ID!, $title: String!, $author: String!, $ISBN: String!, $publishDate: String!, $genre: String!, $summary:String!){
    updateBook(id: $id, title: $title, author: $author, ISBN: $ISBN, publishDate: $publishDate, genre: $genre, summary:$summary){
    id
    ISBN
    author 
    genre 
    title
    summary
    publishDate
    }
}
`
const ADD_BOOK = gql`
mutation addBook{
    addBook(title: String, author: String, ISBN: String, publishDate: String, genre: String, summary:String){
    id
    ISBN
    author 
    genre 
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
    //LIST_BOOKS_BY_AUTHOR, 
    //LIST_BOOKS_BY_GENRE, 
    SEARCH_BOOKS, 
    FIND_BOOK_BY_ID, 
    ADD_BOOK, 
    UPDATE_BOOK, 
    DELETE_BOOK 
}