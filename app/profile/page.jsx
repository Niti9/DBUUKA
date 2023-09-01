"use client";

import React from "react";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from "../../components/Profile";

const MyProfile = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      //posts of particular user
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();
      setPosts(data);
    };
    console.log(posts);

    //now we can only fetch the users detail when we have a User then we can only access it
    if (session?.user.id) {
      fetchPosts();
    }
  }, [session?.user.id]); //jab id match hogi tabhi 



  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };

  const handleDelete = async (post) => {
    //confirm message to delete data
    const hasConfirmed = confirm(
      "Are you sure you want to delete this prompt?"
    );

    if(hasConfirmed) {
      console.log("yes");
      try {
        await fetch(`/api/prompt/${post._id.toString()}`, {
          method: 'DELETE',
        })
        const filteredPosts = posts.filter((item) => item._id !== post._id);

        setPosts(filteredPosts);
        
      } catch (error) {
        console.log(error);
      }
    }
  };

  

  return (
    <Profile
      name={session?.user.name}o
      desc="Welcome to your personalized profile page"
      data={posts}
      handleDelete={handleDelete}
      handleEdit={handleEdit}
    />
  );
};

export default MyProfile;
