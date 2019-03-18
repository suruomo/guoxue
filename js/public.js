//标题 返回显示隐藏
let topBar=document.querySelector('.topBar');
let backTop=document.querySelector('.backTop');
window.onscroll=function(){
    let scrollH=document.body.scrollTop||document.documentElement.scrollTop;
    if(scrollH>64){
        topBar.classList.add('topPos');
    }else{
        topBar.classList.remove('topPos');
    }
    if(scrollH>400){
        backTop.style.display='block';
    }else{
        backTop.style.display='none';
    }
    backTop.onclick=function(){
        animate(document.body,{scrollTop:0});
        animate(document.documentElement,{scrollTop:0});
    }
};
//结束

//下拉
let show=document.querySelectorAll('.show');
let duoRou=document.querySelector('.duoRou');
let meiGui=document.querySelector('.meiGui');
let dingZhi=document.querySelector('.dingZhi');
let arr=[duoRou,meiGui,dingZhi];
open(arr);
function open(){
    arr.forEach(function(ele,index){
        ele.onmouseenter=function(){
            show[index].style.display='block';
        }
        ele.onmouseleave=function(){
            show[index].style.display='none';
        }
    })
}
//结束


//简体中文 转换
let langChange=document.querySelector('.lang');
let langItems=langChange.querySelector('.langItems');
let times=0;
langChange.addEventListener('click',fn,false);
function fn(){
    if(times==0) {
        langItems.style.display = 'block';
        times++;
    }
    else{
        langItems.style.display = 'none';
        times--;
    }
}
