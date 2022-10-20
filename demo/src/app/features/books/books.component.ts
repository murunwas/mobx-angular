import { Component, OnInit } from '@angular/core';
import { BookStore } from './stores/book.store';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers:[BookStore]
})
export class BooksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
