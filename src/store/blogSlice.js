import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [
    {
      id: "1",
      title: "C Programming",
      category: "coding",
      description: " C is a procedural language with a simple syntax. It's efficient for system-level programming and low-level operations, making it suitable for operating systems and embedded systems. ",
    },
    {
      id: "2",
      title: "Java Programming",
      category: "Coding",
      description: " Java is an programming languwage, adding object-oriented features. It supports classes, inheritance, polymorphism, and templates. It's widely used for software development, game development, and system-level programming.",
    },
    {
      id: "3",
      title: "NodeJs",
      category: "coding",
        description: " Node. js (Node) is an open source, cross-platform runtime environment for executing JavaScript code",
    },
  ],
};

const blogSlice = createSlice({
  name: "blogSlice",
  initialState,
  reducers: {
    addBlog: (state, action) => {
      state.blogs.push(action.payload);
      console.log(state.blogs);
    },
    updateBlog: (state, action) => {
      const { id, title, category, description } = action.payload;
      const blogIndex = state.blogs.findIndex((blog) => blog.id === (id));
      console.log("===========blogIndex=========");
      console.log(blogIndex);
      state.blogs[blogIndex].title = title;
      state.blogs[blogIndex].category = category;
      state.blogs[blogIndex].description = description;
      console.log("===========blogTitle=========");
      console.log(state.blogs[blogIndex].title);
    },
    deleteBlog: (state, action) => {
      const id = action.payload;
      state.blogs = state.blogs.filter((blog) => blog.id !== id);
    },
    toggleLike: (state, action) => {
      const id = action.payload;
      const blogIndex = state.blogs.findIndex((blog) => blog.id === id);
      state.blogs[blogIndex].isLiked = !state.blogs[blogIndex].isLiked;
    },
  },
});

export const selectBlogById = (state, blogID) => {
  console.log("=======Blog ID :=========");
  console.log(blogID);
  console.log("===========Blogs Content=========");
  console.log(state.blogs.blogs);
  console.log("===========blogID typeof=========");
  console.log(typeof Number(blogID));
  const number = blogID;
  console.log("=========TypeOf blog.title =============");
  console.log(typeof String(state.blogs.blogs.title));
  const test = state.blogs.blogs.find((blog) => blog.id === number);
  console.log(test);
  return state.blogs.blogs.find((blog) => blog.id === (blogID));
};

export const { addBlog, updateBlog, deleteBlog, toggleLike } =
  blogSlice.actions;
export default blogSlice.reducer;
