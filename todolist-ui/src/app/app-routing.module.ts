import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TodolistComponent } from './todolist/todolist.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path:'', redirectTo:'/login', pathMatch:'full' },
  { path: 'list', component: TodolistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
