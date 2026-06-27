import { motion } from "framer-motion";

export default function ServiceCard({ title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.215, 0.610, 0.355, 1.000] }}
      className="card"
    >
      <div class="card-header">
        <span className="card-number">0{index + 1}</span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
}