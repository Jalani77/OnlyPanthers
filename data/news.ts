import { NewsItem, SpotlightItem } from '../types';

export const spotlightItems: SpotlightItem[] = [
  {
    id: 'sp1',
    headline: 'New Student Center expansion breaks ground on Decatur St.',
    commentary: 'Construction wraps Fall 2027 — adding 40,000 sq ft of student space.',
    newsId: 'n1',
  },
  {
    id: 'sp2',
    headline: 'GSU Panthers ranked #2 in Sun Belt for student employment outcomes.',
    commentary: 'GSU continues to outperform larger schools in placing graduates into top firms.',
    newsId: 'n5',
  },
  {
    id: 'sp3',
    headline: 'Free mental health drop-in sessions added every Tuesday in Library North.',
    commentary: 'No appointment needed — counseling center expanding access amid high demand.',
    newsId: 'n9',
  },
];

export const mockNews: NewsItem[] = [
  { id: 'n1', headline: 'GSU Breaks Ground on New $120M Student Center Expansion', source: 'Official GSU', category: 'Campus Life', timestamp: '2 hours ago', summary: 'The project will add co-working pods, a food hall, and a rooftop terrace for students.' },
  { id: 'n2', headline: 'Panthers Dominate Sun Belt Tournament — Headed to March Madness', source: 'GSU Signal', category: 'Athletics', timestamp: '4 hours ago', summary: "The men's basketball team clinched their first Sun Belt title in six years." },
  { id: 'n3', headline: 'CS Department Launches AI Ethics Certification Track for Undergrads', source: 'Official GSU', category: 'Academics', timestamp: '6 hours ago', summary: 'Students can now earn a recognized AI Ethics credential alongside their degree.' },
  { id: 'n4', headline: 'Panther Startup Weekend Returns — $10K Prize on the Line', source: 'Panther PIN', category: 'Events', timestamp: '8 hours ago', summary: 'Register by March 25 to pitch your startup idea to Atlanta VC judges.' },
  { id: 'n5', headline: 'GSU Ranks #2 in Sun Belt for Graduate Employment Outcomes', source: '@GeorgiaStateU', category: 'Academics', timestamp: '10 hours ago', summary: 'A new national study places GSU ahead of Auburn and Troy in employment rates 6 months post-graduation.' },
  { id: 'n6', headline: 'New Affordable Housing Units Available Near Campus — Apply Now', source: 'Official GSU', category: 'Housing', timestamp: '12 hours ago', summary: 'GSU partnered with two Midtown developers to secure 200 below-market units for enrolled students.' },
  { id: 'n7', headline: 'Spring 2026 Registration Opens March 22 — Tips to Get Your Classes', source: 'GSU Signal', category: 'Academics', timestamp: '1 day ago', summary: 'Advisors recommend completing your PAWS registration early as popular courses fill within minutes.' },
  { id: 'n8', headline: 'Intramural Soccer Playoffs Kick Off This Saturday at Turner Field', source: 'Panther PIN', category: 'Events', timestamp: '1 day ago', summary: 'Sixteen teams compete this weekend — spectators welcome, no ticket required.' },
  { id: 'n9', headline: 'Free Mental Health Drop-In Sessions Added Every Tuesday', source: 'Official GSU', category: 'Health', timestamp: '1 day ago', summary: 'Walk-in availability in Library North, Room 202. No appointment needed.' },
  { id: 'n10', headline: 'GSU Dining Adds Late Night Hours at Urban Eats — Open Until 2AM', source: '@GeorgiaStateU', category: 'Campus Life', timestamp: '2 days ago', summary: 'Urban Eats will now serve full menus until 2AM on weekdays starting this week.' },
  { id: 'n11', headline: 'New Bike Share Program Launches Across Downtown Atlanta Campus', source: 'GSU Signal', category: 'Campus Life', timestamp: '2 days ago', summary: 'GSU students get free first-ride and 50% off monthly subscriptions with their Panther Card.' },
  { id: 'n12', headline: "Women's Track Team Sets Three New School Records at Invitational", source: '@GeorgiaStateU', category: 'Athletics', timestamp: '2 days ago', summary: 'Sophomore Aaliyah Brooks broke the 400m school record by 0.8 seconds.' },
  { id: 'n13', headline: 'GSU Engineering Students Win National Bridge Building Competition', source: 'Official GSU', category: 'Academics', timestamp: '3 days ago', summary: 'A team of five civil engineering juniors took first place at the ASCE National Championship.' },
  { id: 'n14', headline: 'Career Fair Spring 2026 — Over 120 Companies Attending March 30', source: 'Panther PIN', category: 'Events', timestamp: '3 days ago', summary: 'Delta, NCR, and Deloitte will be on campus for GSU\'s largest career fair.' },
  { id: 'n15', headline: 'Parking Deck on Decatur St. Closed April 1–7 for Repairs', source: 'Official GSU', category: 'Campus Life', timestamp: '3 days ago', summary: 'The University advises students to use MARTA or the Piedmont Ave garage during the closure.' },
  { id: 'n16', headline: 'Robinson College of Business Launches New Fintech Specialization', source: 'GSU Signal', category: 'Academics', timestamp: '4 days ago', summary: 'The new track covers blockchain, algorithmic trading, and financial data science.' },
  { id: 'n17', headline: 'GSU Wins Tree Campus USA Designation for Third Consecutive Year', source: '@GeorgiaStateU', category: 'Campus Life', timestamp: '4 days ago', summary: "The Arbor Day Foundation recognized GSU's urban greening initiatives across all downtown properties." },
];
