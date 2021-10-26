import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "./shared/shared.module";
import { GreetingsComponent } from "./core/components/greetings/greetings.component";

const routes: Routes = [
  { path: '',  component:  GreetingsComponent},
  { path: 'events',  loadChildren: () => import('./core/core.module').then(m => m.CoreModule) },
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    SharedModule
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
