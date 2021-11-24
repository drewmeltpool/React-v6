import React from 'react';

export type NotificationType = 'success' | 'warning' | 'error' | 'info';

export interface IProps {
  id: any;
  type: NotificationType;
  text: string | React.ReactNode;
}
