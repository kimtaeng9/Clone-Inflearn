import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
    <Link to={`/course/${course.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{course.title}</h3>
          <p className="text-gray-600">{course.instructor}</p>
          <p className="text-green-600 font-bold">{course.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
