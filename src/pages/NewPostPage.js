import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";

const NewPostPage = () => {

  const [post, setPost] = useState({
    title: '',
    author: '',
    image: '',
    content: '',
  })

  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    await axios.post('http://localhost:5500/posts', post)
    navigate('/')
  }
}