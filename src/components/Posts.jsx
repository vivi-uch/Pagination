function Posts({ posts, loading }) {
  // if ({ loading }) return <h1>Loading...</h1>;
  return (
    <div className="flex flex-col gap-1 text-sm md:text-lg">
      {posts.map((post) => (
        <li
          key={post.id}
          className="border border-gray-600 hover:border-gray-900 p-1"
        >
          {post.title}
        </li>
      ))}
    </div>
  );
}
export default Posts;
