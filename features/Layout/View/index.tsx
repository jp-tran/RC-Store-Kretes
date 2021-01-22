import React from 'react';

import { NavBar } from 'NavBar/View';
import { LayoutProps } from '../Shape';
import { Footer } from 'Footer/View'

export const Layout = (props: LayoutProps) => {
  return (
    <div className='w-screen min-h-screen overflow-x-hidden'>
      <NavBar />
      <div className='flex justify-center'>{props.children}</div>
      <Footer />
    </div>
  );
};
