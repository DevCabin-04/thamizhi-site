import { useTina, tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export default function BlogPost({ props, lang }) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const blogPost = data[`blog_${lang}`] || {};

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

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Category Badge */}
      {blogPost.category && (
        <div className="mb-6">
          <span className="inline-block bg-thamizhi-maroon-900 text-thamizhi-gold-200 px-4 py-1.5 text-sm font-semibold" data-tina-field={tinaField(blogPost, 'category')}>
            {getCategoryLabel(blogPost.category)}
          </span>
        </div>
      )}

      {/* Title */}
      <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight" data-tina-field={tinaField(blogPost, 'title')}>
        {blogPost.title}
      </h1>

      {/* Author and Date */}
      <div className="flex items-center gap-4 mb-8 pb-8 border-b-2 border-thamizhi-gold-600">
        {blogPost.author_image && (
          <img
            src={blogPost.author_image}
            alt={blogPost.author}
            className="w-12 h-12 object-cover"
            data-tina-field={tinaField(blogPost, 'author_image')}
          />
        )}
        <div>
          <div className="font-semibold text-gray-900" data-tina-field={tinaField(blogPost, 'author')}>{blogPost.author}</div>
          {blogPost.author_role && (
            <div className="text-sm text-gray-600" data-tina-field={tinaField(blogPost, 'author_role')}>{blogPost.author_role}</div>
          )}
          <div className="text-sm text-gray-500 mt-1" data-tina-field={tinaField(blogPost, 'published_date')}>
            {formatDate(blogPost.published_date)}
          </div>
        </div>
      </div>

      {/* Featured Image */}
      {blogPost.featured_image && (
        <div className="mb-10">
          <img
            src={blogPost.featured_image}
            alt={blogPost.title}
            className="w-full shadow-lg"
            data-tina-field={tinaField(blogPost, 'featured_image')}
          />
        </div>
      )}

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        <div className="text-xl text-gray-700 mb-8 leading-relaxed font-medium" data-tina-field={tinaField(blogPost, 'excerpt')}>
          {blogPost.excerpt}
        </div>

        <div className="blog-content text-gray-800 leading-relaxed" data-tina-field={tinaField(blogPost, 'content')}>
          <TinaMarkdown content={blogPost.content} />
        </div>
      </div>

      {/* Tags */}
      {blogPost.tags && blogPost.tags.length > 0 && (
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap gap-2" data-tina-field={tinaField(blogPost, 'tags')}>
            {blogPost.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-thamizhi-gold-100 text-thamizhi-maroon-900 px-3 py-1 text-sm font-semibold"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Back to Blog Link */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <a
          href={`/${lang}/blog`}
          className="inline-flex items-center text-thamizhi-maroon-900 hover:text-thamizhi-maroon-700 font-semibold"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {lang === 'ta' ? 'வலைப்பதிவுக்குத் திரும்பு' : lang === 'si' ? 'බ්ලොග් එකට ආපසු' : 'Back to Blog'}
        </a>
      </div>
    </article>
  );
}
