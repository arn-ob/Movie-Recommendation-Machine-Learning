import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  list = [];
  constructor(
    private http: Http
  ) { }

  ngOnInit() {
    this.get_movie_list();
  }

  // get list from the server
  get_movie_list() {
    this.http.get('http://localhost:3000/index').subscribe(
      response => {
        console.log(response.json());
        this.list = response.json()[0];
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
