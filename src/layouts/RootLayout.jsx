import { Outlet } from "react-router";
import NavBar from "../pages/shared/NavBar";
import Footer from "../pages/shared/Footer";
import { useEffect, useState } from "react";
import 'animate.css';
const RootLayout = () => {
  const [isScroll, setIsScroll] = useState(false); 
  const handleScroll = () => {
    if(window.scrollY > 20){
      setIsScroll(true)
    }else{
      setIsScroll(false)
    }
  }
  
  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
    return () => removeEventListener('scroll', handleScroll)
  },[])
  return (
    <div className="min-h-screen flex flex-col">
      <header className={`${isScroll ? 'sticky animate__animated animate__fadeInDown bg-white shadow-md' : ''} top-0 z-50 `} style={{ '--animate-duration': '1s' }}>
        <NavBar />
      </header>
      <main className="grow overflow-hidden">
        <Outlet />
      </main>
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayout;
