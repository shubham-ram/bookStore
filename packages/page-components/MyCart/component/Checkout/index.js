import getFormattedAmt from '../../utils/getFormattedAmount';
import styles from './styles.module.css';

function Checkout({ myCart=[] }) {

    const totalPrice = (()=>{
        return myCart.reduce((acc, curr)=>{
            return acc + (+curr.price * curr.quantity)
        }, 0)
    })()

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Bill Summary</h3>

            <div className={styles.row}>
                <span>Subtotal</span>
                <span className={styles.value}>
                    {getFormattedAmt({ amount: totalPrice })}
                </span>
            </div>

            <div className={styles.row}>
                <span>Shipping</span>

                <span className={styles.value}>
                    {getFormattedAmt({ amount: 100 })}
                </span>
            </div>

            <div className={`${styles.row} ${styles.total_row}`}>
                <span>Total</span>

                <span className={styles.value}>
                    {getFormattedAmt({ amount: totalPrice + 100 })}
                </span>
            </div>
        </div>
    )
}

export default Checkout