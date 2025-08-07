import { useTina } from "tinacms/dist/react";

export default function MembershipPage({ props, lang }) {
  console.log('MembershipPage props:', props);
  console.log('MembershipPage lang:', lang);

  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  console.log('MembershipPage useTina data:', data);
  
  const membershipContent = data[`membership_${lang}`] || {};
  console.log('MembershipPage membershipContent:', membershipContent);

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
              {membershipContent.hero?.title || "Become a Member"}
            </h1>
            <h2 className="text-2xl lg:text-3xl font-medium text-orange-100 mb-6">
              {membershipContent.hero?.subtitle || "Join Our Tamil Community"}
            </h2>
            <p className="text-xl text-orange-100">
              {membershipContent.hero?.description || ""}
            </p>
          </div>
        </div>
      </section>

      {/* Membership Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {lang === "en"
                ? "Membership Plans"
                : lang === "ta"
                ? "உறுப்பினர் திட்டங்கள்"
                : "සාමාජික සැලසුම්"}
            </h2>
            <p className="text-lg text-gray-600">
              {lang === "en"
                ? "Choose the membership that best fits your needs"
                : lang === "ta"
                ? "உங்கள் தேவைகளுக்கு ஏற்ற உறுப்பினர்த்துவத்தை தேர்ந்தெடுக்கவும்"
                : "ඔබේ අවශ්‍යතාවන්ට වඩාත් සුදුසු සාමාජිකත්වය තෝරන්න"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {membershipContent.membership_types?.map((membership, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {membership.name}
                  </h3>
                  {membership.name_tamil && (
                    <h4 className="text-lg font-medium text-orange-600 mb-3">
                      {membership.name_tamil}
                    </h4>
                  )}
                  <div className="text-3xl font-bold text-orange-600 mb-1">
                    {membership.price}
                  </div>
                  <div className="text-gray-500">
                    {membership.duration}
                  </div>
                  {membership.duration_tamil && (
                    <div className="text-sm text-gray-400">
                      {membership.duration_tamil}
                    </div>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {membership.benefits?.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors">
                  {lang === "en"
                    ? "Apply Now"
                    : lang === "ta"
                    ? "இப்போது விண்ணப்பிக்கவும்"
                    : "දැන් අයදුම් කරන්න"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {membershipContent.general_benefits?.title || "Membership Benefits"}
            </h2>
            <p className="text-lg text-gray-600">
              {membershipContent.general_benefits?.description || "What you get as a member"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {membershipContent.general_benefits?.items?.map((benefit, index) => (
              <div key={index} className="bg-orange-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                {benefit.title_tamil && (
                  <h4 className="text-lg font-medium text-orange-600 mb-3">
                    {benefit.title_tamil}
                  </h4>
                )}
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {membershipContent.application_process?.title || "How to Apply"}
            </h2>
            <p className="text-lg text-gray-600">
              {membershipContent.application_process?.description || "Simple steps to join our community"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {membershipContent.application_process?.steps?.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                {step.title_tamil && (
                  <h4 className="text-md font-medium text-orange-600 mb-2">
                    {step.title_tamil}
                  </h4>
                )}
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-orange-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-orange-700 transition-colors">
              {lang === "en"
                ? "Start Application"
                : lang === "ta"
                ? "விண்ணப்பத்தை தொடங்கவும்"
                : "අයදුම්පත ආරම්භ කරන්න"}
            </button>
          </div>
        </div>
      </section>

      {/* Member Testimonials */}
      {membershipContent.member_testimonials && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {membershipContent.member_testimonials?.title || "What Our Members Say"}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {membershipContent.member_testimonials?.testimonials?.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    {testimonial.name_tamil && (
                      <p className="text-sm text-orange-600">
                        {testimonial.name_tamil}
                      </p>
                    )}
                    <p className="text-sm text-gray-600">
                      {testimonial.membership_type}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {membershipContent.faqs && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {membershipContent.faqs?.title || "Frequently Asked Questions"}
              </h2>
            </div>

            <div className="space-y-6">
              {membershipContent.faqs?.items?.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  {faq.question_tamil && (
                    <h4 className="text-md font-medium text-orange-600 mb-2">
                      {faq.question_tamil}
                    </h4>
                  )}
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Information */}
      {membershipContent.contact && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {membershipContent.contact?.title || "Questions About Membership?"}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {membershipContent.contact?.description || "Contact our membership team for more information"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${membershipContent.contact?.email}`}
                className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
              >
                {lang === "en"
                  ? "Email Us"
                  : lang === "ta"
                  ? "எங்களுக்கு மின்னஞ்சல்"
                  : "අපට විද්‍යුත් තැපෑල"}
              </a>
              <a
                href={`tel:${membershipContent.contact?.phone}`}
                className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
              >
                {lang === "en"
                  ? "Call Us"
                  : lang === "ta"
                  ? "எங்களை அழைக்கவும்"
                  : "අපට ඇමතන්න"}
              </a>
            </div>
            
            {/* Office Hours */}
            {membershipContent.contact?.office_hours && (
              <div className="mt-8 bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {lang === "en"
                    ? "Office Hours"
                    : lang === "ta"
                    ? "அலுவலக நேரங்கள்"
                    : "කාර්යාල වේලාවන්"}
                </h3>
                <div className="space-y-1">
                  {membershipContent.contact.office_hours.map((hours, index) => (
                    <p key={index} className="text-gray-600">
                      {hours}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {lang === "en"
              ? "Ready to Join Our Community?"
              : lang === "ta"
              ? "எங்கள் சமூகத்தில் சேர தயாரா?"
              : "අපගේ ප්‍රජාවට එකතු වීමට සූදානම්ද?"}
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            {lang === "en"
              ? "Become a member today and connect with the vibrant Tamil community around you."
              : lang === "ta"
              ? "இன்றே உறுப்பினராகி உங்களைச் சுற்றியுள்ள துடிப்பான தமிழ் சமூகத்துடன் இணைந்திருங்கள்."
              : "අද සාමාජිකයෙකු වී ඔබ වටා ඇති විචිත්‍රවත් තමිළ ප්‍රජාව සමඟ සම්බන්ධ වන්න."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-medium hover:bg-orange-50 transition-colors">
              {lang === "en"
                ? "Start Application"
                : lang === "ta"
                ? "விண்ணப்பத்தை தொடங்கவும்"
                : "අයදුම්පත ආරම්භ කරන්න"}
            </button>
            <a
              href={lang === "en" ? "/about" : `/${lang}/about`}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-orange-600 transition-colors"
            >
              {lang === "en"
                ? "Learn More About Us"
                : lang === "ta"
                ? "எங்களைப் பற்றி மேலும் அறியுங்கள்"
                : "අප ගැන වැඩිදුර දැනගන්න"}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}