interface IProps {
  image: string;
}

const Product = (props: IProps) => {
  const { image } = props;
  return (
    <div>
      <section className="detail">
        <article className="Detail_thumbnail">
          <img src={image} alt="thumbnail" style={{ maxWidth: "10%" }} />
        </article>
      </section>
    </div>
  );
};

export default Product;
