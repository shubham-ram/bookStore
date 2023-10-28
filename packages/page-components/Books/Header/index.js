import Image from 'next/image'
import styles from './styles.module.css'
import searchIcon from "@/packages/assests/search.png"

function Header() {
  return (
    <div className={styles.container}>

        <div className={styles.input_box}>
            <Image className={styles.search_icon} src={searchIcon} width={10} height={10}/>
            <input className={styles.input} placeholder='Enter Author Name '/>
        </div>
    </div>
  )
}

export default Header