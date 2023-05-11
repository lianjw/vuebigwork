<template>


<header>
  <div class="container">
    <div class="left">
      <a href="#">天猫首页</a>
      <span class="separator">|</span>
      <span>HI!user</span>
    </div>
    <div class="right">
      <span>退出</span>
      <span class="separator">|</span>
      <a href="#">我的淘宝</a>
      <span class="separator">||</span>
      <a href="#">购物车</a>
      <span class="separator">||</span>
      <a href="#">收藏夹</a>
      <span class="separator">||</span>
      <a href="#">手机版淘宝网</a>
      <span class="separator">||</span>
      <a href="#">网页无障碍</a>
      <span class="separator">||</span>
      <a href="#">商家支持</a>
      <span class="separator">||</span>
      <a href="#">商家中心</a>
      <span class="separator">||</span>
      <a href="#">联系客服</a>
    </div>
  </div>
</header>
</template>

<style>
  header {
    background-color: #f5f5f5;
    border-bottom: 1px solid #ccc;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    margin-top: -10px;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .left a {
    color: #666;
    text-decoration: none;
  }

  .right span {
    color: #666;
    margin-right: 5px;
  }

  .right a {
    color: #666;
    text-decoration: none;
  }

  .separator {
    margin-right: 5px;
  }
</style>
