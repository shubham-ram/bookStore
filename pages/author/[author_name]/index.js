import BookInfo from "@/packages/page-components/BookInfo";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

function BookComponent(){
    const {query} = useRouter();
    const {author_name} = query;

    const { authors } = useSelector((state)=>state);
    
    const selectedBook = authors[author_name]?.books;

    return <BookInfo selectedBook={selectedBook}/>;
}

export default BookComponent