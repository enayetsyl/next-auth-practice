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
      authorize(credentials, req){
        const { email, password } = credentials as {
          email: string;
          password: string;
        }
        if(email !== 'bottle@glass.com' || password !== '1234'){
          throw new Error('Invalid Credentials')
        }

        return { id: '1', name: 'enayet', email: 'bottle@glass.com'}
      }
    })
  ],
  pages: {
    signIn: '/login',
  }
}


const  handler = NextAuth(authOptions)

export { handler as GET, handler as POST}