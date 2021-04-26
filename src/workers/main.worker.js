import * as python from '../python';
self.languagePluginUrl = process.env.PUBLIC_URL;
self.history = self.history || []
importScripts('pyodide.js');

const dispatchAction = ({ type, payload }) => ({
  RETURN: (payload) => postMessage(payload),
}[type] || (() => {}))(payload);

onmessage = ({ data: { type, payload } }) => {
  dispatchAction({ type, payload });
}
