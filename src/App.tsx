import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { motion } from "framer-motion";
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const sentence = "Hi, I'm Vincent";

  return (
    <div style={{ fontSize: "24px", fontFamily: "Arial, sans-serif" }}>
      {sentence.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  )
}

export default App
