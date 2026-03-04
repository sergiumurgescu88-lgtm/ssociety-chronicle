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
    <div className="flex items-center justify-between border-b border-white/10 mb-8 pb-5">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl text-2xl">{category.emoji}</div>
        <div>
          <h2 className="font-bold text-hub-text text-lg">{label}</h2>
          {category.description && <p className="text-sm text-hub-muted">{category.description}</p>}
        </div>
      </div>
      <span className={`text-xs px-3 py-1.5 rounded-full ${category.color} text-white`}>
        {count} {t.projectsCount}
      </span>
    </div>
  );
};

export default SectionHeader;
