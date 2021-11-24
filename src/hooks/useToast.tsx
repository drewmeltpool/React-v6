import { useContext } from 'react';
import ToastContext, { IProvidedData } from '../view/components/Toast/Context';

export const useToast = () => useContext<IProvidedData>(ToastContext);
