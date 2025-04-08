import React from "react";
import { SectionWrapper } from "../hoc";

import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { certifications } from "../constants";

const CertificationCard = ({
  index,
  title,
  organization,
  icon,
  image,
  link,
  tags,
}) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-black-200 p-6 rounded-3xl xs:w-[480px] w-full"
    >
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt="certification"
          className="w-full h-full rounded-2xl cursor-pointer"
          onClick={() => window.open(link, "_blank")}
        />
      </div>

      <div className="mt-1">
        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span> {title}
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <p
                  key={`cert_${tag.name}`}
                  className={`text-secondary text-[14px] ${tag.color}`}
                >
                  {tag.name}
                </p>
              ))}
            </div>
          </div>
          <img
            src={icon}
            alt={organization}
            className="w-10 h-10 rounded-sm ojbect-contain"
          />
        </div>
      </div>
    </motion.div>
  );
};

const Certification = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What I've obtained</p>
          <h2 className={styles.sectionHeadText}>Certifications</h2>
        </motion.div>

        <div className={`mt-12 pb-14 flex flex-wrap gap-7`}>
          {certifications.map((certification, index) => (
            <CertificationCard
              key={`${certification.title}-${index}`}
              index={index}
              {...certification}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Certification, "");
