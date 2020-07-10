/**
 * 快速排序
 * 何为快速排序，他就是快吗，怎么快，分治法
 */

if (!window.utils) {
    fn.utils = window.utils = {};
}

/**
 * 快速排序（从小到大排序）
 * 1. 特点
 * （1）挖坑法，分治法 最快
 * （2）递归
 * 
 */
fn.utils.beginQuickSort = (arr) => {
    if(arr.length <=0){
        return;
    }

    let left = 0;
    let right = arr.length - 1;
    quickSort(arr, left, right);
    for(let i in arr) {
        console.log("[" + i + "]" + "=" + arr[i]);
    }
}

// 递归调用
var quickSort = (arr, left, right) => {
    if (left >= right) {
        return;
    }

    let pivot = quickSortOne(arr, left, right);
    quickSort(arr, left, pivot - 1);
    quickSort(arr, pivot + 1, right);
}


/**
 * 排序一次
 * 来源：https://www.sohu.com/a/246785807_684445
 * 首先，我们选定基准元素Pivot，并记住这个位置index，这个位置相当于一个“坑”。并且设置两个指针left和right，指向数列的最左和最右两个元素：
 * 接下来，从right指针开始，把指针所指向的元素和基准元素做比较。如果比pivot大，则right指针向左移动；如果比pivot小，则把right所指向的元素填入坑中。
 * 接下来，我们切换到left指针进行比较。如果left指向的元素小于pivot，则left指针向右移动；如果元素大于pivot，则把left指向的元素填入坑中。
 * @param {Array.<number>} arr
 * @param {number} left 
 * @param {number} right 
 * @returns {number} - pivot 基准下标
 */
var quickSortOne = (arr, left, right) => {
    // 基准
    let pivot_index = left;
    let pivotValue = arr[pivot_index];
    while (left < right) {
        // 先从右边开始找小于基准的值，没找到，从右边下一个元素
        while ((left < right) && (arr[right] >= pivotValue)) {
            right--;
        }

        // 找到了小于基准的值， 把元素填入左边的坑中 左下标往右移动一步 第一个坑就是基准所在的下标
        if ((left < right) && (arr[right] < pivotValue)) {
            arr[left] = arr[right];
            left++;
        }

        // 接着从左边开始找大于的基准的值，没有就 左边下一个元素
        while ((left < right) && (arr[left] < pivotValue)) {
            left++;
        }

        // 找到了大于基准的值，把元素填入右边的坑中，右下标往前移一步
        if ((left < right) && (arr[left] > pivotValue)) {
            arr[right] = arr[left];
            right--;
        }
    }

    // 最后一步把基准元素填入最后的坑中
    if (left === right) {
        arr[left] = pivotValue;
        pivot_index = left;
    }

    // 返回当前的基准
    return pivot_index;
}
