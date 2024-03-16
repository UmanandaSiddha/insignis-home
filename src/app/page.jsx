import CountdownTimer from "@/components/CountdownTimer";
import Parte from "@/components/Parte";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div>
      <div className='h-screen bg-gradient-to-br from-blue-800 via-black to-violet-900 '>
        <Navbar />
        <Parte />
        <Hero />
        <CountdownTimer />
      </div>
    </div>
  );
}
