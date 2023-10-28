import navigation_mapping from '@/packages/configuration/navigation-mapping'
import styles from './styles.module.css'
import Link from 'next/link'


function Navbar() {
  return (
    <nav className={`${styles.flex_box} ${styles.container}`}>
        <div>
           <h1 className={styles.title}>BookStore</h1>
        </div>

        <div className={`${styles.flex_box} ${styles.nav_content}`}>
           {navigation_mapping.map((navigation)=>{
                const {name, href} = navigation;
                return (
                    <div key={name} className={styles.nav_item}>
                        <Link href={href}>{name}</Link>
                    </div>
                )
           })}
        </div>

        <div>
            <Link href='/my-cart'>My Cart</Link>
        </div>
    </nav>
  )
}

export default Navbar