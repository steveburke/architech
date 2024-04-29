import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LibraryService } from '../library.service';
import { SecurityService } from '../security.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-book-edit',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './book-edit.component.html',
  styleUrl: './book-edit.component.scss'
})
export class BookEditComponent {
  book: any;
  isLoggedIn:boolean = false;
  private modalService = inject(NgbModal);

  constructor(private libraryService: LibraryService, 
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
      this.router.navigate(['book-list']);
    })
  }

  openConfirmationModal(book: any){
    const modalRef:NgbModalRef = this.modalService.open(NgbdModalConfirm);
    modalRef.componentInstance.book = this.book;
    
  }
  ngOnInit(): void{
    this.isLoggedIn = this.securityService.isLoggedIn();
  }

  cancel(){
    this.router.navigate(['book-list']);
  }
}
/*
Ideally this would be a re-usable component for a larger app, but it is only required here.
*/
@Component({
	selector: 'ngbd-modal-confirm',
	standalone: true,
	template: `
		<div class="modal-header">
			<h4 class="modal-title" id="modal-title">Are you sure?</h4>
			<button
				type="button"
				class="btn-close"
				aria-describedby="modal-title"
				(click)="modal.dismiss('Cross click')"
			></button>
		</div>
		<div class="modal-body">
			<p>
				<strong>Are you sure you want to delete this book?</strong>
			</p>
			<p>
				<span class="text-danger">This operation can not be undone.</span>
			</p>
		</div>
		<div class="modal-footer">
			<button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">Cancel</button>
			<button type="button" class="btn btn-danger" (click)="deleteBook()">Ok</button>
		</div>
	`,
})

export class NgbdModalConfirm {
	modal = inject(NgbActiveModal);
  book: any;
  constructor(private libraryService: LibraryService,private router: Router){

  }
  deleteBook(){
    this.libraryService.deleteBook(this.book.id).subscribe((result) => {
      if(result.data.deleteBook){
        this.modal.close();
        this.router.navigate(['/']);
      }
    });
  }
}
