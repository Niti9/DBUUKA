import { connectToDB } from "../../../../utils/database";
import Prompt from "../../../../models/prompt";
//copy imports from /api/new/route.js


//GET (read)
export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    // here creator means author name or user name
    //here only one prompt not like file of new/route.js
    const prompt = await Prompt.findById(params.id).populate("creator");

    if (!prompt) return new Response("Prompt not found", { status: 404 });
    return new Response(JSON.stringify(prompt), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};


//PATCH (update)
export const PATCH = async (request, { params }) => {
  const { prompt, tag } = await request.json();

  try {
    await connectToDB();
    const existingPrompt = await Prompt.findById(params.id);

    if (!existingPrompt)
      return new Response("Prompt not found", { status: 400 });

    //change values of prompt and tag
    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;
    await existingPrompt.save();

    return new Response(JSON.stringify(existingPrompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to update prompt", { status: 500 });
  }
};


//DELETE (delete)
export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();

    await Prompt.findByIdAndRemove(params.id);
     
    return new Response("Prompt deleted successfully", {
      status: 200,
    });
    
  } catch (error) {
    return new Response("Failed to delete prompt", {
      status: 500,
    });
  }
};
