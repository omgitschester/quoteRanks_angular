import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  quotes: Quote[] = [];

  createQuote(newQuote){
    console.log('Adding Quote to the Database');
    this.quotes.push(newQuote);
    console.log(this.quotes);
  }
  destroyQuote(idx){
    this.quotes.splice(idx, 1);
  }

  constructor() { }

  ngOnInit() {
  }

}

