import React from "react";
import Book from "./subcomponents/Book";
import { books } from "../data";

const Discounted = () => {
  return (
    <section id="discounted">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Discounted <span className="crimson">Books</span>
          </h2>
          <div className="books">
            {books
              .filter((book) => book.salePrice )
              .slice(0,8)
              .map((book) => (
                <Book book={book} key={book.id} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

Discounted.propTypes = {};

export default Discounted;
