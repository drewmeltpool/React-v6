import React, { useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import classNames from '../../../utils/classNames';

interface IFlatItem {
  className?: string;
  [key: string]: any;
}

interface IFlatList {
  data: Array<any>;
  component: (props: any) => React.ReactNode;
  setKey?: (props: any) => string | number;
  element?: keyof JSX.IntrinsicElements;
  tag?: keyof JSX.IntrinsicElements;
  className?: string;
  itemProps?: IFlatItem;
  [key: string]: any;
}

const FlatList: React.FC<IFlatList> = ({
  data,
  component,
  setKey,
  element: Elem = 'div',
  tag: Tag = 'div',
  className,
  itemProps,
  ...rest
}) => {
  const elements = useMemo(
    () =>
      data.map((props) => (
        <Elem
          className={classNames('list-item', itemProps?.className)}
          key={setKey ? setKey(props) : uuidv4()}
        >
          {component(props)}
        </Elem>
      )),
    [data, Elem, itemProps?.className, setKey, component]
  );

  return (
    <Tag className={classNames('list', className)} {...rest}>
      {elements}
    </Tag>
  );
};

export default FlatList;
