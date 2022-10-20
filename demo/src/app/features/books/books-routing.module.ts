import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books.component';
import { ListBooksComponent } from './list-books/list-books.component';

const routes: Routes = [{ path: '', component: BooksComponent,children:[{
  path: '', component: ListBooksComponent
}] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
