import { useTina, tinaField } from "tinacms/dist/react";

export default function AboutPage({ props, lang }) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const aboutContent = data[`about_${lang}`] || {};


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
            <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-tina-field={tinaField(aboutContent, 'hero.title')}>
              {aboutContent.hero?.title || "About Us"}
            </h1>
            <h2 className="text-2xl lg:text-3xl font-medium text-blue-100 mb-6" data-tina-field={tinaField(aboutContent, 'hero.title_tamil')}>
              {aboutContent.hero?.title_tamil || ""}
            </h2>
            <p className="text-xl text-blue-100" data-tina-field={tinaField(aboutContent, 'hero.description')}>
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
            <div className="bg-slate-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4" data-tina-field={tinaField(aboutContent, 'mission.title')}>
                {aboutContent.mission?.title || "Our Mission"}
              </h2>
              <h3 className="text-2xl font-medium text-blue-900 mb-6" data-tina-field={tinaField(aboutContent, 'mission.title_tamil')}>
                {aboutContent.mission?.title_tamil || ""}
              </h3>
              <p className="text-lg text-gray-700 mb-4" data-tina-field={tinaField(aboutContent, 'mission.content')}>
                {aboutContent.mission?.content || ""}
              </p>
              <p className="text-gray-600" data-tina-field={tinaField(aboutContent, 'mission.content_tamil')}>
                {aboutContent.mission?.content_tamil || ""}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gov-gray-100 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4" data-tina-field={tinaField(aboutContent, 'vision.title')}>
                {aboutContent.vision?.title || "Our Vision"}
              </h2>
              <h3 className="text-2xl font-medium text-blue-900 mb-6" data-tina-field={tinaField(aboutContent, 'vision.title_tamil')}>
                {aboutContent.vision?.title_tamil || ""}
              </h3>
              <p className="text-lg text-gray-700 mb-4" data-tina-field={tinaField(aboutContent, 'vision.content')}>
                {aboutContent.vision?.content || ""}
              </p>
              <p className="text-gray-600" data-tina-field={tinaField(aboutContent, 'vision.content_tamil')}>
                {aboutContent.vision?.content_tamil || ""}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-tina-field={tinaField(aboutContent, 'values_section.title')}>
              {aboutContent.values_section?.title || (lang === "en"
                ? "Our Core Values"
                : lang === "ta"
                ? "எங்கள் முக்கிய மதிப்புகள்"
                : "අපගේ මූලික වටිනාකම්")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-tina-field={tinaField(aboutContent, 'values_section.description')}>
              {aboutContent.values_section?.description || (lang === "en"
                ? "The principles that guide our work and define our commitment to the Tamil community."
                : lang === "ta"
                ? "எங்கள் வேலையை வழிநடத்தும் கொள்கைகள் மற்றும் தமிழ் சமூகத்திற்கான எங்கள் அர்ப்பணிப்பை வரையறுக்கும்."
                : "අපගේ වැඩ කටයුතු මඟ පෙන්වන සහ තමිළ ප්‍රජාවට අපගේ කැපවීම නිර්වචනය කරන මූලධර්ම.")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutContent.valuess?.map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[#7a1315] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2" data-tina-field={tinaField(value, 'title')}>
                  {value.title}
                </h3>
                <h4 className="text-lg font-medium text-blue-900 mb-3" data-tina-field={tinaField(value, 'title_tamil')}>
                  {value.title_tamil}
                </h4>
                <p className="text-gray-600" data-tina-field={tinaField(value, 'description')}>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4" data-tina-field={tinaField(aboutContent, 'history.title')}>
                  {aboutContent.history?.title || "Our History"}
                </h2>
                <h3 className="text-2xl font-medium text-blue-900 mb-6" data-tina-field={tinaField(aboutContent, 'history.title_tamil')}>
                  {aboutContent.history?.title_tamil || ""}
                </h3>
                <p className="text-lg text-gray-600" data-tina-field={tinaField(aboutContent, 'history.content')}>
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
                            ? "bg-[#7a1315]"
                            : "bg-[#7a1315]"
                        }`}
                      >
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm text-gray-500 mb-1" data-tina-field={tinaField(item, 'year')}>
                        {item.year}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1" data-tina-field={tinaField(item, 'title')}>
                        {item.title}
                      </h3>
                      <p className="text-gray-600" data-tina-field={tinaField(item, 'description')}>
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
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4" data-tina-field={tinaField(aboutContent, 'leadership.title')}>
                {aboutContent.leadership?.title || "Leadership Team"}
              </h2>
              <h3 className="text-2xl font-medium text-blue-900 mb-6" data-tina-field={tinaField(aboutContent, 'leadership.title_tamil')}>
                {aboutContent.leadership?.title_tamil || ""}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aboutContent.leadership?.board_members?.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg border-2 border-gray-300 p-6 text-center hover:shadow-md transition-shadow">
                  <div className="w-24 h-24 bg-[#7a1315] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {member.name
                        ?.split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1" data-tina-field={tinaField(member, 'name')}>
                    {member.name}
                  </h3>
                  <h4 className="text-lg font-medium text-blue-900 mb-1" data-tina-field={tinaField(member, 'name_tamil')}>
                    {member.name_tamil}
                  </h4>
                  <p className="text-blue-900 font-medium mb-2" data-tina-field={tinaField(member, 'position')}>
                    {member.position}
                  </p>
                  <p className="text-sm text-gray-500 mb-3" data-tina-field={tinaField(member, 'position_tamil')}>
                    {member.position_tamil}
                  </p>
                  <p className="text-gray-600 text-sm" data-tina-field={tinaField(member, 'bio')}>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4" data-tina-field={tinaField(aboutContent, 'programs.title')}>
                {aboutContent.programs?.title || "Our Programs"}
              </h2>
              <h3 className="text-2xl font-medium text-blue-900 mb-6" data-tina-field={tinaField(aboutContent, 'programs.title_tamil')}>
                {aboutContent.programs?.title_tamil || ""}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aboutContent.programs?.list?.map((program, index) => (
                <div key={index} className="bg-slate-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-[#7a1315] rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2" data-tina-field={tinaField(program, 'name')}>
                    {program.name}
                  </h3>
                  <h4 className="text-lg font-medium text-blue-900 mb-3" data-tina-field={tinaField(program, 'name_tamil')}>
                    {program.name_tamil}
                  </h4>
                  <p className="text-gray-600" data-tina-field={tinaField(program, 'description')}>
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
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4" data-tina-field={tinaField(aboutContent, 'achievements.title')}>
                {aboutContent.achievements?.title || "Our Achievements"}
              </h2>
              <h3 className="text-2xl font-medium text-blue-900 mb-6" data-tina-field={tinaField(aboutContent, 'achievements.title_tamil')}>
                {aboutContent.achievements?.title_tamil || ""}
              </h3>
            </div>

            {/* Statistics */}
            {aboutContent.achievements?.stats && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                {aboutContent.achievements.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-blue-900 mb-2" data-tina-field={tinaField(stat, 'number')}>
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium text-sm" data-tina-field={tinaField(stat, 'label')}>
                      {stat.label}
                    </div>
                    <div className="text-xs text-gray-500" data-tina-field={tinaField(stat, 'label_tamil')}>
                      {stat.label_tamil}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Awards */}
            {aboutContent.achievements?.awards && (
              <div className="bg-white rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center" data-tina-field={tinaField(aboutContent, 'achievements.awards_title')}>
                  {aboutContent.achievements?.awards_title || (lang === "en"
                    ? "Recent Awards & Recognition"
                    : lang === "ta"
                    ? "சமீபத்திய விருதுகள் & அங்கீகாரம்"
                    : "මෑත සම්මාන සහ පිළිගැනීම්")}
                </h3>
                <div className="space-y-6">
                  {aboutContent.achievements.awards.map((award, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#7a1315] rounded-lg flex items-center justify-center flex-shrink-0">
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
                          <span className="bg-blue-100 text-blue-900 px-2 py-1 rounded text-xs font-medium mr-3" data-tina-field={tinaField(award, 'year')}>
                            {award.year}
                          </span>
                          <span className="text-sm text-gray-500" data-tina-field={tinaField(award, 'organization')}>
                            {award.organization}
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-1" data-tina-field={tinaField(award, 'title')}>
                          {award.title}
                        </h4>
                        {award.description && (
                          <p className="text-gray-600 text-sm" data-tina-field={tinaField(award, 'description')}>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4" data-tina-field={tinaField(aboutContent, 'contact.title')}>
                {aboutContent.contact?.title || "Get in Touch"}
              </h2>
              <h3 className="text-2xl font-medium text-blue-900 mb-6" data-tina-field={tinaField(aboutContent, 'contact.title_tamil')}>
                {aboutContent.contact?.title_tamil || ""}
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-tina-field={tinaField(aboutContent, 'contact.description')}>
                {aboutContent.contact?.description || ""}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Address */}
              {aboutContent.contact?.address && (
                <div className="bg-slate-50 rounded-lg p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4" data-tina-field={tinaField(aboutContent.contact.address, 'title')}>
                    {aboutContent.contact.address.title}
                  </h3>
                  <div className="space-y-1">
                    {aboutContent.contact.address.lines?.map((line, index) => (
                      <p key={index} className="text-gray-700" data-tina-field={tinaField(aboutContent.contact.address, `lines.${index}`)}>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* Hours */}
              {aboutContent.contact?.hours && (
                <div className="bg-gov-gray-100 rounded-lg p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4" data-tina-field={tinaField(aboutContent.contact.hours, 'title')}>
                    {aboutContent.contact.hours.title}
                  </h3>
                  <div className="space-y-1">
                    {aboutContent.contact.hours.schedule?.map((time, index) => (
                      <p key={index} className="text-gray-700" data-tina-field={tinaField(aboutContent.contact.hours, `schedule.${index}`)}>
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

      {/* Call to Action - Commented out
      <section className="py-16 bg-[#7a1315] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {lang === "en"
              ? "Join Our Mission"
              : lang === "ta"
              ? "எங்கள் நோக்கத்தில் சேருங்கள்"
              : "අපගේ මෙහෙවරට එකතු වන්න"}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {lang === "en"
              ? "Help us preserve Tamil heritage and build a stronger community for future generations."
              : lang === "ta"
              ? "தமிழ் பாரம்பரியத்தை பாதুகாக்கவும் எதிர்கால தலைமுறைகளுக்காக வலுவான சமூகத்தை கட்டியெழுப்பவும் எங்களுக்கு உதவுங்கள்."
              : "තමිළ උරුමය සුරැකීමට සහ අනාගත පරම්පරාවන් සඳහා ශක්තිමත් ප්‍රජාවක් ගොඩනැගීමට අපට උදව් කරන්න."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={lang === "en" ? "/membership" : `/${lang}/membership`}
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-medium hover:bg-slate-50 transition-colors"
            >
              {lang === "en"
                ? "Become a Member"
                : lang === "ta"
                ? "உறுப்பினராக"
                : "සාමාජිකයෙකු වන්න"}
            </a>
            <a
              href={lang === "en" ? "/volunteer" : `/${lang}/volunteer`}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-800 transition-colors"
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
      */}
    </>
  );
}