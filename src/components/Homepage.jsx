import { useTina, tinaField } from "tinacms/dist/react";
import { useState } from "react";

export default function HomePage({ props, lang }) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const homeContent = data[`home_${lang}`] || {};

  // State for announcement banner
  const [showAnnouncements, setShowAnnouncements] = useState(true);

  // Handle closing announcements (only for current session, reappears on refresh)
  const handleCloseAnnouncements = () => {
    setShowAnnouncements(false);
  };

  // Helper function to generate proper URLs with language prefix and base path
  const getUrlWithBase = (href) => {
    if (!href) return '#';

    const isDev = import.meta.env.MODE === 'development';
    const basePath = ''; // No base path for Vercel

    // If href is an absolute URL, return as-is
    if (href.startsWith('http://') || href.startsWith('https://')) {
      return href;
    }

    // If href already starts with basePath (and basePath is not empty), return as-is
    if (basePath && href.startsWith(basePath)) {
      return href;
    }

    // Remove leading slash if present
    const cleanHref = href.startsWith('/') ? href.substring(1) : href;

    // All pages are under [lang] directory, so always include language prefix
    if (cleanHref === '') {
      // Homepage
      return `${basePath}/${lang}`;
    }

    return `${basePath}/${lang}/${cleanHref}`;
  };

  return (
    <>
      {/* Announcements Bar - TinaCMS Editable - US Gov Style */}
      {showAnnouncements && homeContent.announcements && homeContent.announcements.length > 0 && (
        <div className={`border-b-2 ${
          homeContent.announcements[0].priority === 'high'
            ? 'bg-red-700 border-red-800'
            : homeContent.announcements[0].priority === 'medium'
            ? 'bg-orange-600 border-orange-700'
            : 'bg-blue-700 border-blue-800'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                {homeContent.announcements.slice(0, 2).map((announcement, index) => (
                  <div key={index} className={`flex items-start gap-3 ${index > 0 ? 'mt-3 pt-3 border-t border-white/20' : ''}`}>
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-bold text-white mb-1" data-tina-field={tinaField(announcement, 'title')}>{announcement.title}</h3>
                      <p className="text-sm text-white/95" data-tina-field={tinaField(announcement, 'content')}>{announcement.content}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={handleCloseAnnouncements}
                className="flex-shrink-0 text-white hover:text-white/80 transition-colors p-1 rounded hover:bg-white/10"
                aria-label="Close announcements"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section - State.gov style with image background */}
      <section className="relative bg-gray-900 text-white">
        {/* Background Image */}
        {homeContent.hero?.background_image && (
          <div className="absolute inset-0">
            <img
              src={homeContent.hero.background_image}
              alt="Hero background"
              className="w-full h-full object-cover"
            />
          </div>
        )}
        {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-[#7a1315] opacity-90"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className={`grid gap-8 ${homeContent.hero?.hero_video_url ? 'lg:grid-cols-2 items-center' : ''}`}>
            {/* Hero Text Content */}
            <div className={homeContent.hero?.hero_video_url ? '' : 'max-w-3xl'}>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6" data-tina-field={tinaField(homeContent, 'hero.title')}>
                {homeContent.hero?.title || "Preserving Tamil Heritage, Empowering Communities"}
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed" data-tina-field={tinaField(homeContent, 'hero.description')}>
                {homeContent.hero?.description || "Join us in celebrating the rich culture, language, and traditions of Tamil heritage through education, community programs, and cultural events."}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={getUrlWithBase(homeContent.hero?.cta_primary?.href || "/membership")}
                  className="inline-block bg-white text-blue-900 px-6 py-3 font-semibold hover:bg-gray-100 transition-colors"
                  data-tina-field={tinaField(homeContent, 'hero.cta_primary.text')}
                >
                  {homeContent.hero?.cta_primary?.text || "Learn More"}
                </a>
                <a
                  href={getUrlWithBase(homeContent.hero?.cta_secondary?.href || "/about")}
                  className="inline-block border-2 border-white text-white px-6 py-3 font-semibold hover:bg-white hover:text-blue-800 transition-colors"
                  data-tina-field={tinaField(homeContent, 'hero.cta_secondary.text')}
                >
                  {homeContent.hero?.cta_secondary?.text || "Get Involved"}
                </a>
              </div>
            </div>

            {/* Hero Video - US Gov Style */}
            {homeContent.hero?.hero_video_url && (
              <div className="lg:pl-8">
                <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-lg overflow-hidden shadow-2xl">
                  {/* Video Embed */}
                  <div className="relative" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${homeContent.hero.hero_video_url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/)?.[1] || ''}`}
                      title={homeContent.hero.hero_video_title || 'Hero Video'}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  {/* Video Title */}
                  {homeContent.hero.hero_video_title && (
                    <div className="p-4 bg-white/5 border-t border-white/10">
                      <h3 className="text-lg font-semibold text-white">
                        {homeContent.hero.hero_video_title}
                      </h3>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Mission Statement - TinaCMS Editable */}
      {homeContent.mission_statement && (
        <section className="py-12 bg-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4" data-tina-field={tinaField(homeContent, 'mission_statement.title')}>
              {homeContent.mission_statement.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed" data-tina-field={tinaField(homeContent, 'mission_statement.content')}>
              {homeContent.mission_statement.content}
            </p>
          </div>
        </section>
      )}

      {/* Featured Cards Section - State.gov style */}
      {homeContent.featured_departments && homeContent.featured_departments.length > 0 && (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeContent.featured_departments?.slice(0, 3).map((dept, index) => (
              <article key={index} className="group">
                {/* Image or Placeholder */}
                <div className="aspect-video bg-gray-200 mb-4 overflow-hidden">
                  {dept.image ? (
                    <img
                      src={dept.image}
                      alt={dept.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#7a1315] flex items-center justify-center">
                      <svg className="w-16 h-16 text-white opacity-50" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-800 transition-colors" data-tina-field={tinaField(dept, 'name')}>
                  {dept.name}
                </h3>
                <p className="text-gray-600 mb-4" data-tina-field={tinaField(dept, 'description')}>{dept.description}</p>
                <a
                  href={getUrlWithBase(dept.href)}
                  className="text-blue-900 font-semibold hover:text-blue-800 transition-colors inline-flex items-center"
                >
                  {lang === "en" ? "Learn more" : lang === "ta" ? "மேலும் அறிக" : "තව දැනගන්න"}
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Latest News/Events Section - State.gov style */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              {lang === "en" ? "Latest News & Events" : lang === "ta" ? "சமீபத்திய செய்திகள் & நிகழ்வுகள்" : "නවතම පුවත් සහ සිදුවීම්"}
            </h2>
            <a
              href={getUrlWithBase("/events")}
              className="text-blue-900 font-semibold hover:text-blue-800 transition-colors inline-flex items-center"
            >
              {lang === "en" ? "View all" : lang === "ta" ? "அනைත்தையும் பார்க்கவும்" : "සියල්ල බලන්න"}
              <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {homeContent.recent_events?.map((event, index) => (
              <a
                key={index}
                href={getUrlWithBase("events")}
                className="bg-white group hover:shadow-md transition-shadow block"
              >
                {/* Event Image */}
                <div className="aspect-video bg-gray-200 overflow-hidden">
                  <div className="w-full h-full bg-[#7a1315] flex items-center justify-center">
                    <svg className="w-12 h-12 text-white opacity-50" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                <div className="p-4">
                  <div className="text-sm text-gray-500 mb-2" data-tina-field={tinaField(event, 'date')}>
                    {new Date(event.date).toLocaleDateString(lang === "ta" ? "ta-IN" : lang === "si" ? "si-LK" : "en-US", {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-800 transition-colors" data-tina-field={tinaField(event, 'title')}>
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2" data-tina-field={tinaField(event, 'description')}>{event.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Bar - State.gov style */}
      <section className="py-12 bg-white border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {homeContent.statistics?.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-blue-900 mb-1" data-tina-field={tinaField(stat, 'number')}>{stat.number}</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide" data-tina-field={tinaField(stat, 'label')}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Overview - State.gov style */}
      {homeContent.featured_departments && homeContent.featured_departments.length > 0 && (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {lang === "en" ? "Our Programs" : lang === "ta" ? "எங்கள் திட்டங்கள்" : "අපගේ වැඩසටහන්"}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {lang === "en"
                ? "Explore our diverse programs designed to preserve and promote Tamil culture, language, and heritage."
                : lang === "ta"
                ? "தமிழ் கலாச்சாரம், மொழி மற்றும் பாரம்பரியத்தை பாதுகாக்கவும் மேம்படுத்தவும் வடிவமைக்கப்பட்ட எங்கள் பல்வேறு திட்டங்களை ஆராயுங்கள்."
                : "තමිළ සංස්කෘතිය, භාෂාව සහ උරුමය සුරැකීමට සහ ප්‍රවර්ධනය කිරීමට නිර්මාණය කර ඇති අපගේ විවිධ වැඩසටහන් ගවේෂණය කරන්න."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeContent.featured_departments?.map((dept, index) => (
              <div key={index} className="border border-gray-200 p-6 hover:border-blue-800 hover:shadow-md transition-all">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-[#7a1315] rounded flex-shrink-0 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{dept.name}</h3>
                    <p className="text-gray-600 mb-4">{dept.description}</p>
                    <a
                      href={getUrlWithBase(dept.href)}
                      className="text-blue-900 font-semibold hover:text-blue-800 transition-colors inline-flex items-center"
                    >
                      {lang === "en" ? "Learn more" : lang === "ta" ? "மேலும் அறிக" : "තව දැනගන්න"}
                      <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Featured Video Section - US Gov Style */}
      {homeContent.featured_video && homeContent.featured_video.youtube_url && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {homeContent.featured_video.title && (
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">
                  {homeContent.featured_video.title}
                </h2>
              </div>
            )}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden shadow-lg">
                {/* Video Embed */}
                <div className="relative" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${homeContent.featured_video.youtube_url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/)?.[1] || ''}`}
                    title={homeContent.featured_video.video_title || 'Video'}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                {/* Video Info */}
                {(homeContent.featured_video.video_title || homeContent.featured_video.video_description) && (
                  <div className="p-6 bg-gray-50 border-t border-gray-200">
                    {homeContent.featured_video.video_title && (
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {homeContent.featured_video.video_title}
                      </h3>
                    )}
                    {homeContent.featured_video.video_description && (
                      <p className="text-gray-600">
                        {homeContent.featured_video.video_description}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Quick Actions - TinaCMS Editable */}
      {homeContent.quick_actions && homeContent.quick_actions.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {lang === "en" ? "Get Involved" : lang === "ta" ? "ஈடுபடுங்கள்" : "සම්බන්ධ වන්න"}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {homeContent.quick_actions.map((action, index) => (
                <a
                  key={index}
                  href={getUrlWithBase(action.href)}
                  className="bg-white border border-gray-200 p-6 text-center hover:border-blue-800 hover:shadow-md transition-all group"
                >
                  <div className="w-16 h-16 bg-[#7a1315] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-800">
                    {action.title}
                  </h3>
                  <p className="text-sm text-gray-600">{action.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recent Articles/Blog Posts Section */}
      {homeContent.recent_articles && homeContent.recent_articles.posts_to_show > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {homeContent.recent_articles.section_title}
              </h2>
              {homeContent.recent_articles.section_description && (
                <p className="text-lg text-gray-600">
                  {homeContent.recent_articles.section_description}
                </p>
              )}
            </div>

            {/* Note: In production, fetch real blog posts from TinaCMS */}
            {/* For now, showing placeholder. Implement dynamic fetch in [...slug].astro */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {/* Placeholder blog cards - replace with dynamic data */}
              <a
                href={getUrlWithBase('blog/welcome-to-thamizhi-club')}
                className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-[#7a1315] hover:shadow-lg transition-all group block"
              >
                <div className="aspect-video bg-gray-200">
                  <img
                    src="/uploads/thamizhi-welcome.jpg"
                    alt="Welcome"
                    className="w-full h-full object-cover"
                    onError={(e) => e.target.style.display = 'none'}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-[#7a1315] uppercase">Announcements</span>
                    <span className="text-xs text-gray-500">Jan 15, 2024</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#7a1315]">
                    Welcome to Thamizhi University Club
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Discover our mission to preserve Tamil heritage and empower students through cultural programs...
                  </p>
                  <div className="flex items-center text-[#7a1315] font-semibold group-hover:gap-2 transition-all">
                    Read More
                    <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>

              <a
                href={getUrlWithBase('blog/tamil-new-year-celebration-recap')}
                className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-[#7a1315] hover:shadow-lg transition-all group block"
              >
                <div className="aspect-video bg-gray-200">
                  <img
                    src="/uploads/tamil-new-year-2024.jpg"
                    alt="Tamil New Year"
                    className="w-full h-full object-cover"
                    onError={(e) => e.target.style.display = 'none'}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-[#7a1315] uppercase">Events</span>
                    <span className="text-xs text-gray-500">Apr 20, 2024</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#7a1315]">
                    Tamil New Year Celebration: A Memorable Evening
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Relive the highlights of our spectacular Tamil New Year celebration with traditional performances...
                  </p>
                  <div className="flex items-center text-[#7a1315] font-semibold group-hover:gap-2 transition-all">
                    Read More
                    <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>

              <a
                href={getUrlWithBase(homeContent.recent_articles.view_all_href || 'blog')}
                className="bg-gradient-to-br from-[#7a1315] to-[#1a1a1a] rounded-lg overflow-hidden hover:from-[#8b1313] hover:to-[#0a0a0a] transition-all flex items-center justify-center p-8 text-center cursor-pointer"
              >
                <div>
                  <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {homeContent.recent_articles.view_all_text}
                  </h3>
                  <p className="text-[#fffbcc]">
                    Explore all our articles and updates
                  </p>
                </div>
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Photo Highlights Section */}
      {homeContent.photo_highlights && homeContent.photo_highlights.photos && homeContent.photo_highlights.photos.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {homeContent.photo_highlights.section_title}
              </h2>
              {homeContent.photo_highlights.section_description && (
                <p className="text-lg text-gray-600">
                  {homeContent.photo_highlights.section_description}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {homeContent.photo_highlights.photos.map((photo, index) => (
                <a
                  key={index}
                  href={getUrlWithBase(photo.link || '/gallery')}
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="aspect-square bg-gray-200">
                    <img
                      src={photo.image}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => e.target.style.display = 'none'}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-bold text-lg mb-1">{photo.title}</h3>
                      {photo.description && (
                        <p className="text-sm text-white/90">{photo.description}</p>
                      )}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {homeContent.photo_highlights.view_gallery_text && homeContent.photo_highlights.view_gallery_href && (
              <div className="text-center">
                <a
                  href={getUrlWithBase(homeContent.photo_highlights.view_gallery_href)}
                  className="inline-block bg-blue-600 text-white px-8 py-3 font-semibold hover:bg-blue-700 transition-colors"
                >
                  {homeContent.photo_highlights.view_gallery_text}
                </a>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Newsletter/Call to Action - State.gov style - Using TinaCMS */}
      {homeContent.newsletter && (
        <section className="py-16 bg-[#7a1315] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4" data-tina-field={tinaField(homeContent, 'newsletter.title')}>
              {homeContent.newsletter.title}
            </h2>
            <p className="text-xl text-blue-100 mb-8" data-tina-field={tinaField(homeContent, 'newsletter.description')}>
              {homeContent.newsletter.description}
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder={homeContent.newsletter.placeholder}
                className="flex-1 px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <button
                type="submit"
                className="bg-white text-blue-900 px-8 py-3 font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                {homeContent.newsletter.button}
              </button>
            </form>
            {homeContent.newsletter.privacy && (
              <p className="text-sm text-blue-100 mt-4">
                {homeContent.newsletter.privacy}
              </p>
            )}
          </div>
        </section>
      )}
    </>
  );
}
