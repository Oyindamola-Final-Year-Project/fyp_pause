import type { NextPage } from 'next';
import styles from './profile-card.module.css';


const Card:NextPage = () => {
  	return (
    		<div className={styles.card}>
      			<div className={styles.box} />
            <div className={styles.button}>
            <div className={styles.buttonChild} />
            <div className={styles.connect}>Connect</div>
            </div>
      			<div className={styles.fullName}>Dr. Jane Doe</div>
      			<div className={styles.city}>Ajah</div>
      			<div className={styles.state}>Lagos State</div>
      			<div className={styles.profileIcon} />
      			<div className={styles.specialty}>I specialise in treating anxiety disorders through CBT and mindfulness-based treatments.</div>
      			<div className={styles.divider} />
    		</div>);
};

export default Card;
