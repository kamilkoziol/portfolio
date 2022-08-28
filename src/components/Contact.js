import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-start justify-center mx-auto max-w-4xl mt-16 relative"
    >
      <h2 className=" text-secondaryTextColor font-bold text-2xl after:w-40 after:h-[1px] after:-translate-y-[18px] after:translate-x-44 after:bg-primaryTextColor after:block">
        What's next?
      </h2>
      <div className="justify-items-center items-center grid grid-cols-2 mt-10">
        <div>
          <p>
            Currently I'm looking for a job as a frontend developer. My
            goal is to become fullstack expert. If you are interested in
            giving me a shot do not hesitate to contact.
          </p>
          <p>The website you are looking at is just a tip of an iceberg</p>
        </div>
        <a href="mailto:kamkoziol1@gmail.com">
          <div className="justify-self-auto flex justify-center items-center w-44 h-12 cursor-pointer border border-secondaryTextColor font-bold text-secondaryTextColor font-code px-6 py-2 rounded-md">
            Contact me!
          </div>
        </a>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center text-xs font-code">
        Designed and built by Kamil Koziół (not the most beautiful tho)
      </div>
    </section>
  );
};

export default Contact;
