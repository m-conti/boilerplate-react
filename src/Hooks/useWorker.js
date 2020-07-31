import { useEffect, useState, useRef } from 'react';
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
    setPost(() => worker.postMessage.bind(worker));
    return () => worker.terminate();
  };

  const messageHandler = ({ data: { result, error } }) => {
    if (error) return console.log(`${workerName}Worker error:`, error);
    console.log(`${workerName}Worker return results:`, result);
    results.current = [ ...results.current, result ];
  };

  const errorHandler = ({ filename, lineno, message }) => {
    console.error(
      `Error ${workerName}Worker: ${filename}, Line: ${lineno}, ${message}`
    );
  };

  const resultHandler = () => results.current.length && callback(results.current.aslast());

  const results = useRef([]);
  const [ post, setPost ] = useState(null);

  useEffect(resultHandler, [results.current]);
  useEffect(initWorker, []);

  return [ results.current, post ];
}

export default useWorker;
