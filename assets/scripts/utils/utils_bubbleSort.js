/**
 * 冒泡排序
 */

if (!window.utils) {
   fn.utils = window.utils = {};
}


/**
 * 冒泡排序(从小到大)
 * 1.特点
 * （1）比较相邻的元素，如果前一个比后一个大，交换之。
 * @param {Array.<number>} arr 
 * 
 */
fn.utils.beginBubbleSort = (arr) => {
   let length = arr.length;
   if (length == 0) return;

   for (let i = 0; i < length; ++i) {
      for (let j = 0; j < length - 1 - i; ++j) { // length = 8 j =7
         if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
         }
      }
   }

   for (let i = 0; i < arr.length; ++i) {
      console.log("[" + i + "]" + "=" + arr[i]);
   }
}
