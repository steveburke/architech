import { Injectable } from '@angular/core';
import { Book } from './book';
import { Apollo, MutationResult, gql } from 'apollo-angular';
import { ADD_BOOK, DELETE_BOOK, FIND_BOOK_BY_ID, LIST_BOOKS, SEARCH_BOOKS, UPDATE_BOOK } from './graphql.operations';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private apollo:Apollo) { }

  listBooks() {
    return this.apollo.query<any>({
      query: LIST_BOOKS,
      fetchPolicy: 'network-only'
    });
  }

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
  
  addBook(book: Book){
    return this.apollo.mutate<any>({
      mutation: ADD_BOOK,
      variables: {

      }
    })
  }

  updateBook(book: Book){
    return this.apollo.mutate<any>({
      mutation: UPDATE_BOOK,
        variables: {
          id: book.id, 
          title: book.title, 
          author: book.author, 
          ISBN: book.ISBN,
          publishDate: book.publishDate, 
          genre: book.genre, 
          summary:book.summary         
        }
    })
  }

  deleteBook(bookId: Number): Observable<MutationResult<any>>{
    return this.apollo.mutate<any>({
      mutation: DELETE_BOOK,
        variables:{ id: bookId}
    });
  }

}
