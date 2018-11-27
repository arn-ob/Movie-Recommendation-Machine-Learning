import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  list = [];
  fixed_title_name = [];
  title;
  recomendation: { [k: string]: any } = {};
  new_recomendation = [];
  movie_rec = false;

  loading = true;
  constructor(
    private http: Http,
    private route: Router
  ) { }

  ngOnInit() {
    this.movie_rec = false;
    this.new_recomendation = [];
    this.fixed_title_name = [];
    this.list = [];
    const movie_id = localStorage.getItem('id');
    this.get_movie_details_from_id(movie_id);
  }

  get_movie_details_from_id(id) {
    console.log('log');
    console.log(id);
    const js = { 'movie_id': Number(id) };
    this.http.post('http://localhost:5000/get_details', js).subscribe(
      response => {
        // console.log(response.json());
        this.list = response.json();
        this.title = response.json().title;
        this.loading = false;
        this.get_recomandation();
      },
      err => {
        console.log(err);
      });
  }

  get_recomandation() {
    console.log(this.title);
    const jss = { 'movie_name': String(this.title) };
    this.http.post('http://localhost:3100/movie_details', jss).subscribe(
      response => {
        // console.log(response.json());
        this.recomendation = response.json();
        this.get_fix_Index_Issue();
      },
      err => {
        console.log(err);
      });
  }

  get_fix_Index_Issue() {
    for (let i = 0; i < 100000; i++) {
      if (this.recomendation[i] !== undefined) {
        // console.log(this.recomendation[i].title);
        this.fixed_title_name.push({ 'title': this.recomendation[i].title });
      }
    }
    // console.log(this.fixed_title_name);
    this.get_movie_recomendation();
  }

  get_movie_recomendation() {
    this.se(this.fixed_title_name[0].title)
      .then(res1 => {
        this.new_recomendation.push(res1.results[0]);
        this.se(this.fixed_title_name[1].title).then(res2 => {
          this.new_recomendation.push(res2.results[0]);
          this.se(this.fixed_title_name[2].title).then(res3 => {
            this.new_recomendation.push(res3.results[0]);
            this.se(this.fixed_title_name[3].title).then(res4 => {
              this.new_recomendation.push(res4.results[0]);
              this.se(this.fixed_title_name[4].title).then(res5 => {
                this.new_recomendation.push(res5.results[0]);
                this.se(this.fixed_title_name[5].title).then(res6 => {
                  this.new_recomendation.push(res6.results[0]);
                  this.se(this.fixed_title_name[6].title).then(res7 => {
                    this.new_recomendation.push(res7.results[0]);
                    this.se(this.fixed_title_name[7].title).then(res8 => {
                      this.new_recomendation.push(res8.results[0]);
                      this.se(this.fixed_title_name[8].title).then(res9 => {
                        this.new_recomendation.push(res9.results[0]);
                        this.movie_rec = true;
                        // console.log(this.new_recomendation);
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
  }

  se(a) {
    const ases = { 'movie_title': a };
    return this.http.post('http://localhost:5000/get_details_title', ases).toPromise().
      then((response) => {
        return response.json();
      });
  }

  show(a) {
    console.log(a);
    localStorage.clear();
    localStorage.setItem('id', a);
    this.ngOnInit();
    this.get_movie_recomendation();
  }

}

