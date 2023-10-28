import Image from 'next/image';
import styles from './styles.module.css';
import cartImg from "@/packages/assests/shopping-cart.png"

const SIZE_MAPPING = {
    sm: {
        width: 16,
        height: 16,
    },
    md: {
        width: 20,
        height: 20
    }
}

function AddtoCart({showIcon=false, onClick=()=>{}, size='md', className=''}) {
    const {width, height} = SIZE_MAPPING[size]
    return (
        <button className={`${styles.btn} ${styles[size]} ${styles?.[className]}`} onClick={onClick}>
            {showIcon ? <Image className={styles.cart_img} src= {cartImg} width={width} height={height}/> : null}
            <span>Add to Cart</span>
        </button>
    )
}

export default AddtoCart    