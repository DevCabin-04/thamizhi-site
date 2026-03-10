import { useTina, tinaField } from "tinacms/dist/react";

export default function PublicationsPage({ props, lang }) {
  console.log('PublicationsPage props:', props);
  console.log('PublicationsPage lang:', lang);

  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  console.log('PublicationsPage useTina data:', data);
  
  const publicationsContent = data[`publications_${lang}`] || {};
  console.log('PublicationsPage publicationsContent:', publicationsContent);

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
              {publicationsContent.hero?.title || "Publications"}
            </h1>
            <h2 className="text-2xl lg:text-3xl font-medium text-blue-100 mb-6" data-tina-field={tinaField(publicationsContent, 'hero.title_tamil')}>
              {publicationsContent.hero?.title_tamil || "வெளியீடுகள்"}
            </h2>
            <p className="text-xl text-blue-100" data-tina-field={tinaField(publicationsContent, 'hero.description')}>
              {publicationsContent.hero?.description || "Discover our collection of Tamil publications, research papers, and educational materials that preserve and promote Tamil culture and literature."}
            </p>
          </div>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-tina-field={tinaField(publicationsContent, 'categories_section.title')}>
              {publicationsContent.categories_section?.title || (lang === "en"
                ? "Publication Categories"
                : lang === "ta"
                ? "வெளியீட்டு வகைகள்"
                : "ප්‍රකාශන කාණ්ඩ")}
            </h2>
            <p className="text-lg text-gray-600" data-tina-field={tinaField(publicationsContent, 'categories_section.description')}>
              {publicationsContent.categories_section?.description || (lang === "en"
                ? "Explore our diverse collection of Tamil publications"
                : lang === "ta"
                ? "எங்கள் பல்வேறு தமிழ் வெளியீடுகளின் தொகுப்பை ஆராயுங்கள்"
                : "අපගේ විවිධ තමිළ ප්‍රකාශන එකතුව ගවේෂණය කරන්න")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {publicationsContent.categories?.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2" data-tina-field={tinaField(category, 'name')}>
                  {category.name}
                </h3>
                <h4 className="text-lg font-medium text-blue-900 mb-3" data-tina-field={tinaField(category, 'name_tamil')}>
                  {category.name_tamil}
                </h4>
                <p className="text-gray-600 mb-4" data-tina-field={tinaField(category, 'description')}>
                  {category.description}
                </p>
                <div className="text-2xl font-bold text-blue-900" data-tina-field={tinaField(category, 'count')}>{category.count}</div>
                <p className="text-sm text-gray-500">
                  {lang === "en" ? "Publications" : lang === "ta" ? "வெளியீடுகள்" : "ප්‍රකාශන"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Publications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-tina-field={tinaField(publicationsContent, 'featured_section.title')}>
              {publicationsContent.featured_section?.title || (lang === "en"
                ? "Featured Publications"
                : lang === "ta"
                ? "சிறப்பு வெளியீடுகள்"
                : "විශේෂ ප්‍රකාශන")}
            </h2>
            <p className="text-lg text-gray-600" data-tina-field={tinaField(publicationsContent, 'featured_section.description')}>
              {publicationsContent.featured_section?.description || (lang === "en"
                ? "Recent and popular Tamil publications"
                : lang === "ta"
                ? "சமீபத்திய மற்றும் பிரபலமான தமிழ் வெளியீடுகள்"
                : "මෑත සහ ජනප්‍රිය තමිළ ප්‍රකාශන")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {publicationsContent.featured_publications?.map((publication, index) => (
              <div key={index} className="bg-slate-50 rounded-lg p-6 flex gap-6">
                {/* Book Cover */}
                <div className="w-32 h-40 bg-[#7a1315] rounded-lg flex-shrink-0 flex items-center justify-center">
                  <div className="text-white text-center p-2">
                    <div className="text-sm font-semibold mb-1" data-tina-field={tinaField(publication, 'category')}>
                      {publication.category}
                    </div>
                    <div className="text-xs" data-tina-field={tinaField(publication, 'year')}>{publication.year}</div>
                  </div>
                </div>

                {/* Book Details */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1" data-tina-field={tinaField(publication, 'title')}>
                    {publication.title}
                  </h3>
                  <h4 className="text-lg text-blue-900 mb-3" data-tina-field={tinaField(publication, 'title_tamil')}>
                    {publication.title_tamil}
                  </h4>
                  <p className="text-gray-600 mb-2">
                    By <span data-tina-field={tinaField(publication, 'author')}>{publication.author}</span>
                    {publication.author_tamil && (
                      <span className="block text-sm text-gray-500" data-tina-field={tinaField(publication, 'author_tamil')}>
                        {publication.author_tamil}
                      </span>
                    )}
                  </p>
                  <p className="text-sm text-gray-500 mb-3">
                    <span data-tina-field={tinaField(publication, 'pages')}>{publication.pages}</span> pages • <span data-tina-field={tinaField(publication, 'year')}>{publication.year}</span>
                    {publication.isbn && <span data-tina-field={tinaField(publication, 'isbn')}> • ISBN: {publication.isbn}</span>}
                  </p>
                  <p className="text-gray-700 mb-4" data-tina-field={tinaField(publication, 'description')}>
                    {publication.description}
                  </p>
                  {publication.price && (
                    <p className="text-lg font-semibold text-blue-900 mb-4" data-tina-field={tinaField(publication, 'price')}>
                      {publication.price}
                    </p>
                  )}

                  <div className="flex items-center gap-3">
                    {publication.available ? (
                      <button className="bg-[#7a1315] text-white px-4 py-2 rounded-lg hover:bg-[#7a1315] transition-colors">
                        {lang === "en" ? "Download PDF" : lang === "ta" ? "PDF பதிவிறக்கம்" : "PDF බාගන්න"}
                      </button>
                    ) : (
                      <button className="bg-gray-400 text-white px-4 py-2 rounded-lg cursor-not-allowed">
                        {lang === "en" ? "Coming Soon" : lang === "ta" ? "விரைவில்" : "ළඟදීම"}
                      </button>
                    )}
                    <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors">
                      {lang === "en" ? "Preview" : lang === "ta" ? "முன்னோட்டம்" : "පෙරදසුන"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Magazines */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-tina-field={tinaField(publicationsContent, 'magazines_section.title')}>
              {publicationsContent.magazines_section?.title || (lang === "en"
                ? "Tamil Magazines"
                : lang === "ta"
                ? "தமிழ் இதழ்கள்"
                : "තමිළ සඟරා")}
            </h2>
            <p className="text-lg text-gray-600" data-tina-field={tinaField(publicationsContent, 'magazines_section.description')}>
              {publicationsContent.magazines_section?.description || (lang === "en"
                ? "Regular publications keeping Tamil culture alive"
                : lang === "ta"
                ? "தமிழ் பண்பாட்டை உயிர்ப்புடன் வைத்திருக்கும் வழக்கமான வெளியீடுகள்"
                : "තමිළ සංස්කෘතිය ජීවතුන් අතර තබා ගන්නා නිත්‍ය ප්‍රකාශන")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {publicationsContent.magazines?.map((magazine, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1" data-tina-field={tinaField(magazine, 'name')}>
                  {magazine.name}
                </h3>
                <h4 className="text-lg text-blue-900 mb-3" data-tina-field={tinaField(magazine, 'name_tamil')}>
                  {magazine.name_tamil}
                </h4>
                <p className="text-sm text-gray-500 mb-3">
                  <span data-tina-field={tinaField(magazine, 'frequency')}>{magazine.frequency}</span>
                  {magazine.frequency_tamil && (
                    <span className="block" data-tina-field={tinaField(magazine, 'frequency_tamil')}>{magazine.frequency_tamil}</span>
                  )}
                </p>
                <p className="text-gray-700 mb-4" data-tina-field={tinaField(magazine, 'description')}>
                  {magazine.description}
                </p>
                {magazine.subscription_price && (
                  <p className="text-lg font-semibold text-blue-900 mb-4" data-tina-field={tinaField(magazine, 'subscription_price')}>
                    {magazine.subscription_price}
                  </p>
                )}
                {magazine.editor && (
                  <p className="text-sm text-gray-500 mb-6">
                    Editor: <span data-tina-field={tinaField(magazine, 'editor')}>{magazine.editor}</span>
                    {magazine.editor_tamil && (
                      <span className="block" data-tina-field={tinaField(magazine, 'editor_tamil')}>{magazine.editor_tamil}</span>
                    )}
                  </p>
                )}
                <button className="bg-[#7a1315] text-white px-6 py-2 rounded-lg hover:bg-[#7a1315] transition-colors">
                  {lang === "en" ? "Subscribe" : lang === "ta" ? "சந்தா" : "දායක වන්න"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-tina-field={tinaField(publicationsContent, 'digital_resources.title')}>
              {publicationsContent.digital_resources?.title ||
                (lang === "en" ? "Digital Resources" : lang === "ta" ? "டிஜிட்டல் வளங்கள்" : "ඩිජිටල් සම්පත්")}
            </h2>
            <p className="text-lg text-gray-600" data-tina-field={tinaField(publicationsContent, 'digital_resources.description')}>
              {publicationsContent.digital_resources?.description ||
                (lang === "en" ? "Online Tamil learning and reference materials" :
                 lang === "ta" ? "ஆன்லைன் தமிழ் கற்றல் மற்றும் குறிப்பு பொருட்கள்" :
                 "මාර්ගගත තමිළ ඉගෙනීම සහ යොමු ද්‍රව්‍ය")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publicationsContent.digital_resources?.items?.map((resource, index) => (
              <div key={index} className="bg-slate-50 rounded-lg p-6 text-center hover:bg-blue-100 transition-colors cursor-pointer">
                <svg className="w-12 h-12 text-blue-900 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <h3 className="text-lg font-semibold text-gray-900 mb-2" data-tina-field={tinaField(resource, 'name')}>
                  {resource.name || resource}
                </h3>
                {resource.name_tamil && (
                  <h4 className="text-md font-medium text-blue-900 mb-2" data-tina-field={tinaField(resource, 'name_tamil')}>
                    {resource.name_tamil}
                  </h4>
                )}
                {resource.description && (
                  <p className="text-gray-600 text-sm mb-3" data-tina-field={tinaField(resource, 'description')}>
                    {resource.description}
                  </p>
                )}
                {resource.access && (
                  <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${
                    resource.access === "Free" ? "bg-green-100 text-green-800" :
                    resource.access === "Members Only" ? "bg-blue-100 text-blue-900" :
                    "bg-purple-100 text-purple-800"
                  }`} data-tina-field={tinaField(resource, 'access')}>
                    {resource.access}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-[#7a1315] text-white px-8 py-3 rounded-lg text-lg hover:bg-[#7a1315] transition-colors">
              {lang === "en" ? "Access Digital Library" : 
               lang === "ta" ? "டிஜிட்டல் நூலகத்தை அணுகவும்" : 
               "ඩිජිටල් පුස්තකාලයට ප්‍රවේශ වන්න"}
            </button>
          </div>
        </div>
      </section>

      {/* Research Publications */}
      {publicationsContent.research_publications && (
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4" data-tina-field={tinaField(publicationsContent, 'research_publications.title')}>
                {publicationsContent.research_publications.title}
              </h2>
              <h3 className="text-2xl font-medium text-blue-900 mb-6" data-tina-field={tinaField(publicationsContent, 'research_publications.title_tamil')}>
                {publicationsContent.research_publications.title_tamil}
              </h3>
              <p className="text-lg text-gray-600" data-tina-field={tinaField(publicationsContent, 'research_publications.description')}>
                {publicationsContent.research_publications.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {publicationsContent.research_publications.recent_papers?.map((paper, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2" data-tina-field={tinaField(paper, 'title')}>
                    {paper.title}
                  </h3>
                  <h4 className="text-md font-medium text-blue-900 mb-3" data-tina-field={tinaField(paper, 'title_tamil')}>
                    {paper.title_tamil}
                  </h4>
                  <p className="text-gray-600 mb-2" data-tina-field={tinaField(paper, 'author')}>
                    By {paper.author}
                  </p>
                  <p className="text-sm text-gray-500 mb-2">
                    <span data-tina-field={tinaField(paper, 'journal')}>{paper.journal}</span> • <span data-tina-field={tinaField(paper, 'year')}>{paper.year}</span>
                  </p>
                  <p className="text-sm text-gray-500" data-tina-field={tinaField(paper, 'pages')}>
                    Pages: {paper.pages}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Submission Guidelines */}
      {publicationsContent.submission_guidelines && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4" data-tina-field={tinaField(publicationsContent, 'submission_guidelines.title')}>
                {publicationsContent.submission_guidelines.title}
              </h2>
              <h3 className="text-2xl font-medium text-blue-900 mb-6" data-tina-field={tinaField(publicationsContent, 'submission_guidelines.title_tamil')}>
                {publicationsContent.submission_guidelines.title_tamil}
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto" data-tina-field={tinaField(publicationsContent, 'submission_guidelines.description')}>
                {publicationsContent.submission_guidelines.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {publicationsContent.submission_guidelines.requirements?.map((requirement, index) => (
                <div key={index} className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2" data-tina-field={tinaField(requirement, 'category')}>
                    {requirement.category}
                  </h3>
                  <h4 className="text-lg font-medium text-blue-900 mb-4" data-tina-field={tinaField(requirement, 'category_tamil')}>
                    {requirement.category_tamil}
                  </h4>
                  <ul className="space-y-2">
                    {requirement.items?.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-700 text-sm flex items-start" data-tina-field={tinaField(requirement, `items.${itemIndex}`)}>
                        <svg className="w-4 h-4 text-blue-900 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact for Publications */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {lang === "en" ? "Submit Your Publication" : 
             lang === "ta" ? "உங்கள் வெளியீட்டை சமர்ப்பிக்கவும்" : 
             "ඔබගේ ප්‍රකාශනය ඉදිරිපත් කරන්න"}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {lang === "en" ? "Do you have Tamil literature or research to share? We welcome submissions from community members." :
             lang === "ta" ? "உங்களிடம் பகிர்ந்து கொள்ள தமிழ் இலக்கியம் அல்லது ஆராய்ச்சி இருக்கிறதா? சமூக உறுப்பினர்களின் சமர்ப்பிப்புகளை நாங்கள் வரவேற்கிறோம்." :
             "ඔබ සතුව බෙදා ගැනීමට තමිළ සාහිත්‍ය හෝ පර්යේෂණ තිබේද? අපි ප්‍රජා සාමාජිකයින්ගේ ඉදිරිපත් කිරීම් සාදරයෙන් පිළිගනිමු."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#7a1315] text-white px-6 py-3 rounded-lg hover:bg-[#7a1315] transition-colors">
              {lang === "en" ? "Submission Guidelines" : 
               lang === "ta" ? "சமர்ப்பிப்பு வழிகாட்டுதல்கள்" : 
               "ඉදිරිපත් කිරීමේ මාර්ගෝපදේශ"}
            </button>
            <button className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
              {lang === "en" ? "Contact Editor" : 
               lang === "ta" ? "ஆசிரியரை தொடர்பு கொள்ளவும்" : 
               "සම්පාදකයා සම්බන්ධ කරන්න"}
            </button>
          </div>

          {/* Contact Information */}
          {publicationsContent.contact && (
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {publicationsContent.contact.editorial_office && (
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3" data-tina-field={tinaField(publicationsContent.contact.editorial_office, 'title')}>
                    {publicationsContent.contact.editorial_office.title}
                  </h3>
                  <p className="text-gray-600 mb-2" data-tina-field={tinaField(publicationsContent.contact.editorial_office, 'editor_in_chief')}>
                    {publicationsContent.contact.editorial_office.editor_in_chief}
                  </p>
                  <p className="text-sm text-gray-500 mb-3" data-tina-field={tinaField(publicationsContent.contact.editorial_office, 'editor_in_chief_tamil')}>
                    {publicationsContent.contact.editorial_office.editor_in_chief_tamil}
                  </p>
                  <p className="text-gray-600 text-sm mb-1" data-tina-field={tinaField(publicationsContent.contact.editorial_office, 'email')}>
                    {publicationsContent.contact.editorial_office.email}
                  </p>
                  <p className="text-gray-600 text-sm" data-tina-field={tinaField(publicationsContent.contact.editorial_office, 'phone')}>
                    {publicationsContent.contact.editorial_office.phone}
                  </p>
                </div>
              )}

              {publicationsContent.contact.distribution && (
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3" data-tina-field={tinaField(publicationsContent.contact.distribution, 'title')}>
                    {publicationsContent.contact.distribution.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-1" data-tina-field={tinaField(publicationsContent.contact.distribution, 'email')}>
                    {publicationsContent.contact.distribution.email}
                  </p>
                  <p className="text-gray-600 text-sm" data-tina-field={tinaField(publicationsContent.contact.distribution, 'phone')}>
                    {publicationsContent.contact.distribution.phone}
                  </p>
                </div>
              )}

              {publicationsContent.contact.submissions && (
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3" data-tina-field={tinaField(publicationsContent.contact.submissions, 'title')}>
                    {publicationsContent.contact.submissions.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3" data-tina-field={tinaField(publicationsContent.contact.submissions, 'email')}>
                    {publicationsContent.contact.submissions.email}
                  </p>
                  <a
                    href={publicationsContent.contact.submissions.guidelines_url}
                    className="text-blue-900 hover:text-blue-800 text-sm font-medium"
                    data-tina-field={tinaField(publicationsContent.contact.submissions, 'guidelines_url')}
                  >
                    {lang === "en" ? "View Guidelines" :
                     lang === "ta" ? "வழிகாட்டுதல்களைப் பார்க்கவும்" :
                     "මාර්ගෝපදේශ බලන්න"} →
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}