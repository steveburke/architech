import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { LibraryService } from '../library.service';
import { FormsModule } from '@angular/forms';
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

  constructor(public libraryService: LibraryService, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.book = Object.assign({}, navigation.extras.state?.['book']);
    }
   }

  saveBook(){
    this.libraryService.updateBook(this.book).subscribe((result) => {
      this.book = result.data.updateBook;
      this.router.navigate(['/']);
    })
  }
}
