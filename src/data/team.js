// Import all team member JSON files
import satyarajAwasthi from './team/satyaraj-awasthi.json';
import techLeadPlaceholder from './team/tech-lead-placeholder.json';
import prLeadPlaceholder from './team/pr-lead-placeholder.json';
import secretaryPlaceholder from './team/secretary-placeholder.json';
import eventCoordinatorPlaceholder from './team/event-coordinator-placeholder.json';
import exec1 from './team/exec-1.json';
import exec2 from './team/exec-2.json';
import exec3 from './team/exec-3.json';
import exec4 from './team/exec-4.json';
import exec5 from './team/exec-5.json';
import advisor1 from './team/advisor-1.json';
import pastCoordinator from './team/past-coordinator.json';
import pastTechLead from './team/past-tech-lead.json';

// Group team members by tenure
const allMembers = [
    satyarajAwasthi,
    techLeadPlaceholder,
    prLeadPlaceholder,
    secretaryPlaceholder,
    eventCoordinatorPlaceholder,
    exec1,
    exec2,
    exec3,
    exec4,
    exec5,
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
