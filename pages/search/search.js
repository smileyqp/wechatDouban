var app = getApp()
var API_URL = 'https://api.douban.com/v2/movie/top250';
Page({
  data: {
   movies:[]
  },
  onLoad: function () {
    var that=this;//将this保存？？？？？？？？？？？？？？？？？解释一下this和that
    wx.showToast({ //显示弹出框
       title:"加载中...",//显示文字
       icon:"loading",//加载图标
       duration:10000//显示时间秒
    }); 
    wx.request({//发请求
      url: API_URL,
      data: {},
      header: {
      'content-type': 'application/x-www-form-urlencode'
      },
     success: function(res){
       wx.hideToast();//加载好了就关闭弹出框
       var data = res.data;//用变量保存所得到的豆瓣电影前250的信息
       that.setData({//用上面保存的that来设置data？？？？？？？？？
         title:data.title,//将wxml上加载改为豆瓣电影Top250
         movies:data.subjects//获得request返回信息,好遍历显示
       });
       console.log(res.data);
      }
    });
  }
})
