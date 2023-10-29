import { useSelector } from "react-redux"
import user from "@/packages/assests/user.png"

import styles from './styles.module.css'
import Image from "next/image";
import { useRouter } from "next/router";

function Author() {
    const {push} = useRouter();

    const {authors} = useSelector((state)=>state);

    const redirectToBook = ({ name })=>{
        push('/author/[author_name]', `/author/${name}`)
    }

    return (
        <div>
            <h3>Author List</h3>

            <div className={styles.list}>
                {Object.values(authors).map((author)=>(
                    <div
                        className={styles.card}
                        role="presentation"
                        onClick={()=> redirectToBook({ name: author?.name})}
                    >
                        <Image src={user} width={26} height={26} alt='icon'/>
                        <p className={styles.name}>{author?.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Author