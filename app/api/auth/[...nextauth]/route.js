import NextAuth from "next-auth";

import GoogleProvider from "next-auth/providers/google";
// import { connectToDB } from "../utils/database";
import User from "../../../../models/user";
import { connectToDB } from "../../../../utils/database.js";
console.log({
  clientId: process.env.GOOGLE_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
});

//using authorization means "client id" and "client secret" here from env
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  //using callback to get the all session, signIn user details in mongoDb
  callbacks: {
    //session function
    async session({ session }) {
      //store the user id from MongoDB to session
      const sessionUser = await User.findOne({
        email: session.user.email,
      });
      session.user.id = sessionUser._id.toString();
      return session;
    },

    //signIn function
    async signIn({ account, profile, user, credentials }) {
      try {
        //  Here we have functionality
        //of  serverless route , which means
        // lambda function opens up it means we
        //don't need to keep our server running constant
        //only at spin up the server it will run

        await connectToDB();

        //check if a user already exists
        const userExists = await User.findOne({
          email: profile.email,
        });

        // //if not, create a new user in  database
        // if (!userExists) {
        //   await User.create({
        //     email: profile.email,
        //     //it means below space change with no space
        //     username: profile.name.replace(" ", "").toLowerCase(),
        //     image: profile.picture,
        //     // password: profile.password,
        //   });
        // }
        if (userExists===null) {
          await User.create({
            email: profile?.email,
            //it means below space change with no space
            username: profile?.name.replace(/\s+/g, '').toLowerCase(),
            image: user.image
            
          });
        }
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
