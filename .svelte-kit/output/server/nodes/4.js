import * as server from '../entries/pages/sverdle/_page.server.js';

export const index = 4;
export const component = async () => (await import('../entries/pages/sverdle/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/sverdle/+page.server.js";
export const imports = ["_app/immutable/nodes/4.cb47c673.js","_app/immutable/chunks/index.05b97c2d.js","_app/immutable/chunks/parse.d12b0d5b.js","_app/immutable/chunks/singletons.170cb9d1.js","_app/immutable/chunks/index.22269ec3.js"];
export const stylesheets = ["_app/immutable/assets/4.9d501049.css"];
export const fonts = [];
