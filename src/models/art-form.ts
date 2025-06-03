export type ArtForm = 'drawing' | 'painting' | 'photography' | 'sculpture' | 'literature' | 'film' | 'music' | 'dance';
export type ArtFormCode = 'DR' | 'PA' | 'PH' | 'SC' | 'LI' | 'FI' | 'MU' | 'DA';

const artFormMap: Record<ArtFormCode, ArtForm> = {
  'DR': 'drawing',
  'PA': 'painting',
  'PH': 'photography',
  'SC': 'sculpture',
  'LI': 'literature',
  'FI': 'film',
  'MU': 'music',
  'DA': 'dance'
};

export const artFormCodeToInternalRep = (code: ArtFormCode): ArtForm => {
  return artFormMap[code] || code;
}; 

export const artFormCodeToTitle = (code: ArtFormCode): string => {
  return artFormCodeToInternalRep(code).charAt(0).toUpperCase() + artFormCodeToInternalRep(code).slice(1);
};