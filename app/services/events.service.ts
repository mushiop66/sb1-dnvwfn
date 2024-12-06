import { Observable } from '@nativescript/core';
import { Event } from '../models/event.model';

export class EventsService extends Observable {
  private events: Event[] = [];

  getEvents(): Event[] {
    return this.events;
  }

  getEventsByType(type: string): Event[] {
    return this.events.filter(event => event.type === type);
  }

  getNearbyEvents(latitude: number, longitude: number, radius: number): Event[] {
    return this.events.filter(event => {
      // Calculate distance and filter based on radius
      const distance = this.calculateDistance(
        latitude,
        longitude,
        event.location.latitude,
        event.location.longitude
      );
      return distance <= radius;
    });
  }

  private calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    // Haversine formula implementation
    const R = 6371; // Earth's radius in km
    const dLat = this.toRad(lat2 - lat1);
    const dLon = this.toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  private toRad(degrees: number): number {
    return degrees * (Math.PI / 180);
  }
}