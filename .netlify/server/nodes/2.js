

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.YKmJta6J.js","_app/immutable/chunks/scheduler.C4oa1xg2.js","_app/immutable/chunks/index.D6OYJ-oF.js"];
export const stylesheets = ["_app/immutable/assets/2.BwxPUose.css"];
export const fonts = [];
