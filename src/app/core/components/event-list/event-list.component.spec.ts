import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventListComponent } from './event-list.component';
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../../../shared/shared.module";
import { EventService } from "../../services/event.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { DbInterceptor } from "../../interceptor/db-interceptor";

describe('EventListCOmponent', () => {
  let component: EventListComponent;
  let fixture: ComponentFixture<EventListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventListComponent ],
      imports: [
        FormsModule,
        SharedModule
      ],
      providers: [EventService,
        { provide: HTTP_INTERCEPTORS, useClass: DbInterceptor, multi: true }],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create new Event', () => {
    component.openNew();
    component.saveEvent();
    expect(component.events.length).toEqual(101);
  });
});
