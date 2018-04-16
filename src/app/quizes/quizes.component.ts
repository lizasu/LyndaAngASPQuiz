import { Component, OnInit } from '@angular/core';
import { ApiService } from '../app.service';

@Component({
  selector: 'app-quizes',
  templateUrl: './quizes.component.html',
  styleUrls: ['./quizes.component.css']
})
export class QuizesComponent implements OnInit {

  quizes;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getQuizes().subscribe(res => this.quizes = res);
  }

}
