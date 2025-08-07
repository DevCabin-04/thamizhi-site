// /components/pages/EventsPage.jsx
import { useTina } from "tinacms/dist/react";

export default function EventsPage({ props, lang }) {
  // Log props for debugging
  console.log('EventsPage props:', props);
  console.log('EventsPage lang:', lang);

  // Get live data from Tina
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  console.log('EventsPage useTina data:', data);
  
  // Select the language-specific content object
  const eventsContent = data[`events_${lang}`] || {};
  console.log('EventsPage eventsContent:', eventsContent);

  // Helper to render SVG icons based on name
  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'festival':
        return <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>;
      case 'education':
        return <path d="M12 3L1 9l4 2.18v6.32L12 21l7-3.5V11.18L23 9 12 3zm0 3.69L17.5 9 12 11.31 6.5 9 12 6.69zM19 15.47l-5 2.5v-4.7l5-2.5v4.7z"/>;
      case 'community':
        return <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V18h14v-1.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V18h6v-1.5c0-2.33-4.67-3.5-7-3.5z"/>;
      case 'youth':
        return <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>;
      case 'arts':
        return <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>;
      case 'health':
        return <path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/>;
      default:
        return <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>;
    }
  }

  return (
    <>
      {/* Hero Section */}
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
              {eventsContent.hero?.title || "Events"}
            </h1>
            <h2 className="text-2xl lg:text-3xl font-medium text-orange-100 mb-6">
              {eventsContent.hero?.title_tamil || "நிகழ்வுகள்"}
            </h2>
            <p className="text-xl text-orange-100">
              {eventsContent.hero?.description || ""}
            </p>
          </div>
        </div>
      </section>

      {/* Event Categories Section */}
      {eventsContent.event_categories && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Event Categories</h2>
              <p className="text-lg text-gray-600">Discover events that interest you</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {eventsContent.event_categories.map((category) => (
                <div key={category.id} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow cursor-pointer">
                  <div className={`w-16 h-16 bg-${category.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <svg className={`w-8 h-8 text-${category.color}-600`} fill="currentColor" viewBox="0 0 24 24">
                      {renderIcon(category.icon)}
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <h4 className="text-lg text-gray-700 mb-3">{category.name_tamil}</h4>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className={`text-2xl font-bold text-${category.color}-600`}>{category.count}</div>
                  <p className="text-sm text-gray-500">Annual Events</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Upcoming Events Section */}
      {eventsContent.upcoming_events && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
              <p className="text-lg text-gray-600">Don't miss these exciting upcoming events</p>
            </div>
            <div className="space-y-8">
              {eventsContent.upcoming_events.map((event) => (
                <div key={event.id} className="bg-gray-50 rounded-lg p-6 lg:p-8 flex flex-col lg:flex-row gap-6">
                  <div className={`w-full lg:w-64 h-48 bg-gradient-to-br ${event.image_color} rounded-lg flex-shrink-0 flex items-center justify-center`}>
                    <div className="text-white text-center">
                      <svg className="w-16 h-16 mx-auto mb-2 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                          {renderIcon(event.category)}
                      </svg>
                      <div className="text-sm font-medium capitalize">{event.category}</div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{event.title}</h3>
                        <h4 className="text-xl text-orange-600 mb-3">{event.title_tamil}</h4>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-semibold text-gray-900">{event.price} / {event.price_tamil}</div>
                        {event.registration_required && <div className="text-sm text-gray-500">Registration Required</div>}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg>
                        <span>{new Date(event.date).toLocaleDateString(lang, { year: 'numeric', month: 'long', day: 'numeric' })} • {event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                        <div>
                          <div>{event.location} / {event.location_tamil}</div>
                          <div className="text-sm text-gray-500">{event.address}</div>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{event.description}</p>
                    {event.description_tamil && <p className="text-gray-600 mb-4">{event.description_tamil}</p>}
                    {event.registration_required && event.capacity > 0 && (
                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>Registration Progress</span>
                          <span>{event.registered}/{event.capacity} registered</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-orange-600 h-2 rounded-full"
                            style={{width: `${(event.registered / event.capacity) * 100}%`}}
                          ></div>
                        </div>
                      </div>
                    )}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors">Register Now</button>
                      <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">More Details</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Programs Section */}
      {eventsContent.regular_programs && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{eventsContent.regular_programs.title}</h2>
              <p className="text-lg text-gray-600">{eventsContent.regular_programs.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {eventsContent.regular_programs.programs.map((program) => (
                <div key={program.id} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{program.name}</h3>
                  <h4 className="text-lg font-medium text-orange-600 mb-3">{program.name_tamil}</h4>
                  <div className="flex items-center text-gray-600 mb-2">
                    <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                    <span>{program.schedule} / {program.schedule_tamil}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                    <span>{program.location} / {program.location_tamil}</span>
                  </div>
                  <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors">Join Program</button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Past Events Section */}
      {eventsContent.past_events && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Past Events</h2>
              <p className="text-lg text-gray-600">Take a look at our successful past events</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {eventsContent.past_events.map((event) => (
                <div key={event.id} className="bg-gray-50 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{event.location}</p>
                  <p className="text-gray-500 text-sm mb-2">{new Date(event.date).toLocaleDateString(lang, { year: 'numeric', month: 'long' })}</p>
                  <div className="text-orange-600 font-semibold">{event.attendees} attendees</div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <button className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors">View Event Gallery</button>
            </div>
          </div>
        </section>
      )}

      {/* Event Hosting Section */}
      {eventsContent.event_hosting && (
        <section className="py-16 bg-orange-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{eventsContent.event_hosting.title}</h2>
            <h3 className="text-2xl font-medium text-orange-600 mb-6">{eventsContent.event_hosting.title_tamil}</h3>
            <p className="text-lg text-gray-600 mb-8">{eventsContent.event_hosting.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors">Submit Event Proposal</button>
              <button className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">Event Guidelines</button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}