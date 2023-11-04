import './Header.css';
import * as React from 'react';
import TitleimgChange from '../../../public/TitleImgChange.png';
import LazyLoad from 'react-lazyload'
export const Header = () => {
  return (
    <header className="Header">
      <div className="Header_Left">
        <span className="Header_Left_CRYPO">
          <LazyLoad>
          <img className="Header_Left_Img" src={TitleimgChange} />
          </LazyLoad>
          CRYPO
        </span>
        <span>Exchange</span>
        <span>Market</span>
        <span>Dashboard</span>
        <span>Others</span>
      </div>
      <div></div>
      <div></div>
    </header>
  );
};
