import Navbar from '@/packages/common/Navbar'
import React, { useEffect } from 'react'
import styles from './styles.module.css'
import books from '@/data/book.json';
import { useDispatch } from 'react-redux';
import { addAuthor } from '@/store/action/author';

function Layout({ children, src }) {
    const dispatch = useDispatch();

    useEffect(()=>{
        const authorHash = books.reduce((acc, currBook)=>{
            const { author } = currBook || {};
            const currAuthor = acc?.[author] || {};

            return {
                ...acc,
                [author]: {
                    name: author,
                    books: [...currAuthor?.books || [], currBook]
                }
            }
        }, {})

        dispatch(addAuthor(authorHash))
    },[]);

    return (
        <div>
            <Navbar src={src}/>

            <div className={styles.main_body}>
                {children}
            </div>
        </div>
    )
}

export default Layout