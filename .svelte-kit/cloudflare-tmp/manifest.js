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
		client: {start:"_app/immutable/entry/start.CmO34Grw.js",app:"_app/immutable/entry/app.CdOF8dAQ.js",imports:["_app/immutable/entry/start.CmO34Grw.js","_app/immutable/chunks/D8p9mwtT.js","_app/immutable/chunks/BhboSial.js","_app/immutable/chunks/C6lQ870R.js","_app/immutable/entry/app.CdOF8dAQ.js","_app/immutable/chunks/BhboSial.js","_app/immutable/chunks/DmpaQNZE.js","_app/immutable/chunks/eu7lJzMi.js","_app/immutable/chunks/C9kA06Cv.js","_app/immutable/chunks/C6lQ870R.js","_app/immutable/chunks/Cbpx5HPv.js","_app/immutable/chunks/znAL6840.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
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

export const prerendered = new Set([]);

export const base_path = "";
