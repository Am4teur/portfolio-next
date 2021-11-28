import { motion } from "framer-motion";

interface IFadeInWhenVisible {
  children: JSX.Element
}

export default function FadeInWhenVisible({ children }: IFadeInWhenVisible) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 200 }
      }}
    >
      {children}
    </motion.div>
  );
}