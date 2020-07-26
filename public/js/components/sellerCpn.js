components.sellerNav = `
<div id="buyer-nav">
      <div id="nav-leading"></div>
      <div class="buyer-nav-box" id="orderScreenSeller" onclick="view.showComponent('orderScreenSeller')">Các đơn đặt hàng</div>
      <div class="buyer-nav-box" id="claimScreenSeller" onclick="view.showComponent('claimScreenSeller')">Các yêu cầu</div>
      <div class="buyer-nav-box" id="buyer-nav-box" onclick="logOut()">
        <div id="user-avatar"></div>
        <div id="user-name"></div>
      </div>
    </div>
`
components.orderScreenSeller = `
${components.sellerNav}
      <div id="my-insurance-title">
        <div id="my-insurance-title-big">Các gói bảo hiểm được đặt hàng trực tiếp</div>
        <div style="height: 5px"></div>
        <div id="my-insurance-title-intro">Đơn hàng của khách hàng.</div>
        <div style="height: 30px"></div>
        <div id="select-provider-title">Danh sách đơn hàng</div>
        <div style="height: 10px"></div>
        <div id="orders-list">
        </div>
      </div>
`

components.claimScreenSeller = `
${components.sellerNav}
<div id="my-insurance-title">
        <div id="my-insurance-title-big">Yêu cầu về bảo hiểm của khách hàng</div>
        <div style="height: 5px"></div>
        <div id="my-insurance-title-intro">Yêu cầu bồi thường/chi trả bảo hiểm trực tuyến nhanh và dễ dàng.</div>
        <div style="height: 30px"></div>
        <div id="select-provider-title">Danh sách yêu cầu</div>
        <div style="height: 10px"></div>
        <div id="orders-list">
        </div>
      </div>
`

components.myOrderSeller = (order, index) => `
<div class="orders-list-content">${index}</div>
<div class="orders-list-content">${order.insuCode}</div>
<div class="orders-list-content" style="font-size: 12px">${order.userUid}</div>
<div class="orders-list-content" class="accept-button" onclick="controller.acceptOrder('${order.createdAt}')" style="color: ${order.accepted ? '#71a852' : 'blue'}">${order.accepted ? 'Hoàn thành' : 'Xác nhận'}</div>
<div class="orders-list-content"><a href="#">Xem đơn hàng</a></div>`