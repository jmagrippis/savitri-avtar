import * as React from 'react'

export const Footer = () => (
  <>
    <footer className="container">
      Copyright &copy;{new Date().getFullYear()} Savitri Avtar
    </footer>
    <style jsx>{`
      .container {
        font-size: 1rem;
      }
    `}</style>
  </>
)
