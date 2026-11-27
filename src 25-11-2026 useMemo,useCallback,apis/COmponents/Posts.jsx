
import React, { useState, useEffect } from "react";

const API = "https://jsonplaceholder.typicode.com/posts";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  // 1. GET - Fetch all posts
  const fetchPosts = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(API);

      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }

      const data = await response.json();

      setPosts(data.slice(0, 10));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // 2. POST - Create new post
  const createPost = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          body,
          userId: 1,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create post");
      }

      const data = await response.json();

      setPosts((prev) => [data, ...prev]);

      setTitle("");
      setBody("");
      setMessage("Post created successfully!");
    } catch (err) {
      setError(err.message);
    }
  };

  // 3. PUT - Update complete post
  const updatePost = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API}/${editId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: editId,
          title,
          body,
          userId: 1,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update post");
      }

      const data = await response.json();

      setPosts((prev) =>
        prev.map((post) =>
          post.id === editId ? data : post
        )
      );

      setEditId(null);
      setTitle("");
      setBody("");
      setMessage("Post updated successfully!");
    } catch (err) {
      setError(err.message);
    }
  };

  // 4. PATCH - Update only title
  const patchPost = async (id) => {
    const newTitle = prompt("Enter new title:");

    if (!newTitle) return;

    try {
      const response = await fetch(`${API}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: newTitle,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update title");
      }

      const data = await response.json();

      setPosts((prev) =>
        prev.map((post) =>
          post.id === id
            ? { ...post, title: data.title }
            : post
        )
      );

      setMessage("Title updated successfully!");
    } catch (err) {
      setError(err.message);
    }
  };

  // 5. DELETE - Delete post
  const deletePost = async (id) => {
    if (!window.confirm("Are you sure you want to delete?")) {
      return;
    }

    try {
      const response = await fetch(`${API}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete post");
      }

      setPosts((prev) =>
        prev.filter((post) => post.id !== id)
      );

      setMessage("Post deleted successfully!");
    } catch (err) {
      setError(err.message);
    }
  };

  // Load post details into form for editing
  const handleEdit = (post) => {
    setEditId(post.id);
    setTitle(post.title);
    setBody(post.body);
  };

  // Search posts
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-3xl font-bold text-center mb-8">
        Posts Management Dashboard
      </h1>

      {/* Create / Update Form */}

      <form
        onSubmit={editId ? updatePost : createPost}
        className="bg-white p-6 rounded-xl shadow-md max-w-xl mx-auto mb-8"
      >
        <h2 className="text-xl font-bold mb-4">
          {editId ? "Update Post" : "Create New Post"}
        </h2>

        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-3 w-full rounded mb-4"
          required
        />

        <textarea
          placeholder="Enter description"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="border p-3 w-full rounded mb-4"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white p-3 rounded w-full"
        >
          {editId ? "Update Post (PUT)" : "Create Post (POST)"}
        </button>

        {editId && (
          <button
            type="button"
            onClick={() => {
              setEditId(null);
              setTitle("");
              setBody("");
            }}
            className="bg-gray-500 text-white p-2 rounded w-full mt-2"
          >
            Cancel Edit
          </button>
        )}
      </form>

      {/* Messages */}

      {message && (
        <p className="text-green-600 text-center mb-4">
          {message}
        </p>
      )}

      {error && (
        <p className="text-red-600 text-center mb-4">
          {error}
        </p>
      )}

      {/* Search */}

      <input
        type="text"
        placeholder="Search posts by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-3 rounded w-full max-w-xl block mx-auto mb-8"
      />

      {/* Loading */}

      {loading && (
        <p className="text-center text-xl">Loading posts...</p>
      )}

      {/* Posts */}

      {!loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white p-5 rounded-xl shadow-md"
            >
              <h2 className="text-xl font-bold mb-3">
                {post.title}
              </h2>

              <p className="text-gray-600 mb-4">
                {post.body}
              </p>

              <div className="flex flex-wrap gap-2">

                <button
                  onClick={() => handleEdit(post)}
                  className="bg-blue-500 text-white px-3 py-2 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => patchPost(post.id)}
                  className="bg-green-500 text-white px-3 py-2 rounded"
                >
                  PATCH Title
                </button>

                <button
                  onClick={() => deletePost(post.id)}
                  className="bg-red-500 text-white px-3 py-2 rounded"
                >
                  Delete
                </button>

              </div>
            </div>
          ))}

          {filteredPosts.length === 0 && (
            <p className="text-center col-span-full">
              No posts found.
            </p>
          )}

        </div>
      )}

    </div>
  );
};

export default Posts;
