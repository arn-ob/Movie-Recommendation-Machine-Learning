import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  list = [];
  loading = true;

  constructor(
    private http: Http
  ) { }

  ngOnInit() {
    this.get_movie_list();
  }

  // get list from the server
  get_movie_list() {
    let a = Math.random() * 9 + 1;
    if (a > 7) {
      a = Math.random() * 9 + 1;
      if (a > 7) {
        a = 2;
      }
    }
    console.log(Number(a));
    this.http.post('http://localhost:5000/get_latest_movie', { 'page': Number(a) }).subscribe(
      response => {
        console.log(response.json());
        this.list = response.json();
        this.loading = false;
      },
      err => {
        console.log(err);
      });
  }

  // test id
  show(a) {
    console.log(a);
  }
}
