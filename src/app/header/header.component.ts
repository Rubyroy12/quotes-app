import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() isComplete = new EventEmitter<Quote>();


  quotes: Quote[] = [
    new Quote('Ibrahim', 'You cannot escape the responsibility of tommorow by evading it today', new Date(2021, 14, 2)),
    new Quote('Denis', 'Things may come to those who wait, but only the things left by those who hustle.', new Date())
  ];

  addNewQuote(quote: Quote) {
    let quoteLength = this.quotes.length;
    quote.dateCreated = new Date(quote.dateCreated)
    this.quotes.push(quote);
  }

  quoteDelete() {
    let toDelete = confirm("Are you sure you want to delete?");
    if (toDelete) {
      this.quotes.slice();

    }


  }

  constructor() { }

  ngOnInit() {
  }

}
