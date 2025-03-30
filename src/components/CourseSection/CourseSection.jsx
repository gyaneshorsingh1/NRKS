// src/components/CoursesSection.js
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CourseSection() {
  const courses = [
    {
      title: "Web Development",
      description: "HTML, CSS, JavaScript, React",
    },
    {
      title: "UI/UX Designing",
      description: "Figma, Adobe XD, Design Thinking",
    },
    {
      title: "Cyber Security",
      description: "Network Security, Ethical Hacking",
    },
  ];

  return (
    <section className="px-6 py-12 bg-white">
      <h3 className="text-xl font-bold mb-6 text-center">
        Master Future-Ready Skills – Your Learning Journey Starts Here!
      </h3>
      <div className="grid md:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <Card key={index} className="text-center">
            <CardContent className="p-4">
              <h4 className="font-semibold text-lg mb-2">{course.title}</h4>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <Button>Explore Program</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
