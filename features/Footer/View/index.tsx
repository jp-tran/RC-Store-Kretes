import React from 'react';

export const Footer = () => {
  return (
    <footer>
      <div className='w-full h-16 flex bg-blue-500 justify-center'>
        <span style={{ marginTop: 4 }}>
          <a
            href='https:/www.google.com'
            target='_blank'
            style={{ color: 'white' }}
          >
            About us
          </a>
        </span>
      </div>
    </footer>
  );
};
