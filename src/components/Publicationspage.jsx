import { useTina, tinaField } from "tinacms/dist/react";

export default function PublicationsPage({ props, lang }) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const publicationsContent = data[`publications_${lang}`] || {};

  // Helper function to format file size
  const formatFileSize = (sizeMB) => {
    if (!sizeMB) return "";
    return sizeMB < 1 ? `${(sizeMB * 1024).toFixed(0)} KB` : `${sizeMB.toFixed(1)} MB`;
  };

  // Helper function to get file icon
  const getFileIcon = (fileType) => {
    const icons = {
      PDF: "M7 18h10v-1H7v1zM7 14h10v-1H7v1zM7 10h10V9H7v1z",
      DOC: "M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6z",
      DOCX: "M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6z",
      PPT: "M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6z",
      Audio: "M12 3v9.28c-.47-.17-.97-.28-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z",
      Video: "M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z",
      default: "M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6z"
    };
    return icons[fileType] || icons.default;
  };

  return (
    <>
      {/* Page Header */}
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
            <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-tina-field={tinaField(publicationsContent, 'hero.title')}>
              {publicationsContent.hero?.title || "Resource Library"}
            </h1>
            <h2 className="text-2xl lg:text-3xl font-medium text-gold-200 mb-6" data-tina-field={tinaField(publicationsContent, 'hero.title_tamil')}>
              {publicationsContent.hero?.title_tamil || "வெளியீடுகள்"}
            </h2>
            <p className="text-xl text-gold-100" data-tina-field={tinaField(publicationsContent, 'hero.description')}>
              {publicationsContent.hero?.description || "Access our collection of Tamil resources, educational materials, and cultural documents."}
            </p>
          </div>
        </div>
      </section>

      {/* Categories Overview */}
      {publicationsContent.categories && publicationsContent.categories.length > 0 && (
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {lang === "en" ? "Resource Categories" : lang === "ta" ? "வெளியீட்டு வகைகள்" : "සම්පත් කාණ්ඩ"}
              </h2>
              <p className="text-lg text-gray-600">
                {lang === "en"
                  ? "Explore our diverse collection of Tamil resources"
                  : lang === "ta"
                  ? "எங்கள் பல்வேறு தமிழ் வளங்களின் தொகுப்பை ஆராயுங்கள்"
                  : "අපගේ විවිධ තමිළ සම්පත් එකතුව ගවේෂණය කරන්න"}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {publicationsContent.categories.map((category, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-thamizhi-maroon-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-thamizhi-maroon-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2" data-tina-field={tinaField(category, 'name')}>
                    {category.name}
                  </h3>
                  <h4 className="text-lg font-medium text-thamizhi-maroon-900 mb-3" data-tina-field={tinaField(category, 'name_tamil')}>
                    {category.name_tamil}
                  </h4>
                  <p className="text-gray-600 mb-4" data-tina-field={tinaField(category, 'description')}>
                    {category.description}
                  </p>
                  <div className="text-2xl font-bold text-thamizhi-maroon-900" data-tina-field={tinaField(category, 'count')}>
                    {category.count}
                  </div>
                  <p className="text-sm text-gray-500">
                    {lang === "en" ? "Resources" : lang === "ta" ? "வளங்கள்" : "සම්පත්"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Resources */}
      {publicationsContent.featured_resources && publicationsContent.featured_resources.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {lang === "en" ? "Featured Resources" : lang === "ta" ? "சிறப்பு வளங்கள்" : "විශේෂාංග සම්පත්"}
              </h2>
              <p className="text-lg text-gray-600">
                {lang === "en"
                  ? "Recently added and popular resources"
                  : lang === "ta"
                  ? "சமீபத்தில் சேர்க்கப்பட்ட மற்றும் பிரபலமான வளங்கள்"
                  : "මෑතකදී එකතු කළ හා ජනප්‍රිය සම්පත්"}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {publicationsContent.featured_resources.map((resource, index) => (
                <div key={index} className="bg-slate-50 rounded-lg p-6 flex gap-6">
                  {/* Resource Cover/Icon */}
                  <div className="w-32 h-40 bg-thamizhi-maroon-900 rounded-lg flex-shrink-0 flex flex-col items-center justify-center p-3">
                    {resource.cover_image ? (
                      <img src={resource.cover_image} alt={resource.title} className="w-full h-full object-cover rounded" />
                    ) : (
                      <>
                        <svg className="w-12 h-12 text-white mb-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d={getFileIcon(resource.file_type)} />
                        </svg>
                        <div className="text-white text-center">
                          <div className="text-xs font-semibold mb-1" data-tina-field={tinaField(resource, 'file_type')}>
                            {resource.file_type}
                          </div>
                          <div className="text-xs" data-tina-field={tinaField(resource, 'year')}>
                            {resource.year}
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Resource Details */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1" data-tina-field={tinaField(resource, 'title')}>
                          {resource.title}
                        </h3>
                        <h4 className="text-lg text-thamizhi-maroon-900 mb-3" data-tina-field={tinaField(resource, 'title_tamil')}>
                          {resource.title_tamil}
                        </h4>
                      </div>
                      <span className="inline-block bg-thamizhi-maroon-100 text-thamizhi-maroon-900 px-3 py-1 text-xs font-semibold rounded" data-tina-field={tinaField(resource, 'category')}>
                        {resource.category}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-2">
                      {lang === "en" ? "By" : lang === "ta" ? "எழுதியவர்" : "විසින්"}: <span data-tina-field={tinaField(resource, 'author')}>{resource.author}</span>
                      {resource.author_tamil && (
                        <span className="block text-sm text-gray-500" data-tina-field={tinaField(resource, 'author_tamil')}>
                          {resource.author_tamil}
                        </span>
                      )}
                    </p>

                    <p className="text-sm text-gray-500 mb-3">
                      {resource.pages && <span data-tina-field={tinaField(resource, 'pages')}>{resource.pages} pages • </span>}
                      <span data-tina-field={tinaField(resource, 'year')}>{resource.year}</span>
                      {resource.file_size_mb && <span data-tina-field={tinaField(resource, 'file_size_mb')}> • {formatFileSize(resource.file_size_mb)}</span>}
                      {resource.language && <span data-tina-field={tinaField(resource, 'language')}> • {resource.language}</span>}
                    </p>

                    <p className="text-gray-700 mb-4" data-tina-field={tinaField(resource, 'description')}>
                      {resource.description}
                    </p>

                    {resource.tags && resource.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {resource.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="inline-block bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center gap-3">
                      <a
                        href={resource.file_url}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-thamizhi-maroon-900 text-white px-4 py-2 rounded-lg hover:bg-thamizhi-maroon-800 transition-colors inline-flex items-center gap-2"
                        data-tina-field={tinaField(resource, 'file_url')}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        {lang === "en" ? "Download" : lang === "ta" ? "பதிவிறக்கம்" : "බාගන්න"}
                      </a>
                      {resource.file_url && resource.file_type === "PDF" && (
                        <a
                          href={resource.file_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors"
                        >
                          {lang === "en" ? "Preview" : lang === "ta" ? "முன்னோட்டம்" : "පෙරදසුන"}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      {publicationsContent.about_section && (
        <section className="py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-tina-field={tinaField(publicationsContent, 'about_section.title')}>
              {publicationsContent.about_section.title}
            </h2>
            {publicationsContent.about_section.title_tamil && (
              <h3 className="text-2xl font-medium text-thamizhi-maroon-900 mb-6" data-tina-field={tinaField(publicationsContent, 'about_section.title_tamil')}>
                {publicationsContent.about_section.title_tamil}
              </h3>
            )}
            <p className="text-lg text-gray-600 mb-4" data-tina-field={tinaField(publicationsContent, 'about_section.description')}>
              {publicationsContent.about_section.description}
            </p>
            {publicationsContent.about_section.description_tamil && (
              <p className="text-md text-gray-600" data-tina-field={tinaField(publicationsContent, 'about_section.description_tamil')}>
                {publicationsContent.about_section.description_tamil}
              </p>
            )}
          </div>
        </section>
      )}

      {/* Submission Section */}
      {publicationsContent.submission_section && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-tina-field={tinaField(publicationsContent, 'submission_section.title')}>
              {publicationsContent.submission_section.title || (lang === "en" ? "Share Your Resources" : lang === "ta" ? "உங்கள் வளங்களைப் பகிரவும்" : "ඔබේ සම්පත් බෙදා ගන්න")}
            </h2>
            {publicationsContent.submission_section.title_tamil && (
              <h3 className="text-2xl font-medium text-thamizhi-maroon-900 mb-6" data-tina-field={tinaField(publicationsContent, 'submission_section.title_tamil')}>
                {publicationsContent.submission_section.title_tamil}
              </h3>
            )}
            <p className="text-lg text-gray-600 mb-8" data-tina-field={tinaField(publicationsContent, 'submission_section.description')}>
              {publicationsContent.submission_section.description}
            </p>

            {publicationsContent.submission_section.guidelines && publicationsContent.submission_section.guidelines.length > 0 && (
              <div className="bg-slate-50 rounded-lg p-6 mb-8 text-left max-w-2xl mx-auto">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  {lang === "en" ? "Submission Guidelines" : lang === "ta" ? "சமர்ப்பிப்பு வழிகாட்டுதல்கள்" : "ඉදිරිපත් කිරීමේ මාර්ගෝපදේශ"}
                </h4>
                <ul className="space-y-2">
                  {publicationsContent.submission_section.guidelines.map((guideline, index) => (
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
              href={`mailto:${publicationsContent.submission_section.contact_email}`}
              className="inline-block bg-thamizhi-maroon-900 text-white px-8 py-3 rounded-lg text-lg hover:bg-thamizhi-maroon-800 transition-colors"
              data-tina-field={tinaField(publicationsContent, 'submission_section.contact_email')}
            >
              {lang === "en" ? "Submit Resource" : lang === "ta" ? "வளத்தை சமர்ப்பிக்கவும்" : "සම්පත ඉදිරිපත් කරන්න"}
            </a>
          </div>
        </section>
      )}
    </>
  );
}
