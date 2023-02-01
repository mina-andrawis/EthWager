var projects = {
    'cryptopunks':'Crypto Punks',
    'boredapeyachtclub':'Bored Ape Yacht Club',
    'mutant-ape-yacht-club':'Mutant Ape Yacht Club',
    'otherdeed':'Otherdeed for Otherside',
    'azuki':'Azuki',
    'clonex':'CLONE X - X TAKASHI MURAKAMI',
    'proof-moonbirds':'Moonbirds',
    'sandbox':'The Sandbox',
    'doodles-official':'Doodles',
    'meebits':'MeeBits',
    }
    
export const projectSlugs = Object.keys(projects);
export const projectNames = Object.values(projects);

function findProjSlug(projName) {
    for (var key in projects) {
        if (projects[key] === projName) {
            return key;
        }
    }
  }
