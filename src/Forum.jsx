import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
} from "@firebase/firestore";
import "./forum.css";
import { db } from "./firebase-config";
import { useState, useEffect } from "react";

export default function Forum() {
  const [posts, setPosts] = useState([]);
  const [newAuthor, setNewAuthor] = useState("");
  const [newText, setNewText] = useState("");
  const [editingPostId, setEditingPostId] = useState(null);

  useEffect(() => {
    // Set up the listener when the component mounts
    const listen = onSnapshot(collection(db, "Posts"), (querySnapshot) => {
      const postsArray = [];
      querySnapshot.forEach((doc) => {
        let post = doc.data();
        post.id = doc.id;
        postsArray.push(post);
      });
      setPosts(postsArray);
    });

    // Clean up the listener when the component unmounts
    return () => listen();
  }, []);

  const postData = async (author, text) => {
    try {
      const docRef = await addDoc(collection(db, "Posts"), {
        Author: author,
        Text: text,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const deletePost = async (postId) => {
    try {
      await deleteDoc(doc(db, "Posts", postId));
      console.log("Document deleted with ID: ", postId);
    } catch (e) {
      console.error("Error removing document: ", e);
    }
  };

  const editPost = async (postId, newText) => {
    try {
      const postRef = doc(db, "Posts", postId);

      // Update the text field of the post
      await updateDoc(postRef, { Text: newText });

      // Update the local state to reflect the change
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === postId ? { ...post, Text: newText } : post,
        ),
      );

      // Clear the editing state
      setEditingPostId(null);
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  return (
    <main>
      <header>
        <h1>Discussion Forum</h1>
      </header>
      Author
      <input
        type="text"
        value={newAuthor}
        onChange={(e) => setNewAuthor(e.target.value)}
      />
      Text
      <input
        type="text"
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
      />
      <button onClick={() => postData(newAuthor, newText)}>Submit</button>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <p>From: {post.Author}</p>
            {editingPostId === post.id ? (
              // Show input field for editing
              <>
                <input
                  type="text"
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                />
                <button onClick={() => editPost(post.id, newText)}>Save</button>
              </>
            ) : (
              // Show post text
              <p>{post.Text}</p>
            )}

            <button onClick={() => deletePost(post.id)}>Delete</button>
            <button onClick={() => setEditingPostId(post.id)}>Edit</button>
          </div>
        ))}
      </div>
    </main>
  );
}
