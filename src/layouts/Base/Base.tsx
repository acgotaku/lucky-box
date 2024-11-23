import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './base.module.css';

const BaseLayout: React.FC = () => {
  return (
    <div className={styles.base}>
      <Outlet />
    </div>
  );
};

export default BaseLayout;
