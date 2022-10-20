import { Injectable } from '@angular/core';
import { makeAutoObservable, computed } from 'mobx';
import { observable, action } from 'mobx-angular';

@Injectable()
export class BookStore {

  constructor() {
    makeAutoObservable(this)
  }

  value = "";
  formEmail = "";
  formPass = "";
  doSomething() {
    this.value = this.value ? "" : "hw fdfkd"
  }

  @computed
  get isMail() {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    console.log( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.formEmail),this.formEmail);
    
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.formEmail)
  }
}