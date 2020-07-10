/**
 * Merge 归并排序
 * 归并排序是用分治思想，分治模式在每一层递归上有三个步骤：
 * 1. 分解（Divide）：将n个元素分成个含n/2个元素的子序列。
 * 2. 解决（Conquer）：用合并排序法对两个子序列递归的排序。
 * 3. 合并（Combine）：合并两个已排序的子序列已得到排序结果。
 */


if (!window.utils) {
    fn.utils = window.fn = {};
}

/**
 * 归并排序
 * @param {Array.<number>} arr 
 * 测试 fn.utils.beginMergeSort([4, 7, 6, 5, 3, 2, 8, 1])
 */
fn.utils.beginMergeSort = (arr) => {
    let start_index = 0; // 开始下标
    let end_index = arr.length - 1; //结束下标
    MergeDivide(arr, start_index, end_index);

    for (let i = 0; i < arr.length; i++) {
        console.log("[" + i + "]" + " = " + arr[i]);
    }
}

/**
 * 递归 
 * 0. 一个数组选定中间下标为基准
 * 1.先基准包括基准的左边分区-搞到有序 （那左边数组怎么搞到有序呢，回到第0步）
 * 2.再右边分区-搞到有序  （那右边数组怎么搞到有序呢 回到第0步）
 * 3.合拼左右有序数组
 * @param {Array.<number>} arr 
 * @param {number} start 
 * @param {number} end 
 */
var MergeDivide = (arr, start, end) => {
    if (start >= end) {// start = end = 0 最后两个数不用分了，因为左右两边都是单独个数，即有序。例如[1, 7] 左边为[1] 右边为[7]， 数组[1]和数组[7]都是有序
        return;
    }

    let mid = start + Math.floor((end - start) / 2);
    MergeDivide(arr, start, mid);
    MergeDivide(arr, mid + 1, end);
    MergeCombineOne(arr, start, end); 
}

/**
 * 从小到大合拼两个 <有序> 数组
 * (1) fn.utils.merge([1, 7, 6, 8], 0, 3) 
 * (2) [1, 7] 和 [6,8] 合拼
 * (3) 这是是以中间元素为基准，分成两个有序的数组
 * @param {Array.<number>} arr 
 * @param {number} start - 以0下标开始的数组
 * @param {number} end - 以0下标开始的数组
 */
var MergeCombineOne = (arr, start, end) => {
    // 第一次：[start,end] = （0, 1）
    // 第二次：[start,end] = （2, 3）
    let mid = start + Math.floor((end -  start) / 2);
    let k = 0;
    let i = start;
    let j = mid + 1;
    let temp = [];
    while (i <= mid && j <= end) {// 遍历完其中一个数组就结束
        if (arr[i] < arr[j]) {// 第一个数组的值小
            temp[k] = arr[i];
            ++k;
            ++i;
        } else {// 第二个数组的值小
            temp[k] = arr[j];
            ++k;
            ++j
        }
    }

    // 把剩余的数组元素拼接在新数组后面
    while (i <= mid) {
        temp[k] = arr[i];
        ++k;
        ++i;
    }

    while (j <= end) {
        temp[k] = arr[j];
        ++k;
        ++j;
    }

    // 把temp赋值给数组
    for (let i = 0; i < temp.length; i++) {
        arr[start] = temp[i];
        start++;
    }
}

