//公用方法调用
yx.public.navFn();
yx.public.lazyImgFn();
yx.public.backUpFn();

//banner图轮播
var bannerPic=new Carousel();
bannerPic.init({
    id:'bannerPic',               //轮播图父级的id,必需传的参数
    autoplay:true,          //自动播放，true为自动，false为不自动， 默认为true
    intervalTime:3000,      //间隔时间，运动后停顿的时间，默认1s
    loop:true,              //循环播放，true为循环， false为不循环， 默认为true
    totalNum:5,             //图片总量
    moveNum:1,              //单次运动的图片数量(图片总量必须为运动数量的整倍数)
    circle:true,            //小圆点功能，true为显示，false为不显示， 默认显示
    moveWay:'opacity'
});
//新品首发轮播
var newProduct=new Carousel();
newProduct.init({
    id:'newProduct',               //轮播图父级的id,必需传的参数
    autoplay:false,          //自动播放，true为自动，false为不自动， 默认为true
    intervalTime:3000,      //间隔时间，运动后停顿的时间，默认1s
    loop:false,              //循环播放，true为循环， false为不循环， 默认为true
    totalNum:8,             //图片总量
    moveNum:4,              //单次运动的图片数量(图片总量必须为运动数量的整倍数)
    circle:false,            //小圆点功能，true为显示，false为不显示， 默认显示
    moveWay:'position'
});
newProduct.on('rightEnd',function () {
    // alert('右边到头了');
    this.nextBtn.style.background='#e7e2d7';
});
newProduct.on('leftEnd',function () {
    // alert('左边到头了');
    this.prevBtn.style.background='#e7e2d7';
});
newProduct.on('leftClick',function () {
    // alert('左边点击了');
    this.nextBtn.style.background='#d0c4af';
});
newProduct.on('rightClick',function () {
    // alert('右边点击了');
    this.prevBtn.style.background='#d0c4af';
});
//人气推荐选项卡
(function () {
    var titles=yx.ga("#recommend header li");
    var contents=yx.ga("recommend .content");

    for (var i=0;i<titles.length;i++){
        titles[i].index=i;
        titles[i].onclick=function () {
            for (var i=0;i<titles.length;i++){
                titles[i].className='';
                contents[i].style.display='none';
            }
            titles[this.index].className='active';
            contents[this.index].style.display='block';
        };
    }
})();
//限时购
(function () {
    var timeBox=yx.g('#limit .timeBox');
    var spans=yx.ga('#limit .timeBox span');
    var timer=setInterval(showTime,1000);

    //倒计时
    showTime();
    function showTime() {
        var endTime=new Date(2020,6,29,13);
        if (new Date()<endTime){  //如果当前时间没有超过结束时间，才会去做倒计时
            var overTime=yx.cutTime(endTime);
            spans[0].innerHTML=yx.format(overTime.h);
            spans[1].innerHTML=yx.format(overTime.m);
            spans[2].innerHTML=yx.format(overTime.s);

        }else {
            clearInterval(timer);
        }
    }


})();