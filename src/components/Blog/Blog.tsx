import React from 'react'
import './Blog.css'
import SectionTitle from '../SectionTitle/SectionTitle'

interface BlogPost {
  date: string;
  title: string;
}

const blogPosts: BlogPost[] = [
  { date: '2000/01/01', title: 'タイトルタイトルタイトルタイトルタイトル...' },
  { date: '2000/01/01', title: 'タイトルタイトルタイトルタイトルタイトル...' },
  { date: '2000/01/01', title: 'タイトルタイトルタイトルタイトルタイトル...' },
  { date: '2000/01/01', title: 'タイトルタイトルタイトルタイトルタイトル...' },
  { date: '2000/01/01', title: 'タイトルタイトルタイトルタイトルタイトル...' }
];

function Blog() {
  return (
    <div className="blog-container">
      <div className="blog-header">
        <SectionTitle title="Blog" />
      </div>
      <div className="blog-list">
        {blogPosts.map((blog, index) => (
          <div key={index} className="blog-item">
            <span className="blog-date">{blog.date}</span>
            <span className="blog-content-title">{blog.title}</span>
            <button className="blog-arrow">→</button>
          </div>
        ))}
        <button className="view-more-button">View more</button>
      </div>
      
    </div>
  )
}

export default Blog