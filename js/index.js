//轮播
let banner=document.querySelector('.banner');
let pic=banner.querySelectorAll('.pic a');
let dot=banner.querySelectorAll('.dotAll a');
loop(banner,pic,dot);
function loop(){
    let moveWidth=parseInt(getComputedStyle(banner,null).width);
    console.log(banner, pic,dot,moveWidth);
    let current=0;
    let next=0;
    let t=setInterval(moveForward,4000);
    banner.onmouseenter=function(){
        clearInterval(t);
    };
    banner.onmouseleave=function(){
        t=setInterval(moveForward,4000);
    };
    function moveForward(){
        next++;
        if(next>pic.length-1){
            next=0;
        }
        pic[next].style.left=`${moveWidth}px`;
        animate(pic[current],{left:-moveWidth});
        animate(pic[next],{left:0},function(){
            flag=true;
        });
        dot[current].classList.remove('hot');
        dot[next].classList.add('hot');
        current=next;
    }
// function moveBack(){
//     next--;
//     if(next<0){
//         next=pic.length-1;
//     }
//     pic[next].style.left=`${-moveWidth}px`;
//     animate(pic[current],{left:moveWidth});
//     animate(pic[next],{left:0},function(){
//         flag=true;
//     });
//     dot[current].classList.remove('hot');
//     dot[next].classList.add('hot');
//     current=next;
// }
    dot.forEach((ele,index)=>{
        ele.addEventListener('click',function(){
            dot[current].classList.remove('hot');
            dot[index].classList.add('hot');
            if(current<index){
                pic[index].style.left=`${moveWidth}px`;
                animate(pic[current],{left:-moveWidth});
                animate(pic[index],{left:0});
            }
            if(index<current){
                pic[index].style.left=`${-moveWidth}px`;
                animate(pic[current],{left:moveWidth});
                animate(pic[index],{left:0});
            }
            current=index;
        },false)
    });
}
// 结束

//平移
let overBox=document.querySelector('.reMen .overAll');
let boxMove=parseInt(getComputedStyle(overBox,null).width)/2;
let btn=document.querySelectorAll('.reMen .btn');

horizonMove(btn,overBox);
function horizonMove(){
    let times=0;
    btn[0].onclick=function(){
        times--;
        if(times<0){
            return times=0;
        }
        else{
            animate(overBox,{left:boxMove*times});
        }
    };
    btn[1].onclick=function(){
        times++;
        if(times>1){
            return times=1;
        }
        else{
            animate(overBox,{left:-boxMove*times});
        }
    };
}
//结束

