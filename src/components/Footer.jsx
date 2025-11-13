import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-white mt-12 py-6">
      <div className="container mx-auto text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Prasanth Saravanan. Built with React & Tailwind.
      </div>
    </footer>
  )
}