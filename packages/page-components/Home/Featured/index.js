import Image from 'next/image';
import styles from './styles.module.css'
import books from "@/data/book.json";
import formatAmount from '@/packages/utils/formatAmount';
import AddtoCart from '@/packages/common/Button/AddtoCart';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '@/store/action/cart';
import GoToCart from '@/packages/common/Button/GoToCart';

const featuredBooks = books.slice(0, 3)

function FeatureSection() {
    const { myCart } = useSelector((state) => state);

    const dispatch = useDispatch();

    const addBookToCartHandler = ({ book }) => {
        dispatch(addToCart({ ...book, quantity: 1 }))
    }


    return (
        <div className={styles.container}>
            <h2>Featured</h2>

            <div className={styles.feature_sec}>

                {featuredBooks.map((book) => {
                    const { title, description, author, book_image, price, isbn } = book || {};

                    const isItemAddedToCart = myCart.map((item) => item.isbn).includes(isbn);

                    return (
                        <div key={isbn} className={styles.book_card}>
                            <Image
                                width={120}
                                height={180}
                                src={book_image}
                                className={styles.book_img}
                                alt={title}
                            />

                            <div className={styles.info_section}>
                                <div>
                                    <h3>{title}</h3>
                                    <p className={styles.author}>By {author}</p>
                                    <p className={styles.desc}>{description}</p>
                                </div>

                                <div className={styles.footer}>
                                    {formatAmount({
                                        amount: price,
                                        options: {
                                            notation: 'standard',
                                            style: 'currency',
                                        }
                                    })}

                                    {!isItemAddedToCart ?
                                        <AddtoCart
                                            onClick={() => addBookToCartHandler({ book })}
                                            showIcon
                                        /> 
                                        : <GoToCart />}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>


        </div>
    )
}

export default FeatureSection