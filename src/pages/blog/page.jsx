import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client } from "../../lib/sanity";

const POSTS_QUERY = `*[_type == "post"]|order(publishedAt desc)[0...12]{_id, title, publishedAt}`;

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const data = await client.fetch(POSTS_QUERY);
      setPosts(data);
    }
    fetchPosts();
  }, []);

  return (
    <main className="container mx-auto max-w-3xl p-8">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      <ul className="flex flex-col gap-y-6">
        {posts.map((post) => (
          <li key={post._id} className="p-4 border rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-500">
              {new Date(post.publishedAt).toLocaleDateString()}
            </p>
            <Link
              to={`/blog/${post._id}/detail`}
              className="text-blue-600 hover:underline mt-2 inline-block"
            >
              See details →
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
