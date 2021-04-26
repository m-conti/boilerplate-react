export interface IFunctionImport {
  [key: string]: Function
}

export interface IFunctionalMap {
  [key: string]: Function
}

export type tLocale = 'fr'|'en';

export interface ILocalePath {
  [key: tLocale]: string
}

export interface ICheckString {
  check: string,
  params: [any]|any
}

