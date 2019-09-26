// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasList:false,
    carts:[],
    selectAllStatus:true,
    selected:true
  },
  selectAll(e){
    let selectAllStatus = this.data.selectAllStatus
    selectAllStatus = !selectAllStatus
    let carts = this.data.carts
    for (let i =0;i<carts.length;i++){
      carts[i].selected= selectAllStatus
    }
    this.setData({
      selectAllStatus: selectAllStatus,
      carts:carts
    })
  },
  getTotalPrice(){
    let carts = this.data.carts
    let total = 0
    for (let i = 0;i < carts.length;i++){
      if(carts[i].selected){
        total += carts[i].num * carts[i].price
      }
    }
    this.setData({
      totalPrice: total.toFixed(2)
    })
  },
  minusCount(e){
    // console.log(e)
    const index = e.target.dataset.index
    let carts = this.data.carts
    let num = carts[index].num
    if(num <= 1){
      return 
    }
    num = num - 1 
    carts[index].num = num
    this.setData({
      carts:carts
    })
    //console.log(num)
    //console.log(this.data.carts[index].num)
    //console.log(this.data.carts[index].title)

    wx.request({
      url: 'http://www.mylocaldb.com/api/wx/altercartgoodnum.php',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      data: { title: this.data.carts[index].title, num: num },
      success: function (res) {
        console.log(res.data.status);
        if (res.data.status == 0) {
          console.log('提交失败！！！')
        } else {
          console.log('提交成功！！！')
        }
      }
    })

    this.getTotalPrice()
  },
  addCount(e){
    // console.log(e)
    const index = e.target.dataset.index
    let carts = this.data.carts
    let num = parseInt(carts[index].num) 
    num = num + 1 
    carts[index].num = num
    this.setData({
      carts:carts
    })

    wx.request({
      url: 'http://www.mylocaldb.com/api/wx/altercartgoodnum.php',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      data: { title: this.data.carts[index].title, num: num },
      success: function (res) {
        console.log(res.data.status);
        if (res.data.status == 0) {
          console.log('提交失败！！！')
        } else {
          console.log('提交成功！！！')
        }
      }
    })

    this.getTotalPrice()
  },
  deleteList(e){
    // console.log(e)
    const index = e.target.dataset.index

    //console.log(this.data.carts)
    //console.log(this.data.carts[index].title)

    wx.request({
      url: 'http://www.mylocaldb.com/api/wx/delcarts.php',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      data: { title: this.data.carts[index].title },
      success: function (res) {
        console.log(res.data.status);
        if (res.data.status == 0) {
          wx.showToast({
            title: '提交失败！！！',
            icon: 'loading',
            duration: 1500
          })
        } else {
          wx.showToast({
            title: '提交成功！！！',//这里打印出登录成功
            icon: 'success',
            duration: 1000
          })
        }
      }
    })


    let carts = this.data.carts
    carts.splice(index,1)
    this.setData({
      carts:carts
    })
    if(carts.length === 0){
      this.setData({
        hasList:false
      })
    }else{
      this.getTotalPrice()
    }

  },
  selectList(e){
    const index = e.target.dataset.index
    let carts = this.data.carts
    carts[index].selected = !carts[index].selected
    this.setData({
      carts:carts
    })
    this.getTotalPrice()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    
  },

  /**
     * 生命周期函数--监听页面初次渲染完成
     */
  onReady: function () {
    let self = this
    wx.request({
      url: 'http://www.mylocaldb.com/api/wx/carts.php',
      success(res) {
        self.setData({
          carts: res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (options) {
    setTimeout(()=>{
      this.setData({
        hasList:true
        
      });
      this.getTotalPrice()
    },1000)
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