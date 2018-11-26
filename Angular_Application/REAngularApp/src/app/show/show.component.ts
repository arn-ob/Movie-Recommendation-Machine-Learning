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
    this.http.get('http://localhost:3100/lists').subscribe(
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
    for (let i = 0; i < 5; i++) {
      arr.push({ 'id': String(this.list[i]) });
    }
    console.log(arr);
    const a = { 'id': String(this.list[3]) };
    this.http.post('http://localhost:3100/return_name_from_id', arr).toPromise().then(
      response => {
        console.log(response.json());
        // const cmnt = response.json();
        // let ars = response.text();
        // ars = ars.replace(ars.substring(0, 2), '');
        // ars = ars.replace(ars.substring(cmnt - 4, cmnt), '');
        // console.log(ars);
        // let obj = JSON.parse(ars);
        // console.log(obj);
        // this.list = response.json()[0];
      },
      err => {
        console.log(err);
      }).then(
        res => {
          this.se();
        });
        this.getPrice();
  }

  getPrice() {
    const a = { 'id': String(this.list[3]) };
    this.http.post('http://localhost:3100/return_name_from_id2', a).subscribe(
        response => {
          console.log(response.text());
        },
        err => {
          console.log(err);
        });
  }

  se() {
    console.log('a');
  }

}

