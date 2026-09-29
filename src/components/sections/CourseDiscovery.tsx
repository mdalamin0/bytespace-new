"use client";

import { useState } from "react";
import CourseCard, { type CourseData } from "./CourseCard";

export default function CourseDiscovery() {

  const categories = [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
    "Productivity",
    "Web Development",
    "Data Science",
    "Cooking",
  ];

  const [activeCategory, setActiveCategory] = useState("Featured");

const coursesData: CourseData[] = [
  {
    id: 1,
    image: "/images/courses/images.jpg",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: "25",
    studentsCount: "26+",
  },
  {
    id: 2,
    image: "/images/courses/images1.jpg",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    title: "Build Digital Asset",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: "25",
    studentsCount: "26+",
  },
  {
    id: 3,
    image: "/images/courses/images2.jpg",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    title: "the Power of Big Data",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: "25",
    studentsCount: "26+",
  },
  {
    id: 4,
    image: "/images/courses/images3.jpg",
    lessons: 24,
    duration: "5 hours 40 mins",
    comments: 82,
    title: "Mastering Next.js & Tailwind CSS",
    author: "purepearl studio",
    rating: 4.8,
    level: "Intermediate",
    price: "35",
    studentsCount: "45+",
  },
  {
    id: 5,
    image: "/images/courses/download1.jpg",
    lessons: 15,
    duration: "3 hours 10 mins",
    comments: 41,
    title: "Advanced Mobile App UI Design",
    author: "purepearl studio",
    rating: 4.6,
    level: "Beginner",
    price: "20",
    studentsCount: "18+",
  },
  {
    id: 6,
    image: "/images/courses/download2.jpg",
    lessons: 20,
    duration: "4 hours 15 mins",
    comments: 64,
    title: "Creative Marketing Strategies",
    author: "purepearl studio",
    rating: 4.7,
    level: "Beginner",
    price: "30",
    studentsCount: "32+",
  },
];


  return (
    <section className="w-full bg-[#FAFAFA] py-18  sm:px-6">
      <div className="container-app mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Discover Your Passion, <br /> Build Your Skills
          </h2>
          <p className="mt-4 mb-10.5 text-xs sm:text-sm text-gray-400 leading-relaxed">
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different fields,
            from technology to the arts, and make a difference in your career
            and life.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto mb-19">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide border cursor-pointer transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-black border-primary shadow-sm scale-105"
                    : "bg-white text-gray-600 border-gray-100 hover:bg-gray-50 hover:border-gray-200"
                }`}
              >
                {category}
              </button>
            );
          })}

          <button className="px-4 py-2 rounded-full text-xs font-bold text-blue hover:underline cursor-pointer">
            + More
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {coursesData.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
