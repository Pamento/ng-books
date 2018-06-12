import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
  var config = {
    apiKey: "AIzaSyD_zsgOHKNBt7tooOo1LoKkj4MGB90LXHg",
    authDomain: "books-a0409.firebaseapp.com",
    databaseURL: "https://books-a0409.firebaseio.com",
    projectId: "books-a0409",
    storageBucket: "",
    messagingSenderId: "784938898882"
  };
  firebase.initializeApp(config);
  }
}
