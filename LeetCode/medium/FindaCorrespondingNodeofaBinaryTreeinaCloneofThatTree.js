// https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/submissions/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
    if(original == target)
        return cloned;
    
    if(original.left != null){
        if(original.left == target)
            return cloned.left;
        else{
            result = getTargetCopy(original.left, cloned.left, target);
            if(result != null)
                return result;
        }
    }

    if(original.right != null){
        if(original.right == target)
            return cloned.right
        else
            return getTargetCopy(original.right, cloned.right, target);
    }

    return null;
};