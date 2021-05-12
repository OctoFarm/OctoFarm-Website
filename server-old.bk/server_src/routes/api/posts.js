const express = require("express");

const router = express.Router();

const mongoose = require("mongoose");

//Schema for posts
const PostsSchema = new mongoose.Schema({
    active: {
        type: Boolean,
        required: true
    },
    printer: {
        type: Array,
        required: true
    },
    trigger: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    scriptLocation: {
        type: String,
        required: true
    }
});

const Posts = mongoose.model("Posts", PostsSchema);

async function loadPostsCollection(){


}


module.exports = Posts;
