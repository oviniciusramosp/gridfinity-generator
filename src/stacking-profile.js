// The upper rail projects inward, with a lower lead-in and an upper 45° bevel.
// Below it, the box retains its configured wall thickness.
export const stackingProfile={height:3.8,inset:1.9,tip:.6,levels:[[0,1.2],[.7,1.9],[2.5,1.9],[3.8,.6]]};
export function stackingLevels(p){const lead=Math.max(.7,stackingProfile.inset-p.wall);return [[0,p.wall],[lead,1.9],[lead+1.8,1.9],[lead+3.1,.6]];}
export function stackingHeight(p){return stackingLevels(p).at(-1)[0];}
export function lidPocketInset(p){return p.wall;}
