import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListBooksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
