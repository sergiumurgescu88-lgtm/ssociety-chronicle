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
  // ─── RESTAURANTE (15) ───
  {
    id: 'mrdelivery-home', category: 'resto', emoji: '🏠',
    name: 'MrDelivery — Pagina Principală',
    description: 'Website-ul oficial MrDelivery.ro — platforma centrală care prezintă toate serviciile digitale pentru restaurante din România. Aici găsești informații despre cine suntem, ce oferim și cum putem transforma orice restaurant într-un business digital modern. Include secțiuni despre AI, automatizare, delivery optimization și consultanță.',
    targetAudience: 'Proprietari și manageri de restaurante din România care vor să își digitalizeze complet afacerea — de la comenzi online și meniu digital, până la marketing automat și asistență AI.',
    innovationReason: 'Primul hub digital din România dedicat exclusiv industriei HoReCa, care reunește sub un singur brand peste 15 instrumente AI și platforme de automatizare specifice restaurantelor.',
    link: 'https://mrdelivery.ro/', status: 'live'
  },
  {
    id: 'mrdelivery-shop', category: 'resto', emoji: '🛒',
    name: 'MrDelivery Shop — Magazin Online',
    description: 'Magazin online dedicat industriei de delivery și restaurante. Aici poți comanda echipamente profesionale (cutii termice, pungi branduite, ambalaje eco), consumabile pentru bucătărie și materiale de marketing. Totul vine livrat la restaurant, fără să pierzi timp cu deplasări.',
    targetAudience: 'Restaurante, dark kitchens și servicii de catering care au nevoie rapid de echipamente de delivery, ambalaje profesionale și consumabile — fără să sune la 10 furnizori diferiți.',
    innovationReason: 'Singurul magazin online din România specializat 100% pe echipamente și consumabile pentru industria de food delivery, cu prețuri optimizate și livrare rapidă.',
    link: 'https://mrdelivery.shop/', status: 'live'
  },
  {
    id: 'mrdelivery-online', category: 'resto', emoji: '📡',
    name: 'MrDelivery Online — Portal Parteneri',
    description: 'Portal digital dedicat partenerilor și clienților MrDelivery. Oferă acces la resurse exclusive, documentație, tutoriale și instrumente de management. Partenerii pot urmări performanța, accesa rapoarte și gestiona colaborarea din acest dashboard centralizat.',
    targetAudience: 'Partenerii activi MrDelivery — restaurante afiliate, colaboratori și clienți care folosesc deja platformele noastre și au nevoie de un punct central de acces și management.',
    innovationReason: 'Portal partenerial cu self-service complet — partenerii își gestionează singuri contul, văd statistici și accesează instrumente fără să aștepte suport manual.',
    link: 'https://mrdelivery.online/', status: 'live'
  },
  {
    id: 'instant-menu', category: 'resto', emoji: '📸',
    name: 'Instant Menu Pictures — Poze Meniu AI',
    description: 'Aplicație AI care generează fotografii profesionale de meniu doar din text. Scrii „Paste Carbonara cu parmezan și busuioc" și primești instant o poză cinematografică, de calitate Michelin, gata de publicat pe meniu, site sau rețele sociale. Suportă logo branding, export multi-format și procesare bulk.',
    targetAudience: 'Proprietari de restaurante, manageri de meniu și agenții de marketing food care au nevoie de fotografii profesionale fără să angajeze fotograf, fără ședință foto și fără echipament scump.',
    innovationReason: 'Motor AI cinematografic unic care generează imagini food de calitate Michelin în sub 60 de secunde, cu respectarea identității vizuale a brandului — logo, culori și stil.',
    link: 'https://instant-menu-pictures-968474198722.us-west1.run.app/', status: 'live',
    videoUrl: 'https://www.youtube.com/embed/JjeXG0TIus8'
  },
  {
    id: 'ai-clienti', category: 'resto', emoji: '🤖',
    name: 'AI Assistant pentru Clienți',
    description: 'Chatbot AI specializat pe industria restaurantelor, care interacționează direct cu clienții finali. Răspunde la întrebări despre meniu, prețuri, alergeni și ingrediente, recomandă preparate personalizat, preia comenzi și oferă suport 24/7. Se integrează pe site-ul restaurantului sau pe WhatsApp.',
    targetAudience: 'Restaurante de orice dimensiune care vor un customer service automat, disponibil non-stop, care răspunde instant la întrebări și ghidează clienții spre comandă fără intervenție umană.',
    innovationReason: 'Asistent AI conversațional antrenat specific pe industria food — cunoaște terminologia culinară, înțelege preferințe alimentare și face upselling inteligent bazat pe context.',
    link: 'https://smart-restaurant-ai-for-clients-968474198722.us-west1.run.app/', status: 'live'
  },
  {
    id: 'ai-echipa', category: 'resto', emoji: '👨‍🍳',
    name: 'AI Assistant pentru Echipă',
    description: 'Asistent AI intern dedicat personalului de restaurant. Ajută chelnerii să răspundă la întrebări despre meniu, oferă instrucțiuni de preparare bucătarilor, gestionează checklist-uri de deschidere/închidere și alertează managerii despre probleme operaționale. Reduce erorile umane și accelerează training-ul noilor angajați.',
    targetAudience: 'Manageri de restaurante cu echipe de 5-50+ angajați care vor să reducă erorile, să accelereze onboarding-ul și să mențină standarde constante de calitate fără supraveghere permanentă.',
    innovationReason: 'Primul AI intern pentru restaurante care funcționează ca un „coleg digital" — nu doar răspunde la întrebări, ci monitorizează activ procesele și semnalează devieri de la standarde.',
    link: 'https://smart-restaurant-ai-partener-echipa-968474198722.us-west1.run.app/', status: 'live'
  },
  {
    id: 'gourmet-visionary', category: 'resto', emoji: '🍷',
    name: 'Gourmet Visionary AI',
    description: 'Platformă AI premium pentru restaurantele fine dining. Creează meniuri de degustare sofisticate, sugerează perechi vin-mâncare, generează descrieri poetice pentru preparate și oferă consultanță culinară de nivel Michelin. Include module de food styling și prezentare.',
    targetAudience: 'Restaurante fine dining, hoteluri de 4-5 stele, bucătari-șefi și sommelieri care caută inspirație culinară de top și vor să ridice experiența gastronomică la nivel de artă.',
    innovationReason: 'Singurul AI din lume specializat pe gastronomie de lux — antrenat pe meniuri Michelin, tehnici de haute cuisine și principii de food pairing avansat.',
    link: 'https://gourmet-visionary-ai-499463360194.us-west1.run.app/', status: 'live'
  },
  {
    id: 'mrdelivery-ai-central', category: 'resto', emoji: '🧠',
    name: 'MrDelivery AI Central — Panou de Comandă',
    description: 'Dashboard central unificat de unde controlezi toate sistemele AI ale restaurantului. Vezi statusul fiecărui bot (client, echipă, marketing), monitorizezi performanța, ajustezi setări și primești rapoarte consolidate. E „creierul" digital al întregului ecosistem MrDelivery.',
    targetAudience: 'Manageri de restaurante care folosesc mai multe instrumente AI MrDelivery și au nevoie de un singur ecran de control pentru a vedea totul — status, performanță, alerte și setări.',
    innovationReason: 'Panou de comandă centralizat care unifică toate AI-urile într-o singură interfață — fără să treci prin 10 aplicații separate, vezi totul dintr-un singur loc.',
    link: 'https://mrdelivery-ai-499463360194.us-west1.run.app/', status: 'live'
  },
  {
    id: 'laborator-texte', category: 'resto', emoji: '✍️',
    name: 'Laborator de Texte AI',
    description: 'Generator de conținut text specializat pe restaurante. Creează automat: postări Facebook/Instagram, descrieri de preparate pentru meniu, mesaje promoționale WhatsApp, texte pentru site, răspunsuri la recenzii Google și email-uri de marketing. Toate adaptate pe tonul și brandul restaurantului.',
    targetAudience: 'Restaurante care nu au timp sau buget pentru un copywriter, dar au nevoie constant de texte profesionale pentru social media, meniu, campanii și comunicare cu clienții.',
    innovationReason: 'Generator de conținut antrenat exclusiv pe industria food — știe ce cuvinte vând, ce emoții declanșează pofta și cum să scrie pentru fiecare platformă (meniu vs. Instagram vs. Google).',
    link: 'https://mrdelivery-ai-content-lab-499463360194.us-west1.run.app/', status: 'live'
  },
  {
    id: 'foodiequest', category: 'resto', emoji: '🗺️',
    name: 'FoodieQuest — Descoperă Restaurante',
    description: 'Aplicație de descoperire culinară cu AI. Spui ce poftești, ce buget ai și unde te afli, iar AI-ul îți recomandă restaurantele perfecte. Include filtre pentru alergeni, stil culinar, atmosferă, rating și disponibilitate. Ca un prieten foodie care știe mereu unde se mănâncă bine.',
    targetAudience: 'Foodie-i pasionați, turiști și oricine caută un restaurant nou — fie pentru o cină romantică, un prânz rapid sau o experiență culinară memorabilă.',
    innovationReason: 'Recomandări AI personalizate care învață din preferințele tale — cu cât folosești mai mult, cu atât sugestiile sunt mai precise. Nu doar filtrează, ci înțelege ce îți place.',
    link: 'https://foodiequest-968474198722.us-west1.run.app/', status: 'live'
  },
  {
    id: 'audit-ai', category: 'resto', emoji: '🔍',
    name: 'Audit AI — Analiză Restaurant',
    description: 'Instrument de audit digital complet pentru restaurante. Analizează automat: calitatea meniului, prețurile vs. piața, prezența online, recenziile clienților, eficiența operațională și strategia de marketing. Generează un raport detaliat cu note, probleme identificate și recomandări concrete de îmbunătățire.',
    targetAudience: 'Proprietari și manageri de restaurante care vor o evaluare obiectivă, bazată pe date, a afacerii lor — fără bias-ul unui consultant care vrea să te impresioneze.',
    innovationReason: 'Audit 100% automat care analizează zeci de parametri simultan și generează un raport acționabil în minute, nu în săptămâni — la o fracțiune din costul unui consultant tradițional.',
    link: 'https://audit-by-mrdelivery-ai-499463360194.us-west1.run.app/', status: 'live'
  },
  {
    id: 'audit-michelin', category: 'resto', emoji: '⭐',
    name: 'Audit Michelin — Evaluare Premium',
    description: 'Evaluare AI bazată pe criteriile reale ale ghidului Michelin. Analizează: calitatea ingredientelor, tehnicile de gătit, raportul calitate-preț, consistența preparatelor și personalitatea bucătarului-șef. Primești un scor detaliat pe fiecare criteriu și un plan de acțiune pentru a te apropia de o stea Michelin.',
    targetAudience: 'Restaurante ambițioase care aspiră la recunoaștere Michelin, bucătari-șefi care vor feedback de nivel internațional și proprietari care vor să ridice standardele la maximum.',
    innovationReason: 'Primul instrument AI din lume care evaluează restaurante folosind criteriile oficiale Michelin — democratizează accesul la feedback de nivel mondial pentru orice restaurant.',
    link: 'https://audit-michelin-by-mrdelivery-499463360194.us-west1.run.app/', status: 'live'
  },
  {
    id: 'audit-lovable', category: 'resto', emoji: '🔐',
    name: 'Audit MrDelivery — Interfață Modernă',
    description: 'Versiunea redesignată a instrumentului de audit restaurant, cu interfață modernă și intuitivă. Aceeași analiză profundă — meniu, prețuri, recenzii, operațiuni — dar într-un format vizual mai plăcut, cu grafice interactive, scoruri colorate și recomandări pas-cu-pas.',
    targetAudience: 'Restaurante care preferă o experiență vizuală modernă și prietenoasă când își analizează afacerea, cu grafice clare și navigare intuitivă.',
    innovationReason: 'UX complet redesignat cu dashboard-uri vizuale, grafice interactive și flow simplificat — aceeași putere analitică, dar mult mai ușor de folosit și interpretat.',
    link: 'https://audit-mrdelivery.lovable.app/', status: 'live'
  },
  {
    id: 'restomaster', category: 'resto', emoji: '👨‍🍳',
    name: 'RestoMaster — Management All-in-One',
    description: 'Platformă completă de management pentru restaurante, cu AI integrat. Include: gestionare rezervări, planificare meniu, monitorizare stocuri, rapoarte financiare, calendar de marketing, management echipă și analiză satisfacție clienți. Un singur dashboard pentru absolut totul.',
    targetAudience: 'Manageri de restaurante care jonglează cu 10 aplicații diferite și vor o singură platformă care face totul — de la rezervări la contabilitate, de la marketing la HR.',
    innovationReason: 'All-in-one restaurant management cu AI care nu doar organizează, ci și anticipează — prevede zilele aglomerate, sugerează promoții și alertează despre probleme înainte să apară.',
    link: 'https://restomaster-ai-765729445735.us-west1.run.app/', status: 'live'
  },
  {
    id: 'misterdelivery-bot', category: 'resto', emoji: '🤵',
    name: 'MisterDelivery Bot — Chelner Digital',
    description: 'Chatbot AI care funcționează ca un chelner virtual 24/7. Preia comenzi prin chat (pe site sau WhatsApp), recomandă preparate, informează despre alergeni și ingrediente, procesează cereri speciale și trimite comanda direct la bucătărie. Nu obosește, nu uită și e mereu politicos.',
    targetAudience: 'Restaurante cu volum mare de comenzi care vor să automatizeze procesul de comandă, să reducă erorile și să ofere o experiență de ordering disponibilă 24/7.',
    innovationReason: 'Chelner AI cu personalitate configurabilă care nu doar preia comenzi, ci face upselling inteligent, memorează preferințele clienților fideli și se adaptează la orele de vârf.',
    link: 'https://misterdeliverybot.lovable.app/', status: 'live'
  },

  // ─── UNELTE AI (12) ───
  {
    id: 'ai-studio', category: 'ai', emoji: '🎨',
    name: 'AI Studio — Creație Vizuală',
    description: 'Studio creativ complet alimentat de AI. Generează logo-uri, bannere publicitare, postări social media, materiale de brand și ilustrații — totul fără skills de design. Alegi stilul, scrii ce vrei și AI-ul creează variante profesionale pe care le poți edita și exporta instant.',
    targetAudience: 'Antreprenori, freelanceri și creatori de conținut care au nevoie de materiale vizuale profesionale dar nu au buget pentru designer sau nu știu Photoshop.',
    innovationReason: 'Studio creativ AI cu workflow ghidat — nu doar generează imagini, ci te ghidează prin procesul creativ: de la brief la variante finale, cu feedback și sugestii de îmbunătățire.',
    link: 'https://aistudiomrdelivery.lovable.app/', status: 'live'
  },
  {
    id: 'studio-v1', category: 'ai', emoji: '🖥️',
    name: 'Studio MrDelivery v1 — Producție Conținut',
    description: 'Prima versiune a studioului digital MrDelivery. Spațiu de lucru creativ pentru producerea de conținut vizual: editare foto, generare materiale de brand, crearea de colaje și compoziții pentru meniuri, flyere și postări sociale. Interfață funcțională cu focus pe productivitate.',
    targetAudience: 'Echipe de marketing ale restaurantelor și designeri juniori care au nevoie de un spațiu de lucru digital rapid pentru a produce conținut vizual constant.',
    innovationReason: 'Primul studio digital dedicat industriei food — cu template-uri, fonturi și stiluri pre-optimizate pentru restaurante și delivery.',
    link: 'https://mrdelivery-studio-765729445735.us-west1.run.app/', status: 'live'
  },
  {
    id: 'studio-v2', category: 'ai', emoji: '🖼️',
    name: 'Studio MrDelivery v2 — Versiune Avansată',
    description: 'A doua generație a studioului MrDelivery, cu funcționalități extinse: generare AI mai puternică, editare avansată, template-uri noi, suport multi-format și performanță îmbunătățită. Include module experimentale și acces la cele mai noi modele AI de generare vizuală.',
    targetAudience: 'Utilizatori avansați și echipe creative care au nevoie de funcționalități extinse, acces la modele AI noi și capabilități experimentale de generare vizuală.',
    innovationReason: 'Versiune next-gen cu modele AI actualizate, canvas colaborativ și pipeline de export automatizat pentru multiple platforme simultan.',
    link: 'https://mrdelivery-studio-588412172690.us-west1.run.app/', status: 'live'
  },
  {
    id: 'creative-studio', category: 'ai', emoji: '✨',
    name: 'Creative Studio — Idei & Concepte',
    description: 'Platformă dedicată exclusiv procesului creativ și ideilor. Brainstorming asistat de AI pentru campanii vizuale, concepte de brand, proiecte artistice și direcții creative. Generează moodboard-uri, palete de culori, concepte vizuale și variante creative pornind de la un brief simplu.',
    targetAudience: 'Directori creativi, artiști digitali, branduri care caută inspirație și echipe de marketing care vor concepte creative fresh și originale generate rapid.',
    innovationReason: 'Nu doar execută, ci inspiră — AI-ul propune direcții creative neașteptate, combinații de stiluri și concepte pe care un om le-ar rata, accelerând procesul de ideație de 10x.',
    link: 'https://mrdelivery-creative-studio-765729445735.us-west1.run.app/', status: 'live'
  },
  {
    id: 'creator-studio', category: 'ai', emoji: '🎭',
    name: 'Creator Studio — Video & Social Media',
    description: 'Asistent AI complet pentru creatorii de conținut video. Generează idei de clipuri virale, scrie scenarii pas-cu-pas, sugerează thumbnail-uri captivante, creează titluri SEO-friendly și planifică calendarul de publicare. Acoperă YouTube, TikTok, Instagram Reels și Shorts.',
    targetAudience: 'YouTuberi, TikTokeri, influenceri și creatori de conținut care vor să producă mai mult conținut de calitate, să crească organic și să nu rămână niciodată fără idei.',
    innovationReason: 'AI specializat pe conținut video viral — analizează trenduri în timp real, studiază ce funcționează pe fiecare platformă și adaptează sugestiile la nișa și audiența ta specifică.',
    link: 'https://ai-creator-studio-968474198722.us-west1.run.app/', status: 'live'
  },
  {
    id: 'nano-banana-demo', category: 'ai', emoji: '🍌',
    name: 'Nano Banana Pro — Demo Gratuit',
    description: 'Versiunea demo completă a Nano Banana Pro. Testezi toate funcționalitățile fără cont și fără plată: automatizări, generare conținut, procesare date și workflow-uri. Ideal pentru a explora ce poate face platforma înainte de a te decide. Funcțional 100%, cu limite de utilizare.',
    targetAudience: 'Utilizatori curioși care vor să testeze platforma de automatizare înainte de a se angaja — pot explora toate funcțiile și vedea rezultate reale fără niciun risc.',
    innovationReason: 'Demo complet funcțional, nu doar un slideshow — testezi cu date reale, vezi rezultate reale și decizi informat dacă platforma este pentru tine.',
    link: 'https://nano-banana-pro-demo-968474198722.us-west1.run.app/', status: 'demo'
  },
  {
    id: 'aura-ai', category: 'ai', emoji: '💫',
    name: 'Aura AI — Asistent cu Personalitate',
    description: 'Asistent AI cu personalitate distinctă și configurabilă. Spre deosebire de chatbot-urile generice, Aura AI poate fi programat cu un ton specific (formal, prietenos, amuzant, elegant), cunoștințe de domeniu și stil de comunicare unic. Perfect pentru branduri care vor un AI care „sună" ca ei.',
    targetAudience: 'Branduri premium, companii de servicii și antreprenori care vor un AI cu voce proprie — nu un chatbot generic, ci un asistent care reflectă personalitatea și valorile brandului.',
    innovationReason: 'AI cu personalitate complet configurabilă — de la tonul vocii la nivelul de formalitate, de la umor la expertiză tehnică. Fiecare brand primește un AI unic.',
    link: 'https://aura-ai-968474198722.us-west1.run.app/', status: 'live'
  },
  {
    id: 'snapshot-sparkle', category: 'ai', emoji: '🎬',
    name: 'Snapshot Sparkle — Foto to Video',
    description: 'Transformă orice fotografie într-un videoclip captivant cu un singur click. Adaugă mișcare cinematică, efecte vizuale, tranziții fluide și muzică de fundal. Exportă direct pentru Instagram Reels, TikTok, YouTube Shorts sau Stories. Perfect pentru conținut social media dinamic.',
    targetAudience: 'Social media managers, restaurante, magazini online și creatori de conținut care au fotografii bune dar au nevoie de video-uri captivante fără skills de editare video.',
    innovationReason: 'Conversie instant foto-to-video cu AI — nu doar zoom-uri simple, ci mișcări cinematice inteligente, efecte de particule și tranziții profesionale generate automat.',
    link: 'https://snapshot-sparkle-video.lovable.app/', status: 'live'
  },
  {
    id: 'app-creator', category: 'ai', emoji: '🛠️',
    name: 'App Creator — Aplicații fără Cod',
    description: 'Platformă no-code unde îți construiești propria aplicație doar descriind ce vrei. Spui „Vreau o aplicație de rezervări pentru salon" și AI-ul generează interfața, logica și funcționalitățile. Poți personaliza design-ul, adăuga funcții noi și publica aplicația — totul fără să scrii o linie de cod.',
    targetAudience: 'Non-programatori cu idei de aplicații — antreprenori, freelanceri, proprietari de business-uri mici care au nevoie de o aplicație custom dar nu au buget pentru dezvoltatori.',
    innovationReason: 'Creare de aplicații prin conversație naturală — descrii ce vrei în cuvinte simple, AI-ul înțelege, construiește și te lasă să ajustezi. De la idee la aplicație funcțională în minute.',
    link: 'https://exact-app-creator.lovable.app/', status: 'live'
  },
  {
    id: 'museflow', category: 'ai', emoji: '🎵',
    name: 'MuseFlow — Productivitate Creativă',
    description: 'Aplicație AI care te ajută să intri și să menții starea de „flow" — concentrarea maximă în care lucrezi cel mai bine. Combină tehnici de focus (Pomodoro, deep work), muzică ambientală generată AI, blocarea distragatorilor și tracking-ul productivității. Te cunoaște și se adaptează la ritmul tău.',
    targetAudience: 'Scriitori, muzicieni, programatori, designeri și oricine lucrează creativ și vrea să fie mai productiv — să petreacă mai mult timp „în zona" și mai puțin timp procrastinând.',
    innovationReason: 'AI care nu doar măsoară productivitatea, ci o optimizează activ — învață când ești cel mai productiv, ajustează mediul digital și te ghidează spre starea de flow.',
    link: 'https://museflow-765729445735.us-west1.run.app/', status: 'live'
  },

  // ─── MARKETING (7) ───
  {
    id: 'adfusion', category: 'mkt', emoji: '🏢',
    name: 'AdFusion — Agenție AI de Publicitate',
    description: 'O agenție de publicitate complet automatizată. AdFusion se ocupă de tot ce face o agenție tradițională: creează reclame, scrie texte publicitare, generează imagini, planifică campanii, targetează audiențe și optimizează bugetul. Dar totul este făcut de AI, instant și la o fracțiune din cost.',
    targetAudience: 'Afaceri mici și mijlocii care nu-și permit o agenție de marketing tradițională dar au nevoie de campanii publicitare profesionale pe Facebook, Google și Instagram.',
    innovationReason: 'Prima agenție de publicitate 100% AI din România — livrează în minute ce o agenție tradițională livrează în săptămâni, la 1/10 din cost.',
    link: 'https://adfusion-ai-agency-os-968474198722.us-west1.run.app/', status: 'live'
  },
  {
    id: 'viral-architect', category: 'mkt', emoji: '🔥',
    name: 'Viral Architect — Campanii Virale',
    description: 'Tool AI care proiectează campanii cu potențial viral. Analizează trendurile actuale, studiază ce funcționează pe fiecare platformă și creează conținut optimizat pentru sharing. Generează: hook-uri captivante, vizualuri shareable, strategii de distribuție și calendare de publicare.',
    targetAudience: 'Branduri ambitoase, startup-uri în creștere și echipe de marketing care vor ca mesajul lor să se răspândească organic — fără bugete uriașe de advertising.',
    innovationReason: 'AI care nu ghicește ce devine viral, ci proiectează viralitatea prin design — analizează milioane de postări virale și aplică pattern-urile de succes la conținutul tău.',
    link: 'https://viral-ad-architect-968474198722.us-west1.run.app/', status: 'live'
  },
  {
    id: 'one-image-ad', category: 'mkt', emoji: '🖼️',
    name: 'One Image Ad Engine — Reclame din O Poză',
    description: 'Încărci o singură imagine a produsului tău și AI-ul creează automat o campanie publicitară completă: multiple variante de reclamă, texte persuasive, headline-uri A/B testabile, formatele corecte pentru fiecare platformă (Facebook, Instagram, Google) și sugestii de targetare.',
    targetAudience: 'Antreprenori solo, magazini online și marketeri care vor campanii rapide — au o poză bună de produs și au nevoie de reclame profesionale în 5 minute, nu în 5 zile.',
    innovationReason: 'De la o singură imagine la o campanie multi-platformă completă — AI-ul nu doar editează poza, ci înțelege produsul și creează mesaje de vânzare specifice.',
    link: 'https://one-image-ad-engine-968474198722.us-west1.run.app/', status: 'live'
  },
  {
    id: 'leadgenius', category: 'mkt', emoji: '🎯',
    name: 'LeadGenius — Generare Lead-uri AI',
    description: 'Sistem inteligent de generare și calificare lead-uri. Identifică automat potențiali clienți din surse multiple, îi evaluează după criterii personalizabile (buget, interes, urgență), îi scorează și îi prioritizează. Livrează o listă curată de prospecți calificați, gata de contactat.',
    targetAudience: 'Echipe de vânzări B2B, agenții de marketing, brokeri imobiliari și orice afacere care are nevoie constant de clienți noi calificați fără prospectare manuală.',
    innovationReason: 'AI care nu doar găsește lead-uri, ci le califică inteligent — știe cine este gata să cumpere și cine doar se uită, economisind ore de muncă echipei de vânzări.',
    link: 'https://leadgenius-ai-968474198722.us-west1.run.app/', status: 'live'
  },
  {
    id: 'mega-seo', category: 'mkt', emoji: '🔎',
    name: 'Mega SEO Audit Pro — Analiză SEO',
    description: 'Audit SEO complet și automat pentru orice website. Scanează site-ul și analizează: viteza de încărcare, structura URL-urilor, meta tags, conținutul, backlink-urile, mobile-friendliness, Core Web Vitals și competiția. Generează un raport detaliat cu scor pe 100 și plan de acțiune prioritizat.',
    targetAudience: 'Proprietari de site-uri web, magazine online și freelanceri SEO care vor să înțeleagă exact de ce site-ul lor nu apare pe prima pagină Google și ce trebuie să facă.',
    innovationReason: 'Audit SEO cu AI care nu doar identifică probleme, ci le prioritizează după impact — știi exact ce să rezolvi PRIMA pentru rezultate maxime cu efort minim.',
    link: 'https://mega-seo-audit-pro-961521792666.us-west1.run.app/', status: 'live'
  },
  {
    id: 'seo-mastermind', category: 'mkt', emoji: '🏆',
    name: 'SEO Mastermind — Audit Avansat',
    description: 'Versiunea enterprise a auditului SEO — analiză mult mai profundă cu: competitor intelligence, keyword gap analysis, content strategy AI, link building opportunities, technical SEO advanced și predicții de ranking. Include dashboard interactiv și rapoarte exportabile pentru echipe.',
    targetAudience: 'Experți SEO, agenții digitale mari și companii enterprise care au nevoie de analiză SEO de nivel profesionist cu insights competitive și strategie pe termen lung.',
    innovationReason: 'Cel mai avansat audit SEO AI — combină analiză tehnică, intelligence competitiv și strategie de conținut într-un singur instrument care rivalizează cu suite enterprise de mii de dolari.',
    link: 'https://seo-mastermind-mega-audit-pro-765729445735.us-west1.run.app/', status: 'live'
  },

  // ─── ENERGIE (6) ───
  {
    id: 'helios-simplu', category: 'energy', emoji: '⚡',
    name: 'Helios — Calculator Solar Rapid',
    description: 'Cel mai rapid mod de a afla dacă merită panouri solare pentru tine. Răspunzi la 3-4 întrebări simple (unde locuiești, cât consumi, ce suprafață ai) și primești instant: estimare producție, economie lunară, cost estimat și payback period. Zero jargon tehnic.',
    targetAudience: 'Oricine curios despre panouri solare dar nu vrea să se piardă în detalii tehnice — vrea un răspuns rapid: „Merită sau nu pentru mine?".',
    innovationReason: 'Calculator solar instant care dă răspunsuri clare în 30 de secunde — fără formulare complicate, fără cont, fără așteptare. Democratizează accesul la informația solară.',
    link: 'https://helios-765729445735.us-west1.run.app/', status: 'live'
  },
  {
    id: 'smart-helios', category: 'energy', emoji: '🔋',
    name: 'Smart Helios — Planificare Inteligentă',
    description: 'Asistent AI pentru planificarea completă a unui sistem fotovoltaic. Dimensionează optimal: panouri (tip, număr, orientare), invertor, baterii de stocare, și cablare. Ia în calcul consumul tău real, pattern-urile de consum pe ore și sezonalitate pentru a proiecta un sistem perfect adaptat nevoilor tale.',
    targetAudience: 'Proprietari de case și firme de instalații solare care vor o planificare profesionistă și detaliată a întregului sistem fotovoltaic, optimizat pentru maximum eficiență.',
    innovationReason: 'Planificare inteligentă care optimizează raportul cost-performanță — nu recomandă cel mai mare sistem, ci cel mai potrivit, în funcție de consumul real și obiectivele financiare.',
    link: 'https://smart-helios-765729445735.us-west1.run.app/', status: 'live'
  },
  {
    id: 'smart-helios-dashboard', category: 'energy', emoji: '📊',
    name: 'Smart Helios Dashboard — Monitorizare Live',
    description: 'Dashboard de monitorizare în timp real pentru sisteme fotovoltaice instalate. Vezi instant: producția curentă (kW), producția zilnică/lunară (kWh), economiile financiare, consumul vs. producția, surplus-ul injectat în rețea și starea bateriilor. Grafice istorice și alerte de performanță.',
    targetAudience: 'Prosumatori cu panouri solare deja instalate care vor să monitorizeze performanța sistemului, să urmărească economiile și să detecteze rapid orice problemă.',
    innovationReason: 'Monitorizare real-time cu AI care detectează anomalii de performanță — dacă panourile produc sub așteptări, te alertează și sugerează cauza (murdărie, umbră, defecțiune).',
    link: 'https://smart-helios-dashboard-765729445735.us-west1.run.app/', status: 'live'
  },
  {
    id: 'smart-renewable', category: 'energy', emoji: '🌱',
    name: 'Smart Renewable — Energie Verde',
    description: 'Aplicație educativă și interactivă despre energie regenerabilă. Explică pe înțelesul tuturor cum funcționează panourile solare, turbinele eoliene și pompele de căldură. Include calculatoare de impact ecologic, comparații de costuri și un ghid pas-cu-pas pentru tranziția la energie verde.',
    targetAudience: 'Familii eco-conscious, elevi și studenți, și oricine vrea să înțeleagă energia regenerabilă fără jargon tehnic — și eventual să facă pasul spre o casă verde.',
    innovationReason: 'Educație energetică gamificată — învți despre energie verde prin interacțiune, nu prin lecturi plictisitoare. Include simulări, quiz-uri și provocări eco.',
    link: 'https://smartrenewable.lovable.app/', status: 'live'
  },
  {
    id: 'diagnostic-verde', category: 'energy', emoji: '🏗️',
    name: 'Diagnosticare Energie Verde',
    description: 'Instrument AI de diagnosticare și troubleshooting pentru sisteme de energie regenerabilă. Descrii simptomele (producție scăzută, erori invertor, consum anormal) și AI-ul identifică cauza probabilă, sugerează soluții și estimează costul reparației. Funcționează pentru panouri solare, baterii și invertoare.',
    targetAudience: 'Tehnicieni de instalare/mentenanță, proprietari de sisteme fotovoltaice cu probleme și firme de energie regenerabilă care vor diagnostic rapid fără deplasare pe teren.',
    innovationReason: 'Diagnostic AI care identifică 90% din problemele comune ale sistemelor solare remote — reduce timpii de diagnostic de la ore la minute și elimină deplasările inutile.',
    link: 'https://smart-renewable-energy-engineering-diagnostics-968474198722.us-west1.run.app/', status: 'live'
  },

  // ─── OPERAȚIUNI (6) ───
  {
    id: 'nexus-dashboard', category: 'ops', emoji: '🌐',
    name: 'Nexus Dashboard — Command Center',
    description: 'Dashboard executiv all-in-one care centralizează toți KPI-urile afacerii tale într-un singur ecran. Venituri, cheltuieli, comenzi, clienți noi, retenție, satisfacție — totul actualizat în timp real cu grafice interactive. Include alarme automate când metricile deviază de la normal.',
    targetAudience: 'CEO-i, manageri generali și antreprenori care vor vizibilitate completă asupra afacerii lor dintr-un singur ecran — fără să deschidă 10 tab-uri și 5 aplicații diferite.',
    innovationReason: 'Dashboard AI care nu doar afișează date, ci le interpretează — evidențiază trenduri, semnalează anomalii și sugerează acțiuni bazate pe pattern-urile identificate.',
    link: 'https://nexus-ai-dashboard-904508730197.us-west1.run.app/', status: 'live'
  },
  {
    id: 'nexus-2027', category: 'ops', emoji: '🚀',
    name: 'Nexus 2027 — Platformă Business Futuristică',
    description: 'Platformă complexă de management business gândită pentru viitor. Automatizează procese end-to-end, gestionează echipe distribuite, planifică strategic cu scenarii AI, monitorizează proiecte și optimizează resurse. Include: project management, HR lite, CRM, raportare avansată și planificare strategică.',
    targetAudience: 'Companii în creștere rapidă cu 10-200 angajați care au procese complexe, echipe distribuite și au nevoie de o platformă unificată de management — nu 20 de SaaS-uri separate.',
    innovationReason: 'Platformă business next-gen cu AI predictiv integrat — nu doar gestionează, ci anticipează: prevede bottleneck-uri, sugerează realocări de resurse și identifică oportunități de optimizare.',
    link: 'https://nexus-2027-business-operations-platform-968474198722.us-west1.run.app/', status: 'live'
  },
  {
    id: 'claude-trading', category: 'ops', emoji: '📈',
    name: 'Claude Trading Agent — Investiții AI',
    description: 'Agent AI de trading și analiză financiară. Monitorizează piețele financiare 24/7, analizează acțiuni și crypto, identifică pattern-uri tehnice, evaluează sentimentul pieței și sugerează tranzacții cu raport risc/recompensă calculat. Include backtesting pe date istorice și alerte personalizabile.',
    targetAudience: 'Investitori individuali, traderi part-time și entuziaști crypto care vor asistență AI pentru decizii de investiții mai informate — nu un „get rich quick scheme", ci analiză serioasă.',
    innovationReason: 'Agent AI de trading cu analiză multi-layered — combină analiză tehnică, fundamentală și de sentiment în recomandări unificate cu grad de încredere și management al riscului.',
    link: 'https://claude-trading-agent-dashboard-968474198722.us-west1.run.app/', status: 'live'
  },
  {
    id: 'automation-hub', category: 'ops', emoji: '⚙️',
    name: 'Automation Hub — Conectare Servicii',
    description: 'Hub central de automatizare care conectează toate aplicațiile și serviciile tale între ele. Creează fluxuri automate: „Când primesc o comandă pe site → trimite notificare pe WhatsApp → actualizează inventory → generează factură → trimite email de confirmare". Totul fără cod.',
    targetAudience: 'Companii cu 5+ instrumente digitale care vor să le facă să „vorbească" între ele — eliminând copy-paste-ul manual, erorile umane și orele pierdute cu task-uri repetitive.',
    innovationReason: 'Hub de automatizare cu AI care nu doar execută reguli, ci sugerează automatizări — analizează ce faci manual repetitiv și propune workflow-uri automate.',
    link: 'https://ai-automation-hub-765729445735.us-west1.run.app/', status: 'live'
  },
  {
    id: 'greenthumb', category: 'ops', emoji: '🌿',
    name: 'GreenThumb AI — Consultant Agricol',
    description: 'Asistent AI pentru agricultură, grădinărit și spații verzi. Identifică plante din fotografii, diagnostichează boli, recomandă programuri de irigație, sugerează îngrășăminte și oferă sfaturi de sezon. Include calendar de plantare personalizat pe zona ta climatică și alertele meteo relevante.',
    targetAudience: 'Agricultori, grădinari amatori, proprietari de sere și oricine are plante (de la o grădină mică la hectare de culturi) și vrea sfaturi AI personalizate.',
    innovationReason: 'Consultant agricol AI care combină viziune computerizată (identificare plante/boli din poze) cu date meteo locale și knowledge agronomic — ca un inginer agronom disponibil 24/7.',
    link: 'https://greenthumb-ai-968474198722.us-west1.run.app/', status: 'live'
  },

  // ─── AFACERI (6) ───
  {
    id: 'alex-mercedes', category: 'biz', emoji: '🚗',
    name: 'Alex Mercedes — Platformă Auto',
    description: 'Platformă online pentru pasionații și cumpărătorii de Mercedes-Benz. Prezintă un portofoliu de mașini disponibile cu fotografii profesionale, specificații tehnice detaliate, istoric verificat și prețuri transparente. Include opțiune de contactare directă și programare test drive.',
    targetAudience: 'Pasionați de mașini Mercedes-Benz, cumpărători care caută un Mercedes second-hand de calitate și colecționari auto interesați de modele specifice.',
    innovationReason: 'Platformă dedicată exclusiv brandului Mercedes-Benz cu prezentare premium — nu un clasic autovit.ro, ci o experiență de showroom digital cu atenție la detalii.',
    link: 'https://alexmercedes.online/', status: 'live'
  },
  {
    id: 'mbeuroparts', category: 'biz', emoji: '🚙',
    name: 'MB EuroParts — Piese Auto Europene',
    description: 'Marketplace digital pentru piese auto europene, cu focus pe Mercedes-Benz. Cauti piesa după model, an și cod OEM, compari prețuri de la mai mulți furnizori, verifici compatibilitatea și comanzi online cu livrare la domiciliu sau la service. Include catalog complet cu imagini și specificații tehnice.',
    targetAudience: 'Proprietari de mașini europene, service-uri auto independente, mecanici și antreprenori auto care caută piese de calitate la prețuri competitive, cu livrare rapidă.',
    innovationReason: 'Primul marketplace AI pentru piese auto europene — căutare inteligentă care înțelege descrieri non-tehnice („piesa aia de la motor care face zgomot") și găsește piesa corectă.',
    link: 'https://mbeuroparts.lovable.app/', status: 'live'
  },
  {
    id: 'vreau-franciza', category: 'biz', emoji: '🏪',
    name: 'Vreau Franciză — Aplicare MrDelivery',
    description: 'Formular digital de aplicare pentru franciza MrDelivery. Completezi informații despre tine, locația dorită, experiența anterioară și bugetul disponibil. Primești imediat o evaluare automată a eligibilității și un răspuns personalizat cu pașii următori pentru a deveni francizat MrDelivery.',
    targetAudience: 'Antreprenori din România care vor să deschidă propria franciză MrDelivery — cu sau fără experiență în HoReCa, cu un buget de investiție inițial și motivație de a construi.',
    innovationReason: 'Proces de aplicare franciză 100% digital cu evaluare AI instantă — nu mai aștepți săptămâni pentru un răspuns, primești feedback personalizat în ore.',
    link: 'https://mr-franchise-form.lovable.app/', status: 'live'
  },
  {
    id: 'franchise-dream', category: 'biz', emoji: '💭',
    name: 'Franchise Dream — Plan Personalizat',
    description: 'Generator AI de planuri de franciză personalizate. Completezi un formular despre visul tău antreprenorial — ce industrie te atrage, ce buget ai, unde vrei să deschizi — și primești un plan detaliat: model de business, proiecții financiare, pași de implementare și resurse necesare.',
    targetAudience: 'Viitori francizați care sunt încă în faza de explorare — au visul de a avea propria afacere dar nu știu exact ce model de franciză li se potrivește.',
    innovationReason: 'Generator AI de business plans personalizate — nu template-uri generice, ci planuri adaptate pe profilul, bugetul și obiectivele fiecărui aplicant în parte.',
    link: 'https://franchise-dream-form.lovable.app/', status: 'live'
  },
  {
    id: 'dream-formula', category: 'biz', emoji: '🧪',
    name: 'Dream Formula Maker — Blueprint Afacere',
    description: 'Tool interactiv care te ajută să cristalizezi ideea de afacere perfectă. Combini ingredientele (pasiuni + skills + piață + buget) și AI-ul generează „formula" completă: model de business, USP, target audience, canale de vânzare, proiecții de venituri și plan de acțiune pe 90 de zile.',
    targetAudience: 'Antreprenori la început de drum care au idei multiple dar nu știu pe care să o aleagă, și oameni cu pasiuni care vor să le transforme în afaceri viabile.',
    innovationReason: 'Abordare unică „formula chimică" a business-ului — combini elementele și vezi ce „compus" rezultă. AI-ul testează viabilitatea ideii înainte să investești un leu.',
    link: 'https://dream-formula-maker.lovable.app/', status: 'live'
  },

  // ─── SECURITATE (4) ───
  {
    id: 'cyberintel', category: 'security', emoji: '🛡️',
    name: 'CyberIntel Hub — Centru Securitate',
    description: 'Centru de intelligence și monitorizare cybersecurity. Agregă în timp real amenințări, vulnerabilități și incidente de securitate relevante pentru afacerea ta. Include: monitorizare dark web, alerte de breach, evaluare riscuri, recomandări de securizare și rapoarte periodice de compliance (GDPR, NIS2).',
    targetAudience: 'Business-uri mici și mijlocii care procesează date sensibile (clienți, plăți, informații personale) și vor protecție cyber profesionistă fără să angajeze o echipă de securitate.',
    innovationReason: 'Hub de intelligence cyber actualizat în timp real — nu doar te protejează reactiv, ci te alertează proactiv despre amenințări specifice industriei tale înainte să te afecteze.',
    link: 'https://cyberintel-hub-968474198722.us-west1.run.app/', status: 'live'
  },
  {
    id: 'truthsignal', category: 'security', emoji: '📡',
    name: 'TruthSignal — Detector Fake News',
    description: 'Instrument AI de verificare a informațiilor online. Copiezi un articol, o știre sau un mesaj viral și AI-ul analizează: sursele, consistența factuală, bias-ul, limbajul manipulativ și cross-referencing-ul cu surse verificate. Primești un scor de credibilitate și explicații detaliate.',
    targetAudience: 'Utilizatori de internet care vor să distingă între informații reale și dezinformare — jurnaliști, profesori, părinți, și oricine vrea să navigheze responsabil pe internet.',
    innovationReason: 'Detector AI de fake news multi-layered — nu doar verifică fapte, ci analizează limbajul, structura argumentului și pattern-urile de manipulare emoțională.',
    link: 'https://truthsignal-765729445735.us-west1.run.app/', status: 'live'
  },

  // ─── LIFESTYLE (6) ───
  {
    id: 'velvet-rose', category: 'life', emoji: '🌹',
    name: 'Velvet & Rose — Wellness & Beauty',
    description: 'Platformă digitală de wellness și self-care cu recomandări AI personalizate. Include rutine de îngrijire a pielii adaptate pe tipul tău, sugestii de produse de beauty, meditații ghidate, exerciții de relaxare și un jurnal de bunăstare. Totul într-un ambalaj vizual elegant și luxos.',
    targetAudience: 'Femei și bărbați care vor să investească în bunăstarea lor personală — de la skincare personalizat la mindfulness, totul într-o singură aplicație elegantă.',
    innovationReason: 'Platformă de wellness cu AI care personalizează totul — de la rutina de dimineață la produsele recomandate, bazat pe tipul de piele, stilul de viață și obiectivele tale.',
    link: 'https://velvet-and-rose.lovable.app/', status: 'live'
  },
  {
    id: 'chalet-jolie', category: 'life', emoji: '🏔️',
    name: 'Chalet Jolie — Cazare Premium',
    description: 'Website de prezentare pentru o locație de cazare de munte premium. Galerie foto imersivă, descrieri detaliate ale camerelor și facilităților, calendar de disponibilitate, prețuri transparente și sistem de rezervare direct. Experiență vizuală care te transportă la munte înainte să ajungi acolo.',
    targetAudience: 'Turiști care caută o cazare de munte de calitate superioară — pentru un weekend romantic, o vacanță cu familia sau un retreat de relaxare în natură.',
    innovationReason: 'Experiență de booking cu prezentare imersivă — fotografii cinematice, tur virtual și descrieri care vând emoția, nu doar camera. Rezervare directă fără comision de platformă.',
    link: 'https://chalet-jolie.lovable.app/', status: 'live'
  },
  {
    id: 'alza-osteria', category: 'life', emoji: '🍝',
    name: 'Alza Osteria — Restaurant Italian',
    description: 'Website elegant pentru un restaurant italian autentic. Prezintă meniul complet cu descrieri poetice, povestea restaurantului, galerie foto atmosferică, orar și locație, sistem de rezervări online și secțiune de evenimente speciale. Te face să simți aroma bucătăriei italiene doar privind.',
    targetAudience: 'Iubitori de bucătărie italiană autentică, cupluri care caută un restaurant romantic, grupuri de prieteni și familii care apreciază mâncarea tradițională preparată cu pasiune.',
    innovationReason: 'Website restaurant cu experiență digitală premium — nu doar un meniu PDF online, ci o experiență senzorială completă cu storytelling culinar și atmosferă vizuală.',
    link: 'https://alzaosteria.lovable.app/', status: 'live'
  },
  {
    id: 'heart-echo', category: 'life', emoji: '❤️',
    name: 'Heart Echo — Mesaje de Suflet',
    description: 'Generator AI de mesaje emoționale personalizate. Spui pentru cine e mesajul (partener, părinte, prieten), ce ocazie e (aniversare, mulțumire, reconciliere) și ce vrei să exprimi, iar AI-ul creează un mesaj sincer, emoționant și unic. Nu mesaje copy-paste, ci cuvinte care ating inima.',
    targetAudience: 'Persoane romantice, oameni care simt mult dar se exprimă greu în scris, și oricine vrea să trimită un mesaj care contează — nu un „La mulți ani" generic.',
    innovationReason: 'Generator AI de mesaje emoționale care nu sună ca un robot — folosește psihologia emoțiilor, metafore personale și tonul potrivit pentru fiecare relație.',
    link: 'https://heart-echo-maker.lovable.app/', status: 'live'
  },
  {
    id: 'anchor', category: 'life', emoji: '🔗',
    name: 'Anchor — Guardian al Relațiilor',
    description: 'AI relațional care te ajută să îngrijești relațiile importante din viața ta. Îți amintește aniversări și momente importante, sugerează activități de quality time, oferă sfaturi de comunicare bazate pe tipologia relației și te ajută să fii mai prezent și atent cu oamenii care contează.',
    targetAudience: 'Persoane care vor relații mai sănătoase și mai profunde — cu partenerul, familia, prietenii sau colegii. Oameni ocupați care nu vor să uite ce contează cu adevărat.',
    innovationReason: 'Primul AI relațional care nu doar memorează date, ci înțelege dinamica relațiilor — detectează semnale de distanțare și sugerează acțiuni concrete de reconectare.',
    link: 'https://anchor-relationship-guardian-765729445735.us-west1.run.app/', status: 'live'
  },
  {
    id: 'lifekit', category: 'life', emoji: '💚',
    name: 'LifeKit — Kit pentru o Viață Mai Bună',
    description: 'Colecție completă de instrumente AI pentru dezvoltare personală. Include: tracker de obiceiuri, jurnal de recunoștință, planificator de obiective, meditații ghidate, sfaturi de nutriție, exerciții de mindfulness și coach AI personal care te cunoaște și te motivează. Totul într-un singur loc.',
    targetAudience: 'Oricine vrea să-și îmbunătățească viața — de la productivitate la sănătate mentală, de la obiceiuri bune la obiective pe termen lung. Funcționează pentru începători și avansați.',
    innovationReason: 'Kit all-in-one cu AI care conectează toate aspectele vieții — vede cum somnul îți afectează productivitatea, cum stresul îți afectează obiceiurile alimentare și sugerează ajustări holistic.',
    link: 'https://lifekit-968474198722.us-west1.run.app/', status: 'live'
  },
];
