function renderProducts(proArr) {
  let contentHTML = "";
  proArr.forEach((item) => {
    let content = `
     <div class="item">
          <img
            src="${item.img}"
            alt=""
          />
          <div class="title__list">
            <h4>${item.name}</h4>
            <p>${item.price.toLocaleString()} đ</p>
            <button type="button" onclick='cartBuySP("${item.id}", "${
      item.img
    }","${item.name}","${item.price}")' class="btn btn-info">BUY</button>
          </div>
        </div>`;
    contentHTML += content;
  });
  document.getElementById("listProduct").innerHTML = contentHTML;
}
//tạo hàm render vào trong giỏ hàng
function renderBuyProduct(Buyarr) {
  let contentHTML = "";
  let tiTle = 0;
  let countNum = 0;
  Buyarr.forEach((item) => {
    countNum += item.number;
    let tongTien = item.price * item.number;
    tiTle += tongTien;
    let content = `
     <tr>
     <th id="idProduct" name="id" style="display: none">${item.id}</th>
     <tr>
                    <td>
                    <img width= "25" src="${item.img}" alt="hinh1" />${
      item.name
    }</td>
                    <td>${item.price.toLocaleString()}<u>đ</u></td>
                    <td>
                      <button id="minus-btn" onclick='minSP("${item.id}",${
      item.number
    })'>-</button>
                      <span  class="value">${item.number}</span>
                      <button id="plus-btn" onclick='maxSP("${
                        item.id
                      }")'>+</button>
                    </td>
                    <td>${tongTien.toLocaleString()}</td>
                    <td>
                      <button class="btn btn-danger" onclick="deleteSP(${
                        item.id
                      })">
                        Xóa
                      </button>
                    </td>
                  </tr>
     `;
    contentHTML += content;
  });
  contentHTML += `<tr>
                    <td colspan="2"></td>
                    <td class="font-weight-bold">Tổng Tiền</td>
                    <td class="text-danger">${tiTle}</td>
                  </tr>
     </tr>`;

  document.getElementById("listProducts").innerHTML = contentHTML;
  document.getElementById("count_number_").innerText = `${countNum}`;
}

//hiệu ứng
function showNotification() {
  Swal.fire({
    position: "center-center",
    icon: "success",
    title: "Thành Công",
    showConfirmButton: false,
    timer: 2000,
  });
}
