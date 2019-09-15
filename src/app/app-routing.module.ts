import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'hello-world',
    pathMatch: 'full'
  },
  {
    path: 'hello-world',
    component: HelloWorldComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
