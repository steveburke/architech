import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LibraryService } from '../library.service';
import { Book } from '../book';
import { Router } from '@angular/router';

@Component({
	selector: 'app-booklist',
	standalone: true,
	templateUrl: './booklist.component.html',
  imports: [ FormsModule ]
})
export class BooklistComponent {
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
    this.libraryService.searchBooks(this.searchTerm).subscribe((result) => {
      this.books = result.data.searchBooks;
    });
  }

  onRowClick(book: Book): void {
    this.router.navigate(['/bookedit'], { state: { book: book } });
  }
}