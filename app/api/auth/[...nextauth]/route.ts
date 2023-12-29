import axios, {AxiosResponse} from "axios";
import NextAuth, { NextAuthOptions } from "next-auth";
import  CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  providers:[
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      async authorize(credentials, req){
        const { email, password } = credentials as {
          email: string;
          password: string;
        }

        try {
          const response : AxiosResponse = await axios.get(`http://localhost:5000/api/v1/singleUser?email=${email}`)
          const userInfo = await response.data;
          console.log(email)
          console.log(userInfo.email)
          
          if(email !== userInfo.email || password !== userInfo.password){
            throw new Error('Invalid Credentials')
          }else{
            return userInfo
          }
          
        } catch (error) {
          console.log(error)
          throw new Error('Invalid Credentials')
        }
            }
    })
  ],
  pages: {
    signIn: '/login',
  }
}


const  handler = NextAuth(authOptions)

export { handler as GET, handler as POST}