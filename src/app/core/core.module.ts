import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { EventListComponent } from "./components/event-list/event-list.component";
import { TableModule } from "primeng/table";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import {VirtualScrollerModule} from 'primeng/virtualscroller';
import {ToastModule} from 'primeng/toast';
import { ToolbarModule } from "primeng/toolbar";
import { NgModule } from "@angular/core";
import { EventService } from "./services/event.service";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { SharedModule } from "../shared/shared.module";
import { DbInterceptor } from "./interceptor/db-interceptor";
import { FormsModule } from "@angular/forms";
import { GreetingsComponent } from './components/greetings/greetings.component';

const routes: Routes = [
  { path: '',  component: EventListComponent },
];

@NgModule({
  declarations: [
    EventListComponent,
    GreetingsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule,
  ],
  providers: [EventService,
    { provide: HTTP_INTERCEPTORS, useClass: DbInterceptor, multi: true }],
  exports: [RouterModule]
})
export class CoreModule { }
