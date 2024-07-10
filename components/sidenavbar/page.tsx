import type { NextPage } from 'next';
import styles from './page.module.css';

export type SidenavbarType = {
  	className?: string;
    onClose?: () => void; 
}



const Sidenavbar:NextPage<SidenavbarType> = ({ className="" }) => {
  	return (
    		<div className={[styles.sidenavbar, className].join(' ')}>
      			<div className={styles.sidenav}>
        				<div className={styles.pages}>
          					<div className={styles.hotline}>Hotline</div>
          					<div className={styles.hotline}>Connect</div>
          					<div className={styles.hotline}>About Us</div>
        				</div>
      			</div>
    		</div>);
};

export default Sidenavbar;
