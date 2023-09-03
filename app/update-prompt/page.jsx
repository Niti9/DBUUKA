"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "../../components/Form";

const EditPrompt = () => {
  //ROUTER AND SESSION DECLARE HERE
  const router = useRouter();
  

  // to get the "id" to search user data
  const searchParams = useSearchParams();
  const promptId = searchParams.get("id");

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({
    //another useState
    prompt: "",
    tag: "",
  });

  //to edit created or stored data and then  edit
  useEffect(() => {
    const getPromptDetails = async () => {
      const response = await fetch(`/api/prompt/${promptId}`);
      const data = await response.json();

      setPost({
        prompt: data.prompt,
        tag: data.tag,
      });
    };

    if (promptId) {
      getPromptDetails();
    }
  }, [promptId]);

  //UPDATE OR EDIT THE DATA
  const updatePrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!promptId) {
      return alert("Prompt ID not found");
    }

    // CREATE OWN API WITHOUT EXPRESS, CONTROLLER,ROUTER ETC....
    try {
      console.log("trying");
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: 'PATCH', //TO UPDATE BY PATCH REQUEST
        body: JSON.stringify({
          prompt: post.prompt,
           //we don't need user id this time
          // userId: session?.user.id,
          tag: post.tag,
        }),
      });

      // console.log(response); //to check response
      if (response.ok) {
        //agar submit successfully hoga to hum home page par waapas aajayenge
        router.push("/");
      
        
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type="Edit"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatePrompt}
    />
  );
};

export default EditPrompt;














