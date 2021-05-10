import { greet } from 'pkg';

const dispatchAction = ({ type, payload }) => ({
  RETURN: (payload) => postMessage(payload),
  GREET: greet,
}[type] || (() => {}))(payload);

onmessage = ({ data: { type, payload } }) => {
  dispatchAction({ type, payload });
};

postMessage({ result: dispatchAction({ type: 'GREET' }) });

