export interface NewsItem {
  id: string;
  headline: string;
  source: 'GSU Signal' | 'Official GSU' | 'Panther PIN' | '@GeorgiaStateU';
  category: string;
  timestamp: string;
  summary: string;
  isBookmarked?: boolean;
}

export interface SpotlightItem {
  id: string;
  headline: string;
  commentary: string;
  newsId: string;
}

export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface GradeDistribution {
  A: number; B: number; C: number; D: number; F: number;
}

export interface Professor {
  id: string;
  name: string;
  department: string;
  courses: string[];
  overallRating: number;
  wouldTakeAgain: number;
  difficulty: Difficulty;
  avgGPA: number;
  curveLikelihood: number;
  examVsProjectRatio: number;
  attendanceStrictness: number;
  tags: string[];
  reviews: ProfessorReview[];
  gradeDistribution: GradeDistribution;
}

export interface ProfessorReview {
  id: string;
  professorId: string;
  semester: string;
  anonymousName: string;
  overallRating: number;
  difficultyRating: number;
  lectureQualityRating: number;
  helpfulnessRating: number;
  gradeReceived: string;
  wasCurved: 'Yes' | 'No' | 'Somewhat';
  attendanceRequired: boolean;
  tags: string[];
  comment: string;
  helpfulCount: number;
}

export type HousingType = 'Dorm' | 'Off-campus' | 'Either';
export type GenderPref = 'Female Preferred' | 'Male Preferred' | 'Any Gender';
export type SleepSchedule = 'Night Owl' | 'Early Bird' | 'Flexible';
export type CleanlinessLevel = 'Very Clean' | 'Average' | 'Relaxed';

export interface Roommate {
  id: string;
  firstName: string;
  lastInitial: string;
  major: string;
  year: 'Freshman' | 'Sophomore' | 'Junior' | 'Senior' | 'Grad';
  housingType: HousingType;
  genderPref: GenderPref;
  moveInDate: string;
  budgetMin: number;
  budgetMax: number;
  personalityTags: string[];
  sleepSchedule: SleepSchedule;
  cleanlinessLevel: CleanlinessLevel;
  bio: string;
  preferredAreas: string[];
  compatibilityScore?: number;
  isSaved?: boolean;
}

export interface ChatMessage {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
  isMe: boolean;
}

export interface Deal {
  id: string;
  businessName: string;
  dealHeadline: string;
  description: string;
  category: string;
  expiryDate: string;
  distanceFromCampus: string;
  promoCode: string;
  isSaved?: boolean;
}

export interface User {
  id: string;
  name: string;
  major: string;
  year: string;
  email: string;
  reviewsWritten: number;
}

export interface SavedState {
  savedDealIds: string[];
  savedRoommateIds: string[];
  savedNewsIds: string[];
  toggleSavedDeal: (id: string) => void;
  toggleSavedRoommate: (id: string) => void;
  toggleSavedNews: (id: string) => void;
}
