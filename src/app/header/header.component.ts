import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';


import { Quote } from '../quote';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  count: number = 0;
  discount : number=0;
  faThumbsUp=faThumbsUp;
  
  today:string = new Date().toDateString();

  @Input()
  quote!: Quote;
  @Output() isComplete = new EventEmitter<boolean>();




  quotes: Quote[] = [
    new Quote('Ibrahim', 'You cannot escape the responsibility of tommorow by evading it today', new Date(2021, 14, 2), 0, 0),
    new Quote('Denis', 'Things may come to those who wait, but only the things left by those who hustle.', new Date(), 0, 0)
  ];

  addNewQuote(quote: Quote) {
    // let quoteLength = this.quotes.length;
    quote.dateCreated = new Date(quote.dateCreated)
    this.quotes.push(quote);
  }



  quoteDelete(id: number) {
    let todelete = confirm("Are you sure you want to delete this quote?")
    if (todelete) {
      this.quotes = this.quotes.filter((v, i) => i !== id)

    }

  }


  upvote() {
    this.count++;
  }
  downvote() {
    this.discount++;
  }

  constructor() { }

  ngOnInit() {
  }

}
