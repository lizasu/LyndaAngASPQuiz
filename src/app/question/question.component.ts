import { Component, OnInit } from '@angular/core';
import {ApiService} from '../app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  question = {};
  quizid;
  constructor(private apiSvc: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.quizid = this.route.snapshot.paramMap.get('quizid');
    this.apiSvc.questionSelected.subscribe( qs => this.question = qs );
  }

  post(question) {
    question.quizid = this.quizid;
    this.apiSvc.postQuestion(question);
  }

}
