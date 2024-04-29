import { Injectable } from '@angular/core';
import { Book } from './book';
import { Apollo, gql } from 'apollo-angular';
import { /*ADD_BOOK, FIND_BOOK_BY_ID,*/ LIST_AUTHORS, LIST_BOOKS, LIST_GENRES /*, SEARCH_BOOKS */} from './graphql.operations';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private apollo:Apollo) { }

  listBooks() {
    return this.apollo.query<any>({
      query: LIST_BOOKS
    });
  }

  listGenres(){
    return this.apollo.query<any>({
      query: LIST_GENRES
    });
  }

  listAuthors(){
    return this.apollo.query<any>({
      query: LIST_AUTHORS
    });
  }
/*
  findBookById(id: Number){
    return this.apollo.query<any>({
      query: FIND_BOOK_BY_ID,
      variables : {
        id: id
      }
    });
  }

  searchBooks(searchTerm: string){
    return this.apollo.query<any>({
      query: SEARCH_BOOKS,
      variables : {
        searchTerm: searchTerm
      }
    });    
  }
  */
/*
  addBook(book: Book){
    return this.apollo.mutate<any>({
      mutation: ADD_BOOK,
      variables: {

      }
    })
  }
*/
  updateBook(){

  }

  deleteBook(){

  }

}
