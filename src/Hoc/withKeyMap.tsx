import React, {
  useState,
  forwardRef,
  createRef,
  ReactNode,
  KeyboardEventHandler,
  KeyboardEvent,
  ComponentType,
  Ref
} from 'react';


interface IProps {
  tabIndex: number
}

interface IChildProps {
  ref: Ref<unknown>
  actionKeys: (event: KeyboardEvent<Element>) => void
  focusKeys: () => void
  setKeys: React.Dispatch<React.SetStateAction<IKeys>>
}

interface IKeys {
  [key: string]: (event: KeyboardEvent) => void
}

export default (Component: ComponentType<IChildProps>): ReactNode => forwardRef(
  ({ tabIndex = 0, ...props }: IProps, ref) => {
    const [ keys, setKeys ] = useState<IKeys>({});
    const refKey = createRef<HTMLDivElement>();
    const actions: KeyboardEventHandler = (event) => {
      const action = keys[event.key];
      if (action) {
        event.preventDefault();
        event.stopPropagation();
        action(event);
      }
      return event;
    };
    return <div onKeyDown={actions} ref={refKey} tabIndex={tabIndex}>
      <Component
        ref={ref}
        {...props}
        actionKeys={actions}
        focusKeys={() => refKey.current && refKey.current.focus()}
        setKeys={setKeys}
      />
    </div>;
  });
