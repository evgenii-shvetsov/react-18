import './index.css'

const Book = (props) => {
  const { img, title, author, number } = props;

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title} </h2>
      <h4
        style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.5rem" }}
      >
        {author.toUpperCase()}
      </h4>
      <span id="book-number">#{number + 1}</span>
    </article>
  );
};

export default Book;