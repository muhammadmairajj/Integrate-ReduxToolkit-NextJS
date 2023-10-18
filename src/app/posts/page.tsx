'use client';
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPost, deletePost } from "@/redux/slices/postsSlice";
import styles from "./page.module.css";

function Posts() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const posts = useSelector((state: any) => state.posts);
  const dispatch = useDispatch();

  const handleAddPost = (event: any) => {
    event?.preventDefault();
    if (!title || !description) return;

    const newPost = {
      id: Date.now(),
      title,
      description,
    };
    dispatch(addPost(newPost));
  };

  const handleRemovePost = (postId: any) => {
    dispatch(deletePost(postId));
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleAddPost}>
        <input
          type="text"
          className={styles.input}
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          className={styles.input}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button className={styles.button} onClick={handleAddPost}>
          Add New Post
        </button>
      </form>
      {posts ? (
        posts.map((post: any) => (
          <div key={post.id} className={styles.post}>
            <h3 className={styles.title}>{post.title}</h3>
            <p className={styles.description}>{post.description}</p>
            <button
              className={styles.deleteButton}
              onClick={() => handleRemovePost(post.id)}
            >
              Delete
            </button>
            {/* <button
              className={styles.updateButton}
            >
              Edit
            </button> */}
          </div>
        ))
      ) : (
        <p>No posts found.</p>
      )}
    </div>
  );
}

export default Posts;
