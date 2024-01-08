import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/Profile/profile.png";
import SocialMediaIcons from "../component/SocialMediaIcons/SocialMediaIcons";
import { HiOutlineMinus } from "react-icons/hi";
import { Resume } from "../component/ResumeButton/ResumeButton";
import { v4 as uuidv4 } from 'uuid';
import { databases, DATABASE_ID, COLLECTION_ID, DOCUMENT_ID } from '../appwrite/appwriteConfig';

const Home = () => {
  const [viewCount, setViewCount] = useState<number>();

  useEffect(() => {
    const storedCount = localStorage.getItem('viewCount');
    if (storedCount) {
      setViewCount(parseInt(storedCount));
    } else {
      incrementViewCount();
    }
  }, []);

  const incrementViewCount = () => {
    const userId = localStorage.getItem('userId');

    if (!userId) {
      const newUserId = uuidv4();
      localStorage.setItem('userId', newUserId);

      databases.getDocument(DATABASE_ID, COLLECTION_ID, DOCUMENT_ID)
        .then((response) => {
          const documentData = response;
          const currentVisitCount = documentData.visitCount || 0;
          const updatedVisitCount = currentVisitCount + 1;
          setViewCount(updatedVisitCount);
          localStorage.setItem('viewCount', updatedVisitCount.toString());

          databases.updateDocument(
            DATABASE_ID,
            COLLECTION_ID,
            DOCUMENT_ID,
            { "visitCount": updatedVisitCount }
          ).catch((error) => {
            console.error('Error updating document:', error);
          });
        })
        .catch((error) => {
          console.error('Error fetching document:', error);
        });
    }
  };

  useEffect(() => {
    if (viewCount === null) {
      databases.getDocument(DATABASE_ID, COLLECTION_ID, DOCUMENT_ID)
        .then((response) => {
          const documentData = response;
          const currentVisitCount = documentData.visitCount || 0;
          setViewCount(currentVisitCount);
          localStorage.setItem('viewCount', currentVisitCount.toString());
        })
        .catch((error) => {
          console.error('Error fetching document:', error);
        });
    }
  }, [viewCount]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const imgVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.main
      className="relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <section className="flex flex-col-reverse md:flex-row items-center justify-center h-screen gap-20 -mt-20">
        <motion.div
          className="md:w-1/2 lg:w-[30rem] text-center"
          variants={textVariants}
        >
          <div className="text-lg font-bold text-left mb-4 flex">
            <div className="flex items-center -space-x-1.5">
              <span><HiOutlineMinus /></span>
              <span><HiOutlineMinus /></span>
            </div>
            <span className="ml-3">Hello</span>
          </div>
          <div className="text-left">
            <p>
              <span className="block text-4xl font-bold">
                I'm <span className="text-highLighter">Rahul</span> Kumar
              </span>
              Web Developer with a specialization in React, based in
              Noida, Uttar Pradesh, India. I'm a passionate engineer eager to contribute my skills
              and collaborate with teams around the world.
            </p>
            <div>
              <Resume />
            </div>
          </div>
        </motion.div>
        <motion.img
          src={profileImg}
          alt=""
          className="md:w-1/2 w-[20rem] lg:w-[36rem] lg:h-[36rem] rounded-b-full mt-4"
          variants={imgVariants}
        />
      </section>
      <section className="absolute bottom-[-4rem] flex flex-col lg:flex-row justify-center lg:justify-between w-full items-center">
        <motion.div
          className="text-xl mb-[1rem] m-[2rem] lg:mb-[6rem]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <SocialMediaIcons />
          {viewCount !== undefined && (
            <div className="mt-4">
              <span>Visit Count:</span> {viewCount}
            </div>
          )}
        </motion.div>
      </section>
    </motion.main>
  );
};

export default Home;
