import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpInterceptor } from '@angular/common/http';
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
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';
import { AuthInterceptor } from './auth.interceptor';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'question/:quizid', component: QuestionComponent },
  { path: 'register', component: RegisterComponent },
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
    QuizesComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, RouterModule.forRoot(routes)
    , MatButtonModule, MatInputModule, MatFormFieldModule, MatCardModule
    , FormsModule, ReactiveFormsModule, HttpClientModule, MatListModule, MatToolbarModule
  ],
  providers: [ApiService, AuthService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
