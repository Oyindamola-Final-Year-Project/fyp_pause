"use client"

import type { NextPage } from 'next';
import styles from './page.module.css';
import Navbar from '@/components/navbar/page';
import Card from '@/components/profile-card/profile-card';


const Desktop:NextPage = () => {
  	return (
    		<div className={styles.desktop1}>
				<Navbar/>
				<Card />
    		</div>);
};

export default Desktop;
