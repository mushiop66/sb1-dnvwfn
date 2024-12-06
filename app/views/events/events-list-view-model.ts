import { Observable } from '@nativescript/core';
import { EventsService } from '../../services/events.service';
import { Event } from '../../models/event.model';

export class EventsListViewModel extends Observable {
  private eventsService: EventsService;
  private _events: Array<Event>;

  constructor() {
    super();
    this.eventsService = new EventsService();
    this._events = [];
    this.loadEvents();
  }

  get events(): Array<Event> {
    return this._events;
  }

  private loadEvents() {
    this._events = this.eventsService.getEvents();
    this.notifyPropertyChange('events', this._events);
  }

  onEventTap(args: any) {
    const event = this._events[args.index];
    // Navigate to event details
    // TODO: Implement navigation
  }

  showFilters() {
    // TODO: Show filters modal/page
  }

  performSearch(args: any) {
    const searchBar = args.object;
    const searchValue = searchBar.text.toLowerCase();
    
    this._events = this.eventsService.getEvents().filter(event => 
      event.title.toLowerCase().includes(searchValue) ||
      event.description.toLowerCase().includes(searchValue)
    );
    
    this.notifyPropertyChange('events', this._events);
  }

  clearSearch() {
    this.loadEvents();
  }
}