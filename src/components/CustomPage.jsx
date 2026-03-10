// src/components/CustomPage.jsx
import React from 'react';
import { useTina } from 'tinacms/dist/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

const CustomPage = ({ props, lang }) => {
  const { data } = useTina(props);
  const pageData = data[`pages_${lang}`] || {};

  // Get URL helper
  const getUrlWithBase = (href) => {
    if (!href) return '#';
    const isDev = import.meta.env.MODE === 'development';
    const basePath = ''; // No base path for Vercel

    // If href already starts with basePath or is an absolute URL, return as-is
    if (href.startsWith('http') || href.startsWith(basePath)) {
      return href;
    }

    // Add base path and ensure proper formatting
    const cleanHref = href.startsWith('/') ? href : `/${href}`;
    return `${basePath}${cleanHref}`;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      {pageData.hero && (
        <section className="relative bg-gradient-to-r from-gov-blue-900 via-gov-blue-800 to-gov-blue-700 text-white">
          {pageData.hero.background_image && (
            <div className="absolute inset-0">
              <img
                src={pageData.hero.background_image}
                alt="Hero background"
                className="w-full h-full object-cover opacity-30"
              />
            </div>
          )}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {pageData.hero.title}
            </h1>
            {pageData.hero.subtitle && (
              <p className="text-xl md:text-2xl text-blue-100 mb-4">
                {pageData.hero.subtitle}
              </p>
            )}
            {pageData.hero.description && (
              <p className="text-lg text-blue-50 max-w-3xl">
                {pageData.hero.description}
              </p>
            )}
          </div>
        </section>
      )}

      {/* Content Sections */}
      {pageData.content_sections && pageData.content_sections.length > 0 && (
        <div>
          {pageData.content_sections.map((section, index) => (
            <div key={index}>
              {/* Text Section */}
              {section._template === 'text_section' && (
                <section
                  className={`py-12 md:py-16 ${
                    section.background === 'gray'
                      ? 'bg-gray-50'
                      : section.background === 'blue'
                      ? 'bg-blue-50'
                      : 'bg-white'
                  }`}
                >
                  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {section.title && (
                      <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        {section.title}
                      </h2>
                    )}
                    {section.content && (
                      <div className="prose prose-lg max-w-none text-gray-700">
                        <TinaMarkdown content={section.content} />
                      </div>
                    )}
                  </div>
                </section>
              )}

              {/* Image Section */}
              {section._template === 'image_section' && (
                <section className="py-12 md:py-16 bg-white">
                  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    {section.image && (
                      <div className="rounded-lg overflow-hidden shadow-lg">
                        <img
                          src={section.image}
                          alt={section.alt_text || 'Image'}
                          className="w-full h-auto"
                        />
                      </div>
                    )}
                    {section.caption && (
                      <p className="text-center text-gray-600 mt-4 italic">
                        {section.caption}
                      </p>
                    )}
                  </div>
                </section>
              )}

              {/* Cards Section */}
              {section._template === 'cards_section' && (
                <section className="py-12 md:py-16 bg-gray-50">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {section.section_title && (
                      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        {section.section_title}
                      </h2>
                    )}
                    {section.cards && section.cards.length > 0 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {section.cards.map((card, cardIndex) => (
                          <div
                            key={cardIndex}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                          >
                            {card.image && (
                              <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-48 object-cover"
                              />
                            )}
                            <div className="p-6">
                              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {card.title}
                              </h3>
                              {card.description && (
                                <p className="text-gray-600 mb-4">
                                  {card.description}
                                </p>
                              )}
                              {card.link && (
                                <a
                                  href={getUrlWithBase(card.link)}
                                  className="text-gov-blue-600 hover:text-gov-blue-700 font-medium inline-flex items-center"
                                >
                                  Learn More
                                  <svg
                                    className="w-4 h-4 ml-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M9 5l7 7-7 7"
                                    />
                                  </svg>
                                </a>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </section>
              )}

              {/* CTA Section */}
              {section._template === 'cta_section' && (
                <section
                  className={`py-16 md:py-20 ${
                    section.background_color === 'blue'
                      ? 'bg-gov-blue-600'
                      : section.background_color === 'light-blue'
                      ? 'bg-gov-blue-100'
                      : 'bg-gray-100'
                  }`}
                >
                  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2
                      className={`text-3xl md:text-4xl font-bold mb-4 ${
                        section.background_color === 'blue'
                          ? 'text-white'
                          : 'text-gray-900'
                      }`}
                    >
                      {section.title}
                    </h2>
                    {section.description && (
                      <p
                        className={`text-lg md:text-xl mb-8 ${
                          section.background_color === 'blue'
                            ? 'text-blue-100'
                            : 'text-gray-600'
                        }`}
                      >
                        {section.description}
                      </p>
                    )}
                    {section.button_text && section.button_link && (
                      <a
                        href={getUrlWithBase(section.button_link)}
                        className={`inline-block px-8 py-3 rounded-md font-semibold transition-colors duration-300 ${
                          section.background_color === 'blue'
                            ? 'bg-white text-gov-blue-600 hover:bg-gray-100'
                            : 'bg-gov-blue-600 text-white hover:bg-gov-blue-700'
                        }`}
                      >
                        {section.button_text}
                      </a>
                    )}
                  </div>
                </section>
              )}

              {/* Statistics Section */}
              {section._template === 'statistics_section' && (
                <section className="py-12 md:py-16 bg-gov-blue-900 text-white">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {section.section_title && (
                      <h2 className="text-3xl font-bold mb-8 text-center">
                        {section.section_title}
                      </h2>
                    )}
                    {section.stats && section.stats.length > 0 && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {section.stats.map((stat, statIndex) => (
                          <div key={statIndex} className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-blue-300 mb-2">
                              {stat.number}
                            </div>
                            <div className="text-sm md:text-base text-blue-100">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </section>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomPage;
