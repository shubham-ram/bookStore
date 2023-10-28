import { useRouter } from 'next/router'
import backArrow from "@/packages/assests/back.png"
import user from "@/packages/assests/user.png"
import styles from './styles.module.css';
import Image from 'next/image';
import formatAmount from '@/packages/utils/formatAmount';
import AddtoCart from '@/packages/common/Button/AddtoCart';

function BookInfo({ selectedBook={} }) {
    const { back } = useRouter()

    const {
        title,
        author,
        book_image,
        description,
        price,
        publisher
    } = selectedBook || {}

    return (
        <div className={styles.container}>
            <div className={styles.back_container} onClick={back} role='presentation'>
                <Image className={styles.back_img} src={backArrow} width={14} height={14} alt='back'/>
                Back
            </div>

            <div className={styles.main_content}>
                <div className={styles.img_container}>
                    <Image className={styles.book_img} src={book_image} width={240} height={360} alt={title}/>
                </div>

                <div className={styles.info_container}>
                    <div>
                        <div className={styles.flex_box}>
                            <Image  src={user} width={20} height={20} alt={author}/>
                            <p>{author}</p>
                        </div>
                        <h1 className={styles.title}>{title}</h1>
                    </div>

                    <div className={styles.info}>
                        <p className={styles.info}>Publisher: {publisher}</p>
                        <p className={styles.info}>{description}</p>
                    </div>

                    <span className={styles.amount}>
                        {formatAmount({
                            amount: price,
                            options:{
                                notation : 'standard',
                                style    : 'currency',
                            }
                        })}
                    </span>

                    <AddtoCart className='book_info'/>
                </div>
            </div>
        </div>
    )
}

export default BookInfo