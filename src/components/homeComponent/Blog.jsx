import React from 'react'
import BlogCard from '../../ui/BlogCard'; // Agar `BlogCard` alohida komponent bo'lsa

const Blog = () => {
  const blogPosts = [
    {
      image: 'blog.png',
      date: '02.02.2025',
      title: 'Как начать карьеру в веб-разработке?',
      description: 'Веб-разработка — это увлекательная и перспективная область, в которой можно достичь многого...',
    },
    {
      image: 'blog.png',
      date: '02.02.2025',
      title: 'Тренды в дизайне для 2025 года',
      description: 'С каждым годом дизайн меняется, и 2025 год обещает быть годом новых интересных решений...',
    },
    {
      image: 'blog.png',
      date: '02.02.2025',
      title: 'Какие технологии использовать в React?',
      description: 'Веб-разработчики всегда ищут новые технологии, чтобы упростить свою работу и повысить эффективность...',
    },
  ];

  return (
    <div className="w-full bg-[#1a1a1a] ">
      <div className="w-full   max-w-[1250px] text-white mx-auto">
        <div className="w-full  p-5">
          <h1 className="font-[600]  mt-5 text-[18px] md:text-[40px]">Блог</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-5">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              image={post.image}
              date={post.date}
              title={post.title}
              description={post.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
