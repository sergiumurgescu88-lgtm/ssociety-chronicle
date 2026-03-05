import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Project } from '@/data/projects';
import { getTranslatedProject } from '@/data/projectTranslations';

const borderColors: Record<string, string> = {
  resto: 'from-indigo-500 to-indigo-400', ai: 'from-cyan-500 to-cyan-400', mkt: 'from-amber-500 to-amber-400',
  energy: 'from-emerald-500 to-emerald-400', ops: 'from-violet-500 to-violet-400', biz: 'from-orange-500 to-orange-400',
  life: 'from-pink-500 to-pink-400', security: 'from-red-500 to-red-400',
};

const btnColors: Record<string, string> = {
  resto: 'bg-indigo-600 hover:bg-indigo-500', ai: 'bg-cyan-600 hover:bg-cyan-500', mkt: 'bg-amber-600 hover:bg-amber-500',
  energy: 'bg-emerald-600 hover:bg-emerald-500', ops: 'bg-violet-600 hover:bg-violet-500', biz: 'bg-orange-600 hover:bg-orange-500',
  life: 'bg-pink-600 hover:bg-pink-500', security: 'bg-red-600 hover:bg-red-500',
};

interface ProjectCardProps {
  project: Project;
  onOpenPreview: (p: Project) => void;
}

const ProjectCard = ({ project, onOpenPreview }: ProjectCardProps) => {
  const { t, language } = useLanguage();
  const p = getTranslatedProject(project, language);

  return (
    <motion.div
      id={`project-${project.id}`}
      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
      whileHover={{ y: -8, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onOpenPreview(project)}
      className="bg-hub-card border border-white/10 rounded-xl lg:rounded-2xl overflow-hidden cursor-pointer transition-colors hover:border-indigo-500/30 group"
    >
      <div className={`h-[3px] bg-gradient-to-r ${borderColors[project.category] || 'from-indigo-500 to-cyan-500'}`} />
      <div className="p-4 sm:p-5 lg:p-6">
        <div className="text-2xl lg:text-3xl mb-2 sm:mb-3">{project.emoji}</div>
        <h3 className="font-bold text-hub-text text-base lg:text-lg leading-snug mb-1.5 sm:mb-2">{p.name}</h3>
        <p className="text-[13px] sm:text-sm lg:text-base leading-relaxed text-hub-muted group-hover:text-hub-secondary transition-colors mb-3 sm:mb-4 line-clamp-2">{p.description}</p>
        <div className="flex items-center justify-between gap-2">
          {project.status === 'live' && (
            <span className="flex items-center gap-1.5 text-xs lg:text-sm px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {t.live}
            </span>
          )}
          {project.status === 'demo' && (
            <span className="text-xs lg:text-sm px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">DEMO</span>
          )}
          {project.status === 'under-construction' && (
            <span className="text-xs lg:text-sm px-2.5 py-1 rounded-full bg-white/5 text-hub-muted border border-white/10">{t.underConstruction}</span>
          )}
          {project.status !== 'under-construction' ? (
            <button
              onClick={(e) => { e.stopPropagation(); window.open(project.link, '_blank'); }}
              className={`text-xs lg:text-sm px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg text-white ${btnColors[project.category] || 'bg-indigo-600'} transition-colors active:scale-95`}
            >
              {t.viewProject}
            </button>
          ) : (
            <span className="text-xs lg:text-sm text-hub-muted px-3 py-1.5">{t.underConstruction}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
