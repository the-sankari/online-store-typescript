interface IProps {
  image: string;
  title: string;
  description: string;
  price: number;
  rating: number;
}

const Product = (props: IProps) => {
  const { image, title, price, rating, description } = props;
  return (
    <div>
      <section className="detail">
        <article className="Detail_thumbnail">
          <img src={image} alt="thumbnail" style={{ maxWidth: "10%" }} />
        </article>
        <article className="Detail_content">
          <h2> {title} </h2>
        </article>
        <article className="Detail_info">
          <span className="Detail_price"> {price} </span>
          <span className="Detail_rate"> {rating.rate} </span>
        </article>
        <article className="Deatail_description">
          <p> {description} </p>
        </article>
      </section>
    </div>
  );
};

export default Product;
