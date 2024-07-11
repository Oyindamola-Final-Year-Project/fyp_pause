import type { NextPage } from 'next';
import styles from './page.module.css';
import Link from 'next/link';

export type SidenavbarType = {
  	className?: string;
    onClose?: () => void; 
}



const Sidenavbar:NextPage<SidenavbarType> = ({ className="" }) => {
  	return (
    		<div className={[styles.sidenavbar, className].join(' ')}>
      			<div className={styles.sidenav}>
        				<div className={styles.pages}>
							<Link href="/chat" className={styles.hotline}>
          					  Chat
          					</Link>
          					<Link href="/connect" className={styles.links}>
          					  Connect
          					</Link>
        				</div>
      			</div>
    		</div>);
};

export default Sidenavbar;
