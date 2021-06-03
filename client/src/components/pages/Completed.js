  
import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import { Container, CardDeck } from "react-bootstrap";
import { useAuth } from "../authentication/context/AuthContext";
import CompletedCard from "../CompletedCard";

function CompletedBooks() {
  const { currentUser } = useAuth();
  const user = currentUser.uid;

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
        {books.map( ({ volumeInfo }, index) => {
            var image;
            if (volumeInfo.imageLinks) {
              image = volumeInfo.imageLinks.thumbnail;
            } else {
              image = `${process.env.PUBLIC_URL}/cover_placeholder.jpg`;
            }
          
            return(
              <CompletedCard
                key={index}
                thumbnail={image}
                title={volumeInfo.title}
                description={volumeInfo.description}
                previewLink={volumeInfo.infoLink}
                publishedDate={volumeInfo.publishedDate}
              />
            )
          }
        )}
      </CardDeck>
    </Container>
  );
}

export default CompletedBooks;