import React, { useEffect } from 'react';
import Navbar from '@theme-original/Navbar';

export default function NavbarWrapper(props) {
  useEffect(() => {
    const aboutMe = document.querySelector('.about-me-link');
    if (aboutMe) {
      aboutMe.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'https://a22511234.github.io';
      });
    }
  }, []);

  return <Navbar {...props} />;
}
// This code is a wrapper for the Navbar component in Docusaurus.