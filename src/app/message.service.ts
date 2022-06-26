import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { throwError, catchError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MessageService {
  path = 'http://erb-homework.osc-fr1.scalingo.io/message';
  e = "OK";

  constructor(private http: HttpClient, private p: Platform) {

    console.log(this.p.platforms);

    if (this.p.is('android'))
      this.path = 'http://erb-homework.osc-fr1.scalingo.io/message';


  }


  private httpErrorHandler(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error("A client side error occurs. The error message is " + error.message);
    } else {
      console.error(
        "An error happened in server. The HTTP status code is " + error.status + " and the error returned is " + error.message);
    }

    return throwError("Error occurred. Pleas try again");
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // deletemessage(id: number) {
  //   return this.http.delete(this.path + '/' + id, this.httpOptions).pipe(catchError(this.httpErrorHandler));
  // }


  addmessage(message: any) {
    console.log("add message");
    console.log(message);
    return this.http.post(this.path, message, this.httpOptions);
  }


  // updatemessage(message: any) {
  //   return this.http.put(this.path, message, this.httpOptions).pipe(catchError(this.httpErrorHandler));
  // }

  listmessage(id: number | null) {
    if (id == null)
      return this.http.get(this.path, this.httpOptions).pipe(catchError(this.httpErrorHandler));
    else
      return this.http.get(this.path + '/' + id, this.httpOptions).pipe(catchError(this.httpErrorHandler));

  }
}
function andriod(andriod: any) {
  throw new Error('Function not implemented.');
}

