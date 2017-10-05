import "../res/style.css";
import $ from "zepto";
function App() {
    //计算元素是否已经出现在窗口的可视范围
    //todo  后面页面通用
    function isShow($el){
      var winH = $(window).height(),//获取窗口高度
            scrollH = $(window).scrollTop(),//获取窗口滚动高度
            top = $el.offset().top;//获取元素距离窗口顶部偏移高度
      if(top < scrollH + winH){
          return true;//在可视范围
        }else{
          return false;//不在可视范围
        }
      };
      $(window).on('scroll', function(){//监听滚动事件
        //todo 去抖动
        checkShow();
    })
    function checkShow(){//检查元素是否在可视范围内
        $('#page2').find("img").each(function(){//遍历每一个元素
            var $cur = $(this);
            var kk=$("#page2")
            var isloaded=$("#page2").attr("isloaded");
             console.log(isloaded);
            if(isloaded=="true"){return;}//判断是否已加载
             if (isShow($("#page2"))) {
               console.log("aaa");
                showImg($cur); 
             }     
        }); 
         $("#page2").attr("isloaded","true");  
    }
     function showImg($el){
        $el.attr('src',$el.attr('data-src'));
    };
    // $("#video").play();
    document.getElementById("video").play();
    // //touch控制滑动
    //  var startX,//触摸时的坐标
    //          startY,
    //           x, //滑动的距离
    //           y,
    //           aboveY=0; // 设一个全局变量记录上一次内部块滑动的位置
    //        var documentHeight=$("#page").height();//内部滑动模块的高度
    //        var wapperHeight=$("body").height(); //外部框架的高度
    //        var inner=document.getElementById("page");   
    //          function touchStart(e){//触摸开始
    //              e.preventDefault();
    //              var touch=e.touches[0];
    //              startY = touch.pageY;   //刚触摸时的坐标                      
    //          }
    //          function touchMove(e){//滑动
    //               e.preventDefault();
    //              var  touch = e.touches[0];               
    //               y = touch.pageY - startY;//滑动的距离                                          
    //               inner.style.top=aboveY+y+"px";                    
    //          }  
 
    //          function touchEnd(e){//手指离开屏幕                         
    //               aboveY=parseInt(inner.style.top);//touch结束后记录内部滑块滑动的位置 在全局变量中体现 一定要用parseInt()将其转化为整数字;
    //               console.log(aboveY);
    //                if(y>0&&aboveY>0){//当滑动到最顶端时候不能再网上滑动
    //                     //  $("#page").animate({top:0},200);
    //                     $("#page")[0].style.transtion="all 500ms ease-out";
    //                     $("#page")[0].style.webkitTransform="translate3D(0,0,0)"
    //                     aboveY=0;
    //                  } 
    //                if(y<0&&(aboveY<(-(documentHeight-wapperHeight)))){
    //                  //当滑动到最底部时候不能再网下滑动
    //                  // inner.style.top=-(documentHeight-wapperHeight)+"px";
    //                   console.log($("#page"));
    //                   $("#page")[0].style.transtion="all 500ms ease-out";
    //                     $("#page")[0].style.webkitTransform="translate3D(0,100px,0)"
    //                   //  document.getElementById("page").animate({top:-(documentHeight-wapperHeight)},200);
    //                   aboveY=-(documentHeight-wapperHeight);
    //                } 
    //          }//
    //         document.addEventListener('touchstart', touchStart,false);  
    //          document.addEventListener('touchmove', touchMove,false);  
    //          document.addEventListener('touchend', touchEnd,false);  
   
}
new App();