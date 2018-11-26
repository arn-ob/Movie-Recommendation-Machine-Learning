import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

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
    this.get_movie_lisst();
  }

  get_movie_lisst() {
    console.log('log');
    this.http.get('http://localhost:3000/lists').subscribe(
      response => {
        console.log(response.json());
        this.list = response.json();
        this.get_movie_name();
      },
      err => {
        console.log(err);
      });
  }


   get_movie_name() {
    const arr = [];
    for (let i = 0; i < 3; i++) {
      arr.push({ 'id': String(this.list[i]) });
    }
    console.log(arr);
     this.http.post('http://localhost:3000/return_name_from_id', arr).subscribe(
      response => {
        console.log(response.text());
        // this.list = response.json()[0];
      },
      err => {
        console.log(err);
      });
  }

}

