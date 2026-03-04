import { CategoryInfo } from '@/data/categories';
import { useLanguage } from '@/context/LanguageContext';

const catLabelKey: Record<string, string> = {
  resto: 'catResto', ai: 'catAI', mkt: 'catMkt', energy: 'catEnergy',
  ops: 'catOps', biz: 'catBiz', life: 'catLife', security: 'catSecurity',
};

interface SectionHeaderProps {
  category: CategoryInfo;
  count: number;
}

const SectionHeader = ({ category, count }: SectionHeaderProps) => {
  const { t } = useLanguage();
  const label = t[catLabelKey[category.id]] || category.label;

  return (
    <div className="flex items-center justify-between border-b border-white/10 mb-6 sm:mb-8 pb-4 sm:pb-5 gap-3">
      <div className="flex items-center gap-3 sm:gap-4 min-w-0">
        <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white/5 rounded-xl text-xl sm:text-2xl shrink-0">{category.emoji}</div>
        <div className="min-w-0">
          <h2 className="font-bold text-hub-text text-base sm:text-lg leading-snug">{label}</h2>
          {category.description && <p className="text-xs sm:text-sm text-hub-muted truncate">{category.description}</p>}
        </div>
      </div>
      <span className={`text-[10px] sm:text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full ${category.color} text-white whitespace-nowrap shrink-0`}>
        {count} {t.projectsCount}
      </span>
    </div>
  );
};

export default SectionHeader;
