import { Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { LoginComponent } from './login/login.component';
import { BookEditComponent } from './book-edit/book-edit.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', component: BookListComponent},
    { path: 'book-list', component: BookListComponent},
    { path: 'book-edit', component: BookEditComponent},
    { path: 'login', component: LoginComponent}
];
