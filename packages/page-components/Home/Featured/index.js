import Image from 'next/image';
import styles from './styles.module.css'
import books from "@/data/book.json";
import formatAmount from '@/packages/utils/formatAmount';
import AddtoCart from '@/packages/common/Button/AddtoCart';


function FeatureSection() {

    const featuredBooks = books.slice(0,3)

    return (
        <div className={styles.container}>
            <h2>Featured</h2>
            
            <div className={styles.feature_sec}>

                {featuredBooks.map((book)=>{
                    const {title, description,author, book_image, price,isbn} = book || {}; 

                    return (
                        <div key={isbn} className={styles.book_card}>
                            <Image className={styles.book_img} src={book_image} width={120} height={180} alt={title}/>
                          
                            <div className={styles.info_section}>
                                <div>
                                    <h3>{title}</h3>
                                    <p className={styles.author}>By {author}</p>
                                    <p className={styles.desc}>{description}</p>
                                </div>

                                <div className={styles.footer}>
                                    {formatAmount({
                                        amount: price,
                                        options:{
                                            notation : 'standard',
                                            style    : 'currency',
                                        }
                                    })}

                                    <AddtoCart />
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