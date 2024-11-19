import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavBar } from "../Nav-bar";
import { Footer } from "../Footer";
import { Share } from "../Share";
import { Comment } from "../Comment";
import { AuthorBio } from "../AuthorBio";
import ReactMarkdown from "react-markdown";

function ViewPostPage() {
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [likes, setLikes] = useState(0);

  const param = useParams();

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    
    try {
      const results = await axios.get(
        `https://blog-post-project-api.vercel.app/posts/${param.postId}}`
      );
      setImage(results.data.image);
      setCategory(results.data.category);
      setDate(results.data.date);
      setTitle(results.data.title);
      setDescription(results.data.description);
      setContent(results.data.content);
      setLikes(results.data.likes);
    } catch {
      console.log(error);
    }
  };

  return (
    <>
      <div className="Navigation-bar">
        <NavBar />
      </div>
      <div className="max-w-7xl mx-auto space-y-8 container md:px-8 pb-20 md:pb-4 md:pt-8 lg:pt-16 border border-blue-400">
        <div className="space-y-4 md:px-4">
          <img
            src={image}
            alt={title}
            className="lg:rounded-3xl object-cover w-full h-[260px] sm:h-[340px] md:h-[587px]"
          />
        </div>

        <div className="Author-section">
          <AuthorBio />
        </div>
        <div className="flex flex-col xl:flex-row gap-6">
          <div className="xl:w-3/4 space-y-8 border border-green-500 md:px-4">
            <article className="Article-section">
              <div className="flex">
                <span className="bg-[#D7F2E9] rounded-full px-3 py-1 text-sm font-medium text-[#12B279] mb-2">
                  {category}
                </span>
                <span className="px-3 py-1 text-base font-medium text-[#75716B]">
                  {new Date(date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
              <h1 className="text-4xl font-semibold">{title}</h1>
              <p className="mt-4 mb-10 text-[#43403B]">{description}</p>
              <div className="markdown text-[#43403B]">
                <ReactMarkdown>{content}</ReactMarkdown>
              </div>
            </article>
          </div>
        </div>
      </div>

      <div className="Share-section">
        <Share likesAmount={likes}/>
      </div>

      <div className="Comment-section">
        <Comment />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </>
  );
}
export default ViewPostPage;
