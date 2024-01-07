const ContentShimmer = () => {
  return (
    <div className="shimmer">
      <div className="wrapper">
        <div className="image-card animate"></div>
        <div className="stroke animate title"></div>
        <div className="stroke animate link"></div>
        <div className="stroke animate description"></div>
      </div>
    </div>
  );
};

export default ContentShimmer;