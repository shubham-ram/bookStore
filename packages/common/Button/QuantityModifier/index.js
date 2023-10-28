import styles from './styles.module.css'
import { useDispatch } from 'react-redux';
import { incrementQuantity } from '@/store/action/cart';
import { decrementQuantity } from '@/store/action/cart';

function QuantityModifier({quantity=0, isbn=''}) {
    const dispatch = useDispatch();

    return (
        <div className={styles.container}>
            <button
                type='button'
                className={styles.btn}
                onClick={()=>dispatch(decrementQuantity(isbn))}
                disabled={quantity === 1}
            >
                -
            </button>

            <div className={styles.count}>{quantity}</div>

            <button
                type='button'
                className={styles.btn}
                onClick={()=>dispatch(incrementQuantity(isbn))}
            >
                +
            </button>
        </div>
    )
}

export default QuantityModifier