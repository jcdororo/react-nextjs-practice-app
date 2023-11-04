import ChatContainer from "app/components/ChatContainer";
import { getServerSession } from "next-auth";
import { authOptions } from "pages/api/auth/[...nextauth]";


interface Session {
  user: {
    name: string,
    email: string,
    role: string  
  }  
}

export default async function Chat() {
  let session:Session | null = await getServerSession(authOptions);



  return (
    <div className="bg-orange-400 relative p-10 w-11/12 h-screen">
      <ChatContainer session={session}  />
    </div>
  )
}