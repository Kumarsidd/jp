const BlogPagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageClick = (page) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <nav className="ls-pagination">
      <ul>
        <li className="prev" onClick={() => handlePageClick(currentPage - 1)}>
          <a href="#">
            <i className="fa fa-arrow-left"></i>
          </a>
        </li>

        {[...Array(totalPages)].map((_, i) => (
          <li
            key={i}
            onClick={() => handlePageClick(i + 1)}
            className={i + 1 === currentPage ? "current-page" : ""}
          >
            <a href="#">{i + 1}</a>
          </li>
        ))}

        <li className="next" onClick={() => handlePageClick(currentPage + 1)}>
          <a href="#">
            <i className="fa fa-arrow-right"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default BlogPagination;
