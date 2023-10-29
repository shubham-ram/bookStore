import formatAmount from '@/packages/utils/formatAmount';
import AddtoCart from '@/packages/common/Button/AddtoCart';

import user from "@/packages/assests/user.png"

import styles from './styles.module.css';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '@/store/action/cart';
import GoToCart from '@/packages/common/Button/GoToCart';

function InfoContainer({ book = {} }) {
    const { author, description, price, publisher, title, isbn } = book || {};

    const dispatch = useDispatch();

    const { myCart } = useSelector((state) => state);

    const isItemAddedToCart = myCart.map((item) => item.isbn).includes(isbn);

    const addBookToCartHandler = () => {
        dispatch(addToCart({ ...book, quantity: 1 }))
    }

    return (
        <div className={styles.info_container}>
            <div>
                <div className={styles.flex_box}>
                    <Image src={user} width={20} height={20} alt={author} />
                    <p>{author}</p>
                </div>

                <h1 className={styles.title}>{title}</h1>
            </div>

            <div className={styles.info}>
                <p>Publisher: {publisher}</p>
                <p>{description}</p>
            </div>

            <span className={styles.amount}>
                {formatAmount({
                    amount: price,
                    options: {
                        notation: 'standard',
                        style: 'currency',
                    }
                })}
            </span>

            {!isItemAddedToCart ?
                <AddtoCart
                    className='book_info'
                    onClick={addBookToCartHandler}
                />
                : <GoToCart />}
        </div>
    )
}

export default InfoContainer