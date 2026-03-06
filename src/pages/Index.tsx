import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Category, categories } from '@/data/categories';
import { projects, Project } from '@/data/projects';
import { useLanguage } from '@/context/LanguageContext';
import HeroSection from '@/components/HeroSection';
import StatsOverview from '@/components/StatsOverview';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import WhatsAllSection from '@/components/WhatsAllSection';
import WhatsAllStealthSection from '@/components/WhatsAllStealthSection';
import InstantMenuSection from '@/components/InstantMenuSection';
import WildBotSection from '@/components/WildBotSection';
import ClaudeTradingSection from '@/components/ClaudeTradingSection';
import SocietyHubStoreSection from '@/components/SocietyHubStoreSection';
import DownloadSection from '@/components/DownloadSection';
import MBEuroPartsSection from '@/components/MBEuroPartsSection';
import MrDeliverySection from '@/components/MrDeliverySection';
import FilterBar from '@/components/FilterBar';
import ProjectCard from '@/components/ProjectCard';
import SectionHeader from '@/components/SectionHeader';
import ProjectPreviewModal from '@/components/ProjectPreviewModal';
import NewsletterSection from '@/components/NewsletterSection';
import MobileSidebar from '@/components/MobileSidebar';
import FooterSection from '@/components/FooterSection';
import CookieBanner from '@/components/CookieBanner';

const Index = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'construction'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const scrollToProject = useCallback((id: string) => {
    setActiveCategory('all');
    setStatusFilter('all');
    setTimeout(() => {
      const el = document.getElementById(`project-${id}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.classList.add('ring-2', 'ring-indigo-500');
        setTimeout(() => el.classList.remove('ring-2', 'ring-indigo-500'), 2000);
      }
    }, 100);
  }, []);

  const filtered = projects.filter(p => {
    const matchCat = activeCategory === 'all' || p.category === activeCategory;
    const matchStatus = statusFilter === 'all' ||
      (statusFilter === 'active' && (p.status === 'live' || p.status === 'demo')) ||
      (statusFilter === 'construction' && p.status === 'under-construction');
    return matchCat && matchStatus;
  });

  const displayedCategories = activeCategory === 'all'
    ? categories.filter(c => c.id !== 'all')
    : categories.filter(c => c.id === activeCategory);

  const statusButtons = [
    { key: 'all' as const, label: t.filterAll },
    { key: 'active' as const, label: t.filterActive },
    { key: 'construction' as const, label: t.filterWork },
  ];

  return (
    <div className="min-h-screen relative">
      {/* Background mesh */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-violet-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        <MobileSidebar onProjectClick={scrollToProject} />
        <HeroSection />

        {activeCategory === 'all' && <StatsOverview />}

        <WhatsAppCTA />

        {/* Mini stats */}
        <div className="max-w-2xl lg:max-w-3xl mx-auto px-3 sm:px-4 pb-6 sm:pb-8 lg:pb-12">
          <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6 text-center">
            <div className="p-3 sm:p-4 lg:p-6 rounded-xl lg:rounded-2xl bg-hub-card border border-white/10">
              <div className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-hub-text">{projects.length}</div>
              <div className="text-[10px] sm:text-xs lg:text-sm text-hub-muted mt-1">{t.projects}</div>
            </div>
            <div className="p-3 sm:p-4 lg:p-6 rounded-xl lg:rounded-2xl bg-hub-card border border-white/10">
              <div className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-hub-text">{categories.length - 1}</div>
              <div className="text-[10px] sm:text-xs lg:text-sm text-hub-muted mt-1">{t.domains}</div>
            </div>
            <div className="p-3 sm:p-4 lg:p-6 rounded-xl lg:rounded-2xl bg-hub-card border border-white/10">
              <div className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-emerald-400">100%</div>
              <div className="text-[10px] sm:text-xs lg:text-sm text-hub-muted mt-1">{t.live}</div>
            </div>
          </div>
        </div>

        <WhatsAllSection />
        <WhatsAllStealthSection />
        <WildBotSection />
        <ClaudeTradingSection />
        <SocietyHubStoreSection />
        <InstantMenuSection />
        <MrDeliverySection />
        <MBEuroPartsSection />
        <DownloadSection />

        <FilterBar activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

        {/* Status filter */}
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
          <div className="flex gap-2">
            {statusButtons.map(s => (
              <button
                key={s.key}
                onClick={() => setStatusFilter(s.key)}
                className={`px-3 sm:px-4 lg:px-5 py-2 lg:py-2.5 rounded-full text-xs sm:text-sm lg:text-base font-medium transition-colors min-h-[38px] ${
                  statusFilter === s.key
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white/5 text-hub-muted hover:text-hub-text border border-white/10'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div className="max-w-7xl mx-auto px-3 sm:px-4 pb-12 sm:pb-16 lg:pb-20">
          <AnimatePresence mode="wait">
            <motion.div key={`${activeCategory}-${statusFilter}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {displayedCategories.map(cat => {
                const catProjects = filtered.filter(p => p.category === cat.id);
                if (catProjects.length === 0) return null;
                return (
                  <div key={cat.id} className="mb-8 sm:mb-12 lg:mb-16">
                    <SectionHeader category={cat} count={catProjects.length} />
                    <motion.div
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-6"
                      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                      initial="hidden"
                      animate="visible"
                    >
                      {catProjects.map(p => (
                        <ProjectCard key={p.id} project={p} onOpenPreview={setSelectedProject} />
                      ))}
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        <NewsletterSection />
        <FooterSection />
      </div>

      <ProjectPreviewModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <CookieBanner />
    </div>
  );
};

export default Index;
