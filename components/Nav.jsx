// "use client"; //to make it available for client server

// import Link from "next/link";
// import Image from "next/image";

// //useState and useEffect are client functionality therefore we should include "use Client " above
// import { useState, useEffect } from "react";
// import { signIn, signOut, useSession, getProviders } from "next-auth/react";

// const Nav = () => {
//   // const isUserLoggedIn = true;
//   const { data: session } = useSession();

//   const [providers, setProviders] = useState(null);
//   const [toggleDropdown, setToggleDropdown] = useState(false);

//   useEffect(() => {
//     const setUpProviders = async () => {
//       const response = await getProviders();
//       setProviders(response);
//     };
//     setUpProviders();
//   }, []);

//   return (
//     <nav className="flex-between w-full mb-16 pt-3">
//       <Link href="/" className="flex gap-2 fle-center">
//         <Image
//           src="/assets/DBUU2.png"
//           // src={session?.user.image} //image of user email icon
//           alt="Logo"
//           width={60} //in pixels
//           height={60}
//           className="object-contain"
//         />
//       </Link>

//       {/* Desktop Navigation button  */}
//       {/* small devices par flex lagega aur icon hide ho jaayega
//       medium par 5 ka gap hai  */}
//       <div className="sm:flex hidden">
//         {session?.user ? (
//           <div className="flex gap-3 md:gap-5">
//             <Link href="/create-prompt" className="black_btn">
//               Create Post
//             </Link>

//             <button type="button" onClick={signOut} className="outline_btn">
//               Sign Out
//             </button>

//             <Link href="/profile">
//               <Image
//                 src={session?.user.image}
//                 width={37}
//                 height={37}
//                 className="rounded-full"
//                 alt="profile"
//               />
//             </Link>
//           </div>
//         ) : (
//           //else condition or sign in button
//           <>
//             {providers &&
//               Object.values(providers).map((provider) => (
//                 <button
//                   type="button"
//                   key={provider.name}
//                   onClick={() => signIn(provider.id)}
//                   className="black_btn"
//                 >
//                   Sign In
//                 </button>
//               ))}
//           </>
//         )}
//       </div>

//       {/* Mobile Navigation */}
//       {/* only show image icon and sign in option in mobile nav */}
//       <div className="sm:hidden flex relative">
//         {/* check if user exists or not
//         here isloggedUser change with "session?user" */}
//         {session?.user ? (
//           <div className="flex">
//             <Image
//               src={session?.user.image} //user icon image
//               width={37}
//               height={37}
//               className="rounded-full"
//               alt="profile"
//               // //below to change state in react is unapropriate or wrong or old method
//               // onClick={() => setToggleDropdown(!toggleDropdown)}
//               // //instead we can use a callback functio inside toggle and pass "prev" argument
//               //as previous state and then we can change it many times

//               onClick={() => setToggleDropdown((prev) => !prev)}
//             />

//             {/* if toggleDropdown true or we have  then it  complete next process*/}
//             {toggleDropdown && (
//               <div className="dropdown">
//                 <Link
//                   href="/profile"
//                   className="dropdown_link"
//                   onClick={() => setToggleDropdown(false)}
//                 >
//                   My Profile
//                 </Link>

//                 <Link
//                   href="/create-prompt"
//                   className="dropdown_link"
//                   onClick={() => setToggleDropdown(false)}
//                 >
//                   Create Prompt
//                 </Link>

//                 <button
//                   type="button"
//                   onClick={() => {
//                     setToggleDropdown(false);
//                     signOut();
//                   }}
//                   className="mt-5 w-full black_btn"
//                 >
//                   Sign Out
//                 </button>
//               </div>
//             )}
//           </div>
//         ) : (
//           <>
//             {providers &&
//               Object.values(providers).map((provider) => (
//                 <button
//                   type="button"
//                   key={provider.name}
//                   onClick={() => signIn(provider.id)}
//                   className="black_btn"
//                 >
//                   Sign In
//                 </button>
//               ))}
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Nav;

























"use client"; //to make it available for client server

import Link from "next/link";
import Image from "next/image";

//useState and useEffect are client functionality therefore we should include "use Client " above
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  // const isUserLoggedIn = true;
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await getProviders();
      setProviders(response);
    })();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 fle-center">
        <Image
          src="/assets/DBUU2.png"
          // src={session?.user.image} //image of user email icon
          alt="Logo"
          width={60} //in pixels
          height={60}
          className="object-contain"
        />
      </Link>

      {/* Desktop Navigation button  */}
      {/* small devices par flex lagega aur icon hide ho jaayega
      medium par 5 ka gap hai  */}
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>

            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>

            <Link href="/profile">
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          //else condition or sign in button
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      {/* only show image icon and sign in option in mobile nav */}
      <div className="sm:hidden flex relative">
        {/* check if user exists or not
        here isloggedUser change with "session?user" */}
        {session?.user ? (
          <div className="flex">
            <Image
              src={session?.user.image} //user icon image
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
              // //below to change state in react is unapropriate or wrong or old method
              // onClick={() => setToggleDropdown(!toggleDropdown)}
              // //instead we can use a callback functio inside toggle and pass "prev" argument
              //as previous state and then we can change it many times

              onClick={() => setToggleDropdown((prev) => !prev)}
            />

            {/* if toggleDropdown true or we have  then it  complete next process*/}
            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>

                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>

                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;

