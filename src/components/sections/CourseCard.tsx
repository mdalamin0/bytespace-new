import Image from "next/image";
import { FaStar } from "react-icons/fa";

import { FiBarChart2 } from "react-icons/fi";

export interface CourseData {
  id: number;
  image: string;
  lessons: number;
  duration: string;
  comments: number;
  title: string;
  author: string;
  rating: number;
  level: string;
  price: string;
  studentsCount: string;
}

interface CourseCardProps {
  course: CourseData;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className=" rounded-3xl p-4  border border-gray-300 flex flex-col justify-between hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300">
      <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-4 bg-gray-50">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover"
        />

        <div className="absolute bottom-3 left-0 w-full px-3 flex items-center justify-between gap-1.5">
          <div className="flex-1 bg-[#F6F6F6]/60 backdrop-blur-md rounded-full py-2 px-1 text-center text-[10px] sm:text-[11px]  text-gray-700 shadow-sm border border-white/10">
            {course.lessons} Lessons
          </div>

          <div className="flex-1 bg-[#F6F6F6]/60 backdrop-blur-md rounded-full py-2 px-1 text-center text-[10px] sm:text-[11px] text-gray-700 shadow-sm border border-white/10">
            {course.duration}
          </div>

          <div className="flex-1 bg-[#F6F6F6]/60 backdrop-blur-md rounded-full  py-2 px-1 text-center text-[10px] sm:text-[11px] text-gray-700 shadow-sm border border-white/10">
            {course.comments} Comments
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-start gap-2">
          <h3 className="text-base font-bold text-gray-900 leading-snug min-h-[44px] line-clamp-2">
            {course.title}
          </h3>
          <div className="flex items-center gap-1 shrink-0 mt-0.5">
            <span className="text-sm font-bold text-gray-800">
              {course.rating}
            </span>
            <FaStar className="w-3.5 h-3.5 text-gray-300" />
          </div>
        </div>
        <p className="text-xs  font-medium mt-1">
          by <span className="text-blue/90">{course.author}</span>
        </p>
      </div>

      <div className="flex items-center gap-4 mt-5 border-t border-gray-50 pt-4">
        <div className="flex items-center gap-1 bg-gray-50 rounded-full px-3 py-1 text-xs font-medium text-gray-600 border border-gray-100">
          <FiBarChart2 className="text-gray-500" />
          {course.level}
        </div>

        <div className="flex items-center -space-x-1.5">
          <div className="h-6 w-6 rounded-full bg-gray-200 border border-white"></div>
          <div className="h-6 w-6 rounded-full bg-gray-300 border border-white"></div>
          <div className="h-6 w-6 rounded-full bg-gray-400 border border-white"></div>
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary border border-white text-[8px] font-bold text-black shadow-sm">
            {course.studentsCount}
          </div>
        </div>
      </div>

      <div className="mt-4 pt-1">
        <span className="text-xl font-black text-blue">${course.price}</span>
        <span className="text-xs font-medium text-gray-400">/lifetime</span>
      </div>
    </div>
  );
}
