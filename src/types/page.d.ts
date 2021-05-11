import { Dictionary } from 'types/lodash';
import { ComponentType } from 'react';
import { ILocalePath, tLocale } from 'types/types';

export interface IPage {
  name: string;
  path: string | ILocalePath;
  component?: ComponentType;
  pages?: IPage[];
  exact?: boolean;
  middlewares?: string[];
}

export interface IRoute {
  name: string;
  path: string;
  exact: boolean;
  component: ComponentType;
}

export interface INestedRoute {
  [index: number]: IRoute | INestedRoute;
}

export type tPageMiddleware = (Component: ComponentType) => ComponentType;

export interface IPageMiddlewareList {
  [key: string]: IPageMiddleware
}

export interface ILocationData {
  name: string
  locale: tLocale
  params: Dictionary<string>
}

export interface IPathData extends ILocationData {
  match: string
}

export interface IListPathData {
  [index: number]: IPathData
}
