"use client";

import React from "react";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

// import Form from "@components/Form";
import Form from "../../components/Form";

const CreatePrompt = () => {

  //ROUTER AND SESSION DECLARE HERE
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({
    //another useState
    prompt: '',
    tag: '',
  });

  const createPrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);


    //CREATE OWN API WITHOUT EXPRESS, CONTROLLER,ROUTER ETC....
    try {
      console.log("trying");
      const response = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user.id,
          tag: post.tag,
        }),
      });

      // console.log(response); //to check response
      if (response.ok) { //agar submit successfully hoga to hum home page par waapas aajayenge
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
      // console.log("finally")
    }
  };

  return (
    <Form
      type='Create'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  );
};

export default CreatePrompt;














