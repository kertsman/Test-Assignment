import { Injectable } from '@angular/core';
import { CoreModule } from "../core.module";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { of } from "rxjs";
import { Event } from "../models/event.model";

@Injectable()
export class EventService {

  constructor(private http: HttpClient) { }

  getAllEvents(){
    return this.http.get('api/events/get-events').pipe(
      catchError(() => {
        alert('event fetching error');
        return of([]);})
    )
  }

  deleteEvent(identificator: number| undefined,){
    return this.http.delete(`api/events/delete-event/${identificator}`).pipe(
      catchError(() => {
        return of(null);})
    )
  }

  deleteEvents(identificators: number[]){
    return this.http.delete(`api/events/delete-events`, {body: identificators}).pipe(
      catchError(() => {
        return of(null);})
    )
  }

  createEvent(event: Event){
    return this.http.post('api/events/create-events', event).pipe(
      catchError(() => {
        alert('event creation error');
        return of(null);})
    )
  }

  updateEvent(event: Event){
    return this.http.patch(`api/events/update-events/${event.eventId}`, event).pipe(
      catchError(() => {
        alert('event updating error');
        return of(null);})
    )
  }
}
