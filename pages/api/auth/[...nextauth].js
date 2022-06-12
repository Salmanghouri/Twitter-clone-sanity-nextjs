import NextAuth from "next-auth"
import TwitterOrivider from 'next-auth/providers/twitter'
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    TwitterOrivider({
        clientId: process.env.TWITTER_CLIENT_ID,
        clientSecret: process.env.TWITTER_CLIENT_SECRET,
        version: '2.0'  //opt-in to twitter 0Auth 2.0
      }),
    // ...add more providers here
    //2:28 After Approve ACcount
  ],
})