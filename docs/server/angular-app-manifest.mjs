
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/serviços"
  },
  {
    "renderMode": 2,
    "route": "/contatos"
  },
  {
    "renderMode": 2,
    "route": "/sobrenós"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 38782, hash: 'c3c92fdd70c244caeeae24533fd21b7695ee2e48dc4835839b61b5909f973181', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1009, hash: '9644d49ab228d2387f5d3df59fe9518e054c0f5d4adf42c97509b49ea71baec1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contatos/index.html': {size: 87696, hash: '6653cf433cc0618c28be1fe510b4355b65b5517dd3fae8c9e8d63b441fdd4d89', text: () => import('./assets-chunks/contatos_index_html.mjs').then(m => m.default)},
    'index.html': {size: 87079, hash: '1c91663683804dd1fd7232aad75e5982d4dedc8967d3a3fe1301cb63cc648c58', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'sobrenós/index.html': {size: 86417, hash: '3b8b16c67835e8fb9a060815190179c1afe7f06a13ab3385c4d9fea4c5760893', text: () => import('./assets-chunks/sobrenós_index_html.mjs').then(m => m.default)},
    'serviços/index.html': {size: 87395, hash: 'bc830c0ef02ef846ab8512ebe1c00e00af6bccd8394982b49e81a4b20cd9972a', text: () => import('./assets-chunks/serviços_index_html.mjs').then(m => m.default)},
    'styles-BRXK3OWB.css': {size: 468170, hash: 'UevtBFJQ7Ek', text: () => import('./assets-chunks/styles-BRXK3OWB_css.mjs').then(m => m.default)}
  },
};
