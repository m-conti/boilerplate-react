const dispatchAction = ({ type, payload }) => ({
  RETURN: (payload) => postMessage(payload),
}[type] || (() => {}))(payload);

onmessage = ({ data: { type, payload } }) => {
  dispatchAction({ type, payload });
}
