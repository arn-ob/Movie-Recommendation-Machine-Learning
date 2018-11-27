import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  list = [];
  loading = true;

  constructor(
    private http: Http,
    private route: Router
  ) { }

  ngOnInit() {
    localStorage.clear();
    this.get_movie_list();
  }

  // get list from the server
  get_movie_list() {
    let a = Math.random() * 99 + 100;
    if (a > 400) {
      a = Math.random() * 99 + 100;
      if (a > 400) {
        a = 320;
      }
    }
    // a = 300;
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
    localStorage.setItem('id', a);
    this.route.navigate(['/show']);
  }
}
