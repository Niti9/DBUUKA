import { connectToDB } from "../../../../utils/database";
import Prompt from "../../../../models/prompt";


//THIS IS A ROUTE PAGE AND TAKE OR GET PROMPT (means data as prompt and tag ) FROM USER
export const POST = async (req) => {
  const { userId, prompt, tag } = await req.json();

  try {
    //this is a 'LAMBDA FUNCTION' means it connectoDb then work then close every time automatically
    await connectToDB(); //it will like work and then die or close
    const newPrompt = new Prompt({
      creator: userId,
      prompt,
      tag
    });

    await newPrompt.save();

    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
















