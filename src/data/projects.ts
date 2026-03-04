import { Category } from './categories';

export interface Project {
  id: string;
  category: Category;
  emoji: string;
  name: string;
  description: string;
  targetAudience: string;
  innovationReason: string;
  link: string;
  status: "live" | "demo" | "under-construction";
  videoUrl?: string;
}

export const projects: Project[] = [
  { id: 'wildbot', category: 'mkt', emoji: '🤖', name: 'WildBot', description: 'Sistem automat de outreach WhatsApp cu comportament uman simulat.', targetAudience: 'Agenții de marketing și restaurante care vor să ajungă la clienți noi fără efort manual.', innovationReason: 'Primul bot WhatsApp care nu poate fi detectat de algoritmii anti-spam.', link: 'https://wild-bot-rho.vercel.app/', status: 'live' },
  { id: 'instant-menu', category: 'resto', emoji: '🍽️', name: 'Instant Menu Pictures', description: 'Generare automată de imagini Michelin-quality pentru meniuri de restaurant din text.', targetAudience: 'Proprietari de restaurante care vor fotografii profesionale fără sesiune foto.', innovationReason: 'Motor AI cinematografic care respectă identitatea vizuală a brandului.', link: 'https://www.youtube.com/watch?v=JjeXG0TIus8', status: 'demo', videoUrl: 'https://www.youtube.com/embed/JjeXG0TIus8' },
  { id: 'whatsall', category: 'mkt', emoji: '📱', name: 'WhatsAll Bot', description: 'Bot de automatizare completă WhatsApp pentru campanii de outreach B2B.', targetAudience: 'Companii care trimit mesaje comerciale la liste mari de contacte.', innovationReason: 'Funcționează 360h/lună fără intervenție umană, cu protecție anti-ban avansată.', link: 'https://wild-bot-rho.vercel.app/', status: 'live' },
  { id: 'mbeuroparts', category: 'biz', emoji: '🚗', name: 'MBEuroparts', description: 'Franciză digitală AI pentru piese Mercedes — sistem complet de vânzări online.', targetAudience: 'Antreprenori care vor să intre în industria auto cu investiție minimă.', innovationReason: 'Primul model de franciză 100% digital pentru piese auto de lux.', link: '/MBEuroparts-RO.pdf', status: 'live' },
  { id: 'solar-calc', category: 'energy', emoji: '☀️', name: 'Solar Calculator', description: 'Calculator avansat pentru sisteme fotovoltaice și ROI energie solară.', targetAudience: 'Proprietari de case și companii interesate de panouri solare.', innovationReason: 'Calculează payback-ul real cu date meteo locale și tarife actualizate.', link: '#', status: 'under-construction' },
  { id: 'ai-menu', category: 'ai', emoji: '🧠', name: 'AI Menu Writer', description: 'Generare automată de descrieri persuasive pentru preparate de restaurant.', targetAudience: 'Restaurante care vor texte de meniu profesionale și persuasive instant.', innovationReason: 'Utilizează psihologia consumatorului pentru a maximiza vânzările per preparat.', link: '#', status: 'under-construction' },
  { id: 'delivery-tracker', category: 'ops', emoji: '📦', name: 'Delivery Tracker', description: 'Dashboard live pentru monitorizarea comenzilor de delivery în timp real.', targetAudience: 'Restaurante cu volum mare de comenzi pe platforme multiple.', innovationReason: 'Centralizează Glovo, Bolt, Tazz și comenzi proprii într-un singur ecran.', link: '#', status: 'demo' },
  { id: 'review-bot', category: 'mkt', emoji: '⭐', name: 'Review Harvester', description: 'Sistem automat de colectare recenzii Google pentru restaurante.', targetAudience: 'Restaurante care vor să-și crească ratingul Google rapid și organic.', innovationReason: 'Trimite SMS/WhatsApp personalizat după fiecare comandă completată.', link: '#', status: 'live' },
  { id: 'energy-monitor', category: 'energy', emoji: '🔋', name: 'Energy Monitor', description: 'Monitorizare consum energetic în timp real pentru restaurante și retail.', targetAudience: 'Business-uri care vor să reducă factura la energie cu 30-40%.', innovationReason: 'Detectează automat echipamentele cu consum anormal și alertează managerul.', link: '#', status: 'under-construction' },
  { id: 'staff-scheduler', category: 'ops', emoji: '📅', name: 'Staff Scheduler', description: 'Planificator inteligent de ture pentru personalul restaurantelor.', targetAudience: 'Manageri de restaurante cu echipe de 5-50 angajați.', innovationReason: 'AI optimizează turele în funcție de trafic prognozat și preferințele angajaților.', link: '#', status: 'under-construction' },
  { id: 'social-auto', category: 'mkt', emoji: '📸', name: 'Social Auto Post', description: 'Publicare automată pe Instagram și Facebook pentru restaurante.', targetAudience: 'Restaurante fără timp pentru social media dar care vor prezență online.', innovationReason: 'Generează postări cu text și imagine din meniu, publicare programată automată.', link: '#', status: 'demo' },
  { id: 'loyalty-app', category: 'biz', emoji: '🎁', name: 'Loyalty Hub', description: 'Sistem de loialitate digitală cu puncte și recompense pentru clienți fideli.', targetAudience: 'Restaurante și cafenele care vor să crească frecvența vizitelor.', innovationReason: 'Gamification complet integrat cu WhatsApp — zero app de descărcat.', link: '#', status: 'live' },
  { id: 'cyber-shield', category: 'security', emoji: '🔒', name: 'Cyber Shield', description: 'Protecție completă date pentru business-uri mici și mijlocii.', targetAudience: 'IMM-uri care procesează date clienți și vor să fie GDPR compliant.', innovationReason: 'Setup în 24h, monitorizare 24/7, raport lunar în română.', link: '#', status: 'under-construction' },
  { id: 'lifestyle-tracker', category: 'life', emoji: '🌿', name: 'Wellness Tracker', description: 'Aplicație de monitorizare obiceiuri sănătoase cu AI coach personal.', targetAudience: 'Persoane care vor să adopte un stil de viață mai sănătos cu ajutor AI.', innovationReason: 'Coach AI personalizat care se adaptează la programul și preferințele tale.', link: '#', status: 'under-construction' },
];
