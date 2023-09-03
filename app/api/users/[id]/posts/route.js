import { connectToDB } from "../../../../../utils/database";
import Prompt from "../../../../../models/prompt";

//copy imports from /api/new/route.js

export const GET = async (request,{params}) => {
  try {
    await connectToDB();

    // here creator means author name or user name
    const prompts = await Prompt.find({creator:params.id }).populate('creator');

    // 
    return new Response(JSON.stringify(prompts), {
      status: 200
    });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
