self.languagePluginUrl = process.env.PUBLIC_URL;

importScripts('public/pkg/index.js');

const dispatchAction = ({ type, payload }) => ({
  RETURN: (payload) => postMessage(payload),
}[type] || (() => {}))(payload);

onmessage = ({ data: { type, payload } }) => {
  dispatchAction({ type, payload });
};

postMessage({ result: `LOADED on ${process.env.PUBLIC_URL}` });


// greet();
