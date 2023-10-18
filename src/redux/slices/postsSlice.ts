import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "Title 1", description: "This is Description 1" },
  { id: 2, title: "Title 2", description: "This is Description 2" },
  { id: 3, title: "Title 3", description: "This is Description 3" },
  { id: 4, title: "Title 4", description: "This is Description 4" },
];

const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    addPosts: (state, action: PayloadAction<any>) => {
      state.push(...action.payload);
    },
    addPost: (state, action: PayloadAction<any>) => {
      const { id, title, description } = action.payload;
      state.push({ id, title, description });
    },
    updatePost: (state, action: PayloadAction<any>) => {
      const { id, title, description } = action.payload;
      const postId = state.findIndex((post: any) => post.id === id);
      if (postId !== -1) {
        state[postId].title = title;
        state[postId].description = description;
      }
    },
    deletePost: (state, action: PayloadAction<any>) => {
      const postId = action.payload;
      return state.filter((post: any) => post.id !== postId);
    },
  },
});

export const { addPosts, addPost, updatePost, deletePost } = postsSlice.actions;

export default postsSlice.reducer;
