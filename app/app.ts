import { Application } from '@nativescript/core';
import { NotificationsService } from './services/notifications.service';

// Initialize notifications
const notificationsService = new NotificationsService();
notificationsService.requestPermissions();

Application.run({ moduleName: 'app-root' });