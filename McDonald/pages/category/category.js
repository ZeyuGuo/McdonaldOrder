// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    category:[
      { name: '套餐', id: 'taocan' },
      { name: '新品', id: 'xinpin' },
      { name: '特惠', id: 'tehui' },
      { name: '小食', id: 'xiaoshi' },
      { name: '饮品', id: 'yinpin' }      
    ],
    curIndex:0,
    isScroll:false,
    toView:'taocan',
    detail: []
  },
  switchTab(e){
    console.log(e)
    this.setData({
      toView: e.target.dataset.id,
      curIndex: e.target.dataset.index
    })
  },
  touchmove(e){
    console.log(e.detail.scrollTop)
    let height = e.detail.scrollTop;
    var i = Math.ceil(height/555);
    this.setData({
      curIndex:i
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let self = this
    wx.request({
      url: 'http://www.mylocaldb.com/api/wx/cate-detail.txt',
      success(res){
        self.setData({
          detail:res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})