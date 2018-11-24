import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { delay } from 'q';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  list = [];
  lists = [];
  constructor(
    private http: Http
  ) { }

  ngOnInit() {
    this.get_movie_list();
  }

  get_movie_list() {
    this.http.get('http://localhost:4000/list').subscribe(
      response => {
        console.log(response.json());
        this.list = response.json();
        this.haha();
      },
      err => {
        console.log(err);
      });
  }


  async get_movie_name(as) {

    const a = { 'id': String(as) };
    await this.http.post('http://localhost:4000/return_name_from_id', a).toPromise()
    .then(response => {
        return response.json();
        // this.list = response.json()[0];
      },
      err => {
        console.log(err);
      });
    setTimeout(() => { this.haha(); }, 10000);

  }

  haha() {
    for (let i = 0; i < this.list.length; i++) {
      console.log(this.get_movie_name(this.list[i]));
    }
    console.log('finish');
  }
}

