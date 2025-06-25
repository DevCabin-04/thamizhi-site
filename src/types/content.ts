// TypeScript interfaces for content structure

export interface SiteConfig {
  organization: {
    name: string;
    name_local?: string;
    tagline: string;
    description: string;
    mission: string;
    vision: string;
    founded: string;
    registration_number?: string;
  };
  contact: {
    email: string;
    phone: string;
    address: {
      street: string;
      city: string;
      state: string;
      postal_code: string;
      country: string;
    };
    social_media: {
      facebook: string;
      twitter: string;
      instagram: string;
      youtube: string;
    };
  };
  navigation: {
    primary: NavigationItem[];
    footer: NavigationItem[];
  };
  theme: {
    primary_color: string;
    secondary_color: string;
    accent_color: string;
    text_color: string;
    background_color: string;
  };
  meta: {
    title_suffix: string;
    description: string;
    keywords: string;
    author: string;
  };
  footer: {
    copyright: string;
    description: string;
  };
}

export interface NavigationItem {
  name: string;
  href: string;
}

export interface HomeContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta_primary: {
      text: string;
      href: string;
    };
    cta_secondary: {
      text: string;
      href: string;
    };
  };
  mission_statement: {
    title: string;
    content: string;
  };
  featured_departments: Department[];
  recent_events: Event[];
  announcements: Announcement[];
  statistics: Statistic[];
  quick_actions: QuickAction[];
  newsletter?: {
    title: string;
    description: string;
    placeholder: string;
    button: string;
    privacy: string;
  };
}

export interface AboutContent {
  hero: {
    title: string;
    description: string;
  };
  mission: {
    title: string;
    content: string;
  };
  vision: {
    title: string;
    content: string;
  };
  values: Value[];
  history: {
    title: string;
    description: string;
    timeline: TimelineItem[];
  };
  leadership: {
    title: string;
    description: string;
    members: Leader[];
  };
  achievements: {
    title: string;
    description: string;
    awards?: Award[];
  };
  statistics: Statistic[];
  partnerships?: {
    title: string;
    description: string;
    partners: Partner[];
  };
}

export interface DepartmentsContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  departments: Department[];
  volunteer_opportunities: {
    title: string;
    description: string;
    opportunities: VolunteerOpportunity[];
  };
}

export interface MembershipContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  benefits: {
    title: string;
    description: string;
    items: Benefit[];
  };
  membership_types: {
    title: string;
    description: string;
    types: MembershipType[];
  };
  application_process?: {
    title: string;
    description: string;
    steps: ProcessStep[];
  };
  testimonials?: {
    title: string;
    description: string;
    items: Testimonial[];
  };
  cta?: {
    title: string;
    description: string;
    primary_button: string;
    secondary_button: string;
  };
}

export interface PublicationsContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  categories: PublicationCategory[];
  featured_publications: Publication[];
  recent_publications: Publication[];
  submission?: {
    title: string;
    description: string;
    guidelines: string[];
  };
}

export interface GalleryContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  categories: GalleryCategory[];
  featured_albums: Album[];
  recent_highlights: Highlight[];
  submission?: {
    title: string;
    description: string;
    guidelines: string[];
  };
}

export interface EventsContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  upcoming_events: Event[];
  past_events: PastEvent[];
  event_categories: EventCategory[];
  regular_programs?: {
    title: string;
    description: string;
    programs: Program[];
  };
  event_calendar?: {
    title: string;
    description: string;
    subscription?: {
      title: string;
      description: string;
    };
  };
  event_hosting?: {
    title: string;
    description: string;
    requirements: string[];
  };
  contact?: {
    title: string;
    description: string;
    events_coordinator?: Coordinator;
    office_hours?: {
      title: string;
      schedule: string[];
    };
  };
}

// Supporting interfaces
export interface Department {
  id: string;
  name: string;
  description: string;
  detailed_description?: string;
  color?: string;
  icon?: string;
  href?: string;
  programs?: Program[];
  contact?: {
    coordinator: string;
    email: string;
    phone: string;
  };
}

export interface Event {
  id?: string;
  title: string;
  date: string;
  time?: string;
  location: string;
  address?: string;
  category: string;
  description: string;
  image?: string;
  image_color?: string;
  price?: string;
  registration_required?: boolean;
  capacity?: number;
  registered?: number;
  organizer?: string;
  contact_email?: string;
  age_limit?: string;
  includes?: string[];
}

export interface PastEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  attendees: number;
  category: string;
  highlights?: string[];
}

export interface Announcement {
  title: string;
  date: string;
  content: string;
  priority: string;
  category: string;
}

export interface Statistic {
  number: string;
  label: string;
}

export interface QuickAction {
  title: string;
  description: string;
  icon: string;
  href: string;
  color: string;
}

export interface Value {
  title: string;
  description: string;
  icon?: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface Leader {
  name: string;
  position: string;
  bio: string;
  expertise?: string[];
  education?: string;
}

export interface Award {
  year: string;
  title: string;
  organization: string;
  description: string;
}

export interface Partner {
  name: string;
  type: string;
  relationship: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export interface MembershipType {
  name: string;
  price: string;
  duration: string;
  features: string[];
  cta?: string;
  featured?: boolean;
}

export interface ProcessStep {
  title: string;
  description: string;
  note?: string;
}

export interface Testimonial {
  name: string;
  title: string;
  quote: string;
}

export interface PublicationCategory {
  id: string;
  name: string;
  description: string;
  count: number;
  icon: string;
}

export interface Publication {
  title: string;
  author: string;
  type: string;
  year?: string;
  pages?: number;
  description: string;
  price?: string;
  availability?: string;
}

export interface GalleryCategory {
  id: string;
  name: string;
  description: string;
  count: number;
}

export interface Album {
  id: string;
  title: string;
  date: string;
  location: string;
  image_count: number;
  description: string;
  cover_color?: string;
}

export interface Highlight {
  id: string;
  title: string;
  description: string;
  date: string;
}

export interface EventCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  count: number;
  color: string;
}

export interface Program {
  id?: string;
  name: string;
  description?: string;
  schedule: string;
  location: string;
  instructor?: string;
  coordinator?: string;
  fee?: string;
}

export interface VolunteerOpportunity {
  title: string;
  description: string;
  commitment: string;
  requirements: string;
}

export interface Coordinator {
  name: string;
  position: string;
  email: string;
  phone: string;
}

// Language configuration
export interface LanguageInfo {
  code: string;
  name: string;
  dir: 'ltr' | 'rtl';
  flag: string;
}

export interface Languages {
  [key: string]: LanguageInfo;
}
