
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Angelo-Solucoes/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Angelo-Solucoes"
  },
  {
    "renderMode": 2,
    "route": "/Angelo-Solucoes/serviços"
  },
  {
    "renderMode": 2,
    "route": "/Angelo-Solucoes/contatos"
  },
  {
    "renderMode": 2,
    "route": "/Angelo-Solucoes/sobrenós"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 38798, hash: 'cd029f1127028858979fd745b4f8b25969d1f37f08922a410a8d46b3cad2b70c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1025, hash: '895ef3b0d5b1635c563d628a2a489f5c1370d329e654f4b2b2a2ae86cb3fc5b7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'serviços/index.html': {size: 87411, hash: '76324a965fdcd31698b7501f4571fd3492ba96c6a4bf942120b3328a9a2ee6f7', text: () => import('./assets-chunks/serviços_index_html.mjs').then(m => m.default)},
    'contatos/index.html': {size: 87712, hash: 'f2eaee5806ed71134f8066c8f3d0236126ec975109a4d4ef67a43f08f25496d5', text: () => import('./assets-chunks/contatos_index_html.mjs').then(m => m.default)},
    'sobrenós/index.html': {size: 86433, hash: 'afe64a78fadc4a8b72918cf7ea8405a70744cdd7a75a3818d12462ca7debdcea', text: () => import('./assets-chunks/sobrenós_index_html.mjs').then(m => m.default)},
    'index.html': {size: 87095, hash: '8f5b2d7251381051279692277b899cd4b20f321696e8433b5730b39db14c9c97', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-BRXK3OWB.css': {size: 468170, hash: 'UevtBFJQ7Ek', text: () => import('./assets-chunks/styles-BRXK3OWB_css.mjs').then(m => m.default)}
  },
};
