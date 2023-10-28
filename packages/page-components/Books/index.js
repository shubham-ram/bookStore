import books from "@/data/book.json";
import styles from './styles.module.css'
import formatAmount from "@/packages/utils/formatAmount";
import AddtoCart from "@/packages/common/Button/AddtoCart";
import Header from "./Header";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/store/action/cart";

function Books() {
    const {push} = useRouter();
    const state = useSelector((state)=>state);

	console.log(state,'state');

    const dispatch = useDispatch()

    const redirectToBookInfo = ({isbn})=>{
        push('/books/[isbn]', `/books/${isbn}`)
    }

    const addBookToCartHandler = ({book})=>{
        dispatch(addToCart({...book, quantity: 1}))
    }

    return (
        <div>
            <Header />

            <div className={styles.main_container}>
                {books.map((book)=>{
                    const {title, author, book_image, price,isbn} = book || {}; 

                    return (
                        <div key={isbn} className={styles.book_card}>
                            <div className={styles.top_section} onClick={()=>redirectToBookInfo({isbn})}>
                                <img className={styles.book_img} src={book_image} alt={title}/>
                            
                                <h3 className={styles.title}>{title}</h3>
                                <p className={styles.author}>by {author}</p>
                            </div>

                            <div className={styles.footer}>
                                {formatAmount({
                                    amount: price,
                                    options:{
                                        notation : 'standard',
                                        style    : 'currency',
                                    }
                                 })}

                                 <AddtoCart onClick={()=> addBookToCartHandler({book})} size="sm" className="books"/>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Books