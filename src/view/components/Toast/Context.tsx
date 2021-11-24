import React from 'react';

export interface IMessage {
  id: string;
  message: string | React.ReactNode;
  timer: number;
}

export interface IProvidedData {
  delay: number;
  message: IMessage[];
  setMessage: React.Dispatch<React.SetStateAction<IMessage[]>>;
  push: (_message: (id: any) => string | React.ReactNode) => void;
  remove: (_id: string) => void;
}

export type InitialType = IProvidedData | any;

const ToastContext = React.createContext<InitialType>({});

export default ToastContext;
