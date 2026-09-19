export default function LocalBusinessSchema() {
    const schema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Terre.Agency — Налоговый консалтинг",
      "image": "https://terratax.ru/logo.png", // Если есть логотип
      "url": "https://terratax.ru",
      "telephone": "+7-913-018-83-82",
      "email": "info@terratax.ru",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "ул. Большевистская, 132",
        "addressLocality": "Новосибирск",
        "addressRegion": "Новосибирская область",
        "postalCode": "630102", // Уточните ваш индекс
        "addressCountry": "RU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 54.989586, // Уточните координаты
        "longitude": 82.977321
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      },
      "priceRange": "от 10 000 ₽",
      "description": "Профессиональный налоговый консалтинг в Новосибирске. Оптимизация налогообложения, сопровождение проверок ФНС, восстановление бухгалтерского учета.",
      "sameAs": [
        "https://yandex.ru/maps/org/terrataks", // Если есть
        "https://2gis.ru/novosibirsk/firm/70000001113370332" // Если есть
      ]
    };
  
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    );
  }