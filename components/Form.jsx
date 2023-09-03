import React from "react";
import Link from "next/link";

const Form = ({ post, setPost, submitting, handleSubmit, type }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type}Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex
    flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI Prompt
          </span>

          {/* creating a blank text area and update there user data  */}
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your prompt here..."
            required
            className="form_textarea"
          />
        </label>

        {/* another text area  */}
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag
            <span className="font-normal">
              (#product, #web-development, #idea)
            </span>
          </span>

          {/* creating a textarea for tags means extra  */}
          <input
            value={post.tag}
            onChange={(e) =>
              setPost({
                ...post,
                tag: e.target.value,
              })
            }
            type='text'
            placeholder="#tag"
            required
            className="form_input"
          />
        </label>

        {/* Cancel button  throw you back on main page*/}
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm"> 
        
            Cancel
          </Link>

            {/* create button  */}
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm
            bg-primary-orange rounded-full text-white"
          >
            {submitting ? `${type}...` : type}   
            
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
