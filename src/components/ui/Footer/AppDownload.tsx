import { apple_store, google_play } from '@/constants/images';
import Image from 'next/image';
import React from 'react';
import FooterTitle from '../FooterTitle';

const AppDownload = () => {
  return (
    <div>
        <FooterTitle>Our App</FooterTitle>
      <div className="flex gap-4">
        
          <Image
            src={apple_store}
            alt="Download on App Store"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
          <Image
            src={google_play}
            alt="Get it on Google Play"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
      </div>
    </div>
  );
};

export default AppDownload;
