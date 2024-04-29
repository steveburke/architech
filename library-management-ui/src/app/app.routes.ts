import { Routes } from '@angular/router';
import { BooklistComponent } from './booklist/booklist.component';
import { LoginComponent } from './login/login.component';
import { BookeditComponent } from './bookedit/bookedit.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', component: BooklistComponent},
    { path: 'booklist', component: BooklistComponent},
    { path: 'bookedit', component: BookeditComponent},
    { path: 'login', component: LoginComponent}
];
