import navigation_mapping from '@/packages/configuration/navigation-mapping'
import styles from './styles.module.css'
import Link from 'next/link'
import { setCookie } from '@/packages/utils/cookie';
import { useRouter } from 'next/router';

const PUBLIC_NAV = ['login', 'signup']

function Navbar({ src = '' }) {
    const showNav = !PUBLIC_NAV.includes(src);

    const {push} = useRouter();

    const onClickLogout = ()=>{
        setCookie({
            cookieName: "user_id",
            cookieValue: "",
            cookieExpiryDays: -1
        });
        
        push('/login');
    }

    return (
        <nav className={`${styles.flex_box} ${styles.container}`}>
            <div>
                <h1 className={styles.title}>BookStore</h1>
            </div>

            {showNav ?
                <>
                    <div className={`${styles.flex_box} ${styles.nav_content}`}>
                        {navigation_mapping.map((navigation) => {
                            const { name, href } = navigation;
                            return (
                                <div key={name} className={styles.nav_item}>
                                    <Link href={href}>{name}</Link>
                                </div>
                            )
                        })}
                    </div>

                    <div className={`${styles.flex_box} ${styles.right_content}`}>
                        <Link href='/my-cart'>My Cart</Link>

                        <button 
                            type='button'
                            className={styles.logout_btn}
                            onClick={onClickLogout}
                        >
                            Logout
                        </button>
                    </div>
                </>
                : null
            }
        </nav>
    )
}

export default Navbar