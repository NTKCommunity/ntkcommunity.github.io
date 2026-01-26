// Import executive members
import hemrajPant from './team/executives/hemraj-pant.json';
import biratAryal from './team/executives/birat-aryal.json';
import nirajBhusal from './team/executives/niraj-bhusal.json';
import aakritiDahal from './team/executives/aakriti-dahal.json';
import anishaSwarnkar from './team/executives/anisha-swarnkar.json';
import gauravJoshi from './team/executives/gaurav-joshi.json';
import arunimaChand from './team/executives/arunima-chand.json';
import suprimJoshi from './team/executives/suprim-joshi.json';
import dineshShakya from './team/executives/dinesh-shakya.json';

// Import past members
import satyarajAwasthi from './team/past-members/satyaraj-awasthi.json';
import advisor1 from './team/past-members/advisor-1.json';
import pastCoordinator from './team/past-members/past-coordinator.json';
import pastTechLead from './team/past-members/past-tech-lead.json';

// Group team members by tenure (executives only, not sub-community captains)
const allMembers = [
    hemrajPant,
    biratAryal,
    nirajBhusal,
    aakritiDahal,
    anishaSwarnkar,
    gauravJoshi,
    arunimaChand,
    suprimJoshi,
    dineshShakya,
    satyarajAwasthi,
    advisor1,
    pastCoordinator,
    pastTechLead
];

// Group by tenure
const tenures = [...new Set(allMembers.map(member => member.tenure))].sort().reverse();

export const teamData = tenures.map(tenure => ({
    tenure,
    executives: allMembers.filter(member => member.tenure === tenure)
}));
