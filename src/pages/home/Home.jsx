import team1 from "../../assets/team/team1.webp";
import team2 from "../../assets/team/team2.webp";
import { motion } from "motion/react";
import Loader from "../shared/Loader";
const Home = ({ loading, error }) => {
  if (loading) return <div className="text-center py-10"><Loader /></div>;
  if (error) return <div className="text-center py-10 text-red-500">Error: {error}</div>;
  return (
    <>
      <div className="flex justify-between flex-col md:flex-row px-2 md:px-0 gap-2 container mx-auto items-center py-3 mb-20">
        <div className="short-info flex-1">
          <h2 className="text-3xl md:text-5xl lg:text-7xl text-wrap font-bold">
            Fasted way to get{" "}
            <span className="text-[#8550fb] font-bold uppercase">new Job</span>
          </h2>
          <p className="max-w-xl mt-2 text-gray-500 text-lg">
            Explore a world of opportunities with our job portal. Connect with top employers, discover your dream job, and take the next step in your career. Your future starts here!
          </p>
        </div>
        <div className="banner flex-1 hidden lg:block">
          <motion.img
            animate={{ y: [100, 150, 100] }}
            transition={{ duration: 5, repeat: Infinity }}
            src={team1}
            alt=""
            className="rounded-t-3xl border-l-8 border-b-8 rounded-br-3xl border-[#8550fb] w-130"
          />
          <motion.img
            animate={{ x: [100, 150, 120] }}
            transition={{ duration: 6, repeat: Infinity }}
            src={team2}
            alt=""
            className="rounded-t-3xl border-l-8 border-b-8 rounded-br-3xl border-[#8550fb] w-130"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
