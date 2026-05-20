import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client } from "../../lib/sanity";
import { Button } from "@/components/ui/button";

function getPreviewText(body) {
  if (!body) return "";
  const plain = body
    .filter(block => block._type === "block")
    .map(block => block.children.map(child => child.text).join(""))
    .join(" ");
  return plain.split(" ").slice(0, 60).join(" ") + "...";
}

const POSTS_QUERY = `
  *[_type == "post"] | order(publishedAt desc)[0...12]{
    _id,
    title,
    publishedAt,
    body,
    image{
      asset->{
        url
      }
    }
  }
`;

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
    <main className="container mx-auto max-w-full pb-8">
      {/* HERO SECTION */}
      <div className="w-full bg-gradient-to-b from-[#3C0067] to-[#7700CD] mb-12 relative overflow-hidden shadow-xl min-h-[300px] flex items-center justify-center">
        <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30" alt="Blog background" />
        <div className="px-5 sm:px-10 py-16 relative z-10 flex flex-col items-center text-center mt-12">
          <h1 className="text-4xl md:text-5xl font-Nunito font-bold text-white mb-4">Our Blog</h1>
          <p className="text-white/90 text-lg md:text-xl font-Nunito max-w-2xl">Read our latest articles, insights, and stories from the tech community.</p>
        </div>
      </div>

      <div className="px-4 sm:px-8 flex flex-col gap-y-6">
        {posts.map((post) => (
          <div key={post._id} className="p-4 border rounded-lg flex flex-col md:flex-row justify-between gap-4 shadow-sm">

            <div className="w-full md:w-2/5 flex-shrink-0">
              {post.image?.asset?.url && (
                <img
                  src={post.image.asset.url}
                  alt={post.title}
                  className="w-full h-48 md:h-56 object-cover rounded-md"
                />
              )}
            </div>

            <div className="w-full md:flex-1 flex flex-col items-start justify-between gap-3 py-1">
              <p className="text-[#7700CD] bg-[#F5EBFF] px-4 py-1 rounded-full text-[14px] font-semibold">
                Featured Resource
              </p>

              <h2 className="text-xl font-poppin text-text font-semibold">{post.title}</h2>

              <p className="text-gray-600 font-poppin font-normal w-full">
                {getPreviewText(post.body)}
              </p>

              <p className="text-gray-500 text-sm">
                {new Date(post.publishedAt).toLocaleDateString()}
              </p>

              <Button
                onClick={() => (window.location.href = `/blog/${post._id}/detail`)}
                className="bg-button-background font-poppin font-medium inline-block"
              >
                See details →
              </Button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
