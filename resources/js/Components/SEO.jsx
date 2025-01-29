import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = () => {
  return (
    <Helmet>
      <title>GreenCarbo - Conseil en stratégie RSE et réduction carbone</title>
      <meta name="description" content="GreenCarbo vous accompagne dans votre transition écologique avec des solutions concrètes pour réduire votre empreinte carbone. Experts en RSE et développement durable." />
      <meta name="keywords" content="RSE, stratégie bas-carbone, conseil environnemental, développement durable, transition écologique" />
      
      {/* Open Graph */}
      <meta property="og:title" content="GreenCarbo - Conseil en stratégie RSE" />
      <meta property="og:description" content="Experts en RSE et réduction de l'empreinte carbone" />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="GreenCarbo - Conseil en stratégie RSE" />
      <meta name="twitter:description" content="Experts en RSE et réduction de l'empreinte carbone" />
      
      {/* Autres balises importantes */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.greencarbo.fr" />
    </Helmet>
  );
};

export default SEO;
