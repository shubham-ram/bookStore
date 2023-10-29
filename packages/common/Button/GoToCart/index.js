import { useRouter } from 'next/router';
import styles from './styles.module.css';

function GoToCart({ size='md' }) {
    const { push } = useRouter();

    return (
        <button
            type='button'
            className={`${styles.button} ${styles[size]}`}
            onClick={()=> push('/my-cart')}
        >
            Go To Cart
        </button>
    )
}

export default GoToCart