import { Injectable } from '@angular/core';
import { HelloWorldClientService } from '../../infrastructures/hello/hello-world-client.service';

@Injectable({
  providedIn: 'root'
})
export class GreetingUseCaseService {

  constructor(private helloClient: HelloWorldClientService) {
  }

  greeting(name: string): Promise<Greeting> {
    return this.helloClient.hello(name);
  }
}

export interface Greeting {
  subject: string;
  message: string;
}
