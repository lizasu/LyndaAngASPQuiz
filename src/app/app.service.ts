import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ApiService {

    private selectedQuestion = new Subject<any>();
    questionSelected = this.selectedQuestion.asObservable();
    private selectedQuiz = new Subject<any>();
    quizSelected = this.selectedQuiz.asObservable();

    constructor(private http: HttpClient) {}

    postQuestion(question) {
        this.http.post('http://localhost:5000/api/question', question)
            .subscribe(res => { console.log(res); });
    }
    postQuiz(quiz) {
        this.http.post('http://localhost:5000/api/quiz', quiz)
            .subscribe(res => { console.log(res); });
    }

    putQuestion(question) {
        this.http.put(`http://localhost:5000/api/question/${question.id}`, question)
            .subscribe(res => { console.log(res); });
    }
    putQuiz(quiz) {
        this.http.put(`http://localhost:5000/api/quiz/${quiz.id}`, quiz)
            .subscribe(res => { console.log(res); });
    }

    getQuestion(quizid) {
        return this.http.get(`http://localhost:5000/api/question/${quizid}`);
    }
    getQuizes() {
        return this.http.get('http://localhost:5000/api/quiz');
    }

    selectQuestion(question) {
        this.selectedQuestion.next(question);
    }
    selectQuiz(quiz) {
        this.selectedQuiz.next(quiz);
    }
}
