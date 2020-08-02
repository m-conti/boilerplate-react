import { tImport } from './../types/types.d';
import { useEffect, useState, useRef } from 'react';
import * as workers from 'workers';

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

const useWorker = (workerName: string, callback: CallableFunction = () => {}): [any[], TPost] => {
  const initWorker = () => {
    const WorkerConstructor = (workers as tImport)[workerName] as unknown as Worker & (new () => Worker);
    if (!WorkerConstructor)
      throw new Error(`"${workerName}" is not handle as worker.`);
    const worker = new WorkerConstructor();
    worker.onmessage = messageHandler;
    worker.onerror = errorHandler;
    setPost(() => worker.postMessage.bind(worker));
    return () => worker.terminate();
  };

  const messageHandler = ({ data: { result, error } }: IWorkerResult) => {
    if (error) return console.log(`${workerName}Worker error:`, error);
    results.current = [ ...results.current, result ];
  };

  const errorHandler = ({ filename, lineno, message }: IWorkerError) => {
    console.error(
      `Error ${workerName}Worker: ${filename}, Line: ${lineno}, ${message}`
    );
  };

  const resultHandler = () => {
    if (results.current.length)
      return callback(results.current.aslast())
  };

  const results = useRef<unknown[]>([]);
  const [ post, setPost ] = useState<TPost>(null);

  useEffect(resultHandler, [results.current]);
  useEffect(initWorker, []);

  return [ results.current, post ];
}

export default useWorker;
