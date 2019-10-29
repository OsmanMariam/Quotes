import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, "The final forming of your character,lies in your own hands", "Anne Frank", "Mariam Osman",new Date(2019,6,14),17,6),
    new Quote(2, "We never lose our demons,we learn to live above them", "The Ancient One,(DoctorStrange)","Mariam Osman", new Date(2008, 4, 19),45,3),
  ];

  deleteQuote(isComplete, index) {
    if (isComplete) {
      const toDelete = confirm(`Are you sure you want to delete quote`);


      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  voteBest(isupVote,index){
    if (isupVote){
      this.quotes[index].upVote++
    }
  }

  voteWorst(isdownVote,index){
    if (isdownVote){
      this.quotes[index].downVote++
    }
  }

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  addNewQuote(quote){
    let  quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.createdDate= new Date(quote.createdDate)
    this.quotes.push(quote)
  }

  get sortedQuotes(){
    return this.quotes.sort((a,b) =>{
      return (b.upVote) as any -(a.upVote) as any;
    });
  }
  constructor() { }

  ngOnInit() {
  }

};
