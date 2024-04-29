import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from '../security.service';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [ FormsModule ], 
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true
})
export class LoginComponent {
  credentials = { username: '', password: '' };

  constructor(private securityService: SecurityService, private router: Router) { }

  login() {
    this.securityService.login(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/book-list'); 
    });
  }
}