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
        this.get_movie_list();
      },
      err => {
        console.log(err);
      });
  }


  get_movie_list() {
    // setTimeout(() => {
    this.se(30).then(res => {
      console.log(res);
    }).then( () => {
        this.se(28).then(res => {
          console.log(res);
        }).then( () => {
            this.se(1120).then(res => {
              console.log(res);
            });
          });
      }
    );
    // }, 300);
  }

  se(a) {
    const ases = [{ 'id': a }];
    return this.http.post('http://localhost:5000/get_details', ases).toPromise().
      then((response) => {
        return response.json();
      });
  }

}

