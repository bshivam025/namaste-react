const Shimmer = () => {
  return (
    <div className="shimmer-wrapper  bg-gray-900 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {Array.from({ length: 20 }).map((_, index) => (
        <div className="shimmer-card bg-gray-800 p-6 rounded-lg shadow-lg mb-12 mt-2" key={index}>
          <div className="shimmer-image shimmer w-full h-40 mb-4 rounded-lg bg-gray-700"></div>
          <div className="shimmer-info">
            <div className="shimmer-line shimmer h-4 mb-2 rounded bg-gray-700"></div>
            <div className="shimmer-line shimmer h-4 mb-2 rounded bg-gray-700"></div>
            <div className="shimmer-line shimmer h-4 mb-2 rounded bg-gray-700"></div>
            <div className="shimmer-line shimmer h-4 mb-2 rounded bg-gray-700"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
