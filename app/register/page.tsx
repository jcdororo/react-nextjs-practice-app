export default function Register() {
  return (
    <div className="px-20 py-20 bg-slate-400 flex justify-center items-center h-screen ">
        <form className="flex flex-col" method="POST" action="/api/auth/signup">
          <div className="h-10 flex justify-center items-center bg-orange-100 mb-3 rounded-lg">회원가입</div>
          <input name="name" type="text" placeholder="이름" /> 
          <input name="email" type="text" placeholder="이메일" />
          <input name="password" type="password" placeholder="비번" />
          <button className="bg-white" type="submit">id / pw 가입요청</button>
        </form>
    </div>
  )
}