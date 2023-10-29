import emptyResult from "@/packages/assests/empty_result.png";
import styles from './styles.module.css';
import Image from "next/image";

function EmptyState() {
  return (
    <div className={styles.container}>
        <Image
            width={220}
            height={200}
            src={emptyResult}
            alt="no result"
        />

        <h3 className={styles.text}>Sad no result</h3>
    </div>
  )
}

export default EmptyState