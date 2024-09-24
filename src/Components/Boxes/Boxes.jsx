import React, { useEffect, useState } from "react";
import photo1 from "../../assets/photo 1.jpg";
import photo2 from "../../assets/photo 2.jpg";
import photo3 from "../../assets/photo 3.jpg";
import photo4 from "../../assets/photo 4.jpg";
import "../../App.css";
import { createDirectus, rest, readItems } from "@directus/sdk";
import { Link } from "react-router-dom";
import Corousel from "../Corousel/Corousel";

const Boxes = () => {
  const [blogs, setBlogs] = useState([]);
  const client = createDirectus("https://admin.ai.avinashi.dev").with(rest());

  const result = async () => {
    try {
      const response = await client.request(readItems("launch_week_blog"));
      setBlogs(response);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  console.log(blogs);

  useEffect(() => {
    result();
  }, []);
  //   const content = [
  //     {
  //       id: 1,
  //       image: photo1,
  //       heading: "Web Apps",
  //       content:
  //         "We design sleek and responsive web apps for any business challenge.",
  //     },
  //     {
  //       id: 2,
  //       image: photo2,
  //       heading: "Mobile Apps",
  //       content:
  //         "We design, refine, and make your app shine above the competition.",
  //     },
  //     {
  //       id: 3,
  //       image: photo3,
  //       heading: "Design System",
  //       content:
  //         "We build robust and cohesive design systems for easy scalability.",
  //     },
  //     {
  //       id: 4,
  //       image: photo4,
  //       heading: "Consulting",
  //       content:
  //         "We'll tear apart your existing product and help you optimize your product for better results.",
  //     },
  //   ];

  const colors = [
    "#fee7fe",
    "#f1efe1",
    "#d4effa",
    "#f8f1ab",
    "#F4F3CD",
    "#F4CDEF",
    "#DFCDF4",
    "#CDF4E5",
    "#DBEEF1",
  ];

  const Color = () => colors[Math.floor(Math.random() * colors.length)];
  const Rotation = () => Math.floor(Math.random() * 21) - 10;

  return (
    <>
      <Corousel />
      <div className=" justify-center mt-28 gap-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mx-4">
        {blogs.map((item, id) => (
          <div
            key={id}
            className="border radius px-8 pb-4"
            style={{ backgroundColor: Color() }}
          >
            <Link to={`/cardcontent/${item.blog_content_title}`}>
              <div className="flex justify-center overflow-hidden pb-5">
                <img
                  src={item.image}
                  alt={item.heading}
                  className="w-44 h-36 drop-shadow-lg shadow-black"
                  style={{ transform: `rotate(${Rotation()}deg)` }}
                />
              </div>
              <div className="mt-6">
                <h1 className="text-lg font-semibold">
                  {item.blog_content_title.slice(0, 30)}...
                </h1>
                <p className="w-52 text-gray-600">
                  {item.blog_content.slice(0, 50)}...
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Boxes;
