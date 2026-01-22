export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["robots.txt"]),
	mimeTypes: {".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.CT75Rjqh.js",app:"_app/immutable/entry/app.CO3L7DdU.js",imports:["_app/immutable/entry/start.CT75Rjqh.js","_app/immutable/chunks/B3-nZul-.js","_app/immutable/chunks/BO1pjU3Q.js","_app/immutable/chunks/eh-9G0S9.js","_app/immutable/entry/app.CO3L7DdU.js","_app/immutable/chunks/BO1pjU3Q.js","_app/immutable/chunks/DDxEu6_V.js","_app/immutable/chunks/TMDr__BM.js","_app/immutable/chunks/eh-9G0S9.js","_app/immutable/chunks/Bc6lMjQd.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
