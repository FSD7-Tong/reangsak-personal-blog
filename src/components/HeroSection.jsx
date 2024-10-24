export function HeroSection() {
    return (
      <main className="px-4 py-10 lg:py-16 bg-[#F9F8F6] lg:px-[120px]">
        <div className="flex flex-col lg:flex-row items-center lg:gap-[60px] lg:justify-center">
          <div className="flex flex-col text-center gap-4 lg:w-[347px] lg:h-[276px] lg:text-right lg:gap-6">
            <h1 className="text-[40px] lg:text-[52px] lg:leading-[60px] font-semibold leading-[48px]">
              Stay <br className="hidden lg:block" />
              Informed, <br />
              Stay Inspired
            </h1>
            <p className="text-base text-[#75716B] font-medium text-center lg:text-base lg:font-medium lg:text-right">
              Discover a World of Knowledge at Your Fingertips. Your Daily Dose of
              Inspiration and Information.
            </p>
          </div>
          <img
            src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg"
            alt="Person with a cat"
            className="h-[470px] object-cover rounded-2xl mx-4 my-8 lg:mb-0 lg:w-[386px] lg:h-[529px] lg:my-0"
          />
          <div className="lg:w-[347px] lg:h-[284px] lg:gap-3">
            <h2 className="text-sm font-medium mb-2 text-[#75716B]">-Author</h2>
            <h3 className="text-2xl font-semibold mb-4">Thompson P.</h3>
            <p className="text-[#75716B] mb-4 text-base font-medium">
              I am a pet enthusiast and freelance writer who specializes in animal
              behavior and care. With a deep love for cats, I enjoy sharing
              insights on feline companionship and wellness.
            </p>
            <p className="text-[#75716B] text-base font-medium">
              When I&apos;m not writing, I spend time volunteering at my local
              animal shelter, helping cats find loving homes.
            </p>
          </div>
        </div>
      </main>
    );
  }