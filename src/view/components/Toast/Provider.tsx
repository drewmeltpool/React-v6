import React, { useState } from 'react';
import ToastContext, { IMessage, IProvidedData } from './Context';
import { v4 as uuidv4 } from 'uuid';

interface IProps {
  children: (_data: IProvidedData) => React.ReactElement;
}

const ToastProvider: React.FC<IProps> = ({ children }) => {
  const delay = 30000;
  const [message, setMessage] = useState<IMessage[]>([]);

  const deleteMessage = (messageID: string) => {
    setMessage((prev) => prev.filter(({ id }) => id !== messageID));
  };

  const handleAddMessage = (
    message: (_id: string) => string | React.ReactNode
  ) => {
    const id = uuidv4();

    setMessage((prev) => {
      const timer = setTimeout(deleteMessage, delay, id);

      const newMessage = { message: message(id), id, timer };
      return [...prev, newMessage];
    });
  };

  const handleRemoveMessage = (idx: string) => {
    setMessage((prev) => {
      const item = prev.find(({ id }) => id === idx);
      const newMessage = prev.filter(({ id }) => id !== idx);

      clearTimeout(item?.timer);

      return newMessage;
    });
  };

  const providedData: IProvidedData = {
    message,
    setMessage,
    delay,
    push: handleAddMessage,
    remove: handleRemoveMessage,
  };

  return (
    <ToastContext.Provider value={providedData}>
      {children(providedData)}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
