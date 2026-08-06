const StructuredData = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Cytech World Communication",
    description:
      "Cytech World Communication provides premium event production, equipment rental, distribution, and installation for concerts, festivals, and corporate events across Nigeria.",
    url: "https://cytechworld.com",
    logo: "https://cytechworld.com/cytech_logo.png",
    telephone: "+2348023424402",
    email: "cytechsound@yahoo.com",
    foundingDate: "2003",
    address: {
      "@type": "PostalAddress",
      streetAddress: "23 Col. Asieluwe St, Ifako-Ijaiye",
      addressLocality: "Lagos",
      postalCode: "101232",
      addressCountry: "NG",
    },
    sameAs: [
      "https://www.instagram.com/cytechworldcommunication/",
      "https://www.youtube.com/c/CytechWorldCommunication",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default StructuredData;
