const Blog = require("../models/phonebookModel");

// Create a new phonebook
const createBook = async (req, res) => {
  try {
    const { name, phonenumber, email, address } = req.body;
    if (!name || !phonenumber|| !email|| !address) {
      return res
        .status(400)
        .json({ error: "All fields (name, phonenumber, email, address) are required" });
    }

    const newBlog = new Book({ name, phonenumber, email, address });
    const savedBlog = await newBlog.save();

    res.status(201).json(savedBook);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// GET all blogs
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// GET a single blog by ID
const getBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// DELETE a blog by ID
const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    res.json({ message: "Blog deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update (Patch) a single phonebook by ID
const patchBlog = async (req, res) => {
  try {
    const blog = await Blog.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Replace (Put) a single blog by ID
const putphonebook = async (req, res) => {
  try {
    const blog = await Blog.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createphonebook,
  getphoneBook,
  getphoneBook,
  deletephoneBook,
  patchphoneBook,
  putphoneBook,
};