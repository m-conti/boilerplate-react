import { IWorkersImport } from 'types/types';
import { useEffect, useState, useRef } from 'react';
import useForceUpdate from './useForceUpdate';
import * as workers from 'workers';
import useMount from './useMount';

type TPost = Function | null;

interface IWorkerResult {
  data: {
    result: unknown
    error: string
  }
}

interface IWorkerError extends ErrorEvent {
  filename: string
  lineno: number
}

const useWorker = (workerName: string, callback: CallableFunction = () => {}): [unknown[], TPost] => {
  const forceUpdate = useForceUpdate();

  const initWorker = () => {
    const WorkerConstructor = (workers as IWorkersImport)[workerName];
    if (!WorkerConstructor)
      throw new Error(`"${workerName}" is not handle as worker.`);
    const worker = new WorkerConstructor();
    worker.onmessage = messageHandler;
    worker.onerror = errorHandler;
    setPost(() => worker.postMessage.bind(worker));
    return () => worker.terminate();
  };

  const messageHandler = ({ data: { result, error } }: IWorkerResult) => {
    if (error) return console.error(`${workerName}Worker error:`, error);
    results.current = [ ...results.current, result ];
    forceUpdate();
  };

  const errorHandler = ({ filename, lineno, message }: IWorkerError) => {
    console.error(
      `Error ${workerName}Worker: ${filename}, Line: ${lineno}, ${message}`
    );
  };

  const resultHandler = () => {
    console.log(results.current);
    if (results.current.length)
      return callback(results.current.aslast());
  };

  const results = useRef<unknown[]>([]);
  const [ post, setPost ] = useState<TPost>(null);

  useEffect(resultHandler, [results.current]);
  useMount(initWorker);

  return [ results.current, post ];
};

export default useWorker;
