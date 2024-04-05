

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.DFmiJolV.js","_app/immutable/chunks/scheduler.C4oa1xg2.js","_app/immutable/chunks/index.D6OYJ-oF.js"];
export const stylesheets = ["_app/immutable/assets/0.DX_C8T1J.css"];
export const fonts = [];
