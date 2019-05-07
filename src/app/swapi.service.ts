import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { merge, empty, race } from 'rxjs';
import { expand } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private httpSvc: HttpClient) { }

  getPlanets() {
    /*let p1 = this.httpSvc.get('https://swapi.co/api/planets');
    let p2 = this.httpSvc.get('https://swapi.co/api/planets?page=2');
    let p3 = this.httpSvc.get('https://swapi.co/api/planets?page=3');
    let p4 = this.httpSvc.get('https://swapi.co/api/planets?page=4');
    let p5 = this.httpSvc.get('https://swapi.co/api/planets?page=5');
    let p6 = this.httpSvc.get('https://swapi.co/api/planets?page=6');
    let p7 = this.httpSvc.get('https://swapi.co/api/planets?page=7'); */
    
     //return merge(p1, p2);
     //return merge(p1, p2, p3, p4, p5, p6, p7);
    return this.httpSvc.get('https://swapi.co/api/planets').pipe(
      expand(data => 
        (<any> data).next ?
        this.httpSvc.get((<any> data).next) :
        empty()
      )
    ); 
    
  }
}