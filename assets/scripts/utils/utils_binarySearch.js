/**
 * 
 *  二分查找 - 有序数组中查找某个数最好的方法
 */


if (!window.utils) {
    fn.utils = window.utils = {};
}

/**
 * 二分查找
 * @param {Array.<number>} arr - 查找的有序数组
 * @param {number} value - 查找的元素
 * @returns {number} - 查到就返回下标 ，没查到返回-1
 */
fn.utils.beginBinarySearch = (arr, value) => {
    //return BinarySearch(arr, value);
    let low = 0;
    let hight = arr.length - 1;
    return BinarySearchNew(arr, low, hight, value);
}

/**
 * 普通算法
 * @param {Array.<number>} arr 
 * @param {number} value 
 * @returns {number}
 */
var BinarySearch = (arr, value) => {
    //let mid = arr.length;
    let low = 0;
    let hight = arr.length - 1;
    // 从两头开始查找
    while (low <= hight) {
        let mid = Math.floor((low + hight) / 2);
        if (arr[mid] === value) {
            return mid;
        } else if (arr[mid] < value) {
            low = mid + 1;
        } else if (arr[mid] > value) {
            hight = mid - 1;
        }
    }

    return -1;
}

/**
 * 递归算法
 * @param {Array.<number>} arr 
 * @param {number} value 
 * @returns {number}
 */
var BinarySearchNew = (arr, low, hight, value) => {
    // 结束条件 
    if(low >= hight){
        return -1;
    }
    // 递归一次逻辑
    // 1. 取中间小标
    // 2. 判中间数相等
    // 3. 重复1
    let mid = Math.floor((low + hight) / 2);
    if (arr[mid] === value) {
        return mid;
    } else if (arr[mid] < value) {
        low = mid + 1;
    } else if (arr[mid] > value) {
        hight = mid - 1;
    }

    return BinarySearchNew(arr, low, hight, value);
}