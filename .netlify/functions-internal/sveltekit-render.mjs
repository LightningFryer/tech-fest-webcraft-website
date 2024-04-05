import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.WKLEOhsh.js","app":"_app/immutable/entry/app.BeizIVBS.js","imports":["_app/immutable/entry/start.WKLEOhsh.js","_app/immutable/chunks/entry.CmIQyySP.js","_app/immutable/chunks/scheduler.C4oa1xg2.js","_app/immutable/entry/app.BeizIVBS.js","_app/immutable/chunks/scheduler.C4oa1xg2.js","_app/immutable/chunks/index.D6OYJ-oF.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
