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
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-hub-bg/90 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, y: 40, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.95, y: 40, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-hub-section rounded-[2.5rem] border border-white/10 w-full max-w-6xl h-[90vh] flex flex-col lg:flex-row overflow-hidden"
          >
            {/* Preview */}
            <div className="flex-1 bg-hub-bg/50 flex items-center justify-center min-h-[40vh] lg:min-h-0">
              {canPreview ? (
                <iframe src={project.link} className="w-full h-full border-0" title={project.name} />
              ) : (
                <div className="text-center p-8">
                  <div className="text-6xl animate-bounce mb-4">🚧</div>
                  <p className="text-hub-muted">{t.underConstruction}</p>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="w-full lg:w-[380px] p-8 overflow-y-auto border-t lg:border-t-0 lg:border-l border-white/10">
              <div className="text-5xl mb-4">{project.emoji}</div>
              <h2 className="text-3xl lg:text-4xl font-black text-hub-text mb-4">{project.name}</h2>

              <div className="flex gap-2 mb-6">
                <span className={`text-xs px-2.5 py-1 rounded-full ${
                  project.status === 'live' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                  project.status === 'demo' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                  'bg-white/5 text-hub-muted border border-white/10'
                }`}>
                  {project.status === 'live' ? t.live : project.status === 'demo' ? 'DEMO' : t.underConstruction}
                </span>
              </div>

              <div className="space-y-5">
                <div>
                  <div className="flex items-center gap-2 text-indigo-400 text-sm font-medium mb-1.5">
                    <Info className="w-4 h-4" /> {t.whatIsThis}
                  </div>
                  <p className="text-sm text-hub-secondary">{project.description}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium mb-1.5">
                    <Users className="w-4 h-4" /> {t.whoIsItFor}
                  </div>
                  <p className="text-sm text-hub-secondary">{project.targetAudience}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-amber-400 text-sm font-medium mb-1.5">
                    <Lightbulb className="w-4 h-4" /> {t.whyInnovative}
                  </div>
                  <p className="text-sm text-hub-secondary">{project.innovationReason}</p>
                </div>
              </div>

              {isLive ? (
                <a
                  href={project.link} target="_blank" rel="noopener noreferrer"
                  className="mt-8 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-medium hover:from-indigo-500 hover:to-indigo-400 transition-all"
                >
                  <ExternalLink className="w-4 h-4" /> {t.openSite}
                </a>
              ) : (
                <div className="mt-8 w-full text-center py-3 rounded-xl bg-white/5 text-hub-muted">{t.underConstruction}</div>
              )}
            </div>

            <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full bg-black/80 border border-white/10 text-hub-text hover:bg-white/10 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectPreviewModal;
