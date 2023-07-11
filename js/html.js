//banner轮播图设计
let i=0;
    //获取轮播按钮
const prev=document.querySelector('.btn-left')
const next=document.querySelector('.btn-right')
  
    //点击切换函数
const imgList=document.getElementsByClassName('banner_img')
function sliderTo(prev,next){
    imgList[prev].classList.remove('opacity_1')
    imgList[prev].classList.add('opacity_0')
    imgList[next].classList.remove('opacity_0')
    imgList[next].classList.add('opacity_1')
}
// 轮播图定时器
let carousel=setInterval(()=>{
    next.click()
},5000)
document.querySelector('.list_item').addEventListener('mouseover',()=>{
    clearInterval(carousel)
})
document.querySelector('.list_item').addEventListener('mouseleave',()=>{
    carousel=setInterval(()=>{
        next.click()
    },5000)
})

    //点击事件
prev.addEventListener('click',()=>{
    let prev=i,next=i
    if(i===0)
    {i=imgList.length-1}
    else{i-- }     
    next=i
    sliderTo(prev,next)
})
next.addEventListener('click',()=>{
    let prev=i,next=i
    if(i===imgList.length-1)
    {i=0;}
    else
    {i++} 
    next=i      
    sliderTo(prev,next)
})

//一键更改加入购物车标签
const cart=document.querySelectorAll('.add-to-cart-btn')
cart.forEach(item=>{
    item.innerHTML='<i class="fa fa-shopping-cart"></i> 加入购物车'
})

//一键更改加入喜欢标签
const wishlist=document.querySelectorAll('.add-to-wishlist')
wishlist.forEach(item=>{
    item.innerHTML='<i class="fa fa-heart-o"></i><span class="tooltipp">加入我的喜欢</span>'
})

//一键更改加入比较标签
const compare=document.querySelectorAll('.add-to-compare')
compare.forEach(item=>{
    item.innerHTML='<i class="fa fa-exchange"></i><span class="tooltipp">加入比较</span>'
})

//一键更改快速预览标签
const view=document.querySelectorAll('.quick-view')
view.forEach(item=>{
    item.innerHTML='<i class="fa fa-eye"></i><span class="tooltipp">快速预览</span>'
})

//一键更改货币标签
const currency=document.querySelectorAll('.product-price')
currency.forEach(item=>{
    item.innerHTML='￥980.00 <del class="product-old-price">￥990.00</del>'
}
)

// 导航按钮指定页面滚动
const li1=document.querySelector('.navbar-nav').childNodes[3]
const li2=document.querySelector('.navbar-nav').childNodes[5]
const li3=document.querySelector('.navbar-nav').childNodes[7]
const recommend = document.querySelector('.goods_recommend').offsetTop
const new1 = document.querySelector('.goods_new').offsetTop
const crazy = document.querySelector('.goods_crazy').offsetTop
li1.addEventListener('click',()=>{
    document.documentElement.scrollTop=recommend
})
li2.addEventListener('click',()=>{
    document.documentElement.scrollTop=new1
})
li3.addEventListener('click',()=>{
    document.documentElement.scrollTop=crazy
})
document.querySelector('.goTop').addEventListener('click',()=>{
    document.documentElement.scrollTop=0
})





