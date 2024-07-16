import type { NextPage } from 'next';
import styles from './page.module.css';


const Sidenavclosed:NextPage = () => {
  	return (
    		<div className={styles.sidenavclosed}>
      			<img className={styles.addressBookIcon} alt="" width="24px" height="24px" src="images/address-book.svg" />
      			<img className={styles.commentDotsIcon} alt="" width="24px" height="24px" src="images/comment-dots.svg" />
    		</div>);
};

export default Sidenavclosed;
