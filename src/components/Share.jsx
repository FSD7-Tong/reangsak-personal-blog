import {
    Facebook,
    Linkedin,
    Twitter,
    Smile,
    Copy
  } from "lucide-react";

  export function Share({ likesAmount }) {
    const shareLink = encodeURI(window.location.href);
    console.log(shareLink);
    return (
      <div className="border border-red-500 max-w-7xl mx-auto md:px-12 md:py-7">
        <div className="bg-[#EFEEEB] py-4 px-4 rounded-2xl flex flex-col space-y-4 md:gap-16 md:flex-row md:items-center md:space-y-0 md:justify-between w-3/4 h-[80px]">
          <button className="bg-white flex items-center justify-center space-x-2 px-11 py-3 rounded-full text-foreground border border-[#75716B] hover:border-muted-foreground hover:text-muted-foreground transition-colors group">
            <Smile className="w-5 h-5 text-foreground group-hover:text-muted-foreground transition-colors" />
            <span className="text-[#26231E] group-hover:text-muted-foreground font-medium text-base">
              {likesAmount}
            </span>
          </button>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => {
                navigator.clipboard.writeText(shareLink);
              }}
              className="bg-white flex flex-1 items-center justify-center space-x-2 px-11 py-3 rounded-full text-foreground border border-[#75716B] hover:border-muted-foreground hover:text-muted-foreground transition-colors group"
            >
              <Copy className="w-5 h-5 text-foreground transition-colors group-hover:text-muted-foreground" />
              <span className="text-[#26231E] text-base font-medium group-hover:text-muted-foreground">
                Copy link
              </span>
            </button>
            <a
              href={`https://www.facebook.com/share.php?u=${shareLink}`}
              target="_blank"
              className="bg-[#1877F2] p-3 rounded-full text-white hover:border-muted-foreground hover:text-muted-foreground"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareLink}`}
              target="_blank"
              className="bg-[#0077B5] p-3 rounded-full text-white hover:border-muted-foreground hover:text-muted-foreground"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href={`https://www.twitter.com/share?&url=${shareLink}`}
              target="_blank"
              className="bg-[#55ACEE] p-3 rounded-full hover:border-muted-foreground hover:text-muted-foreground text-foreground text-white"
            >
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    );
  }