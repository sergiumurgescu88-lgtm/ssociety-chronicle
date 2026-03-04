import { motion, AnimatePresence } from 'framer-motion';
import { X, Info, Users, Lightbulb, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Project } from '@/data/projects';

interface ProjectPreviewModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectPreviewModal = ({ project, onClose }: ProjectPreviewModalProps) => {
  const { t } = useLanguage();
  if (!project) return null;

  const isLive = project.status === 'live' || project.status === 'demo';
  const canPreview = isLive && project.link !== '#' && !project.link.endsWith('.pdf');

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
            {/* Close button */}
            <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/80 border border-white/10 text-hub-text hover:bg-white/10 transition-colors">
              <X className="w-5 h-5" />
            </button>

            {/* Preview - hidden on mobile, show iframe on desktop */}
            <div className="hidden lg:flex flex-1 bg-hub-bg/50 items-center justify-center">
              {canPreview ? (
                <iframe src={project.link} className="w-full h-full border-0" title={project.name} />
              ) : (
                <div className="text-center p-8">
                  <div className="text-6xl animate-bounce mb-4">🚧</div>
                  <p className="text-hub-muted text-base">{t.underConstruction}</p>
                </div>
              )}
            </div>

            {/* Info panel - scrollable on mobile */}
            <div className="w-full lg:w-[400px] p-6 sm:p-8 overflow-y-auto border-t lg:border-t-0 lg:border-l border-white/10">
              <div className="text-4xl sm:text-5xl mb-3">{project.emoji}</div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-hub-text mb-3 leading-tight">{project.name}</h2>

              <div className="flex gap-2 mb-5">
                <span className={`text-xs px-2.5 py-1 rounded-full ${
                  project.status === 'live' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                  project.status === 'demo' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                  'bg-white/5 text-hub-muted border border-white/10'
                }`}>
                  {project.status === 'live' ? t.live : project.status === 'demo' ? 'DEMO' : t.underConstruction}
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-indigo-400 text-sm font-semibold mb-1.5">
                    <Info className="w-4 h-4 shrink-0" /> {t.whatIsThis}
                  </div>
                  <p className="text-sm leading-relaxed text-hub-secondary">{project.description}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold mb-1.5">
                    <Users className="w-4 h-4 shrink-0" /> {t.whoIsItFor}
                  </div>
                  <p className="text-sm leading-relaxed text-hub-secondary">{project.targetAudience}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-amber-400 text-sm font-semibold mb-1.5">
                    <Lightbulb className="w-4 h-4 shrink-0" /> {t.whyInnovative}
                  </div>
                  <p className="text-sm leading-relaxed text-hub-secondary">{project.innovationReason}</p>
                </div>
              </div>

              {isLive ? (
                <a
                  href={project.link} target="_blank" rel="noopener noreferrer"
                  className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-semibold text-base hover:from-indigo-500 hover:to-indigo-400 transition-all active:scale-[0.98]"
                >
                  <ExternalLink className="w-4 h-4" /> {t.openSite}
                </a>
              ) : (
                <div className="mt-6 w-full text-center py-3.5 rounded-xl bg-white/5 text-hub-muted text-base">{t.underConstruction}</div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectPreviewModal;
