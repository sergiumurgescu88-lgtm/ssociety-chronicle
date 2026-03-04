export type Category = "all" | "resto" | "ai" | "mkt" | "energy" | "ops" | "biz" | "life" | "security";

export interface CategoryInfo {
  id: Category;
  label: string;
  emoji: string;
  color: string;
  description?: string;
}

export const categories: CategoryInfo[] = [
  { id: 'all', label: 'Toate', emoji: '✦', color: 'bg-gradient-to-r from-indigo-500 to-cyan-500', description: 'Toate proiectele' },
  { id: 'resto', label: 'Restaurant', emoji: '🍽️', color: 'bg-indigo-600', description: 'Soluții digitale pentru restaurante și food delivery' },
  { id: 'ai', label: 'AI Tools', emoji: '🤖', color: 'bg-cyan-500', description: 'Instrumente bazate pe inteligență artificială' },
  { id: 'mkt', label: 'Marketing', emoji: '📣', color: 'bg-amber-500', description: 'Automatizare și strategie de marketing digital' },
  { id: 'energy', label: 'Energy', emoji: '⚡', color: 'bg-emerald-500', description: 'Soluții pentru energie solară și sustenabilitate' },
  { id: 'ops', label: 'Operations', emoji: '⚙️', color: 'bg-violet-500', description: 'Optimizarea operațiunilor de business' },
  { id: 'biz', label: 'Business', emoji: '💼', color: 'bg-orange-500', description: 'Francize digitale și modele de business scalabile' },
  { id: 'life', label: 'Lifestyle', emoji: '🌿', color: 'bg-pink-500', description: 'Aplicații pentru un stil de viață mai bun' },
  { id: 'security', label: 'Security', emoji: '🛡️', color: 'bg-red-500', description: 'Securitate digitală și protecție date' },
];
