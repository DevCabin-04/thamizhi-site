import { useTina, tinaField } from "tinacms/dist/react";

export default function ContactPage({ props, lang }) {
  console.log('ContactPage props:', props);
  console.log('ContactPage lang:', lang);

  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  console.log('ContactPage useTina data:', data);

  const contactContent = data[`contact_${lang}`] || {};
  console.log('ContactPage contactContent:', contactContent);

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
            <h1
              className="text-4xl lg:text-5xl font-bold mb-4"
              data-tina-field={tinaField(contactContent, 'hero.title')}
            >
              {contactContent.hero?.title || "Contact Us"}
            </h1>
            <p
              className="text-xl text-blue-100"
              data-tina-field={tinaField(contactContent, 'hero.description')}
            >
              {contactContent.hero?.description || "We're here to help. Reach out to us for assistance, information, or to share your feedback on our services."}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      {contactContent.contact_methods && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2
                className="text-3xl font-bold text-gray-900 mb-4"
                data-tina-field={tinaField(contactContent, 'contact_methods.title')}
              >
                {contactContent.contact_methods?.title || "How to Reach Us"}
              </h2>
              <p
                className="text-lg text-gray-600 max-w-2xl mx-auto"
                data-tina-field={tinaField(contactContent, 'contact_methods.description')}
              >
                {contactContent.contact_methods?.description || "Choose the contact method that works best for you. We're committed to responding promptly to all inquiries."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactContent.contact_methods?.methods?.map((method, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                  <div className={`w-16 h-16 ${method.color || 'bg-blue-600'} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                  </div>
                  <h3
                    className="text-lg font-semibold text-gray-900 mb-2"
                    data-tina-field={tinaField(contactContent, `contact_methods.methods.${index}.title`)}
                  >
                    {method.title}
                  </h3>
                  <p
                    className="text-gray-600 mb-4"
                    data-tina-field={tinaField(contactContent, `contact_methods.methods.${index}.description`)}
                  >
                    {method.description}
                  </p>
                  <div className="text-sm text-gray-800 font-medium">
                    <p data-tina-field={tinaField(contactContent, `contact_methods.methods.${index}.contact_info`)}>{method.contact_info}</p>
                    {method.hours && (
                      <p
                        className="text-xs text-gray-500 mt-1"
                        data-tina-field={tinaField(contactContent, `contact_methods.methods.${index}.hours`)}
                      >
                        {method.hours}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="text-center mb-8">
              <h2
                className="text-2xl font-bold text-gray-900 mb-4"
                data-tina-field={tinaField(contactContent, 'contact_form.title')}
              >
                {contactContent.contact_form?.title || "Send Us a Message"}
              </h2>
              <p
                className="text-gray-600"
                data-tina-field={tinaField(contactContent, 'contact_form.description')}
              >
                {contactContent.contact_form?.description || "Fill out the form below and we'll get back to you as soon as possible."}
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a topic</option>
                  <option value="general_inquiry">General Inquiry</option>
                  <option value="service_request">Service Request</option>
                  <option value="complaint">Complaint</option>
                  <option value="suggestion">Suggestion</option>
                  <option value="technical_support">Technical Support</option>
                  <option value="media_inquiry">Media Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Please provide as much detail as possible to help us assist you effectively."
                ></textarea>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="privacy_consent"
                    name="privacy_consent"
                    type="checkbox"
                    required
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="privacy_consent" className="text-gray-600">
                    I acknowledge that I have read and agree to the
                    <a href="/privacy" className="text-blue-600 hover:text-blue-800 underline"> Privacy Policy</a>
                    {" "}and understand how my information will be used. *
                  </label>
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#7a1315] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#8b1313] transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      {contactContent.emergency_contact && (
        <section className="py-16 bg-red-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-red-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
              </svg>
              <h2
                className="text-2xl font-bold text-gray-900"
                data-tina-field={tinaField(contactContent, 'emergency_contact.title')}
              >
                {contactContent.emergency_contact?.title || "Emergency Contact"}
              </h2>
            </div>
            <p
              className="text-gray-600 mb-6"
              data-tina-field={tinaField(contactContent, 'emergency_contact.description')}
            >
              {contactContent.emergency_contact?.description || "For urgent matters requiring immediate attention, please use our emergency contact line."}
            </p>
            <div className="bg-white rounded-lg p-6 inline-block">
              <div
                className="text-2xl font-bold text-red-600 mb-2"
                data-tina-field={tinaField(contactContent, 'emergency_contact.label')}
              >
                {contactContent.emergency_contact?.label || "Emergency Hotline"}
              </div>
              <div
                className="text-xl font-semibold text-gray-900"
                data-tina-field={tinaField(contactContent, 'emergency_contact.phone')}
              >
                {contactContent.emergency_contact?.phone || "(555) 911-HELP"}
              </div>
              <div
                className="text-sm text-gray-500 mt-2"
                data-tina-field={tinaField(contactContent, 'emergency_contact.availability')}
              >
                {contactContent.emergency_contact?.availability || "Available 24/7"}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Office Hours & Location */}
      {contactContent.office_info && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Office Hours */}
              {contactContent.office_info.hours && (
                <div>
                  <h3
                    className="text-2xl font-bold text-gray-900 mb-6"
                    data-tina-field={tinaField(contactContent, 'office_info.hours.title')}
                  >
                    {contactContent.office_info.hours.title || "Office Hours"}
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="space-y-4">
                      {contactContent.office_info.hours.schedule?.map((item, index) => (
                        <div key={index} className="flex justify-between">
                          <span
                            className="font-medium text-gray-700"
                            data-tina-field={tinaField(contactContent, `office_info.hours.schedule.${index}.day`)}
                          >
                            {item.day}
                          </span>
                          <span
                            className="text-gray-600"
                            data-tina-field={tinaField(contactContent, `office_info.hours.schedule.${index}.time`)}
                          >
                            {item.time}
                          </span>
                        </div>
                      ))}
                    </div>
                    {contactContent.office_info.hours.note && (
                      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                        <p
                          className="text-sm text-blue-900"
                          data-tina-field={tinaField(contactContent, 'office_info.hours.note')}
                          dangerouslySetInnerHTML={{ __html: contactContent.office_info.hours.note }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Location */}
              {contactContent.office_info.location && (
                <div>
                  <h3
                    className="text-2xl font-bold text-gray-900 mb-6"
                    data-tina-field={tinaField(contactContent, 'office_info.location.title')}
                  >
                    {contactContent.office_info.location.title || "Visit Our Office"}
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="mb-6">
                      <h4
                        className="font-semibold text-gray-900 mb-2"
                        data-tina-field={tinaField(contactContent, 'office_info.location.address.label')}
                      >
                        {contactContent.office_info.location.address?.label || "Main Office"}
                      </h4>
                      <address className="text-gray-600 not-italic">
                        {contactContent.office_info.location.address?.lines?.map((line, index) => (
                          <span
                            key={index}
                            data-tina-field={tinaField(contactContent, `office_info.location.address.lines.${index}`)}
                          >
                            {line}
                            <br />
                          </span>
                        ))}
                      </address>
                    </div>

                    {contactContent.office_info.location.parking && (
                      <div className="mb-6">
                        <h4
                          className="font-semibold text-gray-900 mb-2"
                          data-tina-field={tinaField(contactContent, 'office_info.location.parking.title')}
                        >
                          {contactContent.office_info.location.parking.title}
                        </h4>
                        <p
                          className="text-gray-600 text-sm"
                          data-tina-field={tinaField(contactContent, 'office_info.location.parking.description')}
                        >
                          {contactContent.office_info.location.parking.description}
                        </p>
                      </div>
                    )}

                    {contactContent.office_info.location.transport && (
                      <div className="mb-6">
                        <h4
                          className="font-semibold text-gray-900 mb-2"
                          data-tina-field={tinaField(contactContent, 'office_info.location.transport.title')}
                        >
                          {contactContent.office_info.location.transport.title}
                        </h4>
                        <p
                          className="text-gray-600 text-sm"
                          data-tina-field={tinaField(contactContent, 'office_info.location.transport.description')}
                          dangerouslySetInnerHTML={{ __html: contactContent.office_info.location.transport.description }}
                        />
                      </div>
                    )}

                    {contactContent.office_info.location.security_notice && (
                      <div className="bg-yellow-50 rounded-lg p-4">
                        <p
                          className="text-sm text-yellow-800"
                          data-tina-field={tinaField(contactContent, 'office_info.location.security_notice')}
                          dangerouslySetInnerHTML={{ __html: contactContent.office_info.location.security_notice }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Link */}
      {contactContent.faq_link && (
        <section className="py-16 bg-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="text-2xl font-bold text-gray-900 mb-4"
              data-tina-field={tinaField(contactContent, 'faq_link.title')}
            >
              {contactContent.faq_link?.title || "Frequently Asked Questions"}
            </h2>
            <p
              className="text-gray-600 mb-8"
              data-tina-field={tinaField(contactContent, 'faq_link.description')}
            >
              {contactContent.faq_link?.description || "Before contacting us, you might find the answer to your question in our comprehensive FAQ section."}
            </p>
            <a
              href={contactContent.faq_link?.link || "/help/faq"}
              className="inline-flex items-center bg-[#7a1315] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#8b1313] transition-colors"
            >
              <span data-tina-field={tinaField(contactContent, 'faq_link.button_text')}>
                {contactContent.faq_link?.button_text || "Browse FAQ"}
              </span>
              <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </a>
          </div>
        </section>
      )}
    </>
  );
}
