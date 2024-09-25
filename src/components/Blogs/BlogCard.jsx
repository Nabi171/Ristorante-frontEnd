export const BlogCard = ({ title, date, content }) => {
  return (
    <div className="blog-card">
      <div className="blog-date">{date}</div>
      <div className="blog-title">{title}</div>
      <div className="blog-content">{content}</div>
      <button className="read-more">Read More</button>
    </div>
  );
};
