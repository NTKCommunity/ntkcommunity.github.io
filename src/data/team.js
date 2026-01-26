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
import hemrajPant2024 from './team/past-members/hemraj-pant-2024.json';
import biratAryal2024 from './team/past-members/birat-aryal-2024.json';

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
    hemrajPant2024,
    biratAryal2024
];

// Group by tenure
const tenures = [...new Set(allMembers.map(member => member.tenure))].sort().reverse();

export const teamData = tenures.map(tenure => ({
    tenure,
    executives: allMembers.filter(member => member.tenure === tenure)
}));
