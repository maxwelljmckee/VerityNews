import React, { Fragment } from 'react';

import Sidebar from './Sidebar';
import MainPageComponent from './MainPageComponent';
import Navbar from './Navbar';


const MainPageLayout = () => {
  return (
    <Fragment>
      <div className='main__page__container'>
        <div className='main__page__group-1'>
          <Sidebar />
        </div>
        <div className='main__page__group-2'>
          <Navbar />
          <MainPageComponent />
        </div>
      </div>
    </Fragment>
  )
}


export default MainPageLayout;