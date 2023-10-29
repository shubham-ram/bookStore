import books from "@/data/book.json";
import styles from './styles.module.css'
import Header from "./Header";
import { useRouter } from "next/router";
import { useState } from "react";
import EmptyState from "./EmptyState";

function Books() {
    const { push } = useRouter();

    const [bookData, setBookData] = useState(books)

    const redirectToBookInfo = ({ isbn }) => {
        push('/books/[isbn]', `/books/${isbn}`)
    }

    return (
        <div>
            <Header setBookData={setBookData} />

            {bookData.length === 0 
                ?
                    <EmptyState /> 
                :
                    <div className={styles.main_container}>
                        {bookData.map((book) => {
                            const { title, author, book_image, price, isbn } = book || {};

                            return (
                                <div key={isbn} className={styles.book_card}>
                                    <div
                                        className={styles.top_section}
                                        onClick={() => redirectToBookInfo({ isbn })}
                                    >
                                        <img className={styles.book_img} src={book_image} alt={title} />

                                        <h3 className={styles.title}>{title}</h3>
                                        <p className={styles.author}>by {author}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                }
        </div>
    )
}

export default Books