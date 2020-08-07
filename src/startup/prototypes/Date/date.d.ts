import { Moment } from 'moment';

declare global {
  interface Date {
    asformat(format?: string): string;
    asmoment(format?: string): Moment;
  }
}
