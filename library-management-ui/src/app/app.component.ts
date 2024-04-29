import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BooklistComponent } from './booklist/booklist.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BookeditComponent } from './bookedit/bookedit.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BooklistComponent, LoginComponent, BookeditComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'library-management-ui';
}