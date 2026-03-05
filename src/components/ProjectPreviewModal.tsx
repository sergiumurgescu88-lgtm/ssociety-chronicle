import { motion, AnimatePresence } from 'framer-motion';
import { X, Info, Users, Lightbulb, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Project } from '@/data/projects';
import { getTranslatedProject } from '@/data/projectTranslations';

interface ProjectPreviewModalProps {
  project: Project | null;
  onClose: () => void;
}

const catAccent: Record<string, { gradient: string; text: string; border: string; bg: string }> = {
  resto: { gradient: 'from-indigo-600 to-violet-500', text: 'text-indigo-400', border: 'border-indigo-500/20', bg: 'bg-indigo-500/10' },
  ai: { gradient: 'from-cyan-600 to-blue-500', text: 'text-cyan-400', border: 'border-cyan-500/20', bg: 'bg-cyan-500/10' },
  mkt: { gradient: 'from-amber-600 to-orange-500', text: 'text-amber-400', border: 'border-amber-500/20', bg: 'bg-amber-500/10' },
  energy: { gradient: 'from-emerald-600 to-green-500', text: 'text-emerald-400', border: 'border-emerald-500/20', bg: 'bg-emerald-500/10' },
  ops: { gradient: 'from-orange-600 to-amber-500', text: 'text-orange-400', border: 'border-orange-500/20', bg: 'bg-orange-500/10' },
  biz: { gradient: 'from-orange-600 to-yellow-500', text: 'text-orange-400', border: 'border-orange-500/20', bg: 'bg-orange-500/10' },
  life: { gradient: 'from-pink-600 to-rose-500', text: 'text-pink-400', border: 'border-pink-500/20', bg: 'bg-pink-500/10' },
  security: { gradient: 'from-red-600 to-rose-500', text: 'text-red-400', border: 'border-red-500/20', bg: 'bg-red-500/10' },
};

const ProjectPreviewModal = ({ project, onClose }: ProjectPreviewModalProps) => {
  const { t, language } = useLanguage();
  if (!project) return null;
  const p = getTranslatedProject(project, language);

  const isLive = project.status === 'live' || project.status === 'demo';
  const canPreview = isLive && project.link !== '#' && !project.link.endsWith('.pdf');
  const accent = catAccent[project.category] || catAccent.resto;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-hub-bg/90 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, y: 40, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.95, y: 40, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-hub-section rounded-t-3xl sm:rounded-[2rem] border border-white/10 w-full sm:max-w-6xl max-h-[92vh] sm:max-h-[90vh] sm:h-[90vh] flex flex-col lg:flex-row overflow-hidden"
          >
            <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/80 border border-white/10 text-hub-text hover:bg-white/10 transition-colors">
              <X className="w-5 h-5" />
            </button>

            {/* Preview */}
            <div className="hidden lg:flex flex-1 bg-hub-bg/50 items-center justify-center">
              {canPreview ? (
                <iframe src={project.link} className="w-full h-full border-0" title={project.name} />
              ) : (
                <div className="text-center p-8">
                  <div className="text-6xl lg:text-8xl animate-bounce mb-4">🚧</div>
                  <p className="text-hub-muted text-base lg:text-xl">{t.underConstruction}</p>
                </div>
              )}
            </div>

            {/* Info panel */}
            <div className="w-full lg:w-[440px] p-6 sm:p-8 lg:p-10 overflow-y-auto border-t lg:border-t-0 lg:border-l border-white/10">
              <div className="text-4xl sm:text-5xl lg:text-6xl mb-3">{project.emoji}</div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-hub-text mb-3 leading-tight">{p.name}</h2>

              <div className="flex gap-2 mb-5 lg:mb-6">
                <span className={`text-xs lg:text-sm px-2.5 py-1 rounded-full ${
                  project.status === 'live' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                  project.status === 'demo' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                  'bg-white/5 text-hub-muted border border-white/10'
                }`}>
                  {project.status === 'live' ? t.live : project.status === 'demo' ? 'DEMO' : t.underConstruction}
                </span>
              </div>

              <div className="space-y-5 lg:space-y-6">
                <div>
                  <div className={`flex items-center gap-2 ${accent.text} text-sm lg:text-base font-semibold mb-1.5 lg:mb-2`}>
                    <Info className="w-4 h-4 lg:w-5 lg:h-5 shrink-0" /> {t.whatIsThis}
                  </div>
                  <p className="text-sm lg:text-base leading-relaxed text-hub-secondary">{p.description}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-cyan-400 text-sm lg:text-base font-semibold mb-1.5 lg:mb-2">
                    <Users className="w-4 h-4 lg:w-5 lg:h-5 shrink-0" /> {t.whoIsItFor}
                  </div>
                  <p className="text-sm lg:text-base leading-relaxed text-hub-secondary">{p.targetAudience}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-amber-400 text-sm lg:text-base font-semibold mb-1.5 lg:mb-2">
                    <Lightbulb className="w-4 h-4 lg:w-5 lg:h-5 shrink-0" /> {t.whyInnovative}
                  </div>
                  <p className="text-sm lg:text-base leading-relaxed text-hub-secondary">{p.innovationReason}</p>
                </div>
              </div>

              {isLive ? (
                <a
                  href={project.link} target="_blank" rel="noopener noreferrer"
                  className={`mt-6 lg:mt-8 w-full flex items-center justify-center gap-2 px-6 py-3.5 lg:py-4 rounded-xl bg-gradient-to-r ${accent.gradient} text-white font-semibold text-base lg:text-lg hover:opacity-90 transition-all active:scale-[0.98]`}
                >
                  <ExternalLink className="w-4 h-4 lg:w-5 lg:h-5" /> {t.openSite}
                </a>
              ) : (
                <div className="mt-6 lg:mt-8 w-full text-center py-3.5 lg:py-4 rounded-xl bg-white/5 text-hub-muted text-base lg:text-lg">{t.underConstruction}</div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectPreviewModal;
