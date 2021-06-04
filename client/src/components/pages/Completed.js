
import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import { Container, CardDeck } from "react-bootstrap";
import { useAuth } from "../authentication/context/AuthContext";
import { useBookModal } from "../../context/ModalContext";
import CompletedCard from "../CompletedCard";

function CompletedBooks() {
  const { currentUser } = useAuth();
  const user = currentUser.uid;

  //TODO - call this showModal and pass it true (for completed from this one) and book ID for the modal to know how to look it up
  const { showModal } = useBookModal();
  const [books, setBooks] = useState([]);

  function loadBooks(setBooks) {
    var list = {};
    API.getCompleted(user)
      .then(res => {
        list = res.data;
        setBooks(list);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    loadBooks(setBooks);
  }, []);

  return (
    <Container id="completedContainer">
      <CardDeck
        style={{
          marginTop: "10px",
          marginLeft: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gridGap: ".5rem",
        }}
      >
        {books.map((book, index) => {
          const { volumeInfo } = book;

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
              description={volumeInfo.description}
              onClick={() => showModal(true, book.id)}
              completedDate={book.createdAt}
            />
          )
        }
        )}
      </CardDeck>
    </Container>
  );
}

export default CompletedBooks;