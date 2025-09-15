const fs = require('fs-extra');
const path = require('path');

const sourceDir = path.join(__dirname, 'docs', 'browser');
const destDir = path.join(__dirname, 'docs');

// Move os arquivos de docs/browser para docs/
fs.copySync(sourceDir, destDir);
// Remove a pasta browser
fs.removeSync(sourceDir);

console.log('Arquivos movidos com sucesso para a pasta raiz "docs".');