import React from 'react';
import styles from './Banner.module.css';
import imgBanner from './player.png'

const Banner = () => {
  return (
    <div className={styles.banner}>
        <div className="banner-item">
          <img src={imgBanner} alt="" />
        </div>
    </div>
  );
}

export default Banner;
