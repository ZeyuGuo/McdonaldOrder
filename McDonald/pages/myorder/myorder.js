// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    thumb: '',
    nickname: '',
    orders: [],
    hasAddress: false,
    address: {}
  },

  getTotalPrice() {
    let orders = this.data.orders
    let total = 0
    for (let i = 0; i < orders.length; i++) {
      if (orders[i].selected) {
        total += orders[i].num * orders[i].price
      }
    }
    this.setData({
      totalPrice: total.toFixed(2)
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let self = this
    wx.getUserInfo({
      success: function (res) {
        // success
        self.setData({
          thumb: res.userInfo.avatarUrl,
          nickname: res.userInfo.nickName
        })
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })

    wx.request({
      url: 'http://www.mylocaldb.com/api/wx/carts.php',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
        self.setData({
          orders: res.data
        })
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {


    setTimeout(() => {
      this.setData({
        hasList: true

      });
      this.getTotalPrice()
    }, 1000)

/*
    let self = this
    wx.getStorage({
      key: 'address',
      success: function (res) {
        // success
        self.setData({
          hasAddress: true,
          address: res.data
        })
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
    */
  },

  payOrders() {
    console.log(123123)
    wx.requestPayment({
      timeStamp: '',
      nonceStr: '',
      package: '',
      signType: '',
      paySign: '',
      success: function (res) {
        // success
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
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
