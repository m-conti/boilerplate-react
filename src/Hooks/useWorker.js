import { useEffect, useState } from 'react';
import * as workers from 'workers';

function useWorker(workerName, callback = () => null) {
  const initWorker = () => {
    console.log(`INIT ${workerName}Worker`);
    const WorkerConstructor = workers[workerName];
    if (!WorkerConstructor)
      throw new Error(`"${workerName}" is not handle as worker.`);
    const worker = new WorkerConstructor();
    worker.onmessage = messageHandler;
    worker.onerror = errorHandler;
    return worker.postMessage.bind(worker);
  };

  const messageHandler = ({ data: { result, error } }) => {
    if (error) return console.log(`${workerName}Worker error:`, error);
    console.log(`${workerName}Worker return results:`, result);
    setState({ ...state, responses: [ ...state.responses, result ] });
  };

  const errorHandler = ({ filename, lineno, message }) => {
    console.error(`Error ${workerName}Worker: ${filename}, Line: ${lineno}, ${message}`);
  };

  const responseHandler = () => {
    if (state.responses.length)
      return callback(state.responses[state.responses.length - 1]);
  };

  const [ state, setState ] = useState({ responses: [] });
  const [post] = useState(initWorker);

  useEffect(responseHandler, [state.responses]);

  return [ state, post ];
}

export default useWorker;
