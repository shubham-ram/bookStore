import Image from 'next/image';
import { useRouter } from 'next/router'
import InfoContainer from './InfoContainer';

import backArrow from "@/packages/assests/back.png"

import styles from './styles.module.css';

function BookInfo({ selectedBook = [] }) {
    const { back } = useRouter();

    return (
        <div className={styles.container}>
            <div className={styles.back_container} onClick={back} role='presentation'>
                <Image className={styles.back_img} src={backArrow} width={14} height={14} alt='back' />
                Back
            </div>

            <div className={styles.main_content}>
                {selectedBook.map((book) => {
                    const {
                        isbn,
                        title,
                        book_image,
                        ...rest
                    } = book || {};
                    
                    return (
                        <div key={isbn} className={styles.book_card}>
                            <div className={styles.img_container}>
                                <Image
                                    width={240}
                                    height={360}
                                    src={book_image}
                                    className={styles.book_img}
                                    alt={title}
                                />
                            </div>

                            <InfoContainer book={book} />
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default BookInfo