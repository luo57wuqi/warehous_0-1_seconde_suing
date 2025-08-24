const fs = require('fs');

try {
  const content = fs.readFileSync('d:/仓库网站开发/采购管理系统/jsconfig.json', 'utf8');
  JSON.parse(content);
  console.log('jsconfig.json 格式正确，没有语法错误。');
} catch (e) {
  console.error('jsconfig.json 格式错误:', e.message);
}