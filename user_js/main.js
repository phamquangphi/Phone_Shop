//Tạo Hàm DOM tới api admin
function fetchListProduct() {
  ProductSev.getList()
    .then((res) => {
      renderProducts(res.data);
    })
    .catch((err) => {});
}
fetchListProduct();
//list playout giỏ hàng
function fetchbuyDataSP() {
  buyCratSev
    .getCart()
    .then((res) => {
      renderBuyProduct(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}
fetchbuyDataSP();
//chọn loại sản phẩm
function selectSP(v) {
  ProductSev.getList()
    .then((res) => {
      let ress = res.data;
      if (v.value === "all") {
        renderProducts(ress);
      } else {
        let newArr = ress.filter((item) => item.type == v.value);
        renderProducts(newArr);
      }
    })
    .catch((err) => {});
}
//thêm sản phẩm vào giỏ hàng
function cartBuySP(id, img, name, price) {
  buyCratSev
    .getCart()
    .then((res) => {
      let cart = res.data.find((item) => item.idSP == id);
      if (cart == undefined) {
        let newCartSP = {
          idSP: id,
          img,
          name,
          price,
          number: 1,
        };
        buyCratSev
          .Create(newCartSP)
          .then((res) => {
            fetchbuyDataSP();
            showNotification();
          })
          .catch((err) => {});
      } else {
        cart.number++;
        buyCratSev
          .Update(cart.id, cart)
          .then((res) => {
            fetchbuyDataSP();
            showNotification();
          })
          .catch((err) => {});
      }
    })
    .catch((err) => {});
}
//xóa 1 SP trong giỏ hàng
function deleteSP(id) {
  buyCratSev
    .Delete(id)
    .then((res) => {
      fetchbuyDataSP();
    })
    .catch((err) => {});
}
//Giảm số lương
function minSP(id, number) {
  if (number == 1) {
    return;
  } else {
    buyCratSev
      .getById(id)
      .then((res) => {
        let cart = res.data;
        cart.number--;
        buyCratSev
          .Update(cart.id, cart)
          .then((res) => {
            fetchbuyDataSP();
          })
          .catch((err) => {});
      })
      .catch((err) => {});
  }
}
// tăng số lượng
function maxSP(id) {
  buyCratSev
    .getById(id)
    .then((res) => {
      let cart = res.data;
      cart.number++;
      buyCratSev
        .Update(cart.id, cart)
        .then((res) => {
          fetchbuyDataSP();
        })
        .catch((err) => {});
    })
    .catch((err) => {});
}
//xử lí nút thanh toán giỏ hàng
async function payCartProduct() {
  let idPro = document.querySelectorAll("#idProduct");
  for (let id = 0; id < idPro.length; id++) {
    await buyCratSev
      .Delete(idPro[id].innerText)
      .then((res) => {})
      .catch((err) => {});
  }
  fetchbuyDataSP();
  $("#cart_model").modal("hide");
  showNotification();
}

//đóng giỏ hàng
function closeCart() {
  buyCratSev
    .getCart()
    .then((res) => {
      $("#cart_model").modal("hide");
    })
    .catch((err) => {});
}
