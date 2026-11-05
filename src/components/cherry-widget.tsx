'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    _hw?: {
      (...args: unknown[]): void;
      q?: unknown[][];
    };
  }
}

export default function CherryWidget() {
  useEffect(() => {
    if (document.getElementById('cherry-widget-script')) {
      return;
    }

    window._hw = window._hw || function (...args: unknown[]) {
      (window._hw!.q = window._hw!.q || []).push(args);
    };

    const script = document.createElement('script');
    script.id = 'cherry-widget-script';
    script.src = 'https://files.withcherry.com/widgets/widget.js';
    script.async = true;
    document.head.appendChild(script);

    window._hw('init', {
      debug: false,
      variables: {
        slug: 'grace-haven-medical-cellular-detox-weight-loss',
        name: 'Grace Haven Medical Bio-Regenerative Spa',
        images: [50],
        customLogo: '',
        defaultPurchaseAmount: 750,
        customImage: '',
        imageCategory: 'medspa',
        language: 'en',
      },
      styles: {
        primaryColor: '#aaa199',
        secondaryColor: '#aaa19910',
        fontFamily: 'Montserrat',
        headerFontFamily: 'Montserrat',
      },
    }, ['hero', 'calculator', 'howitworks', 'faq']);
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400..900&family=Slabo+27px&family=Lato&family=Raleway&family=Montserrat&family=Oswald&family=Poppins&family=Source+Sans+Pro&family=PT+Sans&family=Open+Sans&display=swap"
        rel="stylesheet"
      />
      <div id="all" />
      <div id="hero" />
      <div id="calculator" />
      <div id="howitworks" />
      <div id="testimony" />
      <div id="faq" />
    </>
  );
}
