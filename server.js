const connectDB = require("./config/db");
const express = require("express");

// express app
const app = express();
connectDB();

// Import the controllers

// middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => res.send("API Running!"));

//Routes
// Routes
app.get("/", (req, res) => res.send("API Running!"));
// GET a single blog
app.get("/api/phonebooks/:id", getphonebook);
// DELETE a blog
app.delete("/api/phonebooks/:id", deletephonebook);
// Update blog using PATCH
app.patch("/api/phonebooks/:id", patchphonebook);
// Update blog using PUT
app.put("/api/phonebooks/:id", putphonebook);
// Add a new blog
app.post("/api/phonesbooks", createphonebook);
// GET all blogs
app.get("/api/phonebooks", getBlogs);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
