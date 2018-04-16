import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

import { MatButtonModule,
          MatInputModule,
          MatFormFieldModule,
          MatCardModule,
          MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { ApiService } from './app.service';
import { QuestionsComponent } from './questions/questions.component';
import { HomeComponent } from './home.component';
import { NavComponent } from './nav.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizesComponent } from './quizes/quizes.component';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'question/:quizid', component: QuestionComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'quiz', component: QuizComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    QuestionComponent,
    QuestionsComponent,
    NavComponent,
    QuizComponent,
    QuizesComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, RouterModule.forRoot(routes)
    , MatButtonModule, MatInputModule, MatFormFieldModule, MatCardModule
    , FormsModule, HttpClientModule, MatListModule, MatToolbarModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
