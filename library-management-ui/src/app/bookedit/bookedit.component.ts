import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { LibraryService } from '../library.service';
import { SecurityService } from '../security.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bookedit',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './bookedit.component.html',
  styleUrl: './bookedit.component.scss'
})
export class BookeditComponent {
  book: any;
  isLoggedIn:boolean = false;

  constructor(public libraryService: LibraryService, 
      private securityService: SecurityService,
      private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.book = Object.assign({}, navigation.extras.state?.['book']);
    }
   }

  saveBook(){
    this.libraryService.updateBook(this.book).subscribe((result) => {
      this.book = result.data.updateBook;
      this.router.navigate(['booklist']);
    })
  }

  deleteBook(){
    this.libraryService.deleteBook(this.book.id).subscribe((result) => {
      this.router.navigate(['booklist']);
    });
  }

  ngOnInit(): void{
    this.isLoggedIn = this.securityService.isLoggedIn();
  }

  cancel(){
    this.router.navigate(['booklist']);
  }
}
