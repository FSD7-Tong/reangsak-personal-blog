import { comments } from "@/data/comments";
import { Textarea } from "./ui/textarea";

export function Comment() {
    return (
      <div className="border max-w-7xl mx-auto mb-20 md:px-8">
        <div className="space-y-2 md:pl-4 w-3/4 mb-16 border border-blue-400">
          <h3 className="text-base font-medium text-[#75716B]">Comment</h3>
          <div className="space-y-2">
            <Textarea
              placeholder="What are your thoughts?"
              className="w-full p-4 h-24 resize-none py-3 rounded-xl placeholder:text-[#75716B] focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-muted-foreground border-[#DAD6D1] bg-[#FFFFFF]"
            />
            <div className="flex justify-end">
              <button className="px-8 py-2 bg-[#26231E] text-white rounded-full hover:bg-[#75716B] transition-colors text-base font-medium w-28 h-12">
                Send
              </button>
            </div>
          </div>
        </div>
        <div className="space-y-6 border border-red-500 w-3/4 md:px-4">
          {comments.map((comment, index) => (
            <div key={index} className="flex flex-col gap-5 mb-4">
              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src={comment.image}
                    alt={comment.name}
                    className="rounded-full w-12 h-12 object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col items-start justify-between">
                    <h4 className="font-semibold text-xl text-[#43403B]">{comment.name}</h4>
                    <span className="text-xs font-medium text-[#75716B]">{comment.date}</span>
                  </div>
                </div>
              </div>
              <p className=" text-[#75716B] text-base font-medium">{comment.comment}</p>
              {index < comments.length - 1 && (
                <hr className="border-[#DAD6D1] my-3" />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }