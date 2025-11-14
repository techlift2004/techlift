import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import { client } from "../../../lib/sanity";

const { projectId, dataset } = client.config();
const urlFor = (source) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const POST_QUERY = `*[_type == "post" && _id == $id][0]`;

export default function BlogDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      try {
        const data = await client.fetch(POST_QUERY, { id });
        setPost(data);
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    }

    if (id) fetchPost();
  }, [id]);

  if (loading) {
    return (
      <main className="container mx-auto p-8">
        <p>Loading post...</p>
      </main>
    );
  }

  if (!post) {
    return (
      <main className="container mx-auto p-8">
        <p>Post not found.</p>
        <Link to="/blog" className="hover:underline">
          ← Back to blog
        </Link>
      </main>
    );
  }

  const postImageUrl = post.image
    ? urlFor(post.image)?.width(700).height(400).url()
    : null;

  return (
    <main className="container mx-auto p-8 max-w-3xl flex flex-col gap-4">
      <Link to="/blog" className="hover:underline">
        ← Back to blog
      </Link>

      {postImageUrl && (
        <img
          src={postImageUrl}
          alt={post.title}
          className="rounded-xl mb-6"
        />
      )}

      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

      <p className="text-gray-500 mb-6">
        Published: {new Date(post.publishedAt).toLocaleDateString()}
      </p>

      <div className="prose">
        {Array.isArray(post.body) && <PortableText value={post.body} />}
      </div>
    </main>
  );
}
