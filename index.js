let myLibrary = [
  {
    title: "Harry Potter and The Chamber of Secrets",
    author: "J.K Rowling",
    pages: 1720,
    read: true,
  },
  {
    title: "The Hobbit",
    author: "J. R. R Tolkien",
    pages: 1678,
    read: false,
  },
  {
    title: "Harry Potter",
    author: "J.K Rowling",
    pages: 1720,
    read: true,
  },
  {
    title: "The Hobbit: Adventure Awaits",
    author: "J. R. R Tolkien",
    pages: 1678,
    read: false,
  },
];

const submit = document.getElementById("submitBook");
submit.addEventListener("click", submitBook);

function submitBook() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.querySelectorAll(".bookInput");
  let readStatus = "";
  for (let i = 0; i < read.length; i++) {
    if (read[i].checked == true) {
      if (read[i].value == "true") {
        readStatus += true;
      } else {
        readStatus += false;
      }
    }
  }
  addBookToLibrary(title, author, pages, readStatus);
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
  for (let i = 0; i < read.length; i++) {
    read[i].checked = false;
  }
}

// object Constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${read}`;
  };
}

// add object to myLibrary array
// make a new object with new (object constructor) with parameter
// push the new object to the array (myLibrary)
function addBookToLibrary(title, author, pages, read) {
  let book = new Book(`${title}`, `${author}`, pages, read);
  let libLength1 = myLibrary.length - 1;
  myLibrary.push(book);
  let libLength2 = myLibrary.length - 1;
  if (libLength1 < libLength2) {
    const books = document.querySelector(".books");
    const createBook = document.createElement("div");
    createBook.classList.add("book");
    createBook.classList.add(`book-${libLength2}`);
    books.appendChild(createBook);
    // buat dom selector untuk book
    // lalu buat p untuk dng class title
    // isi p-title dengan mylibrary[i].title
    // masukkan ke DOM HTML
    const book = document.querySelector(`.book-${libLength2}`);
    const createTitle = document.createElement("p");
    createTitle.classList.add("title");
    createTitle.innerHTML = myLibrary[libLength2].title;
    book.appendChild(createTitle);
    // lalu buat p untuk dng class author
    // isi p-author dengan mylibrary[i].author
    // masukkan ke DOM HTML
    const createAuthor = document.createElement("p");
    createAuthor.classList.add("author");
    createAuthor.innerHTML = "by " + myLibrary[libLength2].author;
    book.appendChild(createAuthor);
    // lalu buat p untuk dng class pages
    // isi p-pages dengan mylibrary[i].pages
    // masukkan ke DOM HTML
    const createPages = document.createElement("p");
    createPages.classList.add("pages");
    createPages.innerHTML = myLibrary[libLength2].pages + " pages";
    book.appendChild(createPages);
    // lalu buat p untuk dng class read
    // buat kondisi if else mylibrary[i].read === true
    // isi p-read dengan finished reading
    // else isi p-read dengan havent read yet
    // masukkan ke DOM HTML
    const boxRead = document.createElement("input");
    boxRead.setAttribute("type", "checkbox");
    boxRead.setAttribute("class", `checkbox-${libLength2}`);
    // add event listener to change text description based on checkbox status
    boxRead.addEventListener("click", (e) => {
      if (document.querySelector(`.checkbox-${libLength2}`).checked) {
        document.querySelector(`.desc-${libLength2}`).innerHTML = "Finished";
      } else {
        document.querySelector(`.desc-${libLength2}`).innerHTML =
          "Not Finished";
      }
    });
    book.appendChild(boxRead);
    // change checkbox status in the dom based on read status
    // if it's checked then make checkbox checked
    if (read) {
      document.querySelector(`.checkbox-${libLength2}`).checked = true;
    } else {
      document.querySelector(`.checkbox-${libLength2}`).checked = false;
    }

    const createReadDesc = document.createElement("p");
    createReadDesc.setAttribute("class", `desc-${libLength2}`);
    if (myLibrary[libLength2].read) {
      createReadDesc.innerHTML = "Finished";
    } else {
      createReadDesc.innerHTML = "Not Finished";
    }
    book.appendChild(createReadDesc);
  }
}

// now we can add an object to our library array.
// we will now loop throuh the array to show the data in html
function pushToPage() {
  for (let i = 0; i < myLibrary.length; i++) {
    // buat dom selector Books
    // buat div book-${i} didalam books
    // masukkan ke DOM HTML
    const books = document.querySelector(".books");
    const createBook = document.createElement("div");
    createBook.classList.add("book");
    createBook.classList.add(`book-${i}`);
    books.appendChild(createBook);
    // buat dom selector untuk book
    // lalu buat p untuk dng class title
    // isi p-title dengan mylibrary[i].title
    // masukkan ke DOM HTML
    const book = document.querySelector(`.book-${i}`);
    const createTitle = document.createElement("p");
    createTitle.classList.add("title");
    createTitle.innerHTML = myLibrary[i].title;
    book.appendChild(createTitle);
    // lalu buat p untuk dng class author
    // isi p-author dengan mylibrary[i].author
    // masukkan ke DOM HTML
    const createAuthor = document.createElement("p");
    createAuthor.classList.add("author");
    createAuthor.innerHTML = "by " + myLibrary[i].author;
    book.appendChild(createAuthor);
    // lalu buat p untuk dng class pages
    // isi p-pages dengan mylibrary[i].pages
    // masukkan ke DOM HTML
    const createPages = document.createElement("p");
    createPages.classList.add("pages");
    createPages.innerHTML = myLibrary[i].pages + " pages";
    book.appendChild(createPages);
    // lalu buat p untuk dng class read
    // buat kondisi if else mylibrary[i].read === true
    // isi p-read dengan finished reading
    // else isi p-read dengan havent read yet
    // masukkan ke DOM HTML
    const boxRead = document.createElement("input");
    boxRead.setAttribute("type", "checkbox");
    boxRead.setAttribute("class", `checkbox-${i}`);
    // add event listener to change text description based on checkbox status
    boxRead.addEventListener("click", (e) => {
      if (document.querySelector(`.checkbox-${i}`).checked) {
        createReadDesc.innerHTML = "Finished";
      } else {
        createReadDesc.innerHTML = "Not Finished";
      }
    });
    book.appendChild(boxRead);

    if (myLibrary[i].read) {
      document.querySelector(`.checkbox-${i}`).checked = true;
    } else {
      document.querySelector(`.checkbox-${i}`).checked = false;
    }
    // membuat tag p yang isinya deskripsi sudah baca atau belum buku tersebut
    const createReadDesc = document.createElement("p");
    createReadDesc.setAttribute("class", `desc-${i}`);
    if (myLibrary[i].read) {
      createReadDesc.innerHTML = "Finished";
    } else {
      createReadDesc.innerHTML = "Not Finished";
    }
    book.appendChild(createReadDesc);
  }
}

pushToPage();

// make a function to change read status from true to false and false to true

function changeReadStatus() {}

// open modal
function openModal() {
  const modal = document.querySelector(".modal");
  modal.setAttribute("style", "display:block");
}

//close modal
function closeModal() {
  const modal = document.querySelector(".modal");
  modal.setAttribute("style", "display:none");
}
