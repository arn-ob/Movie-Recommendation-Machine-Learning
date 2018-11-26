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
        this.getPrice();
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
        });
    this.getPrice();
  }

  getPrice() {
    const a = [{ 'id': this.list[1] }];
    // this.http.post('http://localhost:5000/get_details', a).subscribe(
    //   response => {
    //     console.log(response.json());
    //   },
    //   err => {
    //     console.log(err);
    //   });

    // setTimeout(() => {
    //   const ase = [{ 'id': this.list[2] }];
    //   this.http.post('http://localhost:5000/get_details', ase).subscribe(
    //     response => {
    //       console.log(response.json());
    //     },
    //     err => {
    //       console.log(err);
    //     });
    // }, 300);

    // setTimeout(() => {
    //   const ase = [{ 'id': this.list[3] }];
    //   this.http.post('http://localhost:5000/get_details', ase).subscribe(
    //     response => {
    //       console.log(response.json());
    //     },
    //     err => {
    //       console.log(err);
    //     });
    // }, 300);

    // setTimeout(() => {
    //   const ase = [{ 'id': this.list[4] }];
    //   this.http.post('http://localhost:5000/get_details', ase).subscribe(
    //     response => {
    //       console.log(response.json());
    //       if (response.json().status_code === 34) {
    //         console.log('not fund');
    //       }
    //     },
    //     err => {
    //       console.log(err);
    //     });
    // }, 300);

    // setTimeout(() => {
    //   const ase = [{ 'id': this.list[5] }];
    //   this.http.post('http://localhost:5000/get_details', ase).subscribe(
    //     response => {
    //       console.log(response.json());
    //     },
    //     err => {
    //       console.log(err);
    //     });
    // }, 300);


    // setTimeout(() => {
    this.se(30).then(res =>
      console.log(res)).then(
        () => {
          this.se(28).then(
            ress => {
              console.log(ress);
            }).then(
              () => {
                this.se(1120).then(
                  (res) => {
                    console.log(res);
                  }
                );
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

