import books from "@/data/book.json";
import styles from './styles.module.css'
import formatAmount from "@/packages/utils/formatAmount";
import AddtoCart from "@/packages/common/Button/AddtoCart";
import Header from "./Header";
import { useRouter } from "next/router";

function Books() {
    const {push} = useRouter()

    const redirectToBookInfo = ({isbn})=>{
        push('/books/[isbn]', `/books/${isbn}`)
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

                                 <AddtoCart size="sm" className="books"/>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Books