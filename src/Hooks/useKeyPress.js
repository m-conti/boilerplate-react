function useKeyPress(targetKey, callback = () => null) {
  const [ keyPressed, setKeyPressed ] = useState(false);

  const downHandler = ({ key }) => key === targetKey && setKeyPressed(true);
  const upHandler = ({ key }) => key === targetKey && setKeyPressed(false);

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []);

  useEffect(() => keyPressed && callback(), [keyPressed]);

  return keyPressed;
}

export default useKeyPress;
