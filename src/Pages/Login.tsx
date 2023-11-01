export default function Login() {
    return (
      <section className="flex flex-row h-screen bg-[#000]">
        <div className="bg-[url(src/assets/Logo3d.png)] bg-center bg-cover h-full md:w-[65%]"></div>
        <div className="h-full w-full md:w-[35%] rounded-l-2xl bg-[#fff] space-y-10 my-auto">
        <div className="my-auto">
          <div>
            <h1 className="text-4xl font-bold text-center">Welcome back!</h1>
            <p className="text-sm text-center">Please enter your account</p>
          </div>
          <form className="justify-item-center mx-[80px] space-y-10">
            <div className="relative z-0 mb-6 group ">
              <input 
                type="text" 
                name="floating_username" 
                id="floating_username" 
                className="block py-2.5 px-0 w-full text-sm text-typography-100 bg-typography-500 bg-opacity-0 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:text-typography-300 peer" 
                placeholder=""  
              />
              <label  
              className="peer-focus:font-medium absolute text-sm text-typography-100 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-typography-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username</label>
            </div>
            <div className="relative z-0 mb-6 group">
              <input 
                type="password" 
                name="floating_password" 
                id="floating_password" 
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-typography-500 bg-opacity-0 border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:text-typography-300 peer" 
                placeholder=""  
              />
              <label 
              className="peer-focus:font-medium absolute text-sm text-typography-100 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-typography-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
            </div>
            <button type="submit" className="text-typography-600 bg-primary-100 hover:bg-primary-200 font-medium rounded-full text-sm w-full py-[7px] md:py-[15px] text-center">Login</button>
          </form>
          </div>
        </div>
      </section>
    )
}