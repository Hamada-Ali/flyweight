// flywieght desing pattern

// we use this pattern when we want to minize the amonunt of objects(instnaces) in the memory


const books = new Map();

class Book {
    constructor(title, author, code) {
        this.title = title;
        this.author = author;
        this.code = code;
    }
}



const addBook = ({title, author, code})  => {
    const existBook = books.has(code);
    if(existBook) {
        return existBook
    }
    const book = new Book(title, author, code);
    books.set(code, book) // if the code don't exist he create new object with book instance
    return book
}

addBook({
    title: 'a',
    author: 's',
    code: 'ss'
})
addBook({
    title: 'a',
    author: 's',
    code: 'ss'
})

addBook({
    title: 'a',
    author: 's',
    code: 'ss'
})
addBook({
    title: 'a',
    author: 's',
    code: 'ww'
})



console.log(books)

