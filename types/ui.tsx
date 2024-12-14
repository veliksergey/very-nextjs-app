import {ReactNode} from 'react';

export interface ILink {
  href: string;
  title: string;
  icon?: string;
  iconComponent?: ReactNode;
}