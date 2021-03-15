import { sections } from './sections'
export * from './about'

export const activateSection = (sectionId) => sections.array.forEach(element =>
  element === sectionId ?
    document.getElementById(sectionId).className = 'ls-result active'
    : document.getElementById(sectionId).className = 'ls-result'
);