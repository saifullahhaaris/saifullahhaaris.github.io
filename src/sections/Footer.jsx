import React from 'react'
import { socialImgs } from '../constants'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-container">
            <div className="flex flex-col justify-center md:items-start items-center">
                <a href="https://medium.com/@saifullahhaaris" 
                target="_blank" 
                rel="noopener noreferrer"
                >
                    Visit my blog
                </a>
            </div>
            <div className="socials">
                {socialImgs.map((img) => (
                    <a
                    className="icon"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={img.url}
                    key={img.url}
                    >
                        <img src={img.imgPath} alt={img.name} />
                    </a>
                ))}
            </div>
            <div className="flex flex-row items-center justify-center md:justify-end space-x-2">
              <a href="#hero" className="flex items-center space-x-2">
                <img
                  src="/images/Favicon.png"
                  alt="Saifullah Haaris Logo"
                  className="w-5 h-5"
                />
                <p className="text-sm">
                  © {new Date().getFullYear()}{' '}
                  <a
                    href="https://linktr.ee/saifullah.haaris"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Saifullah Haaris
                  </a>
                  . All Rights Reserved.
                </p>
              </a>
            </div>
        </div>
    </footer>
    )
}

export default Footer