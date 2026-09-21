export default function LocalBusinessSchema() {
    const schema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Terre.Agency — Налоговый консалтинг",
      "image": "https://terratax.ru/logo.png", 
      "url": "https://terratax.ru",
      "telephone": "+7-913-018-83-82",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "ул. Большевистская, 132",
        "addressLocality": "Новосибирск",
        "addressRegion": "Новосибирская область",
        "addressCountry": "RU"
      },
      "priceRange": "от 10 000 ₽",
      "description": "Профессиональный налоговый консалтинг в Новосибирске."
    };
  
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    );
  }