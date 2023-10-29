import Image from 'next/image';
import QuantityModifier from '@/packages/common/Button/QuantityModifier';
import getFormattedAmt from '../../utils/getFormattedAmount';

import styles from './style.module.css'
import { useDispatch } from 'react-redux';
import { removeFromCart } from '@/store/action/cart';

function Summary({ myCart=[] }) {
    const dispatch = useDispatch();

    return (
        <div className={styles.container}>

            <div className={`${styles.flex_box} ${styles.header}`}>
                <div className={styles.item}>Shopping bag</div>
                <div className={styles.quantity}>Quantity</div>
                <div className={styles.price}>Price</div>
            </div>

            <div className={styles.scroll_content}>
                {myCart.map((cart)=>{
                    const {title, author, isbn, price,book_image, quantity=1} = cart||{}

                    return (
                        <div key={isbn} className={`${styles.flex_box} ${styles.row}`}>

                            <div className={`${styles.flex_box} ${styles.item}`}>
                                <Image src={book_image} width={60} height={90} alt={title}/> 

                                <div className={styles.info}>
                                    <h3>{title}</h3>
                                    <p>by {author}</p>    
                                </div>   
                            </div>

                            <div className={styles.quantity}>
                                <QuantityModifier quantity={quantity} isbn={isbn}/>
                            </div>

                            <div className={styles.price}>
                                {getFormattedAmt({amount: quantity * (+price)})}
                            </div>

                            <div
                                className={styles.remove}
                                onClick={()=> dispatch(removeFromCart(isbn))}
                                role='presentation'
                            >
                                <p>Remove</p>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Summary