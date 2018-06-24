import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,  } from 'rxjs';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Metodo responsavel por buscar os posts no webservice
   */
  public getPosts(): Observable<any> {
    
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let params = new HttpParams();
    // params = params.append('', '');

    return this.http.get<any[]>(`${environment.jsonPlaceHolder}/posts`, { params })
    .pipe(map(response => response))
    .pipe(catchError(err => Observable.throw(this.errorHandler(err))));

  }

  public errorHandler(err): string {
    console.log()
    return err;
  }

}
