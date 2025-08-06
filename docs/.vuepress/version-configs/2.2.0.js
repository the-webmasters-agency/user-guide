/* set version */
let version = "2.2.0";

/* version prefix setter */
function setVersionPrefix(children) {
  if (children.constructor === Array) {
    return children.map((child) => {
      child[0] = `/${version}/${child[0]}`;
      return child;
    });
  }
  return `/${version}/${children}`;
}

/* module export */
module.exports = [
  [setVersionPrefix("introduction/introductions"), "Giới Thiệu"],
  {
    title: "Cấu hình tổng quan",
    path: setVersionPrefix("site-config"),
    collapsable: true,
    children: setVersionPrefix([
      ["site-config/home-info", "Cấu hình thông tin trang chủ"],
      ["site-config/home-banner", "Cấu hình banner slide trang chủ"],
      ['site-config/achievement', 'Cấu hình các thành tựu'],
      ['site-config/frontend-cache', 'Quản lí cache của frontend'],
    ])
  },
  {
    title: "Blog",
    path: setVersionPrefix("blog"),
    collapsable: true,
    children: setVersionPrefix([
      ["blog/posts", "Bài Viết"],
      ["blog/categories", "Danh Mục Bài Viết"],
    ]),
  },
  {
    title: "Câu Hỏi Thường Gặp",
    path: setVersionPrefix("faqs"),
    collapsable: true,
    children: setVersionPrefix([
      ["faqs/items", "Câu Hỏi Thường Gặp"],
      ["faqs/categories", "Danh Mục Câu Hỏi Thường Gặp"],
    ]),
  },
  {
    title: "Đại lý",
    path: setVersionPrefix("dealers"),
    collapsable: true,
    children: setVersionPrefix([
      ["dealers/dealers", "Đại Lý"],
    ]),
  },
  {
    title: "Loại Sản Phẩm",
    path: setVersionPrefix("products"),
    collapsable: true,
    children: setVersionPrefix([
      ["products/simple", "Sản Phẩm Đơn Giản"],
      ["products/configurable", "Sản Phẩm Có Thể Cấu Hình"],
      // ["products/virtual", "Virtual Product"],
      // ["products/bundle", "Bundle Product"],
      // ["products/grouped", "Grouped Product"],
      // ["products/downloadable", "Downloadable Product"],
      // ["products/booking", "Booking Product"],
    ]),
  },
  {
    title: "Danh Mục",
    path: setVersionPrefix("category"),
    collapsable: true,
    children: setVersionPrefix([
      ["category/create-category", "Tạo Danh Mục"],
    ]),
  },

  {
    title: "Thuộc Tính",
    path: setVersionPrefix("attribute"),
    collapsable: true,
    children: setVersionPrefix([
      ["attribute/product-attribute", "Tạo Thuộc Tính Sản Phẩm"],
      ["attribute/attribute-input", "Loại Đầu Vào Thuộc Tính"],
    ]),
  },

  [setVersionPrefix("attribute-family/attribute-families"), "Nhóm Thuộc Tính"],

  // {
  //   title: "Orders",
  //   path: setVersionPrefix("orders"),
  //   collapsable: true,
  //   children: setVersionPrefix([
  //     ["orders/create-order", "Orders"],
  //     ["orders/create-invoice", "Invoice"],
  //     ["orders/create-shipment", "Shipment"],
  //     ["orders/refunds", "Refunds"],
  //     ["orders/reorder", "Reorder"],
  //     ["orders/admin-order", "Admin Order"],
  //     ["orders/transaction", "Transactions"],
  //   ]),
  // },
  // {
  //   title: "Customers",
  //   path: setVersionPrefix("customer"),
  //   collapsable: true,
  //   children: setVersionPrefix([
  //     ["customer/create-customer", "Customers"],
  //     ["customer/customer-groups", "Groups"],
  //     ["customer/customer-reviews", "Reviews"],
  //   ]),
  // },

  // [setVersionPrefix("cms/cms-page"), "CMS"],

  // {
  //   title: "Marketing",
  //   path: setVersionPrefix("marketing"),
  //   collapsable: true,
  //   children: setVersionPrefix([
  //     ["marketing/promotions", "Promotions"],
  //     ["marketing/communications", "Communications"],
  //     ["marketing/searchseo", "Search & SEO"],
  //   ]),
  // },

  // {
  //   title: "Reporting",
  //   path: setVersionPrefix("reporting"),
  //   collapsable: true,
  //   children: setVersionPrefix([
  //     ["reporting/sales", "Sales"],
  //     ["reporting/customers", "Customers"],
  //     ["reporting/products", "Products"],
  //   ]),
  // },

  {
    title: "Cài Đặt",
    path: setVersionPrefix("settings"),
    collapsable: true,
    children: setVersionPrefix([
      ["settings/locale", "Ngôn Ngữ"],
      ["settings/currencies", "Tiền Tệ"],
      ["settings/exchange-rates", "Tỷ Giá Hối Đoái"],
      ["settings/inventory-source", "Nguồn Kho Hàng"],
      ["settings/channels", "Kênh"],
      ["settings/users", "Người Dùng"],
      ["settings/roles", "Vai Trò"],
      // ["settings/themes", "Giao Diện"],
      ["settings/taxes", "Thuế"],
      // ["settings/data-transfer", "Chuyển Đổi Dữ Liệu"],
    ]),
  },
  {
    title: "Cấu Hình",
    path: setVersionPrefix("configure"),
    collapsable: true,
    children: setVersionPrefix([
      // ["configure/magic-ai", "Magic AI"],
      // ["configure/weight-unit", "Weight Unit"],
      // ["configure/configurable-choices", "Configurable Choices"],
      // ["configure/custom-scripts", "Custom Script"],
      // ["configure/design", "Design"],
      // ["configure/back-orders", "Back Orders"],
      // ["configure/guest-checkout", "Guest Checkout"],
      // ["configure/product-view-page", "Product View Page"],
      // ["configure/cart-view-page", "Cart View Page"],
      // ["configure/frontend", "Frontend"],
      ["configure/image-size", "Kích Thước Hình Ảnh"],
      // ["configure/review", "Review"],
      ["configure/attribute", "Thuộc Tính"],
      // ["configure/social-share", "Social Share"],
      // ["configure/rich-snippets", "Rich Snippets"],
      // ["configure/address", "Address"],
      // ["configure/captcha", "Captcha"],
      // ["configure/settings", "Settings"],
      // ["configure/email-settings", "E-mail Settings"],
      // ["configure/taxes", "Taxes"],
      // ["configure/checkout", "Checkout"],
      // ["configure/notifications", "Notifications"],
      // ["configure/shipping", "Shipping"],
      // ["configure/shipping-methods", "Shipping Methods"],
      // ["configure/payment-methods", "Payment Methods"],
      // ["configure/orders-settings", "Orders Settings"],
      // ["configure/invoice-settings", "Invoice Settings"],
      ["configure/pricing", "Định Giá"],
    ]),
  },
  // [setVersionPrefix("shipping-method/shipping-method"), "Shipping Method"],
  // [setVersionPrefix("payment-method/payment-method"), "Payment Method"],
  // [setVersionPrefix("magic/magic-ai"), "Magic AI"],
];
