import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LibraryService } from '../library.service';
import { Book } from '../book';
import { Router } from '@angular/router';

@Component({
	selector: 'app-book-list',
	standalone: true,
	templateUrl: './book-list.component.html',
  imports: [ FormsModule ]
})
export class BookListComponent {
	books: Book[] = [];
  error: any;
  searchTerm: string = "";

	constructor(public libraryService: LibraryService, private router: Router) {}

  ngOnInit(): void{
    this.libraryService.listBooks().subscribe((result) => {
      this.books = result.data.listBooks;
    });
  }

  searchBooks(){
    //TODO: add debounce
    //TODO: add pagination support
    this.libraryService.searchBooks(this.searchTerm).subscribe((result) => {
      this.books = result.data.searchBooks;
    });
  }

  onRowClick(book: Book): void {
    this.router.navigate(['/book-edit'], { state: { book: book } });
  }
}