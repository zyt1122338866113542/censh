$(function(){
    var i=0;
    var  LIWIDTH=1200;
    var DURATION=500;
    var LICOUNT=4;
    //dom4步
    var ulImgs=document.getElementById("ul-img");
    var ulIdexs=document.getElementById("ul-idxs");
    var btnLeft=document.getElementById("btn-left");
    var btnRight=document.getElementById("btn-right");
    //设置一个开关
    var canClick=true;
    var lis=ulIdexs.children;
    function moveTo(to){
        //没有给to，就默认到下一张
        if(to==undefined){
            to=i+1;
        }
        //如果i为0，从头开始，就重新加上transition
        if(i==0){
            //i为0，点右边的按钮切换图片
            if(to>i){
                ulImgs.className="transition";
            }else{
            //i为0，点左边的按钮切换图片
            //将ulImg类名清空，底层操作
            ulImgs.className="";
            //瞬间将ulImg的marginleft为最左边
            ulImgs.style.marginLeft=-LIWIDTH*LICOUNT+"px";
            //定时器操作切换
            setTimeout(function(){
                moveTo(LICOUNT-1);
                },100)
                return;
            }
        }
        //把现在要去的位置给i,
        i=to;
        //判断当前的位置，通过i来计算当前位置
        ulImgs.style.marginLeft=-LIWIDTH*i+"px";
        //如果当前在最后一张，应该重置为0
        if(i==LICOUNT){
            i=0;
            //延迟100ms,产生视觉效果
            setTimeout(function(){
                //先把ulImg不加transition，在底层操作，欺骗用户
                ulImgs.className="";
                //直接将marginleft置为0
                ulImgs.style.marginLeft=0;
            },DURATION)
        }
        //先把所有的小圆点的样式删除
        for(var li of lis){
            li.className="";
        }
        //添加当前的小圆点的样式
        lis[i].className="active"   
    }

    //给右按钮绑定事件
    btnRight.onclick=function(){
        move(1);
    }
    //给左边的按钮绑定事件
    btnLeft.onclick=function(){
        move(-1);
    }
    //封装移动的函数
    
    function move(n){
        //如果当前的开关是开的
        if(canClick){
            //调用moveTo，移动位置
            moveTo(n+i);
            //移动完，将开关关闭
            canClick=false;
            //设置定时器，当本地的动画完成后，将开关打开
            setTimeout(function(){
                canClick=true;
            },DURATION+100);

        }
    }
})