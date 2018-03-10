Page({
  data: {
    imgUrls: [
      '../img/1.jpg',
      '../img/2.jpg',
      '../img/3.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  onLoad: function (options){
    wx.showLoading({
      title:'加载中。。。',
      icon:'loading'
    });
    let thisPage = this;
    wx.request({
      url: 'https://m.maoyan.com/movie/list.json?type=hot&offset=0&limit=1000', //仅为示例，并非真实的接口地址
      method: "GET",
      header: {
        "Content-Type": "application/json" // 默认值
      },
      success: function (res) {
        wx.hideToast();
        let moviesData = res.data.data.movies;
        console.log(moviesData);
        thisPage.setData({ moviesData: moviesData});
      }
    })
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  }
})