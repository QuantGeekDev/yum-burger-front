import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): React.ReactElement => {
  return (
    <NotFoundPageStyled className="notFound">
      <h1 className="notFound__title">Page Not Found</h1>
      <h1 className="notFound__sub-title">Oh no! 404!</h1>
      <img
        className="notFound__image"
        height="100"
        width="100"
        alt="Half eaten burger"
        src="https://res.cloudinary.com/derffxqir/image/upload/v1704719144/fz2fozov0mpauezh4jyb.png"
      />
      <span className="notFound__message">
        {" "}
        We couldn’t find the page you were looking for :(
      </span>
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
