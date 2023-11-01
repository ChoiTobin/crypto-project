import { Header } from './Header';
import './Layout.css';
import * as React from 'react';
import {ReactNode} from 'react'

interface LayoutProps{
  children:ReactNode;
}

export const Layout:React.FC<LayoutProps> = ({children}) => {
  return (
    <>
      <body>
        <Header />
        <div className="Layout_Body">{children}</div>
      </body>
    </>
  );
};
