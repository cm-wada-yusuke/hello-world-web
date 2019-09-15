import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Greeting } from '../../domains/greeting/greeting-use-case.service';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldClientService {

  // <1>
  private resourcePath =
    environment.helloApi.baseUrl + '/hello';

  private headers = {'Content-Type': 'application/json'};

  // <2>
  constructor(
    private http: HttpClient
  ) {
  }

  // <3>
  hello(name: string): Promise<Greeting> {
    return this.http.post(this.resourcePath, {
      name
    }, {
      headers: new HttpHeaders(this.headers)
    }).toPromise().then(this.convertGreeting);
  }

  // <4>
  private convertGreeting(response): Greeting {
    const item = response as HelloWorldResponse;
    return {
      subject: item.title,
      message: item.description
    };
  }
}

interface HelloWorldResponse {
  title: string;
  description: string;
}
