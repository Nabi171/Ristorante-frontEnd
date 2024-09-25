import "./BlogPage.css"; // Import the CSS

export const BlogPage = () => {
  const blogPosts = [
    {
      title: "5 Powerful Natural Antibiotics",
      date: "Feb 26",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl:
        "https://static3.depositphotos.com/1003631/209/i/450/depositphotos_2099183-stock-photo-fine-table-setting-in-gourmet.jpg", // Replace with actual image link
    },
    {
      title: "25 Reasons to Eat Bananas",
      date: "Jun 20",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl:
        "https://static3.depositphotos.com/1003631/209/i/450/depositphotos_2099183-stock-photo-fine-table-setting-in-gourmet.jpg", // Replace with actual image link
    },
    {
      title: "Summer Food and Ingredients Guide",
      date: "Jun 16",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl:
        "https://static3.depositphotos.com/1003631/209/i/450/depositphotos_2099183-stock-photo-fine-table-setting-in-gourmet.jpg", // Replace with actual image link
    },
    {
      title: "6 Ways to Cook a Roast",
      date: "Jun 08",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl:
        "https://static3.depositphotos.com/1003631/209/i/450/depositphotos_2099183-stock-photo-fine-table-setting-in-gourmet.jpg", // Replace with actual image link
    },
  ];

  const recentPosts = [
    { title: "5 Powerful Natural Antibiotics", date: "22 JUN" },
    { title: "25 Reasons to Eat Bananas", date: "20 JUN" },
    { title: "Summer Food and Ingredients Guide", date: "12 JUN" },
    { title: "6 Ways to Cook a Roast", date: "10 JUN" },
  ];

  const tags = [
    "Food",
    "Health",
    "Recipes",
    "Diet",
    "Nutrition",
    "Bananas",
    "Cooking",
  ];

  return (
    <div>
      {/* Header */}
      <header className="blog-header">
        <h1>BLOG</h1>
        <p className="tagline">Latest From Us</p>
      </header>

      {/* Main Content Below Header */}
      <div className="blog-content">
        <div className="container mx-auto flex py-12">
          {/* Posts Section */}
          <div className="w-2/3 px-4">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} post={post} />
            ))}

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <button className="px-4 py-2 bg-gray-700 rounded-l-lg">«</button>
              <button className="px-4 py-2 bg-gray-700">1</button>
              <button className="px-4 py-2 bg-gray-700">2</button>
              <button className="px-4 py-2 bg-gray-700 rounded-r-lg">»</button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-1/3 px-4">
            {/* Recent Posts */}
            <div className="recent-posts mb-8">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">
                Recent Posts
              </h3>
              <ul className="recent-posts-list">
                {recentPosts.map((post, index) => (
                  <li key={index} className="mb-4 flex items-start">
                    <div className="recent-post-date">
                      <span className="date-day bg-yellow-400 text-gray-900 px-3 py-1 rounded">
                        {post.date.split(" ")[0]}
                      </span>
                      <span className="date-month text-gray-400 block">
                        {post.date.split(" ")[1]}
                      </span>
                    </div>
                    <div className="ml-4">
                      <a
                        href="#"
                        className="text-lg font-semibold text-white hover:text-yellow-400 transition"
                      >
                        {post.title}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* About Us */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">
                About Us
              </h3>
              <p className="text-gray-400 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            {/* Tags */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">Tags</h3>
              <div className="flex flex-wrap">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-700 text-sm rounded-full mr-2 mb-2 cursor-pointer hover:bg-yellow-400 hover:text-gray-900"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center py-8 bg-gray-800 bg-opacity-80">
          <p className="text-gray-400">© 2024 Delizus by Imaginem</p>
          <div className="mt-4">
            <a href="#" className="text-yellow-400 mx-2">
              Facebook
            </a>
            <a href="#" className="text-yellow-400 mx-2">
              Twitter
            </a>
            <a href="#" className="text-yellow-400 mx-2">
              Instagram
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

// BlogCard Component
const BlogCard = ({ post }) => {
  return (
    <div className="blog-card mb-8 p-6 rounded-lg shadow-lg">
      <div className="mb-4">
        <img src={post.imageUrl} alt={post.title} className="rounded-lg" />
      </div>
      <div className="flex items-center text-gray-400 mb-4">
        <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full mr-2">
          {post.date.split(" ")[1]}
        </span>
        <span className="text-sm">{post.date}</span>
      </div>
      <h2 className="text-2xl font-bold text-yellow-400 mb-4">{post.title}</h2>
      <p className="text-gray-400 mb-4">{post.content}</p>
      <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-md hover:bg-yellow-300">
        Read More
      </button>
    </div>
  );
};
