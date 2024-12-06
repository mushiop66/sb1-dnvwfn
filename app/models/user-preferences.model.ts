export interface UserPreferences {
  eventTypes: string[];
  musicGenres: string[];
  maxPrice: number;
  location: {
    latitude: number;
    longitude: number;
    radius: number;
  };
  notificationSettings: {
    newEvents: boolean;
    eventReminders: boolean;
    promotions: boolean;
  };
}