import LoadingStyled from "./LoadingStyled";

const Loading = (): React.ReactElement => (
  <LoadingStyled className="loading">
    <video
      className="loading__spinner"
      autoPlay
      loop
      muted
      playsInline
      height="150"
      width="150"
    >
      <source src="videos/burgerLoading.webm" type="video/webm" />
      <track />
    </video>
    <span className="loading__message"> Loading ...</span>
  </LoadingStyled>
);

export default Loading;
