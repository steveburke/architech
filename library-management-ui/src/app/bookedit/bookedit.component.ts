import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { LibraryService } from '../library.service';
import { FormsModule } from '@angular/forms';
import { Author } from '../author';
import { Genre } from '../genre';
import { CommonModule } from '@angular/common'
@Component({
  selector: 'app-bookedit',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './bookedit.component.html',
  styleUrl: './bookedit.component.scss'
})
export class BookeditComponent {
  book: any;
  authors:Author[] = [];
  genres:Genre[] = [];
  selectedAuthor = 4

  constructor(public libraryService: LibraryService, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.book = navigation.extras.state?.['book'];
    }
   }

   ngOnInit(): void{
    this.libraryService.listAuthors().subscribe((result) => {
      this.authors = result.data.listAuthors;
    });
    this.libraryService.listGenres().subscribe((result) => {
      this.genres = result.data.listGenres;
    });
  }
  
  saveBook(){
    console.log(this.book);
    this.libraryService.updateBook(this.book).subscribe((result) => {
      this.book = result.data.book;
    })
  }
}
