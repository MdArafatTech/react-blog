import React from 'react';

// paste your JSON array here directly:
const authors = [
  {
    "id": 1,
    "author": "Joanna Goddard",
    "category": "FOUNDER & EDITOR",
    "content": "In 2007, Joanna began Cup of Jo as a weekend hobby...",
    "authorImage": "/img/about-author/author1.jpeg"
  },
  {
    "id": 2,
    "author": "Maureen Heffernan",
    "category": "PARTNERSHIPS & GROUTH DIRECTER",
    "content": "Shortly after college, Maureen moved to New York...",
    "authorImage": "/img/about-author/author2.webp"
  },
  // (continue the rest of your authors here)
];

const About = () => {
  return (
    <div>
      <div className="about">
        <div className='bg-blue-700 text-white text-center pt-5 pb-15 px-[6%]'>
          <h3 className='text-2xl'>About Cup of Jo</h3>
          <hr className='mt-[20px] mb-[40px]' />
          <p>
            Founded in January 2007, Cup of Jo is a daily women’s lifestyle site that covers style, culture, food, travel, relationships and parenting...
          </p>
        </div>

        <div className="author bg-white px-[6%] py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {authors.map((author) => (
            <div key={author.id} className="border p-5 rounded-lg shadow-md">
              <img 
                src={author.authorImage} 
                alt={author.author} 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-bold mb-1">{author.author}</h4>
              <p className="text-sm text-gray-500 mb-2">{author.category}</p>
              <p className="text-gray-700 text-base">{author.content}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default About;
