import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  list = [];
  constructor(
    private http: Http
  ) { }

  ngOnInit() {
    this.get_movie_list();
  }

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
}
