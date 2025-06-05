// BlogSection.jsx
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";

const blogs = [
 {
  title: "Exploring the Future of AI in Education",
  description: `
Artificial Intelligence (AI) is revolutionizing the education sector by transforming how students learn and how teachers deliver instruction. With the integration of AI tools, educators can personalize learning experiences based on individual student needs learning speeds and interests. AI algorithms analyze student performance in real time, identifying areas where a student may be struggling and suggesting tailored resources or interventions to improve understanding and retention.

One of the most impactful uses of AI in classrooms is through adaptive learning platforms. These platforms automatically adjust the difficulty of questions and provide hints or explanations based on how a student responds. This creates a unique learning path for each individual, ensuring no one is left behind. AI can also automate administrative tasks such as grading assignments, tracking attendance, and even composing progress reports. This allows educators to focus more on instruction and student interaction rather than paperwork.

** kjsahflka
** Real-time student performance analysis  
** Automated grading and administrative task management  
** Adaptive learning platforms for personalized education  
** AI chatbots offering 24/7 learning support  
** NLP tools for translation, summarization, and inclusivity 
Beyond the classroom, AI-powered chatbots offer round-the-clock support for students helping answer questions, review concepts, and provide feedback. Tools like natural language processing (NLP) can translate content, summarize complex texts, and assist students with different linguistic backgrounds, making learning more accessible and inclusive.

As powerful as AI is, it also raises questions about data privacy, algorithmic bias and over-reliance on automation. Educational institutions must tread carefully and ensure that these technologies are implemented ethically. The goal is not to replace teachers but to empower them — to augment human instruction with intelligent tools that improve efficiency and engagement.

The future of AI in education is filled with promise. When used responsibly, it has the potential to bridge educational gaps, make learning more personalized, and ultimately unlock human potential on a global scale.
  `.trim(),
  image: "https://media.istockphoto.com/id/1398619494/photo/alarm-clock-and-coming-soon-written-white-lightbox-sitting-on-blue-background.jpg?s=1024x1024&w=is&k=20&c=5IYRQTjQ0UgVrd1wLo4qUpSk4qOOQeSLrMMX6lyeYlw=",
  linkTile:"Youtube video",
  link: "#",
  date: "June 5, 2025",
},
  {
  title: "Exploring the Future of AI in Education",
  description: `
Artificial Intelligence (AI) is revolutionizing the education sector by transforming how students learn and how teachers deliver instruction. With the integration of AI tools, educators can personalize learning experiences based on individual student needs learning speeds and interests. AI algorithms analyze student performance in real time, identifying areas where a student may be struggling and suggesting tailored resources or interventions to improve understanding and retention.

One of the most impactful uses of AI in classrooms is through adaptive learning platforms. These platforms automatically adjust the difficulty of questions and provide hints or explanations based on how a student responds. This creates a unique learning path for each individual, ensuring no one is left behind. AI can also automate administrative tasks such as grading assignments, tracking attendance, and even composing progress reports. This allows educators to focus more on instruction and student interaction rather than paperwork.

** kjsahflka
** Real-time student performance analysis  
** Automated grading and administrative task management  
** Adaptive learning platforms for personalized education  
** AI chatbots offering 24/7 learning support  
** NLP tools for translation, summarization, and inclusivity 
Beyond the classroom, AI-powered chatbots offer round-the-clock support for students helping answer questions, review concepts, and provide feedback. Tools like natural language processing (NLP) can translate content, summarize complex texts, and assist students with different linguistic backgrounds, making learning more accessible and inclusive.

As powerful as AI is, it also raises questions about data privacy, algorithmic bias and over-reliance on automation. Educational institutions must tread carefully and ensure that these technologies are implemented ethically. The goal is not to replace teachers but to empower them — to augment human instruction with intelligent tools that improve efficiency and engagement.

The future of AI in education is filled with promise. When used responsibly, it has the potential to bridge educational gaps, make learning more personalized, and ultimately unlock human potential on a global scale.
  `.trim(),
  image: "https://media.istockphoto.com/id/1398619494/photo/alarm-clock-and-coming-soon-written-white-lightbox-sitting-on-blue-background.jpg?s=1024x1024&w=is&k=20&c=5IYRQTjQ0UgVrd1wLo4qUpSk4qOOQeSLrMMX6lyeYlw=",
  linkTile:"Youtube video",
  link: "#",
  date: "June 5, 2025",
},
];

export default function BlogSection() {
  return (
    <>
    <Navbar/>
    <br />
    <section className="py-16 mt-10 bg-gradient-to-r from-slate-100 to-white ">
      <div className="max-w-6xl mx-auto px-4">
        
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Latest Blog Posts</h2>
        <div className="grid gap-10 md:grid-cols-2">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-2xl h-150 overflow-y-scroll hover:scale-[1.02] transition-transform duration-300"
            >
              <Link
                  href={blog.link}
                  target="_blank"
                >
              <img
                src={blog.image}
                alt={blog.title}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{blog.date}</p>
                {blog.description.split('\n').map((line, i) => {
                if (line.trim().startsWith("**")) {
                    return (
                    <ul key={i} className="list-disc list-inside text-gray-700 text-lg mb-2">
                        <li>{line.replace("**", "").trim()}</li>
                    </ul>
                    );
                }
                return (
                    <p key={i} className="text-gray-700 text-lg mb-4 ">{line.trim()}</p>
                );
                })}
                
                 
            <Link
                  to={`/blog/${blog.id}`}
                  className="inline-block mt-4 text-blue-600 hover:underline font-semibold"
                >
                  Read Full Blog →
                </Link>
              </div>
                </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer/>
        </>
  );
}
