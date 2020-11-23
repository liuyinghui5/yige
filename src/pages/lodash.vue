<style scoped>
    /*<style lang='less' scoped>*/
    /*@import '../less/mixin';*/
    .lodash {
    }
    .out {
        width: 200px;
        height: 200px;
        border: 1px solid red;
    }
    .child {
        width: 100px;
        height: 100px;
        border: 1px solid blue;
    }
</style>
<template>
    <div class="lodash">
        <div class="out">
            <div class="child"></div>
        </div>

        <!--<div ref="aa"></div>-->
        <div>ss</div>
        <Radio v-model="single">Radio</Radio>

        <div>面试测试用</div>
        <div> 1.数组去重 </div>
        <div> 2.数组冒泡排序;</div>
        <div> 3.数组二分法快速排序;</div>
        <div> 4.查找最多字符;</div>
        <div> 5.闭包;</div>
        <div> 6.原型链继承;</div>

    </div>
</template>

<script>
    import {Radio} from 'iview'

    export default {
        props: {},
        data() {
            return {
                can: '',
                single: false,
            }
        },
        computed: {},
        methods: {},
        mounted() {
            const arr = ['',[],null,-0.06,'0',0,NaN,function(){}]
            let sum = 0;
            for (let i =0;i<arr.length;i++) {
                if(arr[i]) sum++
            }
            console.log('打印的sum++ ->', sum++)
            for(var a=1,b=2;a<5,b<4;a++,b++) {

            }
            console.log('打印的++a ->', ++a)
            console.log('打印的b++ ->', b++)


                var A = {
                    A:function() {
                    	console.log(666)
                    }
                }

            A.A();

//            console.log('打印的++a + b++ ->', ++a + b++)

//    8月2日面试 手写;

//            var arr1 = [1, 4, 4, 4, 4, 4, 6, 2, 3];
//            var arr2 = [];
//            for (var i = 0; i < arr1.length; i++) {
//                if (arr2.indexOf(arr1[i]) == -1) {
//                    arr2.push(arr1[i])
//                }
//            }
//            console.log('1.数组去重 ->', arr2)
//
//            var arr3 = Array.from(new Set([5, 6, 7, 8, 9, 9, 9, 9]))
//            console.log('2.ES6数组去重 ->', arr3)
//
//
//            var arr4 = [1, 4, 6, 2, 3];
//            var temp1;
//            for (var i = 0; i < arr4.length; i++) {
//                for (var j = i + 1; j < arr4.length; j++) {
//                    if (arr4[i] < arr4[j]) {
//                        temp1 = arr4[i];
//                        arr4[i] = arr4[j];
//                        arr4[j] = temp1;
//                    }
//                }
//            }
//            console.log('3.冒泡排序 ->', arr4)
//
//            var arr5 = [1,9,6,8,2,4,7]
//            function qp(arr) {
//            	if(arr.length<1) {
//            		return arr;
//                }
//                var half = Math.floor(arr.length/2);
//                var outHalf = arr.splice(half,1)[0];
//                var left=[];
//                var right =[];
//                for(var i = 0; i<arr.length; i++) {
//                	if(arr[i] < outHalf) {
//                		left.push(arr[i])
//                    }else {
//                		right.push(arr[i])
//                    }
//                }
//                return qp(left).concat([outHalf],qp(right));
//            }
//            console.log('3.快速排序 ->', qp(arr5))
//
//
//            var str1 = 'aaaaabcd';
//            var j = {};
//            var num = 0;
//            var s = '';
//
//            for(var i =0;i<str1.length;i++) {
//            	if(!j[str1.charAt(i)]) {
//            		j[str1.charAt(i)] = 1;
//                }else {
//                    j[str1.charAt(i)]++;
//                }
//            }
//            for(var item in j) {
//                //这里的item是 a,b,c,d
//                if(j[item]>num) {
//            		num = j[item]
//                    s = item
//                }
//            }
//            console.log('4.查找最多字符是什么 ->', s,num+'个')
//
//
//            function f1() {
//            	var f1bl = 1;
//            	function f2() {
//                    console.log('5.闭包,f1的变量是:',f1bl)
//                }
//                return f2;
//            }
//            var f3 = f1();
//            f3();
//
//
//            function student(name) {
//               this.name=name;
//            }
//            student.prototype.sayHello = function() {
//                console.log('6.原型链继承: hello'+this.name)
//            }
//            var person = new student('英俊');
//            person.sayHello();
//
//    8月8日面试 手写;

//            var arr = [2,5,8,1,3,4,4,4,4];
//            var arr2 =[];
//            var temp;
//            for(var i=0;i<arr.length;i++) {
//            	if(arr2.indexOf(arr[i]) == -1) {
//            		arr2.push(arr[i])
//                }
//            }
//            console.log(Array.from(new Set([1,1,1,2,3,4])))
//            for(var i =0;i<arr2.length;i++) {
//            	for(var j = i+1;j<arr2.length;j++) {
//            		if(arr2[i]>arr2[j]) {
//            			temp = arr2[i];
//            			arr2[i]=arr2[j];
//            			arr2[j]=temp;
//                    }
//                }
//            }
//            console.log(arr2)
//            var ste = 'aaass';
//            var o = {};
//            for(var i =0;i<ste.length;i++) {
//            	if(!o[ste.charAt(i)]) {
//                    o[ste.charAt(i)] = 1
//                }else {
//                    o[ste.charAt(i)]++
//                }
//            }
//            for(var item in o) {
//            	console.log(item,o[item])
//            }
//            console.log(o)


//            var arra = 'http://www.baidu.com?id=1&user=2';
//            var t = '?id=1&user=2';
//            var x =t.substring(1)
//            var d = x.split('&');
//            var ob = {};
//            for(var i=0;i<d.length;i++) {
//            	ob[d[i].split('=')[0]] = d[i].split('=')[1];
//            }
//            console.log('打印的ob ->', ob)


        },
        destroyed() {
        }
    }


</script>
