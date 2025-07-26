import { useTina } from "tinacms/dist/react";

export default function AboutPage({ props, lang }) {
console.log('AboutPage props:', props);
  console.log('AboutPage lang:', lang);

  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  console.log('AboutPage useTina data:', data);
  
  const aboutContent = data[`about_${lang}`] || {};
  console.log('AboutPage aboutContent:', aboutContent);


  return (
    <>
      {/* Page Header */}
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
              {aboutContent.hero?.title || "About Us"}
            </h1>
            <h2 className="text-2xl lg:text-3xl font-medium text-orange-100 mb-6">
              {aboutContent.hero?.title_tamil || ""}
            </h2>
            <p className="text-xl text-orange-100">
              {aboutContent.hero?.description || ""}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-orange-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {aboutContent.mission?.title || "Our Mission"}
              </h2>
              <h3 className="text-2xl font-medium text-orange-600 mb-6">
                {aboutContent.mission?.title_tamil || ""}
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                {aboutContent.mission?.content || ""}
              </p>
              <p className="text-gray-600">
                {aboutContent.mission?.content_tamil || ""}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-red-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {aboutContent.vision?.title || "Our Vision"}
              </h2>
              <h3 className="text-2xl font-medium text-red-600 mb-6">
                {aboutContent.vision?.title_tamil || ""}
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                {aboutContent.vision?.content || ""}
              </p>
              <p className="text-gray-600">
                {aboutContent.vision?.content_tamil || ""}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {lang === "en"
                ? "Our Core Values"
                : lang === "ta"
                ? "எங்கள் முக்கிய மதிப்புகள்"
                : "අපගේ මූලික වටිනාකම්"}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {lang === "en"
                ? "The principles that guide our work and define our commitment to the Tamil community."
                : lang === "ta"
                ? "எங்கள் வேலையை வழிநடத்தும் கொள்கைகள் மற்றும் தமிழ் சமூகத்திற்கான எங்கள் அர்ப்பணிப்பை வரையறுக்கும்."
                : "අපගේ වැඩ කටයුතු මඟ පෙන්වන සහ තමිළ ප්‍රජාවට අපගේ කැපවීම නිර්වචනය කරන මූලධර්ම."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutContent.valuess?.map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <h4 className="text-lg font-medium text-orange-600 mb-3">
                  {value.title_tamil}
                </h4>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      {aboutContent.history && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {aboutContent.history?.title || "Our History"}
                </h2>
                <h3 className="text-2xl font-medium text-orange-600 mb-6">
                  {aboutContent.history?.title_tamil || ""}
                </h3>
                <p className="text-lg text-gray-600">
                  {aboutContent.history?.content || ""}
                </p>
              </div>

              <div className="space-y-8">
                {aboutContent.history?.milestones?.map((item, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          index % 2 === 0
                            ? "bg-orange-600"
                            : "bg-red-600"
                        }`}
                      >
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm text-gray-500 mb-1">
                        {item.year}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Leadership Team */}
      {aboutContent.leadership && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {aboutContent.leadership?.title || "Leadership Team"}
              </h2>
              <h3 className="text-2xl font-medium text-orange-600 mb-6">
                {aboutContent.leadership?.title_tamil || ""}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aboutContent.leadership?.board_members?.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow">
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {member.name
                        ?.split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <h4 className="text-lg font-medium text-orange-600 mb-1">
                    {member.name_tamil}
                  </h4>
                  <p className="text-orange-600 font-medium mb-2">
                    {member.position}
                  </p>
                  <p className="text-sm text-gray-500 mb-3">
                    {member.position_tamil}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Programs */}
      {aboutContent.programs && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {aboutContent.programs?.title || "Our Programs"}
              </h2>
              <h3 className="text-2xl font-medium text-orange-600 mb-6">
                {aboutContent.programs?.title_tamil || ""}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aboutContent.programs?.list?.map((program, index) => (
                <div key={index} className="bg-amber-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {program.name}
                  </h3>
                  <h4 className="text-lg font-medium text-orange-600 mb-3">
                    {program.name_tamil}
                  </h4>
                  <p className="text-gray-600">
                    {program.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Statistics & Achievements */}
      {aboutContent.achievements && (
        <section className="py-16 bg-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {aboutContent.achievements?.title || "Our Achievements"}
              </h2>
              <h3 className="text-2xl font-medium text-orange-600 mb-6">
                {aboutContent.achievements?.title_tamil || ""}
              </h3>
            </div>

            {/* Statistics */}
            {aboutContent.achievements?.stats && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                {aboutContent.achievements.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-orange-600 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium text-sm">
                      {stat.label}
                    </div>
                    <div className="text-xs text-gray-500">
                      {stat.label_tamil}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Awards */}
            {aboutContent.achievements?.awards && (
              <div className="bg-white rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  {lang === "en"
                    ? "Recent Awards & Recognition"
                    : lang === "ta"
                    ? "சமீபத்திய விருதுகள் & அங்கீகாரம்"
                    : "මෑත සම්මාන සහ පිළිගැනීම්"}
                </h3>
                <div className="space-y-6">
                  {aboutContent.achievements.awards.map((award, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium mr-3">
                            {award.year}
                          </span>
                          <span className="text-sm text-gray-500">
                            {award.organization}
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">
                          {award.title}
                        </h4>
                        {award.description && (
                          <p className="text-gray-600 text-sm">
                            {award.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Contact Section */}
      {aboutContent.contact && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {aboutContent.contact?.title || "Get in Touch"}
              </h2>
              <h3 className="text-2xl font-medium text-orange-600 mb-6">
                {aboutContent.contact?.title_tamil || ""}
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {aboutContent.contact?.description || ""}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Address */}
              {aboutContent.contact?.address && (
                <div className="bg-orange-50 rounded-lg p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {aboutContent.contact.address.title}
                  </h3>
                  <div className="space-y-1">
                    {aboutContent.contact.address.lines?.map((line, index) => (
                      <p key={index} className="text-gray-700">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* Hours */}
              {aboutContent.contact?.hours && (
                <div className="bg-red-50 rounded-lg p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {aboutContent.contact.hours.title}
                  </h3>
                  <div className="space-y-1">
                    {aboutContent.contact.hours.schedule?.map((time, index) => (
                      <p key={index} className="text-gray-700">
                        {time}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {lang === "en"
              ? "Join Our Mission"
              : lang === "ta"
              ? "எங்கள் நோக்கத்தில் சேருங்கள்"
              : "අපගේ මෙහෙවරට එකතු වන්න"}
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            {lang === "en"
              ? "Help us preserve Tamil heritage and build a stronger community for future generations."
              : lang === "ta"
              ? "தமிழ் பாரம்பரியத்தை பாதুகாக்கவும் எதிர்கால தலைமுறைகளுக்காக வலுவான சமூகத்தை கட்டியெழுப்பவும் எங்களுக்கு உதவுங்கள்."
              : "තමිළ උරුමය සුරැකීමට සහ අනාගත පරම්පරාවන් සඳහා ශක්තිමත් ප්‍රජාවක් ගොඩනැගීමට අපට උදව් කරන්න."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={lang === "en" ? "/membership" : `/${lang}/membership`}
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-medium hover:bg-orange-50 transition-colors"
            >
              {lang === "en"
                ? "Become a Member"
                : lang === "ta"
                ? "உறுப்பினராக"
                : "සාමාජිකයෙකු වන්න"}
            </a>
            <a
              href={lang === "en" ? "/volunteer" : `/${lang}/volunteer`}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-orange-600 transition-colors"
            >
              {lang === "en"
                ? "Volunteer With Us"
                : lang === "ta"
                ? "எங்களுடன் தொண்டு"
                : "අප සමඟ ස්වේච්ඡා සේවය"}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}