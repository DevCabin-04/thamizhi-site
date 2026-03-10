import { useTina, tinaField } from "tinacms/dist/react";
import { useState } from "react";

export default function GalleryPage({ props, lang }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentAlbum, setCurrentAlbum] = useState(null);

  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const galleryContent = data[`gallery_${lang}`] || {};

  // Helper function to handle image paths with base path for production
  const getImageUrl = (imagePath) => {
    if (!imagePath) return null;
    // If it's an absolute URL (http/https), return as-is
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
      return imagePath;
    }
    // For local images, add base path in production and handle spaces
    const isDev = import.meta.env.MODE === 'development';
    const basePath = isDev ? '' : '/thamizhi-site';
    // Simple replacement of spaces with %20 for filenames with spaces
    const encodedPath = imagePath.replace(/ /g, '%20');
    return `${basePath}${encodedPath}`;
  };

  // Open lightbox with selected image
  const openLightbox = (image, album = null) => {
    setCurrentImage(image);
    setCurrentAlbum(album);
    setLightboxOpen(true);
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
    setCurrentAlbum(null);
  };

  // Navigate to next/previous image in album
  const navigateImage = (direction) => {
    if (!currentAlbum || !currentAlbum.images) return;

    const currentIndex = currentAlbum.images.findIndex(img => img.url === currentImage.url);
    let newIndex = direction === 'next'
      ? (currentIndex + 1) % currentAlbum.images.length
      : (currentIndex - 1 + currentAlbum.images.length) % currentAlbum.images.length;

    setCurrentImage(currentAlbum.images[newIndex]);
  };

  return (
    <>
      {/* Page Header */}
      {galleryContent.hero && (
        <section className="bg-[#7a1315] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-tina-field={tinaField(galleryContent, 'hero.title')}>
                {galleryContent.hero.title || "Photo Gallery"}
              </h1>
              {galleryContent.hero.title_tamil && (
                <h2 className="text-2xl lg:text-3xl font-medium text-gold-200 mb-6" data-tina-field={tinaField(galleryContent, 'hero.title_tamil')}>
                  {galleryContent.hero.title_tamil}
                </h2>
              )}
              {galleryContent.hero.subtitle && (
                <p className="text-xl text-gold-100 mb-4" data-tina-field={tinaField(galleryContent, 'hero.subtitle')}>
                  {galleryContent.hero.subtitle}
                </p>
              )}
              {galleryContent.hero.description && (
                <p className="text-lg text-gold-100" data-tina-field={tinaField(galleryContent, 'hero.description')}>
                  {galleryContent.hero.description}
                </p>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Gallery Categories */}
      {galleryContent.categories && galleryContent.categories.length > 0 && (
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {lang === "ta" ? "புகைப்பட வகைகள்" : lang === "si" ? "ඡායාරූප කාණ්ඩ" : "Photo Categories"}
              </h2>
              <p className="text-lg text-gray-600">
                {lang === "ta" ? "வகையின்படி புகைப்படங்களை உலாவுக" : lang === "si" ? "කාණ්ඩය අනුව ඡායාරූප බ්‍රවුස් කරන්න" : "Browse photos by category"}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryContent.categories.map((category, index) => (
                <div key={category.id} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow cursor-pointer">
                  <div className="w-16 h-16 bg-thamizhi-maroon-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-thamizhi-maroon-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2" data-tina-field={tinaField(category, 'name')}>
                    {category.name}
                  </h3>
                  {category.name_tamil && (
                    <h4 className="text-lg font-medium text-thamizhi-maroon-900 mb-3" data-tina-field={tinaField(category, 'name_tamil')}>
                      {category.name_tamil}
                    </h4>
                  )}
                  <p className="text-gray-600 mb-4" data-tina-field={tinaField(category, 'description')}>
                    {category.description}
                  </p>
                  <div className="text-2xl font-bold text-thamizhi-maroon-900" data-tina-field={tinaField(category, 'count')}>
                    {category.count}
                  </div>
                  <p className="text-sm text-gray-500">
                    {lang === "ta" ? "புகைப்படங்கள்" : lang === "si" ? "ඡායාරූප" : "Photos"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Albums */}
      {galleryContent.featured_albums && galleryContent.featured_albums.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {lang === "ta" ? "சிறப்பு ஆல்பங்கள்" : lang === "si" ? "විශේෂාංග ඇල්බම" : "Featured Albums"}
              </h2>
              <p className="text-lg text-gray-600">
                {lang === "ta" ? "சமீபத்திய நிகழ்வு புகைப்படத் தொகுப்புகள்" : lang === "si" ? "මෑතකාලීන සිදුවීම් ඡායාරූප එකතු කිරීම්" : "Recent event photo collections"}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryContent.featured_albums.map((album, index) => {
                const finalImageUrl = getImageUrl(album.cover_image || (album.images && album.images[0]?.url));

                return (
                <div key={album.id} className="bg-slate-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  {/* Album Cover */}
                  <div
                    className="h-48 bg-gray-200 relative cursor-pointer overflow-hidden group"
                    onClick={() => album.images && album.images.length > 0 && openLightbox(album.images[0], album)}
                    data-tina-field={tinaField(album, 'cover_image')}
                  >
                    <img
                      src={finalImageUrl}
                      alt={album.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-all flex items-center justify-center">
                      <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <div className="absolute top-4 right-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded text-sm" data-tina-field={tinaField(album, 'date')}>
                      {album.date}
                    </div>
                    {album.images && album.images.length > 0 && (
                      <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded text-sm">
                        {album.images.length} {lang === "ta" ? "படங்கள்" : lang === "si" ? "ඡayayාරූප" : "Photos"}
                      </div>
                    )}
                  </div>

                  {/* Album Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1" data-tina-field={tinaField(album, 'title')}>
                      {album.title}
                    </h3>
                    {album.title_tamil && (
                      <h4 className="text-lg font-medium text-thamizhi-maroon-900 mb-2" data-tina-field={tinaField(album, 'title_tamil')}>
                        {album.title_tamil}
                      </h4>
                    )}
                    {album.location && (
                      <p className="text-sm text-gray-500 mb-2" data-tina-field={tinaField(album, 'location')}>
                        📍 {album.location}
                      </p>
                    )}
                    {album.description && (
                      <p className="text-gray-700 mb-4" data-tina-field={tinaField(album, 'description')}>
                        {album.description}
                      </p>
                    )}
                    {album.photographer && (
                      <p className="text-sm text-gray-500 mb-4" data-tina-field={tinaField(album, 'photographer')}>
                        📷 {album.photographer}
                      </p>
                    )}

                    {/* Album Image Grid Preview */}
                    {album.images && album.images.length > 0 && (
                      <div className="grid grid-cols-4 gap-2 mb-4">
                        {album.images.slice(0, 4).map((img, imgIndex) => (
                          <div
                            key={imgIndex}
                            className="aspect-square bg-gray-200 rounded overflow-hidden cursor-pointer hover:opacity-75 transition-opacity"
                            onClick={() => openLightbox(img, album)}
                          >
                            <img src={getImageUrl(img.url)} alt={img.title || album.title} className="w-full h-full object-cover" onError={(e) => e.target.style.display = 'none'} />
                          </div>
                        ))}
                      </div>
                    )}

                    <button
                      onClick={() => album.images && album.images.length > 0 && openLightbox(album.images[0], album)}
                      className="bg-thamizhi-maroon-900 text-white px-4 py-2 rounded-lg hover:bg-thamizhi-maroon-800 transition-colors w-full"
                      disabled={!album.images || album.images.length === 0}
                    >
                      {lang === "ta" ? "ஆல்பத்தைக் காண்க" : lang === "si" ? "ඇල්බමය බලන්න" : "View Album"}
                    </button>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Recent Highlights */}
      {galleryContent.recent_highlights && galleryContent.recent_highlights.length > 0 && (
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {lang === "ta" ? "சமீபத்திய சிறப்பம்சங்கள்" : lang === "si" ? "මෑත කාලීන ඉස්මතු කිරීම්" : "Recent Highlights"}
              </h2>
              <p className="text-lg text-gray-600">
                {lang === "ta" ? "எங்கள் சமூகத்தின் சமீபத்திய தருணங்கள்" : lang === "si" ? "අපගේ ප්‍රජාවේ මෑත අවස්ථා" : "Latest moments from our community"}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {galleryContent.recent_highlights.map((highlight, index) => (
                <div
                  key={highlight.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => openLightbox({ url: highlight.thumbnail, title: highlight.title, caption: highlight.description })}
                >
                  <div className="h-40 bg-gray-200 overflow-hidden" data-tina-field={tinaField(highlight, 'thumbnail')}>
                    {highlight.thumbnail ? (
                      <img
                        src={getImageUrl(highlight.thumbnail)}
                        alt={highlight.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        onError={(e) => e.target.style.display = 'none'}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-300">
                        <svg className="w-12 h-12 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2" data-tina-field={tinaField(highlight, 'title')}>
                      {highlight.title}
                    </h3>
                    {highlight.description && (
                      <p className="text-gray-600 text-sm mb-2 line-clamp-2" data-tina-field={tinaField(highlight, 'description')}>
                        {highlight.description}
                      </p>
                    )}
                    {highlight.date && (
                      <p className="text-xs text-gray-500" data-tina-field={tinaField(highlight, 'date')}>
                        {highlight.date}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Photo Submission Section */}
      {galleryContent.submission_section && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-tina-field={tinaField(galleryContent, 'submission_section.title')}>
              {galleryContent.submission_section.title || (lang === "ta" ? "உங்கள் புகைப்படங்களைப் பகிரவும்" : lang === "si" ? "ඔබේ ඡායාරූප බෙදා ගන්න" : "Share Your Photos")}
            </h2>
            <p className="text-lg text-gray-600 mb-8" data-tina-field={tinaField(galleryContent, 'submission_section.description')}>
              {galleryContent.submission_section.description || (lang === "ta"
                ? "உங்கள் நிகழ்வுப் புகைப்படங்களைப் பகிர்வதன் மூலம் எங்கள் சமூகத்தின் பயணத்தை ஆவணப்படுத்த உதவுங்கள்."
                : lang === "si"
                ? "ඔබගේ සිදුවීම් ඡායාරූප බෙදා ගැනීමෙන් අපගේ ප්‍රජාවේ ගමන ලේඛනගත කිරීමට උදව් කරන්න."
                : "Help us document our community's journey by sharing your event photos with us."
              )}
            </p>

            {galleryContent.submission_section.guidelines && galleryContent.submission_section.guidelines.length > 0 && (
              <div className="bg-slate-50 rounded-lg p-6 mb-8 text-left max-w-2xl mx-auto">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  {lang === "ta" ? "புகைப்பட வழிகாட்டுதல்கள்" : lang === "si" ? "ඡායාරූප මාර්ගෝපදේශ" : "Photo Guidelines"}
                </h4>
                <ul className="space-y-2">
                  {galleryContent.submission_section.guidelines.map((guideline, index) => (
                    <li key={index} className="text-gray-700 flex items-start">
                      <svg className="w-5 h-5 text-thamizhi-maroon-900 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {guideline}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <a
              href={`mailto:${galleryContent.submission_section.contact_email}`}
              className="inline-block bg-thamizhi-maroon-900 text-white px-8 py-3 rounded-lg text-lg hover:bg-thamizhi-maroon-800 transition-colors"
              data-tina-field={tinaField(galleryContent, 'submission_section.contact_email')}
            >
              {lang === "ta" ? "புகைப்படங்களை சமர்ப்பிக்கவும்" : lang === "si" ? "ඡායාරූප ඉදිරිපත් කරන්න" : "Submit Photos"}
            </a>
          </div>
        </section>
      )}

      {/* Lightbox Modal */}
      {lightboxOpen && currentImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation Buttons */}
          {currentAlbum && currentAlbum.images && currentAlbum.images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
                className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10"
              >
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
                className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10"
              >
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Image Container */}
          <div className="max-w-6xl max-h-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={getImageUrl(currentImage.url)}
              alt={currentImage.title || "Gallery image"}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            {(currentImage.title || currentImage.caption) && (
              <div className="mt-4 text-white text-center max-w-2xl">
                {currentImage.title && (
                  <h3 className="text-xl font-semibold mb-2">{currentImage.title}</h3>
                )}
                {currentImage.caption && (
                  <p className="text-gray-300">{currentImage.caption}</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
