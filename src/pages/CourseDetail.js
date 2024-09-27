import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetail = () => {
  const { id } = useParams();

  const courses = [
    { id: 1, title: '파이썬 핵심 개념 초압축 강의', instructor: '딩코코딩', price: '무료',
       description: '이 강의는 파이썬의 핵심 개념을 초압축하여 설명합니다.', image: '/images/img1.jpg' },

  ];

  const course = courses.find(course => course.id === parseInt(id));

  if (!course) {
    return <div>강의를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={course.image} alt={course.title} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
          <p className="text-gray-600 mb-4">강사: {course.instructor}</p>
          <p className="text-lg text-green-600 font-bold mb-4">가격: {course.price}</p>
          <p className="text-gray-800">{course.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
