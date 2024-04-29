import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BooklistComponent } from './booklist/booklist.component';
import { SecurityService } from './security.service';
import { LoginComponent } from './login/login.component';
import { BookeditComponent } from './bookedit/bookedit.component';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, BooklistComponent, LoginComponent, BookeditComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'library-management-ui';
  isLoggedIn:boolean = false;
  constructor(private securityService: SecurityService) { }
  
  ngOnInit(): void{
    this.isLoggedIn = this.securityService.isLoggedIn();
  }

  logout(){
    this.securityService.logout();
  }
}