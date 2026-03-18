import { Colors } from '../constants/theme';

export function getDeptColor(department: string): string {
  return (Colors.dept as Record<string, string>)[department] ?? Colors.dept.Default;
}

export function getCategoryColor(category: string): string {
  return (Colors.category as Record<string, string>)[category] ?? Colors.category.Default;
}

export function getDifficultyColor(difficulty: string): string {
  switch (difficulty) {
    case 'Easy': return '#10B981';
    case 'Medium': return '#F59E0B';
    case 'Hard': return '#EF4444';
    default: return '#6B7280';
  }
}

export function getInitials(name: string): string {
  return name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2);
}

export function formatBudget(min: number, max: number): string {
  return `$${min}–$${max}/mo`;
}

export function formatRating(rating: number): string {
  return rating.toFixed(1);
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function getCompatibilityColor(score: number): string {
  if (score >= 85) return '#10B981';
  if (score >= 70) return '#F59E0B';
  return '#EF4444';
}

export function getDealCategoryColor(category: string): string {
  const map: Record<string, string> = {
    'Food & Dining': '#F59E0B',
    Tutoring: '#1A73E8',
    Tech: '#7C3AED',
    Fitness: '#10B981',
    Entertainment: '#EC4899',
    Shopping: '#F97316',
    Transportation: '#0891B2',
    Health: '#EF4444',
  };
  return map[category] ?? '#6B7280';
}
