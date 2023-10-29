import Image from 'next/image'
import styles from './styles.module.css'
import searchIcon from "@/packages/assests/search.png"
import books from "@/data/book.json";

function Header({ setBookData }) {

    const searchHandler = (e)=>{
        const searchValue = e.target.value.toLowerCase(); 

        setBookData(()=>{
            const filterdBooks = books.filter((book)=>{
                const authorName = book.author.toLowerCase();
                
                return authorName.includes(searchValue)
            })

            return filterdBooks;
        })
    }

    return (
        <div className={styles.container}>

            <div className={styles.input_box}>
                <Image
                    width={10}
                    height={10}
                    src={searchIcon}
                    className={styles.search_icon}
                    alt='search icon'
                />

                <input
                    type="text"
                    onChange={searchHandler}
                    className={styles.input}
                    placeholder='Search By Author Name'
                />
            </div>
        </div>
    )
}

export default Header