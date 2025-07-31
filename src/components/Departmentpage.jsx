import { useTina } from "tinacms/dist/react";

export default function DepartmentPage({ props, lang }) {
  console.log('DepartmentPage props:', props);
  console.log('DepartmentPage lang:', lang);

  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  console.log('DepartmentPage useTina data:', data);
  
  const departmentContent = data[`departments_${lang}`] || {};
  console.log('DepartmentPage departmentContent:', departmentContent);

  // Icon mapping for departments
  const getIconSvg = (iconName) => {
    const icons = {
      cultural: (
        <path d="M7 4V2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4zM9 3v1h2V3H9zm-4 3v12h10V6H5z"/>
      ),
      education: (
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      ),
      community: (
        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
      ),
      youth: (
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 3a4 4 0 100 8 4 4 0 000-8z"/>
      ),
      media: (
        <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
      ),
      outreach: (
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
      ),
      default: (
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
      )
    };
    return icons[iconName] || icons.default;
  };

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
              {departmentContent.hero?.title || "Our Departments"}
            </h1>
            <h2 className="text-2xl lg:text-3xl font-medium text-orange-100 mb-6">
              {departmentContent.hero?.title_tamil || "எங்கள் துறைகள்"}
            </h2>
            <p className="text-xl text-orange-100">
              {departmentContent.hero?.description || "Discover the various departments and programs that make Thamizhi a comprehensive cultural organization dedicated to preserving and promoting Tamil heritage."}
            </p>
          </div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {departmentContent.departments?.map((department, index) => (
              <div key={department.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {/* Department Header */}
                <div className={`bg-gradient-to-r ${department.color} p-6 text-white`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {getIconSvg(department.icon)}
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-1">
                        {department.name}
                      </h2>
                      <h3 className="text-lg font-medium text-white text-opacity-90">
                        {department.name_tamil}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-4 text-white text-opacity-90">
                    {department.description}
                  </p>
                </div>

                {/* Department Content */}
                <div className="p-6">
                  {/* Department Head */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      {lang === "en" 
                        ? "Department Head" 
                        : lang === "ta" 
                        ? "துறைத் தலைவர்" 
                        : "අංශ ප්‍රධානි"}
                    </h4>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 bg-gradient-to-br ${department.color} rounded-full flex items-center justify-center`}>
                          <span className="text-white text-sm font-bold">
                            {department.head?.name
                              ?.split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">
                            {department.head?.name}
                          </p>
                          <p className="text-sm text-gray-600">
                            {department.head?.name_tamil}
                          </p>
                          <p className="text-sm text-orange-600 font-medium">
                            {department.head?.position}
                          </p>
                          <p className="text-xs text-gray-500">
                            {department.head?.position_tamil}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Programs */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      {lang === "en" 
                        ? "Programs & Services" 
                        : lang === "ta" 
                        ? "திட்டங்கள் & சேவைகள்" 
                        : "වැඩසටහන් සහ සේවා"}
                    </h4>
                    <div className="space-y-3">
                      {department.programs?.map((program, programIndex) => (
                        <div key={programIndex} className="border-l-4 border-orange-500 pl-4 py-2">
                          <h5 className="font-semibold text-gray-900">
                            {program.name}
                          </h5>
                          <p className="text-sm text-orange-600 mb-1">
                            {program.name_tamil}
                          </p>
                          <p className="text-sm text-gray-600">
                            {program.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  {department.achievements && department.achievements.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        {lang === "en" 
                          ? "Key Achievements" 
                          : lang === "ta" 
                          ? "முக்கிய சாதனைகள்" 
                          : "ප්‍රධාන ජයග්‍රහණ"}
                      </h4>
                      <div className="space-y-2">
                        {department.achievements.map((achievement, achievementIndex) => (
                          <div key={achievementIndex} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-sm text-gray-700">
                              {achievement}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Contact */}
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                        </svg>
                        <span className="text-gray-600">
                          {department.contact?.email}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                        </svg>
                        <span className="text-gray-600">
                          {department.contact?.phone}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      {departmentContent.volunteer_opportunities && (
        <section className="py-16 bg-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {departmentContent.volunteer_opportunities?.title || "Volunteer Opportunities"}
              </h2>
              <h3 className="text-2xl font-medium text-orange-600 mb-6">
                {departmentContent.volunteer_opportunities?.title_tamil || "தன்னார்வ வாய்ப்புகள்"}
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {departmentContent.volunteer_opportunities?.description || "Join our dedicated team of volunteers and contribute to the preservation of Tamil culture"}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {departmentContent.volunteer_opportunities?.positions?.map((position, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {position.role}
                  </h3>
                  <h4 className="text-md font-medium text-orange-600 mb-2">
                    {position.role_tamil}
                  </h4>
                  <div className="mb-3">
                    <span className="inline-block bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                      {position.commitment}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {position.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Information */}
      {departmentContent.contact_info && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {departmentContent.contact_info?.title || "Department Contact Information"}
              </h2>
              <h3 className="text-2xl font-medium text-orange-600 mb-6">
                {departmentContent.contact_info?.title_tamil || "துறை தொடர்பு தகவல்"}
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* General Contact */}
              {departmentContent.contact_info?.general && (
                <div className="bg-orange-50 rounded-lg p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    {lang === "en" 
                      ? "General Contact" 
                      : lang === "ta" 
                      ? "பொது தொடர்பு" 
                      : "සාමාන්‍ය සම්බන්ධතාව"}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                      </svg>
                      <span className="text-gray-700">
                        {departmentContent.contact_info.general.email}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                      </svg>
                      <span className="text-gray-700">
                        {departmentContent.contact_info.general.phone}
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-orange-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                      </svg>
                      <div className="text-gray-700">
                        {departmentContent.contact_info.general.address?.map((line, index) => (
                          <p key={index}>{line}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Office Hours */}
              {departmentContent.contact_info?.office_hours && (
                <div className="bg-red-50 rounded-lg p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {departmentContent.contact_info.office_hours?.title || "Office Hours"}
                  </h3>
                  <h4 className="text-lg font-medium text-red-600 mb-6">
                    {departmentContent.contact_info.office_hours?.title_tamil || "அலுவலக நேரங்கள்"}
                  </h4>
                  <div className="space-y-2">
                    {departmentContent.contact_info.office_hours?.schedule?.map((time, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-gray-700">{time}</span>
                      </div>
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
              ? "Get Involved Today"
              : lang === "ta"
              ? "இன்றே பங்கு பெறுங்கள்"
              : "අද සම්බන්ධ වන්න"}
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            {lang === "en"
              ? "Connect with our departments and discover how you can contribute to preserving Tamil heritage."
              : lang === "ta"
              ? "எங்கள் துறைகளுடன் இணைந்து தமிழ் பாரம்பரியத்தை பாதுகாப்பதில் நீங்கள் எப்படி பங்களிக்க முடியும் என்பதைக் கண்டறியுங்கள்."
              : "අපගේ අංශ සමඟ සම්බන්ධ වී ඔබට තමිළ උරුමය සුරැකීමට දායක විය හැකි ආකාරය සොයා ගන්න."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={lang === "en" ? "/volunteer" : `/${lang}/volunteer`}
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-medium hover:bg-orange-50 transition-colors"
            >
              {lang === "en"
                ? "Volunteer With Us"
                : lang === "ta"
                ? "எங்களுடன் தொண்டு"
                : "අප සමඟ ස්වේච්ඡා සේවය"}
            </a>
            <a
              href={lang === "en" ? "/contact" : `/${lang}/contact`}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-orange-600 transition-colors"
            >
              {lang === "en"
                ? "Contact Us"
                : lang === "ta"
                ? "எங்களை தொடர்பு கொள்ளுங்கள்"
                : "අප හා සම්බන්ධ වන්න"}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}