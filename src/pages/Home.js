import React from 'react';
import CourseCard from '../components/CourseCard';

const Home = () => {
    const courses = [
        { id: 1, title: '파이썬 핵심 개념 초압축 강의', instructor: '딩코코딩', price: '무료', image: '/images/img1.jpg' },
        { id: 2, title: 'JS 기본 강의', instructor: '김코딩', price: '50,000원', image: '/images/img2.jpg' },
      ];
      return (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">인기 강의</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {courses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      );
    };
    
    export default Home;