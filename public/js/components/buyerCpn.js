components.myInsu = (insu) => `
<div class="insurance-container" id="insu-${insu.contractId}" onclick="toggleModalInsu('${insu.contractId}', 'cancel-button', 'detail-order')">
<div class="insurance-image"></div>
<div class="insurance-info">
  <div class="insurance-info-name">${insu.insuCode}</div>
  <div class="insurance-info-provider">${insu.provider} Insurance</div>
</div>
</div>`

components.addNewOrderModal = `
<div id="add-order-modal-container">
  <div id="add-order-modal">
    <div id="cancel-button-add-order" class="close-button"><ion-icon name="close-outline"></ion-icon></div>
    <div id="add-order-title">Thêm đơn hàng mới</div>
    <div class="new-order-row-inputs">
      <input placeholder="Mã sản phẩm" id="insuCodeInput"/>
      <select id="consulting-provider" name="provider-list">
        <option value="abc">ABC Insurance</option>
        <option value="healtha">Healtha Insurance</option>
        <option value="Litey">Litey Insurance</option>
        <option value="Comfi">Comfi Insurance</option>
      </select>
    </div>
    <div id="footer-wrapper">
      <button id="add-new-order-button">🧾 Thêm đơn hàng</button>
      <div id="add-insu-error" class="error-message"></div>
    </div>
  </div>
</div>
`

components.addNewClaimModal = `
<div id="add-claim-modal-container">
  <div id="add-claim-modal">
    <div id="cancel-button-add-claim" class="close-button"><ion-icon name="close-outline"></ion-icon></div>
    <div id="add-order-title">Thêm yêu cầu</div>

    <div class="new-order-row-inputs">
      <input placeholder="Mã hợp đồng" id="contractIdInput"/>
      <select id="consulting-provider" name="provider-list">
        <option value="abc">ABC Insurance</option>
        <option value="healtha">Healtha Insurance</option>
        <option value="Litey">Litey Insurance</option>
        <option value="Comfi">Comfi Insurance</option>
      </select>
    </div>
    <div id="footer-wrapper">
      <button id="add-new-claim-button">🧾 Thêm yêu cầu</button>
      <div id="add-insu-error" class="error-message"></div>
    </div>
  </div>
</div>
`

components.myOrder = (order, index) => `
<div class="orders-list-content">${index}</div>
<div class="orders-list-content">${order.insuCode}</div>
<div class="orders-list-content">${order.provider} Insurance</div>
<div class="orders-list-content" style="color: ${order.accepted ? '#71a852' : 'black'}">${order.accepted ? 'Hoàn thành' : 'Đang đợi'}</div>
<div class="orders-list-content"><a href="#">Xem đơn hàng</a></div>`

components.buyerNav = `
<div id="buyer-nav">
      <div id="nav-leading"></div>
      <div class="buyer-nav-box" id="myInsuScreen" onclick="view.showComponent('myInsuScreen')">Bảo hiểm của tôi</div>
      <div class="buyer-nav-box" id="consultScreen" onclick="view.showComponent('consultScreen')">Tư vấn</div>
      <div class="buyer-nav-box" id="orderScreen" onclick="view.showComponent('orderScreen')">Đặt hàng</div>
      <div class="buyer-nav-box" id="claimScreen" onclick="view.showComponent('claimScreen')">Yêu cầu</div>
      <div class="buyer-nav-box" id="buyer-nav-box" onclick="logOut()">
        <div id="user-avatar"></div>
        <div id="user-name"></div>
      </div>
    </div>
`
components.detailInsu = `<div id="detail-order">
<div id="detail-order-modal">
  <div id="cancel-button" class="close-button"><ion-icon name="close-outline"></ion-icon></div>
  <div id="detail-modal-info">
    <div id="detail-modal-info-left">
      <div><img id="detail-qr" src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=123456"/></div>
      <div id="detail-name">Bảo hiểm y tế ABC</div>
      <div id="detail-name-provider">Công ty ABC Insurance</div>
      <div id="detail-price">2.000.000VND/tháng</div>
    </div>
    <div id="detail-modal-info-right">
      <div id="detail-id"><span>ID: </span> 123456</div>
      <div id="detail-start-date"><span>Bắt đầu: </span> 01.01.2010</div>
      <div id="detail-end-date"><span>Hết hạn: </span> 01.01.2020</div>
      <div id="detail-status-title"><span>Tình trạng: </span>(nhấp để xem chi tiết bảng)</div>
      <div id="status-table">
        <div id="status-table-title">STT</div>
        <div id="status-table-title">Mô tả</div>
        <div id="status-table-title">Chi phí (VND)</div>

        <div class="status-table-content">1</div>
        <div class="status-table-content">Phẫu thuật mắt</div>
        <div class="status-table-content">10.000.000</div>

        <div class="status-table-content">2</div>
        <div class="status-table-content">Phẫu thuật ruột thừa</div>
        <div class="status-table-content">8.000.000</div>
        
        <div class="status-table-content">...</div>
        <div class="status-table-content">...</div>
        <div class="status-table-content">...</div>

      </div>
      <a href="">Xem chi tiết hợp đồng</a>
    </div>          
  </div>
</div>
</div>`

components.addNewInsuranceModal = `
<div id="add-insurance-modal-container">
  <div id="add-insurance-modal">
    <div id="cancel-button-add-insurance" class="close-button"><ion-icon name="close-outline"></ion-icon></div>
    <div id="add-insurance-info">
      <div id="add-insu-title">Điện tử hóa bảo hiểm</div>
      <div id="add-insu-intro">Điện tử hóa bảo hiểm của bạn ngay hôm nay với InsurEZ - mạng lưới nhà cung cấp bảo hiểm uy tín!</div>
      <div id="add-insu-notice"><span>Lưu ý: </span> Tài khoản cần được xác minh để thêm bảo hiểm</div>
      <div style="height: 20px"></div>
      <div id="add-insu-form">
        <select id="consulting-provider" name="provider-list">
          <option value="abc">ABC Insurance</option>
          <option value="healtha">Healtha Insurance</option>
          <option value="Litey">Litey Insurance</option>
          <option value="Comfi">Comfi Insurance</option>
        </select>
        <div><input id="contract-id-input" placeholder="Mã hợp đồng"/></div>
        <div><input id="insu-code-input" placeholder="Mã bảo hiểm"/></div>
      </div>
    </div>
    <div style="height: 5px"></div>
    <div id="footer-wrapper">
      <button id="add-insu-button">Thêm hợp đồng</button>
      <div id="add-insu-error" class="error-message"></div>
    </div>
  </div>
</div>
`

components.myInsuScreen = `<div id="buyer-screen">
${components.buyerNav}
<div>
  <div id="my-insurance-title">
    <div id="my-insurance-title-big">Bảo hiểm của tôi</div>
    <div id="my-insurance-title-row">
      <div id="my-insurance-title-intro">Nhấp vào bảo hiểm để xem thêm</div>
      <button id="add-insurance-button">Thêm bảo hiểm đã sở hữu 📃</button>
    </div>
  </div>
  <div id="list-insurance">
  </div>
</div>
${components.detailInsu}
${components.addNewInsuranceModal}
</div>`

components.consultScreen = `
    ${components.buyerNav}
    <div id="consult-screen">
      <div id="my-insurance-title">
        <div id="my-insurance-title-big">Tư vấn</div>
        <div id="my-insurance-title-intro">Trò chuyện 1:1 với tư vấn viên nhà cung cấp bảo hiểm</div>
        <div style="height: 50px"></div>
  
        <div id="select-provider-title">Chọn nhà cung cấp:</div>
        <div style="height: 7px"></div>
        <select id="consulting-provider" name="provider-list">
          <option value="abc">ABC Insurance</option>
          <option value="healtha">Healtha Insurance</option>
          <option value="Litey">Litey Insurance</option>
          <option value="Comfi">Comfi Insurance</option>
        </select>
        <div style="height: 30px"></div>
        <div id="consulting-options">
          <button id="contacts-list-button">Xem danh sách liên lạc</button>
          <div style="width: 10px"></div>
          <div>hoặc</div>
          <div style="width: 10px"></div>
          <button id="contact-zalo-button">Liên lạc zalo</button>
          <div style="width: 10px"></div>
        </div>
      </div>
      <div id="consult-bg"></div>
    </div>
`
components.orderTitle = `
<div class="orders-list-title">STT</div>
          <div class="orders-list-title">Mã bảo hiểm</div>
          <div class="orders-list-title">Nhà cung cấp</div>
          <div class="orders-list-title">Trạng thái</div>
          <div class="orders-list-title">Ghi chú</div>
`
components.claimTitle = `
<div class="orders-list-title">STT</div>
          <div class="orders-list-title">Mã bảo hiểm</div>
          <div class="orders-list-title">Nhà cung cấp</div>
          <div class="orders-list-title">Trạng thái</div>
          <div class="orders-list-title">Ghi chú</div>
`

components.orderTitleSeller = `
<div class="orders-list-title">STT</div>
          <div class="orders-list-title">Mã bảo hiểm</div>
          <div class="orders-list-title">Mã khách hàng</div>
          <div class="orders-list-title">Trạng thái</div>
          <div class="orders-list-title">Ghi chú</div>
`
components.claimTitleSeller = `
<div class="orders-list-title">STT</div>
          <div class="orders-list-title">Mã bảo hiểm</div>
          <div class="orders-list-title">Mã khách hàng</div>
          <div class="orders-list-title">Trạng thái</div>
          <div class="orders-list-title">Ghi chú</div>
`
components.orderScreen = `
${components.buyerNav}
      <div id="my-insurance-title">
        <div id="my-insurance-title-big">Đặt hàng trực tuyến các gói bảo hiểm</div>
        <div style="height: 5px"></div>
        <div id="my-insurance-title-intro">Đơn hàng của bạn sẽ được gửi trực tiếp đến nhà cung cấp.</div>
        <div id="my-insurance-title-intro">Bảo hiểm sẽ được tự động thêm vào tài khoản của bạn khi nhà cung cấp xác nhận bạn đã thanh toán gói bảo hiểm.</div>
        <div style="height: 15px"></div>
        <button id="add-insurance-button">Thêm đơn hàng 📃</button>
        <div style="height: 30px"></div>
        <div id="select-provider-title">Danh sách đơn hàng</div>
        <div style="height: 10px"></div>
        <div id="orders-list">
        </div>
      </div>
  ${components.addNewOrderModal}
`

components.claimScreen = `
${components.buyerNav}
<div id="my-insurance-title">
        <div id="my-insurance-title-big">Yêu cầu về bảo hiểm</div>
        <div style="height: 5px"></div>
        <div id="my-insurance-title-intro">Yêu cầu bồi thường/chi trả bảo hiểm trực tuyến nhanh và dễ dàng.</div>
        <div style="height: 15px"></div>
        <button id="add-insurance-button">Thêm yêu cầu 📃</button>
        <div style="height: 30px"></div>
        <div id="select-provider-title">Danh sách yêu cầu</div>
        <div style="height: 10px"></div>
        <div id="orders-list">
        </div>
      </div>
  ${components.addNewClaimModal}
`

