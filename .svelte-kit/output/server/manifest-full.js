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
		client: {start:"_app/immutable/entry/start.Ckt34WBX.js",app:"_app/immutable/entry/app.Cu35F76j.js",imports:["_app/immutable/entry/start.Ckt34WBX.js","_app/immutable/chunks/B3_ATCj3.js","_app/immutable/chunks/GuuOCaML.js","_app/immutable/chunks/Cu_gUnPZ.js","_app/immutable/entry/app.Cu35F76j.js","_app/immutable/chunks/GuuOCaML.js","_app/immutable/chunks/DI_Wr3xX.js","_app/immutable/chunks/BXZb3Wr6.js","_app/immutable/chunks/LMxKtVA3.js","_app/immutable/chunks/Cu_gUnPZ.js","_app/immutable/chunks/aHPi7g0r.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
