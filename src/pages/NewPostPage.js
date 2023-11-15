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

  const handleChange = e => {
    setPost({ ...post, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    await axios.post('http://localhost:5500/posts', post)
    navigate('/')
  }
  return (
    <Container className="mt-4">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" name="title" placeholder="Title" onChange={handleChange}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Author</Form.Label>
          <Form.Control type="text" name="Author" placeholder="Author" onChange={handleChange}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Image URL</Form.Label>
          <Form.Control type="text" name="image" placeholder="Image URL" onChange={handleChange}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Content</Form.Label>
          <Form.Control type="textarea" rows={5} name="content" placeholder="Content" onChange={handleChange}></Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">Create</Button>
      </Form>
    </Container>

  )
}

export default NewPostPage;