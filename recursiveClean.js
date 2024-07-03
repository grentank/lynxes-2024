const fs = require('fs');

// выдала массив путей до удалённых node_modules
function recursiveClean(dir) {
  const nodeModulesPaths = [];
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (let index = 0; index < files.length; index++) {
    const dirent = files[index];
    if (dirent.name === 'pgdata') continue;
    if (dirent.name === 'node_modules') {
      nodeModulesPaths.push(`${dir}/${dirent.name}`); // rm -rf
    //   fs.rmSync(`${dir}/${dirent.name}`, { recursive: true, force: true });
    } else if (dirent.isDirectory()) {
      nodeModulesPaths.push(...recursiveClean(`${dir}/${dirent.name}`));
    }
  }
  return nodeModulesPaths;
}

console.log(recursiveClean('/home/grentank/elbrus'));
