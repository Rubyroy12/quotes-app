import { Component, OnInit } from '@angular/core';
import { Quote} from '../quote';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  quotes: Quote[] = [
    new Quote ('Ibrahim','You cannot escape the responsibility of tommorow by evading it today', new Date(2021,14,2)),
    new Quote ('Ibrahim','You cannot escape the responsibility of tommorow by evading it today', new Date())
  ];

  addNewQuote(quote: Quote){
    let quoteLength = this.quotes.length;
    quote.dateCreated = new Date(quote.dateCreated)
    this.quotes.push(quote);
  }

  constructor() { }

  ngOnInit() {
  }

}
