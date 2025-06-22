import { useTina } from "tinacms/dist/react";

export default function HomePage({ props, lang }) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

    const homeContent = data[`home_${lang}`] || {};

  return (
    <>
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                {homeContent.hero?.title || "Welcome"}
              </h1>
              <h2 className="text-2xl lg:text-3xl font-medium text-orange-100 mb-4">
                {homeContent.hero?.subtitle || ""}
              </h2>
              <p className="text-xl text-orange-100 mb-8 leading-relaxed">
                {homeContent.hero?.description || ""}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={homeContent.hero?.cta_primary?.href || "#"}
                  className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors text-center shadow-lg"
                >
                  {homeContent.hero?.cta_primary?.text || "Learn More"}
                </a>
                <a
                  href={homeContent.hero?.cta_secondary?.href || "#"}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors text-center"
                >
                  {homeContent.hero?.cta_secondary?.text || "Get Started"}
                </a>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-sm">
                <div className="w-40 h-40 bg-white bg-opacity-20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-6xl font-bold text-white">த</span>
                </div>
                <p className="text-xl font-medium text-orange-100">
                  {homeContent.mission_statement?.content || ""}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {homeContent.statistics?.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {lang === "en"
                ? "Our Departments"
                : lang === "ta"
                ? "எங்கள் துறைகள்"
                : "අපගේ දෙපාර්තමේන්තු"}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {lang === "en"
                ? "Discover our diverse programs designed to preserve Tamil culture and serve our community."
                : lang === "ta"
                ? "தமிழ் கலாச்சாரத்தை பாதுகாக்கவும் எங்கள் சமூகத்திற்கு சேவை செய்யவும் வடிவமைக்கப்பட்ட எங்கள் பல்வேறு திட்டங்களைக் கண்டறியுங்கள்."
                : "තමිළ සංස්කෘතිය සුරැකීමට සහ අපගේ ප්‍රජාවට සේවය කිරීමට නිර්මාණය කර ඇති අපගේ විවිධ වැඩසටහන් සොයා ගන්න."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {homeContent.featured_departments?.map((dept, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {dept.name}
                </h3>
                <p className="text-gray-600 mb-4">{dept.description}</p>
                <a
                  href={dept.href}
                  className="text-orange-600 font-medium hover:text-orange-800 transition-colors"
                >
                  {lang === "en"
                    ? "Learn more →"
                    : lang === "ta"
                    ? "மேலும் அறிக →"
                    : "තව දැනගන්න →"}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {lang === "en"
                  ? "Recent Events"
                  : lang === "ta"
                  ? "சமீபத்திய நிகழ்வுகள்"
                  : "මෑත සිදුවීම්"}
              </h2>
              <p className="text-lg text-gray-600">
                {lang === "en"
                  ? "Stay connected with our community through cultural events and programs."
                  : lang === "ta"
                  ? "கலாச்சார நிகழ்வுகள் மற்றும் திட்டங்கள் மூலம் எங்கள் சமூகத்துடன் தொடர்புடன் இருங்கள்."
                  : "සංස්කෘතික සිදුවීම් සහ වැඩසටහන් හරහා අපගේ ප්‍රජාව සමඟ සම්බන්ධව සිටින්න."}
              </p>
            </div>
            <a
              href={lang === "en" ? "/events" : `/${lang}/events`}
              className="text-orange-600 font-medium hover:text-orange-800 flex items-center"
            >
              {lang === "en"
                ? "View all events"
                : lang === "ta"
                ? "அனைத்து நிகழ்வுகளையும் பார்க்கவும்"
                : "සියලුම සිදුවීම් බලන්න"}
              <svg
                className="w-4 h-4 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {homeContent.recent_events?.map((event, index) => (
              <article key={index} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-gray-200">
                <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-white opacity-50"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium mr-3 ${
                        event.category === "festival"
                          ? "bg-red-100 text-red-800"
                          : event.category === "education"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {event.category?.toUpperCase()}
                    </span>
                    <time dateTime={event.date}>
                      {new Date(event.date).toLocaleDateString()}
                    </time>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {event.description}
                  </p>
                  <div className="text-sm text-gray-500">
                    <p>
                      <strong>
                        {lang === "en"
                          ? "Time:"
                          : lang === "ta"
                          ? "நேரம்:"
                          : "වේලාව:"}
                      </strong>{" "}
                      {event.time}
                    </p>
                    <p>
                      <strong>
                        {lang === "en"
                          ? "Location:"
                          : lang === "ta"
                          ? "இடம்:"
                          : "ස්ථානය:"}
                      </strong>{" "}
                      {event.location}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {homeContent.announcements && homeContent.announcements.length > 0 && (
        <section className="py-16 bg-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {lang === "en"
                  ? "Latest Announcements"
                  : lang === "ta"
                  ? "சமீபத்திய அறிவிப்புகள்"
                  : "නවතම නිවේදන"}
              </h2>
            </div>

            <div className="space-y-6">
              {homeContent.announcements?.map((announcement, index) => (
                <div
                  key={index}
                  className={`rounded-lg p-6 border-l-4 ${
                    announcement.priority === "high"
                      ? "bg-red-50 border-red-500"
                      : announcement.priority === "medium"
                      ? "bg-yellow-50 border-yellow-500"
                      : "bg-blue-50 border-blue-500"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium mr-3 ${
                            announcement.priority === "high"
                              ? "bg-red-100 text-red-800"
                              : announcement.priority === "medium"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {announcement.priority?.toUpperCase()}
                        </span>
                        <time
                          className="text-sm text-gray-500"
                          dateTime={announcement.date}
                        >
                          {new Date(announcement.date).toLocaleDateString()}
                        </time>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {announcement.title}
                      </h3>
                      <p className="text-gray-700">
                        {announcement.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {lang === "en"
                ? "Get Involved"
                : lang === "ta"
                ? "பங்கேற்க"
                : "සම්බන්ධ වන්න"}
            </h2>
            <p className="text-lg text-gray-600">
              {lang === "en"
                ? "Join our community and help preserve Tamil heritage for future generations."
                : lang === "ta"
                ? "எங்கள் சமூகத்தில் சேர்ந்து எதிர்கால தலைமுறைகளுக்காக தமிழ் பாரம்பரியத்தை பாதுகாக்க உதவுங்கள்."
                : "අපගේ ප්‍රජාවට එකතු වී අනාගත පරම්පරාවන් සඳහා තමිළ උරුමය සුරැකීමට උපකාර කරන්න."}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {homeContent.quick_actions?.map((action, index) => (
              <a
                key={index}
                href={action.href}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow border-2 border-transparent hover:border-orange-200"
              >
                <div className="w-16 h-16 bg-orange-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {action.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {action.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {homeContent.newsletter?.title || "Subscribe to Our Newsletter"}
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            {homeContent.newsletter?.description || "Stay updated with our latest news and events"}
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder={homeContent.newsletter?.placeholder || "Enter your email"}
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-orange-300 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-medium hover:bg-orange-50 transition-colors"
            >
              {homeContent.newsletter?.button || "Subscribe"}
            </button>
          </form>
          <p className="text-sm text-orange-200 mt-4">
            {homeContent.newsletter?.privacy || "We respect your privacy and will never share your email."}
          </p>
        </div>
      </section>
    </>
  );
}