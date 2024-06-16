const Shimmer = () => {
  return (
    <>
    <div className="shimmer-wrapper">
      {Array.from({ length: 20 }).map((_, index) => (
        <div className="shimmer-wrapper" key={index}>
          <div className="shimmer-card">
            <div className="shimmer-image shimmer"></div>
            <div className="shimmer-info">
              <div className="shimmer-line shimmer"></div>
              <div className="shimmer-line shimmer"></div>
              <div className="shimmer-line shimmer"></div>
              <div className="shimmer-line shimmer"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Shimmer;
