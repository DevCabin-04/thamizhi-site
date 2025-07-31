import { useTina } from "tinacms/dist/react";

export default function GalleryPage({ props, lang }) {
  // Log props for debugging purposes, similar to AboutPage.jsx
  console.log('GalleryPage props:', props);
  console.log('GalleryPage lang:', lang);

  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  
  console.log('GalleryPage useTina data:', data);

  // Extract language-specific gallery content, with a fallback to an empty object
  const galleryContent = data[`gallery_${lang}`] || {};
  console.log('GalleryPage galleryContent:', galleryContent);

  const isTamil = lang === 'ta';

  return (
    <>
      {/* Page Header */}
      {galleryContent.hero && (
        <section className="bg-gradient-to-br from-orange-600 via-red-600 to-amber-600 text-white relative overflow-hidden">
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
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                {isTamil ? galleryContent.hero.title_tamil : galleryContent.hero.title}
              </h1>
              <h2 className="text-2xl lg:text-3xl font-medium text-orange-100 mb-6">
                {isTamil ? galleryContent.hero.subtitle_tamil : galleryContent.hero.subtitle}
              </h2>
              <p className="text-xl text-orange-100">
                {galleryContent.hero.description}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Gallery Categories */}
      {galleryContent.categories?.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {isTamil ? "புகைப்பட வகைகள்" : "Photo Categories"}
              </h2>
              <p className="text-lg text-gray-600">
                {isTamil ? "வகையின்படி புகைப்படங்களை உலாவுக" : "Browse photos by category"}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryContent.categories.map((category) => (
                <div key={category.id} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow cursor-pointer">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {isTamil ? category.name_tamil : category.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {isTamil ? category.description_tamil : category.description}
                  </p>
                  <div className="text-2xl font-bold text-orange-600">{category.count}</div>
                  <p className="text-sm text-gray-500">
                    {isTamil ? "புகைப்படங்கள்" : "Photos"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Albums */}
      {galleryContent.featured_albums?.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {isTamil ? "சிறப்பு ஆல்பங்கள்" : "Featured Albums"}
              </h2>
              <p className="text-lg text-gray-600">
                {isTamil ? "சமீபத்திய நிகழ்வு புகைப்படத் தொகுப்புகள்" : "Recent event photo collections"}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryContent.featured_albums.map((album) => (
                <div key={album.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                  <div className={`h-48 bg-gradient-to-br ${album.cover_color} flex items-center justify-center relative`}>
                    <div className="text-white text-center">
                      <svg className="w-16 h-16 mx-auto mb-2 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                      </svg>
                      <div className="text-sm font-medium">{album.image_count} {isTamil ? "படங்கள்" : "Photos"}</div>
                    </div>
                    <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                      {isTamil ? album.date_tamil : album.date}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {isTamil ? album.title_tamil : album.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">📍 {isTamil ? album.location_tamil : album.location}</p>
                    <p className="text-gray-700 mb-4">
                      {isTamil ? album.description_tamil : album.description}
                    </p>
                    <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors w-full">
                      {isTamil ? "ஆல்பத்தைக் காண்க" : "View Album"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recent Highlights */}
      {galleryContent.recent_highlights?.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {isTamil ? "சமீபத்திய சிறப்பம்சங்கள்" : "Recent Highlights"}
              </h2>
              <p className="text-lg text-gray-600">
                {isTamil ? "எங்கள் சமூகத்தின் சமீபத்திய தருணங்கள்" : "Latest moments from our community"}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {galleryContent.recent_highlights.map((highlight) => (
                <div key={highlight.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                  <div className="h-40 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                    <svg className="w-12 h-12 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                    </svg>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {isTamil ? highlight.title_tamil : highlight.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {isTamil ? highlight.description_tamil : highlight.description}
                    </p>
                    <p className="text-xs text-gray-500">
                      {isTamil ? highlight.date_tamil : highlight.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action / Upload Section */}
      {galleryContent.submission_guidelines && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isTamil ? "உங்கள் புகைப்படங்களைப் பகிரவும்" : "Share Your Photos"}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {isTamil 
                ? "உங்கள் நிகழ்வுப் புகைப்படங்களைப் பகிர்வதன் மூலம் எங்கள் சமூகத்தின் பயணத்தை ஆவணப்படுத்த உதவுங்கள்."
                : "Help us document our community's journey by sharing your event photos with us."
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors">
                {isTamil ? "புகைப்படங்களை பதிவேற்றுக" : "Upload Photos"}
              </button>
              <button className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
                {isTamil ? "புகைப்பட வழிகாட்டுதல்கள்" : "Photo Guidelines"}
              </button>
            </div>
          </div>
        </section>
      )}

       {/* Newsletter Signup */}
       <section className="py-16 bg-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isTamil ? "ஒரு கணத்தையும் தவறவிடாதீர்கள்" : "Never Miss a Moment"}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {isTamil 
                ? "எங்கள் கேலரியில் புதிய புகைப்பட ஆல்பங்கள் சேர்க்கப்படும்போது அறிவிப்பைப் பெற குழுசேரவும்."
                : "Subscribe to get notified when new photo albums are added to our gallery."
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                    type="email"
                    placeholder={isTamil ? "உங்கள் மின்னஞ்சலை உள்ளிடவும்" : "Enter your email"}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors">
                  {isTamil ? "சந்தா சேர்" : "Subscribe"}
                </button>
            </div>
        </div>
    </section>
    </>
  );
}