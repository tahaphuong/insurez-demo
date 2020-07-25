components.detailOrder = `<div id="detail-order">
<div id="detail-order-modal">
  <div id="cancel-button" class="close-button"><ion-icon name="close-outline"></ion-icon></div>
  <div id="detail-modal-info">
    <div id="detail-modal-info-left">
      <div><img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=123456"/></div>
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
      <div id="add-insu-form">
        <select id="add-insurance-provider" name="provider-list">
          <option value="abc">ABC Insurance</option>
          <option value="healtha">Healtha Insurance</option>
          <option value="Litey">Litey Insurance</option>
          <option value="Comfi">Comfi Insurance</option>
        </select>
        <div><input id="contract-id-input" placeholder="Mã hợp đồng"/></div>
        <button id="add-insu-button">Thêm online</button>
      </div>
    </div>
    <div id="footer-wrapper">
      <div id="add-insu-error" class="error-message">This is a demo error</div>
    </div>
  </div>
</div>
`

components.buyer = `<div id="buyer-screen">
<div id="buyer-nav">
  <div id="nav-leading"></div>
  <div>Bảo hiểm của tôi</div>
  <div>Tư vấn</div>
  <div>Đặt hàng</div>
  <div id="buyer-nav-box">
    <div id="user-avatar"></div>
    <div id="user-name">Hello Hello</div>
  </div>
</div>

<div>
  <div id="my-insurance-title">
    <div id="my-insurance-title-big">Bảo hiểm của tôi</div>
    <div id="my-insurance-title-row">
      <div id="my-insurance-title-intro">Nhấp vào bảo hiểm để xem thêm</div>
      <button id="add-insurance-button">Thêm bảo hiểm đã sở hữu 📃</button>
    </div>
  </div>
  <div id="list-insurance">
    <div class="insurance-container" id="demo">
      <div class="insurance-image"></div>
      <div class="insurance-info">
        <div class="insurance-info-name">Bảo hiểm y tế</div>
        <div class="insurance-info-provider">ABC Insurance</div>
      </div>
    </div>
    <div class="insurance-container"></div>
    <div class="insurance-container"></div>
    <div class="insurance-container"></div>
    <div class="insurance-container"></div>
  </div>
</div>
<button id="myBtn">Open Modal</button>
${components.detailOrder}
${components.addNewInsuranceModal}
</div>`

components.buyerConsult = `
<div id="buyer-nav">
      <div id="nav-leading"></div>
      <div>Bảo hiểm của tôi</div>
      <div>Tư vấn</div>
      <div>Đặt hàng</div>
      <div id="buyer-nav-box">
        <div id="user-avatar"></div>
        <div id="user-name">Hello Hello</div>
      </div>
    </div>

    <div id="consult-screen">
      <div id="my-insurance-title">
        <div id="my-insurance-title-big">Tư vấn</div>
        <div id="my-insurance-title-intro">Trò chuyện 1:1 với tư vấn viên của công ty bảo hiểm</div>
        <div style="height: 50px"></div>
  
        <div id="select-provider-title">Chọn công ty:</div>
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