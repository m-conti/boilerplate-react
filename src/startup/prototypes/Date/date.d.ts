import { Moment } from 'moment';

declare interface Date {
  asformat(format?: string): string;
  asmoment(format?: string): Moment;
}
