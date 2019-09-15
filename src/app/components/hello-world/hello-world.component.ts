import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Greeting, GreetingUseCaseService } from '../../domains/greeting/greeting-use-case.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  sayHello: Promise<Greeting>;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private useCase: GreetingUseCaseService
  ) {
    this.greeting();
  }

  greeting() {
    this.sayHello = this.useCase.greeting('angular');
  }

}
