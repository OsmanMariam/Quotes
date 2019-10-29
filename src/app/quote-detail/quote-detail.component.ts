import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote:Quote;
  @Output() isComplete = new EventEmitter <boolean>();
  @Output() isupVote= new EventEmitter <boolean> ();
  @Output() isdownVote= new EventEmitter <boolean> ();


  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  upVote(like:boolean){
    this.isupVote.emit(like);
  }
  
  downVote(nolike:boolean){
    this.isdownVote.emit(nolike);
  }
  constructor() { }

  ngOnInit() {
  }

};
