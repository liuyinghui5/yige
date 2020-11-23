<template>
    <!-- 微信滑动删除信息 -->
	<div class="content">
        <ul class="listBox">
            <li v-for="(item,index) in ListMess" v-bind:style="{height:(Baseheight+1)+'px',width:Basewidth}" v-show="item.detailData" :key="index">
                <v-touch v-on:panstart="onpanstart(index)" v-on:panleft="onpanleft(index)" v-on:panright="onpanright(index)" v-on:panend="onSwipeend(index)">
                    <!-- 第一层 -->
                    <div  class="ItemOne" v-bind:style="{height:Baseheight+'px'}" >
                        <!-- 删除 -->
                        <div @click="aldete(index)" v-bind:style="{height:Baseheight+'px',width:deleWidth+'px',lineHeight:Baseheight+'px'}">{{item.dyTextO}}</div>
                        <!-- 已读 -->
                        <div @click="alread(index)" v-bind:style="{height:Baseheight+'px',width:readWidth+'px',lineHeight:Baseheight+'px'}">{{item.dyTextT}}</div>
                    </div>
                    <!-- 第二层 -->
                    <div class="ItemTwo"  v-bind:style="{left:item.leftDesi+'px',height:Baseheight+'px'}">
                        <div v-bind:style="{height:Baseheight+'px',width:Baseheight+'px'}">
                            <img :src="item.img" v-bind:style="{height:ImgHeight+'px',width:ImgHeight+'px',borderRadius:borderRadius+'px',marginTop:margintop+'px',}">
                            <i class="redRound" v-show="item.alRead"  v-bind:style="{height:redRoundH+'px',width:redRoundH+'px',backgroundColor:backcolorRou,borderRadius:(redRoundH/2)+'px',top:TOPw+'px',left:LEft+'px'}"></i>
                        </div>
                        <div v-bind:style="{height:Baseheight+'px',width:boxTwoW+'px',}">
                            <span v-bind:style="{top:nameTop+'px',left:nameLeft+'px',fontSize:nfontSize+'px'}">{{item.name}}</span>
                            <span v-bind:style="{top:timeTop+'px',right:timeRight+'px',fontSize:TfontSize+'px'}">{{item.time}}</span>
                        </div>
                    </div>
                </v-touch>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data () {
        return {
            "num":0,
            // "leftDesi":0,
            "data":0,
            "Baseheight":50,
            "Basewidth":'100%',
            // 删除 已读
            "deleWidth":50,
            // "alRead":false,
            "readWidth":80,
            // "detailData":true,
            // 图片
            "ImgHeight":40,
            "borderRadius":5,
            "margintop":5,
            "boxTwoW":322,
            // 名字和时间
            "nameTop":5,
            "nameLeft":10,
            "nfontSize":13,
            "timeTop":10,
            "timeRight":10,
            "TfontSize":13,
            // 已读圆点
            "redRoundH":6,
            "backcolorRou":"red",
            "TOPw":3,
            "LEft":40,
//            "detailData":true,
//            "leftDesi":0,
//            "alRead":true,
            ListMess:[
                {
                    "detailData":true,
                    "leftDesi":0,
                    "alRead":true,
                    "id":0,
                    "dyTextO":"删除",
                    "dyTextT":"标为已读",
                    "img":"../../static/img/1.jpg",
                    "name":"啦啦啦",
                    "time":"20：00"
                },
                {
                    "detailData":true,
                    "leftDesi":0,
                    "alRead":true,
                    "id":1,
                    "dyTextO":"删除",
                    "dyTextT":"标为已读",
                    "img":"../../static/img/2.jpg",
                    "name":"啦啦啦",
                    "time":"20：00"
                }
            ],

        }
    },
   methods: {
    //    开始
      onpanstart:function(index){
          console.log('111');
          this.$set(this.ListMess[index], 'leftDesi',0);

      },
    //   左滑
      onpanleft:function(index){
        //   isFlag = !isFlag
          console.log(index);
          this.num = index;
          if( this.data<=-65 ){
              this.data = -65;
              this.$set(this.ListMess[index], 'leftDesi',-130);
          }else{
            this.data--;
            console.log(this.data+'=====');
            this.$set(this.ListMess[index], 'leftDesi',this.data*2);
            // console.log('lalall');
          }
      },
    //   右滑
      onpanright:function(index){
          if(this.data >= 0 ){
               this.$set(this.ListMess[index], 'leftDesi',0);
               return false;
           }else{
               this.data++;
               console.log(this.data);
               if(this.data >= -30){
                   this.$set(this.ListMess[index], 'leftDesi',0);
               }else{
                   this.$set(this.ListMess[index], 'leftDesi',this.data*2);
               }
           }
      },
    //   结束
      onSwipeend:function(index){

      },
    //   已读
      alread:function(index){
          let Bool = this.ListMess[index].alRead;
          console.log( Bool +'++++++++')
          if(Bool == false){
            console.log('未读信息');
            // this.leftDesi = 0;
            this.$set(this.ListMess[index], 'leftDesi',0);
            this.data = 0;
            // this.alRead = true;
            this.$set(this.ListMess[index], 'alRead',true);
            this.$set(this.ListMess[index], 'dyTextT',"标为已读");
          }else{
            console.log('已读信息');
            // this.leftDesi = 0;
            this.$set(this.ListMess[index], 'leftDesi',0);
            this.data = 0;
            // this.alRead = false;
            this.$set(this.ListMess[index], 'alRead',false);
            this.$set(this.ListMess[index], 'dyTextT',"标为未读");
          }
      },
      //   删除
      aldete:function(index){
        //   this.detailData = false;
          this.$set(this.ListMess[index], 'detailData',false);
      }
  },
   mounted: function() {

	},
}
</script>
<style>
*{
    padding:0px;
    margin:0px;
}
li{
    list-style: none;
}
div{
    box-sizing: border-box;
}
.content{
    height: auto;
    width:100%;
    box-sizing: border-box;
}
.redRound{
    position: absolute;
}
.listBox{
    height:auto;
    width:100%;
    box-sizing: border-box;
}
.listBox li{
    box-sizing: border-box;
    position: relative;
    border-bottom:1px solid #ccc;
}
.ItemOne{
    width:100%;
}
.ItemOne>div:nth-child(1){
    background-color:red;
    color:#fff;
    float: right;
}
.ItemOne>div:nth-child(2){
    background-color:#ccc;
    color:#fff;
    float: right;
}
.ItemTwo{
    width:100%;
    position: absolute;
    top:0px;
    left:0px;
    background-color:#fff;
}
.ItemTwo>div:nth-child(1){
    float: left;
}
.ItemTwo div:nth-child(2){
    float: left;
    position: relative;
}
.ItemTwo>div:nth-child(2) span:nth-child(1){
    position: absolute;
}
.ItemTwo div:nth-child(2) span:nth-child(2){
    position: absolute;
}
</style>



