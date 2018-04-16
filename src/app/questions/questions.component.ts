import { Component, OnInit } from '@angular/core';
import { ApiService } from '../app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  question: {};
  questions;
  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    const quizid = this.route.snapshot.paramMap.get('quizid');
    this.api.getQuestion(quizid).subscribe(res => this.questions = res ) ;
  }

}
