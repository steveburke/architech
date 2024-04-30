import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LibraryService } from '../library.service';
import { Book } from '../book';
import { Router } from '@angular/router';
import { SecurityService } from '../security.service';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-book-list',
	standalone: true,
	templateUrl: './book-list.component.html',
  imports: [ FormsModule, CommonModule ]
})
export class BookListComponent {
	books: Book[] = [];
  error: any;
  searchTerm: string = "";
  isLoggedIn:boolean = false;

	constructor(private libraryService: LibraryService, 
    private securityService: SecurityService,
    private router: Router) {}

  ngOnInit(): void{
    this.libraryService.listBooks().subscribe((result) => {
      this.books = result.data.listBooks;
    });
    this.isLoggedIn = this.securityService.isLoggedIn();
  }

  searchBooks(){
    //TODO: add debounce
    //TODO: add pagination support
    this.libraryService.searchBooks(this.searchTerm).subscribe((result) => {
      this.books = result.data.searchBooks;
    });
  }

  editBook(book: Book): void {
    this.router.navigate(['/book-edit'], { state: { book: book } });
  }

  addBook(): void {
    this.router.navigate(['/book-edit'],);
  }
}