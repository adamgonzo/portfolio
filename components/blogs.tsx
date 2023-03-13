"use client";

import React, { useState, useEffect } from "react";

const DevtoPosts = () => {
  const [posts, setPosts] = useState<any[]>([]);
  useEffect(() => {
    fetch("https://dev.to/api/articles?username=megagon&per_page=10")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {posts.map((post) => (
        <a
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 rounded-lg shadow-md"
          key={post.id}
        >
          <div className="p-6">
            <h2 className="font-medium mb-4">{post.title}</h2>
            <p className="text-sm text-gray-700 mb-4">{post.description}</p>
            <div className="text-xs text-gray-700">
              <span className="mr-2">
                Likes: {post.positive_reactions_count}
              </span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default DevtoPosts;
