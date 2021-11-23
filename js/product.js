//公用方法调用
yx.public.navFn();
yx.public.backUpFn();
//解析url
var params=yx.parseUrl(window.location.href);
var pageId=params.id;               //产品对应的id
var curData=productList[pageId];    //产品对应的数据
if (!pageId || !curData){
    //这个就是404页面出现的条件
    window.location.href='404.html';
}
//面包屑的功能
var positionFn=yx.g('#position');
positionFn.innerHTML='<a href="#">首页</a> >';
for (var i=0;i<curData.categoryList.length;i++){
    positionFn.innerHTML+='<a href="#">'+curData.categoryList[i].name+'</a> >';

}
positionFn.innerHTML+=curData.name;

//产品图功能
(function () {

    //左边图片切换功能
    var bigImg=yx.g('#productImg .left img');
    var smallImgs=yx.ga('#productImg .smallImg img');

    bigImg.src=smallImgs[0].src=curData.primaryPicUrl;

    var last=smallImgs[0];  //上一张图片
    for (var i=0;i<smallImgs.length;i++){
        if (i){
            //这个条件满足的话，说明现在是后四张图片
            smallImgs[i].src=curData.itemDetail['picurl'+i];
        }
        smallImgs[i].index=i;
        smallImgs[i].onmouseover=function () {
            bigImg.src=this.src;
            last.className='';
            this.className='active';
            last=this;


        };
    }

    //右边相关信息更换
    yx.g('#productImg .info h2').innerHTML=curData.name;
    yx.g('#productImg .info p').innerHTML=curData.simpleDesc;
    yx.g('#productImg .info price').innerHTML='<div><span>售价</span><strong>￥' +curData.retailPrice+'.00</strong></div><div><span>促销</span><a href=" ' +curData.hdrkDetailVoList[0].huodongUrlPc+'"class="tag"> ' +curData.hdrkDetailVolist[0].activityType+'</a><a href="'+curData.hdrkDeta1lVOList[@].huodongUrIPC+class="discount">' +curData.hdrkDetailVoList[0].name+' </a></div><div><span>服务</span><a href="#" class=" service*><i></i>30天无忧退货<i></i>48小时快速退款<i></i>满88元免邮费<i></i>网易自营品牌</a></div>';





})();