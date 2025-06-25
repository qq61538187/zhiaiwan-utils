const fs = require('node:fs');
const acorn = require('acorn');
const walk = require('acorn-walk');
const astring = require('astring');
const { attachComments } = require('astravel'); // 用于挂载注释


function getAstFileContent(sourceDir){

  const comments = [];
  const fileContent = fs.readFileSync(sourceDir, 'utf8');

  const ast = acorn.parse(fileContent, {
    ecmaVersion: 2020,
    sourceType: 'script',
    locations: true,
    ranges: true,
    onComment: comments,
  });

  // 将注释附加到 AST 节点上
  attachComments(ast, comments, ast.tokens);

  // 移除 require 语句
  walk.simple(ast, {
    VariableDeclaration(node) {
      node.declarations = node.declarations.filter(decl => {
        return !(
          decl.init?.type === 'CallExpression' &&
          decl.init.callee?.name === 'require'
        );
      });
      if (node.declarations.length === 0) node._shouldRemove = true;
    },
    ExpressionStatement(node) {
      if (
        node.expression?.type === 'CallExpression' &&
        node.expression.callee?.name === 'require'
      ) {
        node._shouldRemove = true;
      }
    },
  });

  ast.body = ast.body.filter(node => !node._shouldRemove);

  // 生成代码并保留注释
  return astring.generate(ast, {
    comments: true,
    indent: '  ',
  });
}


module.exports = {
  getAstFileContent
}
