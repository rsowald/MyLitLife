
import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import { Container, CardDeck } from "react-bootstrap";
import { useAuth } from "../authentication/context/AuthContext";
import { useBookModal } from "../../context/ModalContext";
import CompletedCard from "../CompletedCard";

function CompletedBooks() {
  const { currentUser } = useAuth();
  const user = currentUser.uid;

  const { showModal } = useBookModal();
  const [books, setBooks] = useState([]);

  function loadBooks() {
    API.getCompleted(user)
      .then(res => {
        const books = res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setBooks(books);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <Container id="completedContainer" className="mb-3">
      <CardDeck
        style={{
          marginTop: "10px",
          marginLeft: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gridGap: ".5rem",
        }}
      >
        {books.map((book) => {
          const { volumeInfo } = book;
          const date = new Date(book.createdAt).toLocaleDateString();

          var image;
          if (volumeInfo.imageLinks) {
            image = volumeInfo.imageLinks.thumbnail;
          } else {
            image = `${process.env.PUBLIC_URL}/cover_placeholder.jpg`;
          }

          return (
            <CompletedCard
              key={book.id}
              thumbnail={image}
              title={volumeInfo.title}
              author={volumeInfo.authors[0]}
              description={volumeInfo.description}
              onClick={() => showModal(true, book.id)}
              completedDate={date}
            />
          )
        }
        )}
      </CardDeck>
    </Container>
  );
}

export default CompletedBooks;