var API_URL = 'https://api.douban.com/v2/movie/subject/';
Page({
  data:{
    movie:[]
  },
  onLoad:function(options){
    var that=this;
     wx.showToast({ //显示弹出框
       title:"加载中...",//显示文字
       icon:"loading",//加载图标
       duration:10000//显示时间秒
    }); 
    //console.log(options);option即使上一个跳转过来的页面传过来的id.这里是index页面传过来的id,时候去的豆瓣点击的那个api
    wx.request({//发请求
      url: API_URL+options.id,
      data: {},
      header: {
      'content-type': 'application/x-www-form-urlencode'
      },
     success: function(res){
        wx.hideToast();//加载好了就关闭弹出框
       console.log(res.data);
       that.setData({
        movie:res.data
       });
     }
    })
  }
})