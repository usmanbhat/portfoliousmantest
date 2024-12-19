import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Hello, I'm <span>Your Name</span>.</h1>
      <p>I build things for the web.</p>
    </motion.section>
  );
};