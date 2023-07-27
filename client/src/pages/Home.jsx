import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";

import state from "../store";
import { CustomButton } from "../components";

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";
import CustomeButton from "../components/CustomButton";

const Home = () => {
  const snap = useSnapshot(state);
  return (
    <>
      <AnimatePresence>
        {snap.intro && (
          <motion.section className="home" {...slideAnimation("left")}>
            <motion.header {...slideAnimation("down")}>
              <img
                src="./threejs.png"
                alt="logo"
                className=" w-8 h-8 object-contain"
              />
            </motion.header>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                LET'S <br className="xl:block hidden" /> DO IT
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className=" flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-gray-600 text-base">
                Create your unique shirt with our brand-new 3d customization
                tool. <strong>Unleash your imagination</strong> and define your
                own style
              </p>
              <CustomeButton
                type="filled"
                title="Customize It"
                handleClick={() => (state.intro = false)}
                customStyle="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default Home;
