import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./Home.module.css";

const Home = () => {
  const blogs = useSelector((state) => state.blogs.blogs);
  return (
    <>
      <h2 style={{ justifyContent: "center", textAlign: "center",marginBottom: '25px' }}>
        All Blog Posts
      </h2>

      <div style={{ justifyContent: "center",  }}>
        {blogs.map((blog, index) => (
          <Card
            style={{ width: "50rem", 
            justifyContent: "center", 
            position: 'relative',
            top: '50%',
            left: '25%',
            marginBottom: '25px',
            
            className:'mb-2'}}
          >
            <Card.Header>Blog #{index + 1} </Card.Header>
            <Link
              to={`/blog-details/${blog.id}`}
              style={{ textDecoration: "none", color: "black" , textAlign: "center"}}
            >
              <Card.Body style={{ backgroundColor:"pink"}}>
                <Card.Title>{blog.title}</Card.Title>
              </Card.Body>
            </Link>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Home;
