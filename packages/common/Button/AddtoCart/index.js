import Image from 'next/image';
import styles from './styles.module.css';
import cartImg from "@/packages/assests/shopping-cart.png"

function AddtoCart({onClick=()=>{}}) {
    return (
        <button className={`${styles.btn} cart_btn`} onClick={onClick}>
            <Image className={styles.cart_img} src= {cartImg} width={20} height={20}/>
            <span>Add to Cart</span>
        </button>
    )
}

export default AddtoCart    