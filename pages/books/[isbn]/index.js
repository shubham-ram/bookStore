import { useRouter } from "next/router";
import BookInfo from "@/packages/page-components/BookInfo";
import books from "@/data/book.json";

function BookComponent() {
    const {query} = useRouter()
    const { isbn='' } = query || {};

    const selectedBook = books.filter((book)=>{
        return book.isbn === isbn
    })

    return (
        <BookInfo selectedBook={selectedBook}/>
    )
}

export default BookComponent