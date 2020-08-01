import Lang from 'startup/global/Lang/class';


export interface Global {
  document: Document;
  window: Window;
  navigator: Navigator;
  rerender: Function;
  lang: Lang;
}
