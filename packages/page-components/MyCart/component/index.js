import { useSelector } from 'react-redux'
import Image from 'next/image';

import Summary from './Summary';
import Checkout from './Checkout';

import styles from './styles.module.css';
import empty_cart from '@/packages/assests/emptyCart.jpeg'

function MyCart() {
	const { myCart=[] } = useSelector((state)=>state);

	if(myCart.length === 0){
		return (
			<div className={styles.empty_state}>
				<Image src={empty_cart} width={516} height={430} alt='empty cart' />
				<h3>Your Cart is empty</h3>
				<h3>Add Books to get started</h3>
			</div>
		)
	}

	return (
		<div className={styles.container}>
			<div className={styles.summary_section}>
				<Summary myCart={myCart}/>
			</div>

			<div className={styles.checkout_section}>
				<Checkout myCart={myCart}/>
			</div>
		</div>
	)
}

export default MyCart