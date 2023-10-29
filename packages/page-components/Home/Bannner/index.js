import styles from './styles.module.css'
import reading from "@/packages/assests/reading.png"
import Image from 'next/image';

function Banner() {
  return (
    <div className={styles.banner}>
        <div className={styles.banner_content}>
            <h1 className={styles.title}>Welcome, to Book Haven</h1>
            <h3 className={styles.sub_title}>A Haven for Bibliophiles, Where Every Book a Treasure Trove of Knowledge, Imagination, and Inspiration</h3>
        </div>

        <Image className={styles.banner_img} src={reading} width={400} height={300}/>
    </div>
  )
}

export default Banner