import { LocalNotifications } from '@nativescript/local-notifications';
import { PushNotifications } from '@nativescript/push-notifications';

export class NotificationsService {
  async requestPermissions(): Promise<void> {
    try {
      await LocalNotifications.requestPermission();
      await PushNotifications.register({ types: ['alert', 'sound', 'badge'] });
    } catch (error) {
      console.error('Error requesting notification permissions:', error);
    }
  }

  scheduleEventReminder(eventId: string, title: string, datetime: Date): void {
    LocalNotifications.schedule([{
      id: parseInt(eventId),
      title: title,
      body: "Don't forget your upcoming event!",
      at: new Date(datetime.getTime() - 30 * 60000) // 30 minutes before
    }]);
  }
}