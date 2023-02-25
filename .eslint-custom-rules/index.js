const rules = {
  'no-untyped-hooks': {
    meta: {
      type: 'problem',
    },
    create (context) {
      const hooksToCheck = ['useRef', 'useState'];

      return {
        CallExpression(node) {
          if (hooksToCheck.includes(node.callee.name)) {
            const isNodeValueConsideredNullOrUndefined = (node) =>
              // we only validate literal/undefined values to avoid too much typescript complexity
              node.type === 'Literal'
                ? node.value === null || node.value === undefined
                : node.type === 'Identifier'
                ? node.name === 'undefined'
                : false;
            const isArgNullOrEmpty =
              node.arguments.length === 0 ||
              (node.arguments[0].type === 'ArrayExpression'
                ? node.arguments[0].elements.every(isNodeValueConsideredNullOrUndefined)
                : isNodeValueConsideredNullOrUndefined(node.arguments[0]));
            const isTypeParameterAbsent =
              !node.typeParameters || !node.typeParameters.params || node.typeParameters.params.length === 0;
            if (isArgNullOrEmpty && isTypeParameterAbsent) {
              context.report({
                node: node.callee,
                message: `Found ${node.callee.name} with null or empty initial value but without type parameter.`,
              });
            }
          }
        },
      };
    },
  },
};

module.exports = {
  rules,
};
