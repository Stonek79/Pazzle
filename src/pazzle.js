import _ from 'lodash';

const makeJoints = (tree, parent) => {
  const [leaf, children] = tree;

  if (!children) {
    return { [leaf]: [parent] };
  }

  const flatChildren = _.flatten(children);
  // console.log(flatChildren);
  const neighbors = [...flatChildren, parent]
    .filter((n) => n && !_.isArray(n));

  return {
    [leaf]: neighbors,
    ...children.reduce((acc, c) => ({ ...acc, ...makeJoints(c, leaf) }), {}),
  };
};

const buildTreeFromLeaf = (joints, leaf) => {
  const iter = (current, acc) => {
    const checked = [...acc, current];
    const neighbors = joints[current]
      .filter((n) => !checked.includes(n))
      .map((n) => iter(n, checked));
    return _.isEmpty(neighbors) ? [current] : [current, neighbors];
  };

  return iter(leaf, []);
};
export default (primeBranch, ...branches) => {
  const customizer = (objValue, srcValue) => {
    if (_.isArray(objValue)) return _.uniq(objValue.concat(srcValue));
  };
  const joints = [primeBranch, ...branches].map((branch) => makeJoints(branch))
    .reduce((acc, joint) => _.mergeWith(acc, joint, customizer), {});
  const primeNode = primeBranch[0];
  const result = buildTreeFromLeaf(joints, primeNode);
  return result;
};
