//按钮显示
let product=document.querySelectorAll('.allProduct .product');
let checkMore=document.querySelectorAll('.checkMore');
console.log(product,checkMore);
product.forEach((ele,index)=>{
    ele.onmouseenter=function(){
        animate(checkMore[index],{opacity:1});
    };
    ele.onmouseleave=function(){
        animate(checkMore[index],{opacity:0});
    }
});
//结束
