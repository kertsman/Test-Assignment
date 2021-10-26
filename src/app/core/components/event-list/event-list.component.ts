import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Event } from "../../models/event.model";
import { EventService } from "../../services/event.service";
import * as _ from 'lodash';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  templateUrl: './event-list.component.html',
  providers: [MessageService,ConfirmationService]
})
export class EventListComponent implements OnInit {

  lodash = _;
  form: FormGroup = this.initForm();
  eventDialog: boolean = false;

  events: Event[] = [];

  selectedEvents: Event[] | null = null;

  submitted: boolean = false;

  constructor(private eventService: EventService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService,
              private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.fetchEvents();
  }

  private fetchEvents() {
    this.eventService.getAllEvents()
      .subscribe((data: any) =>{
        this.events = data.result
      });

  }

  openNew() {
    this.submitted = false;
    this.eventDialog = true;
    this.form.reset();
  }

  deleteSelectedEvents() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected event?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.eventService.deleteEvents(this.selectedEvents!.map(val => val.eventId)).subscribe(val => {
          this.selectedEvents = null;
          this.fetchEvents();
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Events Deleted', life: 3000});
        });
      }
    });
  }

  editEvent(event: Event| {}) {
    this.form.patchValue(event);
    this.eventDialog = true;
  }

  deleteEvent(event: Event| null) {
    if (event === null) return;
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + event.eventId + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {

        this.eventService.deleteEvent(event.eventId).subscribe((response) => {
          if (!response)
            return;

          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Event Deleted', life: 3000});
          this.fetchEvents();
        });

      }
    });
  }

  hideDialog() {
    this.eventDialog = false;
    this.submitted = false;
    this.form.reset();
  }

  saveEvent() {
    if(!this.form.valid) {
      return;
    }

    this.submitted = true;

    if (this.form.get('eventId')?.value) {
       this.eventService.updateEvent(this.form.getRawValue() as Event).subscribe(() => {
         this.fetchEvents();
         this.messageService.add({severity:'success', summary: 'Successful', detail: 'Event Updated', life: 3000});
       })
    } else {
      this.eventService.createEvent({...this.form.getRawValue(), eventId: Math.floor(Math.random() * 1000000000000)} as Event).subscribe(() => {
        this.fetchEvents();
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Event Created', life: 3000});
      })
    }

    this.eventDialog = false;
  }

  private initForm (){
    // TO reduce amount of code and time, I didn't put "Validators.pattern("^[0-9]*$")" on all numeric fields.
    return this.formBuilder.group({
      healthIndex: [''],
      endDate: [''],
      minValueDateTime: ['', Validators.pattern("^[0-9]*$"),],
      type: [''],
      cowId: [''],
      animalId: [''],
      eventId: [''],
      deletable: [''],
      lactationNumber: ['', Validators.pattern("^[0-9]*$"),],
      daysInLactation: ['', Validators.pattern("^[0-9]*$"),],
      ageInDays: ['', Validators.pattern("^[0-9]*$"),],
      startDateTime: [''],
      reportingDateTime: [''],
      alertType: [''],
      duration: [''],
      originalStartDateTime: [''],
      endDateTime: [''],
      daysInPregnancy: [''],
      heatIndexPeak: [''],
      newGroupId: [''],
      newGroupName: [''],
      currentGroupId: [''],
      currentGroupName: [''],
      destinationGroup: [''],
      destinationGroupName: [''],
      calvingEase: [''],
      oldLactationNumber: [''],
      newborns: [''],
      cowEntryStatus: [''],
      birthDateCalculated: [''],
      sire: [''],
      breedingNumber: [''],
      isOutOfBreedingWindow: [''],
      interval: [''],
    });
  }
}
