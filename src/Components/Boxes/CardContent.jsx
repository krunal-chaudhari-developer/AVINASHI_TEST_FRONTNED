import { createDirectus, readItems, rest } from "@directus/sdk";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../App.css";

const CardContent = () => {
  const { title } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [description, setDescription] = useState("");
  const [formattedDate, setFormattedDate] = useState("");
  const client = createDirectus(`https://admin.ai.avinashi.dev`).with(rest());

  const result = async () => {
    try {
      const response = await client.request(readItems("launch_week_blog"));
      setBlogs(response);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    result();
  }, []);

  useEffect(() => {
    if (blogs.length > 0) {
      const selectedBlog = blogs.find(
        (blog) => blog.blog_content_title === title
      );
      if (selectedBlog) {
        setDescription(selectedBlog.blog_content);

        const date = new Date(selectedBlog.date_created);
        setFormattedDate(date.toLocaleString());
      }
    }
  }, [blogs, title]);

  const renderParagraphs = () => {
    return description.split("\n").map((paragraph, index) => (
      <p
        key={index}
        className="text-slate-700 mx-6 my-5 animate-slide-up text-sm md:text-base text-justify"
      >
        {paragraph}
      </p>
    ));
  };

  return (
    <div>
      <div className="">
        <div className="flex justify-around">
          <h1 className="font-bold md:text-2xl text-center mx-2 animate-slide-up">
            {title}
          </h1>
          <h1 className="font-bold mx-6 my-1 text-xs md:text-base">
            Date:{" "}
            <span className="font-semibold text-xs md:text-base">
              {formattedDate}
            </span>
          </h1>
        </div>
      </div>

      <div className="">{renderParagraphs()}</div>
    </div>
  );
};

export default CardContent;
