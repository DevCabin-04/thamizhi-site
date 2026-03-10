import { useTina, tinaField } from "tinacms/dist/react";

export default function BlogPageIndex({ props, lang, blogPosts }) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const blogPageContent = data[`blog_page_${lang}`] || {};
  const hero = blogPageContent.hero || {};
  const categoriesSection = blogPageContent.categories_section || {};
  const featuredSection = blogPageContent.featured_section || {};
  const allPostsSection = blogPageContent.all_posts_section || {};

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(lang === 'ta' ? 'ta-IN' : lang === 'si' ? 'si-LK' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Get category label
  const getCategoryLabel = (category) => {
    const labels = {
      en: {
        events: "Events",
        culture: "Culture",
        "student-life": "Student Life",
        language: "Language",
        community: "Community",
        announcements: "Announcements",
      },
      ta: {
        events: "நிகழ்வுகள்",
        culture: "கலாச்சாரம்",
        "student-life": "மாணவர் வாழ்க்கை",
        language: "மொழி",
        community: "சமூகம்",
        announcements: "அறிவிப்புகள்",
      },
      si: {
        events: "සිදුවීම්",
        culture: "සංස්කෘතිය",
        "student-life": "ශිෂ්‍ය ජීවිතය",
        language: "භාෂාව",
        community: "ප්‍රජාව",
        announcements: "නිවේදන",
      },
    };
    return labels[lang]?.[category] || category;
  };

  // Helper function to generate proper URLs
  const getUrlWithBase = (href) => {
    if (!href) return '#';
    const isDev = import.meta.env.MODE === 'development';
    const basePath = ''; // No base path for Vercel
    if (href.startsWith('http://') || href.startsWith('https://')) return href;
    if (href.startsWith(basePath)) return href;
    const cleanHref = href.startsWith('/') ? href.substring(1) : href;
    return `${basePath}/${lang}/${cleanHref}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1
          className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          data-tina-field={tinaField(hero, 'title')}
        >
          {hero.title || (lang === 'ta' ? 'வலைப்பதிவு' : lang === 'si' ? 'බ්ලොග්' : 'Blog')}
        </h1>

        {hero.title_tamil && (
          <h2
            className="text-3xl font-tamil text-thamizhi-maroon-900 mb-4"
            data-tina-field={tinaField(hero, 'title_tamil')}
          >
            {hero.title_tamil}
          </h2>
        )}

        {hero.subtitle && (
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-2"
            data-tina-field={tinaField(hero, 'subtitle')}
          >
            {hero.subtitle}
          </p>
        )}

        {hero.subtitle_tamil && (
          <p
            className="text-lg font-tamil text-gray-600 max-w-3xl mx-auto mb-4"
            data-tina-field={tinaField(hero, 'subtitle_tamil')}
          >
            {hero.subtitle_tamil}
          </p>
        )}

        {hero.description && (
          <p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            data-tina-field={tinaField(hero, 'description')}
          >
            {hero.description}
          </p>
        )}
      </div>

      {/* Blog Posts Grid */}
      {blogPosts && blogPosts.length > 0 ? (
        <div>
          <h2
            className="text-3xl font-bold text-gray-900 mb-8"
            data-tina-field={tinaField(allPostsSection, 'title')}
          >
            {allPostsSection.title || (lang === 'ta' ? 'அனைத்து இடுகைகள்' : lang === 'si' ? 'සියලුම පළ කිරීම්' : 'All Posts')}
          </h2>

          {allPostsSection.title_tamil && (
            <h3
              className="text-2xl font-tamil text-thamizhi-maroon-900 mb-6"
              data-tina-field={tinaField(allPostsSection, 'title_tamil')}
            >
              {allPostsSection.title_tamil}
            </h3>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <a
                key={index}
                href={getUrlWithBase(`blog/${post.slug}`)}
                className="bg-white border-2 border-gray-200 overflow-hidden hover:border-thamizhi-maroon-900 hover:shadow-lg transition-all group"
              >
                {post.featured_image && (
                  <div className="aspect-video bg-gray-200">
                    <img
                      src={post.featured_image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {post.category && (
                      <span className="text-xs font-semibold text-thamizhi-maroon-900 uppercase">
                        {getCategoryLabel(post.category)}
                      </span>
                    )}
                    <span className="text-xs text-gray-500">{formatDate(post.published_date)}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-thamizhi-maroon-900">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center text-thamizhi-maroon-900 font-semibold group-hover:gap-2 transition-all">
                    {lang === 'ta' ? 'மேலும் வாசிக்க' : lang === 'si' ? 'තව කියවන්න' : 'Read More'}
                    <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-16">
          <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <p className="text-xl text-gray-600">
            {lang === 'ta' ? 'இன்னும் வலைப்பதிவு இடுகைகள் இல்லை' : lang === 'si' ? 'තවම බ්ලොග් පළ කිරීම් නැත' : 'No blog posts yet'}
          </p>
          <p className="text-gray-500 mt-2">
            {lang === 'ta' ? 'விரைவில் மேலும் உள்ளடக்கம்!' : lang === 'si' ? 'ඉක්මනින් තවත් අන්තර්ගතය!' : 'More content coming soon!'}
          </p>
        </div>
      )}
    </div>
  );
}
