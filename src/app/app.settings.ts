import { InjectionToken } from '@angular/core';

export interface AppSettings {
  title: string;
  version: string;
}
export const APP_SETTINGS = new InjectionToken<AppSettings>('app.settings');

export const appSettings: AppSettings = {
  title: 'My e-Shop',
  version: '1.0'
};
