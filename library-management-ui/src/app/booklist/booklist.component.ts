import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LibraryService } from '../library.service';
import { Book } from '../book';

@Component({
	selector: 'app-booklist',
	standalone: true,
	templateUrl: './booklist.component.html',
  imports: [ FormsModule ]
})
export class BooklistComponent {
	books: Book[] = [];
  error: any;

	constructor(public libraryService: LibraryService) {}
  ngOnInit(): void{
    this.libraryService.listBooks().subscribe((result) => {
      this.books = result.data.listBooks;
    });
  }
}