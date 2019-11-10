import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MouseEventComponent } from './mouse-event/mouse-event.component';
import { TypeAheadComponent } from './type-ahead/type-ahead.component';


const routes: Routes = [
  { path: 'mouse', component: MouseEventComponent },
  { path: 'type-ahead', component: TypeAheadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
