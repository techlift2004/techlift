import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import { client } from "../../../lib/sanity";

const portableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4 text-gray-900">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-bold mt-7 mb-3 text-gray-900">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">{children}</h3>,
    h4: ({ children }) => <h4 className="text-lg font-semibold mt-5 mb-2 text-gray-800">{children}</h4>,
    normal: ({ children }) => <p className="mb-4 leading-relaxed text-gray-700">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[#7700CD] pl-4 italic text-gray-600 my-6">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc list-outside ml-6 mb-4 space-y-1 text-gray-700">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal list-outside ml-6 mb-4 space-y-1 text-gray-700">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-gray-900">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => <span className="underline">{children}</span>,
    code: ({ children }) => <code className="bg-gray-100 rounded px-1 py-0.5 font-mono text-sm text-[#7700CD]">{children}</code>,
    link: ({ children, value }) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer" className="text-[#7700CD] underline hover:opacity-80">
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => {
      const imageUrl = urlFor(value)?.width(800).url();
      return imageUrl ? (
        <figure className="my-6">
          <img src={imageUrl} alt={value.alt || ""} className="w-full rounded-xl" />
          {value.caption && <figcaption className="text-center text-sm text-gray-500 mt-2">{value.caption}</figcaption>}
        </figure>
      ) : null;
    },
  },
};

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
    <main className="container mx-auto p-8 max-w-3xl flex flex-col mt-12 gap-4">
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

      <div className="w-full">
        {Array.isArray(post.body) && <PortableText value={post.body} components={portableTextComponents} />}
      </div>
    </main>
  );
}
