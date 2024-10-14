function Pagination({ postsPerPage, totalPageLength, paginate }) {
  const pageNumber = [];
  const totalPage = Math.ceil(totalPageLength / postsPerPage);

  for (let i = 1; i <= totalPage; i++) {
    pageNumber.push(i);
  }

  return (
    <div className="grid md:grid-cols-12 grid-cols-5 md:gap-8 gap-4">
      {pageNumber.map((currPageNum) => (
        <div
          className="border text-white font-bold bg-gray-600 hover:bg-gray-900 p-2 text-center"
          key={currPageNum}
        >
          <a href="!#" onClick={() => paginate(currPageNum)}>
            {currPageNum}
          </a>
        </div>
      ))}
    </div>
  );
}

export default Pagination;
