export const RecentPosts = ({ posts }) => {
  return (
    <div className="recent-posts">
      <h3>Recent Posts</h3>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <a href="#">{post.title}</a>
            <span>{post.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
