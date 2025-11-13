'use client'

import { motion } from 'framer-motion'

export default function FacebookEmbed() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-xl p-6"
    >
      <h3 className="text-2xl font-serif font-bold mb-4 text-gray-900">Urmărește-ne pe Facebook</h3>
      <div className="rounded-lg overflow-hidden">
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsorrisodent%2Fposts%2F&width=500&show_text=true&height=500&appId"
          width="100%"
          height="500"
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          title="Facebook Post"
        ></iframe>
      </div>
      <p className="text-sm text-gray-500 mt-4 text-center">
        <a
          href="https://www.facebook.com/sorrisodent"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-600 hover:text-primary-700 font-semibold"
        >
          Vizitează pagina noastră Facebook →
        </a>
      </p>
    </motion.div>
  )
}

