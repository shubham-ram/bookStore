import Image from 'next/image';
import styles from './styles.module.css';
import Banner from './Bannner';
import FeatureSection from './Featured';

function Home() {
  return (
    <div className={styles.container}>
        <Banner />
        <FeatureSection />
    </div>
  )
}

export default Home