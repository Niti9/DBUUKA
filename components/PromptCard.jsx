// import { useState } from "react";
// import Image from "next/image";
// import { useSession } from "next-auth/react";
// import { usePathname, useRouter } from "next/navigation";

// const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
//   const [copied, setCopied] = useState("");

//   const { data: session } = useSession();
//   const pathName = usePathname();
//   const router = useRouter();

//   //isse user ki id aur session check hoga aur profile par click karne se profile khul jaayegi
//   const handleProfileClick = () => {
//     console.log(post);

//     if (post.creator._id === session?.user.id) return router.push("/profile");

//     router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
//   };

//   //copy function
//   const handleCopy = () => {
//     setCopied(post.prompt);
//     navigator.clipboard.writeText(post.prompt);
//     setTimeout(() => setCopied(false), 4000); //then reset button of copied
//   };

//   return (
//     <div className="prompt_card">
//       <div className="flex justify-between items-start gap-5">
//         <div
//           className="flex-1 flex justify-start items-center gap-3 cursor-pointer"
//           onClick={handleProfileClick}
//         >
//           <Image
//             src={post.creator.image}
//             alt="user_image"
//             width={40}
//             height={40}
//             className="rounded-full object-contain"
//           ></Image>

//           <div className="flex flex-col">
//             <h3
//               className="flex flex-col
//               font-semibold text-gray-900"
//             >
//               {post.creator.username}
//             </h3>
//             <p className="font-inter text -sm text-gray-500">
//               {post.creator.email}
//             </p>
//           </div>
//         </div>

//         <div className="copy_btn" onClick={handleCopy}>
//           <Image
//             // to check if copy then different button or if not copy then different
//             src={
//               copied === post.prompt
//                 ? "/assets/icons/tick3.png"
//                 : "/assets/icons/copy2.png"
//             }
//             width={12}
//             height={12}
//             alt="copy_btn"
//             // alt={copied === post.prompt ? "tick_icon" : "copy_icon"}
//             // alt={copied === post.prompt ? "/assets/icons/copy2.png" : "/assets/icons/tick3.png"}
//           />
//         </div>
//       </div>
//       <p
//         className="my-4 font-satoshi text-sm
//       text-gray-700"
//       >
//         {post.prompt}
//       </p>
//       <p
//         className="font-inter text-sm blue_gradient
//       cursor-pointer"
//         onClick={() => handleTagClick && handleTagClick(post.tag)}
//       >
//         #{post.tag}
//       </p>

//       {/* _id is important rule of nodejs to match the id details   */}
//       {session?.user.id === post.creator._id && pathName === "/profile" && (
//         <div
//           className="mt-5 flex-center gap-4
//         border-t border-gray-100 pt-3"
//         >
//           <p
//             className="font-inter text-sm green_gradient cursor-pointer"
//             onClick={handleEdit}
//           >
//             Edit
//           </p>
//           <p
//             className="font-inter text-sm orange_gradient cursor-pointer"
//             onClick={handleDelete}
//           >
//             Delete
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PromptCard;












"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

function PromptCard({ post, handleEdit, handleDelete, handleTagClick }) {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const [copied, setCopied] = useState("");

  // extra code
  //where i am destructuring props like 'post.creator.username' and ' post.creator.email

  if (!post || !post._id) {
    console.log(post);
    return null; // or handle the case gracefully
  }

  const image = post.creator?.image;
  const username = post.creator?.username;
  const email = post.creator?.email;
  const prompt = post?.prompt;
  const tag = post?.tag;
  const _id = post.creator?._id;


  const handleProfileClick = () => {
    console.log(post);

    if (_id === session?.user.id) return router.push("/profile");

    router.push(`/profile/${_id}?name=${username}`);
  };

  const handleCopy = () => {
    // setCopied(post.prompt);
    setCopied(prompt);
    navigator.clipboard.writeText(prompt);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div
          className="flex-1 flex justify-start items-center gap-3 cursor-pointer"
          onClick={handleProfileClick}
        >
          <Image
            src={image}
            alt="user_image" 
            width={40}
            height={40}
            className="rounded-full object-contain"
          />

          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
              {username}
            </h3>
            <p className="font-inter text-sm text-gray-500">{email}</p>
          </div>
        </div>

        <div className="copy_btn" onClick={handleCopy}>
          <Image
            src={
              copied === prompt
                ? "/assets/icons/tick3.png"
                : "/assets/icons/copy2.png"
            }
            alt={copied === prompt ? "tick_icon" : "copy_icon"}
            width={12}
            height={12}
          />
        </div>
      </div>

      <p className="my-4 font-satoshi text-sm text-gray-700">{prompt}</p>
      <p
        className="font-inter text-sm blue_gradient cursor-pointer"
        onClick={() => handleTagClick && handleTagClick(tag)}
      >
        #{tag}
      </p>

      {session?.user.id === _id && pathName === "/profile" && (
        <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
          <p
            className="font-inter text-sm green_gradient cursor-pointer"
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className="font-inter text-sm orange_gradient cursor-pointer"
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
}

export default PromptCard;

























// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { useSession } from "next-auth/react";
// import { usePathname, useRouter } from "next/navigation";

// const PromptCard = ({ post, handleEdit, handleDelete, handleTagClick }) => {
//   const { data: session } = useSession();
//   const pathName = usePathname();
//   const router = useRouter();

//   const [copied, setCopied] = useState("");



//   // extra code 
  
//   const {
//     creator: { _id, username, email, image },
//     prompt,
//     tag,
//   } = post;

//   const handleProfileClick = () => {
//     console.log(post);

//     if (_id === session?.user.id) return router.push("/profile");

//     router.push(`/profile/${_id}?name=${username}`);
//   };

//   const handleCopy = () => {
//     // setCopied(post.prompt);
//     setCopied(true);
//     navigator.clipboard.writeText(post.prompt);
//     setTimeout(() => setCopied(false), 3000);
//   };

//   return (
//     <div className='prompt_card'>
//       <div className='flex justify-between items-start gap-5'>
//         <div
//           className='flex-1 flex justify-start items-center gap-3 cursor-pointer'
//           onClick={handleProfileClick}
//         >
//           <Image
//             src={image}
//             alt='user_image'
//             width={40}
//             height={40}
//             className='rounded-full object-contain'
//           />

//           <div className='flex flex-col'>
//             <h3 className='font-satoshi font-semibold text-gray-900'>
//               {username}
//             </h3>
//             <p className='font-inter text-sm text-gray-500'>
//               {email}
//             </p>
//           </div>
//         </div>

//         <div className='copy_btn' onClick={handleCopy}>
//           {/* <Image
//             src={
//               copied === post.prompt
//                 ? "/assets/icons/tick.svg"
//                 : "/assets/icons/copy.svg"
//             }
//             alt={copied === post.prompt ? "tick_icon" : "copy_icon"}
//             width={12}
//             height={12}
//           /> */}
//         </div>
//       </div>

//       <p className='my-4 font-satoshi text-sm text-gray-700'>{prompt}</p>
//       <p
//         className='font-inter text-sm blue_gradient cursor-pointer'
//         onClick={() => handleTagClick && handleTagClick(tag)}
//       >
//         #{tag}
//       </p>

//       {session?.user.id === _id && pathName === "/profile" && (
//         <div className='mt-5 flex-center gap-4 border-t border-gray-100 pt-3'>
//           <p
//             className='font-inter text-sm green_gradient cursor-pointer'
//             onClick={handleEdit}
//           >
//             Edit
//           </p>
//           <p
//             className='font-inter text-sm orange_gradient cursor-pointer'
//             onClick={handleDelete}
//           >
//             Delete
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PromptCard;