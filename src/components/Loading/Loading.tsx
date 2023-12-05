const Loading = (): React.ReactElement => {
  <div className="loading">
    <video className="loading__spinner">
      <source></source>
      <track> </track>
    </video>
    <h1 className="loading__message"> Loading ...</h1>
  </div>;
};

export default Loading;
