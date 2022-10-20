import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookStore } from '../stores/book.store';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class AddBookComponent implements OnInit {

  user={email:"",password:""}
  constructor(public store: BookStore) { }

  ngOnInit(): void {
  }

  onSubmit(d: NgForm) {
    console.log(d.status,d.valid,d.value);

  }

}
