"use client";

import { useState, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  const closeModal = () => {
    setAnimateOut(true);
  };

  // After animation ends, actually hide modal
  useEffect(() => {
    if (animateOut) {
      const timer = setTimeout(() => {
        setShowModal(false);
        setAnimateOut(false);
      }, 300); // match animation duration
      return () => clearTimeout(timer);
    }
  }, [animateOut]);

  const handleDownload = useCallback(() => {
    const link = document.createElement("a");
    link.href = "/assets/CV.pdf";
    link.download = "Evans-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    closeModal();
  }, []);

  return (
    <section>
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-4 xl:pb-6">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />
              <span className="text-accent">Evans.M.</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Delivering end-to-end solutions that bridge design and functionality,
              turning ideas into impactful digital realities.
            </p>

            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                onClick={() => setShowModal(true)}
                variant="outline"
                size="md"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border-accent rounded full flex justify-center
                   items-center text-accent text-base hover:bg-accent hover:text-primary 
                   hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-none mb-5 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      <Stats />

      {/* Custom Modal */}
      {showModal && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50
            transition-opacity duration-300
            ${animateOut ? "opacity-0" : "opacity-100"}`}
        >
          <div
            className={`bg-slate-200 rounded-2xl p-6 w-[90%] max-w-md text-center shadow-xl
              transform transition-transform duration-300
              ${animateOut ? "scale-90" : "scale-100"}`}
          >
            <h2 className="text-xl font-bold mb-4 text-black">Download CV?</h2>
            <p className="text-slate-950 mb-6 text-lg">
              Confirm to download the CV
            </p>
            <div className="flex justify-center gap-4 ">
              <Button
                onClick={handleDownload}
                className="bg-accent text-black hover:opacity-90"
              >
                Yes, Download
              </Button>
                        <button
            onClick={closeModal}
            className="border border-red-700 bg-white text-red-600 font-bold px-4 py-1 rounded-full hover:bg-red-500 hover:text-white transition"
          >
            Cancel
          </button>





            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
