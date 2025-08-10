/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2.0/attribute-family/attribute-families.html",
    "revision": "f981f3871020ebe956ea16f55c6aca92"
  },
  {
    "url": "2.0/attribute/attribute-input.html",
    "revision": "209a89ddde152e02b31f52898798dd53"
  },
  {
    "url": "2.0/attribute/index.html",
    "revision": "4610ff11bf6e50a515abf64b55e87d78"
  },
  {
    "url": "2.0/attribute/product-attribute.html",
    "revision": "45feda72b04088df1c3b8b15390e927c"
  },
  {
    "url": "2.0/category/create-category.html",
    "revision": "286d467d197e1e31a228cf3e0ef5ff1e"
  },
  {
    "url": "2.0/category/index.html",
    "revision": "c701945b408f0b8360db926929f81dda"
  },
  {
    "url": "2.0/cms/cms-page.html",
    "revision": "85cd6e1b7ce1da9176898a75a6847a9d"
  },
  {
    "url": "2.0/cms/index.html",
    "revision": "e4b8ad2c212740a0477f8e3412a3901e"
  },
  {
    "url": "2.0/configure/address.html",
    "revision": "c95fceba3d1b12ea911eeb23460192fc"
  },
  {
    "url": "2.0/configure/attribute.html",
    "revision": "006cf2429bb7b1574f12aee45d7fa5f9"
  },
  {
    "url": "2.0/configure/back-orders.html",
    "revision": "64354b2bb24be4d3cb3d02dbc454f1c5"
  },
  {
    "url": "2.0/configure/captcha.html",
    "revision": "e1330fcf17fd5bb87a17e605198c640e"
  },
  {
    "url": "2.0/configure/cart-view-page.html",
    "revision": "f8de497807774ab44f86f2f66919194d"
  },
  {
    "url": "2.0/configure/configurable-choices.html",
    "revision": "ed37a941e14327bc67006cd84d75154a"
  },
  {
    "url": "2.0/configure/configurations.html",
    "revision": "f47048a25010082e60dc45a959abc8e0"
  },
  {
    "url": "2.0/configure/custom-scripts.html",
    "revision": "3a56eb2f299a3e27d8f1bcafb96b3806"
  },
  {
    "url": "2.0/configure/design.html",
    "revision": "8434e5539b2c9f826cc93e9d973e9ddd"
  },
  {
    "url": "2.0/configure/email-settings.html",
    "revision": "47006ce6e0f5dcdefd9e5be3d3d788e6"
  },
  {
    "url": "2.0/configure/frontend.html",
    "revision": "444431fb74585fdb6cf95435274411ed"
  },
  {
    "url": "2.0/configure/guest-checkout.html",
    "revision": "2f54a761cb7e26a229ba0079c9987780"
  },
  {
    "url": "2.0/configure/image-size.html",
    "revision": "efb4a060ffd758f00fb5dcbaaa764110"
  },
  {
    "url": "2.0/configure/index.html",
    "revision": "2eee94a07d2c39979d5dc9ec352c9773"
  },
  {
    "url": "2.0/configure/invoice-settings.html",
    "revision": "ac74f90da45e356447d4d7f6c56a1ff1"
  },
  {
    "url": "2.0/configure/notifications.html",
    "revision": "61495a1be206ecf0c68028e8bebbbfe9"
  },
  {
    "url": "2.0/configure/orders-settings.html",
    "revision": "b8f9021d0ae2b8d0189636da67c1ef5f"
  },
  {
    "url": "2.0/configure/payment-methods.html",
    "revision": "f8f7e863c93cdc6e0f23c4c5e44144c7"
  },
  {
    "url": "2.0/configure/pricing.html",
    "revision": "e3932cb264c31acb4337045b4c9d5275"
  },
  {
    "url": "2.0/configure/product-view-page.html",
    "revision": "1e10631977ed71ceecfd8840511e8e37"
  },
  {
    "url": "2.0/configure/review.html",
    "revision": "966adc942917535d18b04b2806238dad"
  },
  {
    "url": "2.0/configure/rich-snippets.html",
    "revision": "3bef5ef66c9fe44a4850dc166008247e"
  },
  {
    "url": "2.0/configure/settings.html",
    "revision": "a4122b9b3da28cc4d71a9b8839414fc2"
  },
  {
    "url": "2.0/configure/shipping-methods.html",
    "revision": "010d82b18343621bcf31da4624e90775"
  },
  {
    "url": "2.0/configure/shipping.html",
    "revision": "aa8e4f3ef8cde5752cea79d5fd97e87c"
  },
  {
    "url": "2.0/configure/social-share.html",
    "revision": "07a22b4549a1b9f9bd34856441d99f0a"
  },
  {
    "url": "2.0/configure/weight-unit.html",
    "revision": "e83824cc3c46b6cbfc34e8f075138a6b"
  },
  {
    "url": "2.0/customer/create-customer.html",
    "revision": "e61e823da60a0afc8b5a8f602f41a5e1"
  },
  {
    "url": "2.0/customer/customer-groups.html",
    "revision": "3d3f4fa82964cbae472ffc82724faafe"
  },
  {
    "url": "2.0/customer/customer-reviews.html",
    "revision": "91ed5464b320b241009bcc2733154806"
  },
  {
    "url": "2.0/customer/index.html",
    "revision": "2100d0df05c9682e74169bf45055be31"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "7bbe943096bdf3eba1882e508c9974e9"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "237353cf6b986ad9a97722ff4694411d"
  },
  {
    "url": "2.0/marketing/communications.html",
    "revision": "a0d4cef2f82914a46e1e932d7a8bf071"
  },
  {
    "url": "2.0/marketing/index.html",
    "revision": "bd077b40434610166701d222791299e2"
  },
  {
    "url": "2.0/marketing/promotions.html",
    "revision": "b5a9918a25be2e088f563f1138eb0e2c"
  },
  {
    "url": "2.0/marketing/sitemaps.html",
    "revision": "72dda6ee983b35bec7bf5e31bb2abc80"
  },
  {
    "url": "2.0/orders/create-invoice.html",
    "revision": "73891eec865588d5b04dfbd2ad0b0245"
  },
  {
    "url": "2.0/orders/create-order.html",
    "revision": "4d2eb29a681f512f528b77ed683fb9ef"
  },
  {
    "url": "2.0/orders/create-shipment.html",
    "revision": "248931a9e0d443e9c3e11d418e955d16"
  },
  {
    "url": "2.0/orders/index.html",
    "revision": "34b16d0d3e71cd8aaf3fa3bcc8d87dc8"
  },
  {
    "url": "2.0/orders/refunds.html",
    "revision": "172c726c32b6768671f5813d3bbbbc73"
  },
  {
    "url": "2.0/orders/transaction.html",
    "revision": "19a6c5e6f1aa49a436f5c0f6595ab0d3"
  },
  {
    "url": "2.0/payment-method/payment-method.html",
    "revision": "006d8e7a815fbf121bdc8be2335cc222"
  },
  {
    "url": "2.0/products/bundle.html",
    "revision": "b427b50ae64212259a2773c8ec7a3ba7"
  },
  {
    "url": "2.0/products/configurable.html",
    "revision": "2bc2b58702aa069d69f85808cc374d05"
  },
  {
    "url": "2.0/products/downloadable.html",
    "revision": "bb65084b0341fe32582e1976dd29e737"
  },
  {
    "url": "2.0/products/grouped.html",
    "revision": "c7d9ac80d418d6eeec5f4fb5ccaf4c3e"
  },
  {
    "url": "2.0/products/index.html",
    "revision": "f271ad40c9d227f1ae02121d0663f9c2"
  },
  {
    "url": "2.0/products/simple.html",
    "revision": "857b36285937bc3cad8677e77fec9567"
  },
  {
    "url": "2.0/products/virtual.html",
    "revision": "c9423cbf22b7d9b04e9ce924aa54a569"
  },
  {
    "url": "2.0/reporting/customers.html",
    "revision": "a33a85b1453137869c404b453e800ef8"
  },
  {
    "url": "2.0/reporting/index.html",
    "revision": "c0fb04c1d6e5e53c8b1a34e8838fe846"
  },
  {
    "url": "2.0/reporting/products.html",
    "revision": "c99bf84f26e25edc8a0722d2038513ba"
  },
  {
    "url": "2.0/reporting/sales.html",
    "revision": "d4c23122854991699fa7491ea0867178"
  },
  {
    "url": "2.0/settings/channels.html",
    "revision": "54d77f61a4918c21316c8f8c14a6cb5c"
  },
  {
    "url": "2.0/settings/currencies.html",
    "revision": "8d617d49976bfc81bef82025aa6ebaca"
  },
  {
    "url": "2.0/settings/exchange-rates.html",
    "revision": "3a9691ae1ed7d05ae77b4b57383838b1"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "b2b9b037d590fec7cae08f7351b59ffb"
  },
  {
    "url": "2.0/settings/inventory-source.html",
    "revision": "3e483d96dffec0d6b30f24cd1ef54f1a"
  },
  {
    "url": "2.0/settings/locale.html",
    "revision": "3e8cf7763720c85fe50a95b68fd6676e"
  },
  {
    "url": "2.0/settings/roles.html",
    "revision": "88221f35eebecbca6d25d4749bf2e126"
  },
  {
    "url": "2.0/settings/taxes.html",
    "revision": "2fde39a84c2673759bf9fd566c19ea4c"
  },
  {
    "url": "2.0/settings/themes.html",
    "revision": "42e82041913fd9d6d0e0fcc6df792702"
  },
  {
    "url": "2.0/settings/users.html",
    "revision": "aae96acd98532528f97ff99cc256b757"
  },
  {
    "url": "2.0/shipping-method/shipping-method.html",
    "revision": "8d3773814f32df569058e0d6bed4c0b3"
  },
  {
    "url": "2.1.0/attribute-family/attribute-families.html",
    "revision": "12bb68fbc5a0a1fbba6d8fbdef56c47a"
  },
  {
    "url": "2.1.0/attribute/attribute-input.html",
    "revision": "88f753859b71f88687fe20a61dee2608"
  },
  {
    "url": "2.1.0/attribute/index.html",
    "revision": "1044993de8471fa36dfb55e35754c330"
  },
  {
    "url": "2.1.0/attribute/product-attribute.html",
    "revision": "ce773a822d910e6466dc865ded1fee92"
  },
  {
    "url": "2.1.0/category/create-category.html",
    "revision": "a69ac00dc72b62c48e8ffe13a50af14a"
  },
  {
    "url": "2.1.0/category/index.html",
    "revision": "13d5fe0bbf3410ea669d4b5f2c9d0c84"
  },
  {
    "url": "2.1.0/cms/cms-page.html",
    "revision": "df64edae7713e5e1fbadc33d44e83af4"
  },
  {
    "url": "2.1.0/cms/index.html",
    "revision": "164b9d3e31d16cfd0290a2a6af4e43a3"
  },
  {
    "url": "2.1.0/configure/address.html",
    "revision": "98a5bb570998baf2bbc6cb1c3ff023c5"
  },
  {
    "url": "2.1.0/configure/attribute.html",
    "revision": "8c303e5b5e675dd71dbfb9fda890178f"
  },
  {
    "url": "2.1.0/configure/back-orders.html",
    "revision": "5e83d9cc68587c51ed23bb918e7d2df9"
  },
  {
    "url": "2.1.0/configure/captcha.html",
    "revision": "40a6c0f4bd6ce63a434dfae433051443"
  },
  {
    "url": "2.1.0/configure/cart-view-page.html",
    "revision": "0e5d3ca19dfc753a3f14dcd977cf70a1"
  },
  {
    "url": "2.1.0/configure/configurable-choices.html",
    "revision": "755c1c075bc66404d4cec587ea902361"
  },
  {
    "url": "2.1.0/configure/configurations.html",
    "revision": "645794d2d81b77a8637cd4403a136d90"
  },
  {
    "url": "2.1.0/configure/custom-scripts.html",
    "revision": "b9083b74d530c3744b6ae344d6011a1f"
  },
  {
    "url": "2.1.0/configure/design.html",
    "revision": "00d8159ddbcd1ce3f78a51ff7d2b9a44"
  },
  {
    "url": "2.1.0/configure/email-settings.html",
    "revision": "99edc42bd2561ea4baacab29b6214d31"
  },
  {
    "url": "2.1.0/configure/frontend.html",
    "revision": "45d97ef3be00d6d703696f96624f9518"
  },
  {
    "url": "2.1.0/configure/guest-checkout.html",
    "revision": "0fe9f32d46cb28fcc2b5f59e144bef02"
  },
  {
    "url": "2.1.0/configure/image-size.html",
    "revision": "73be5a6928881430a76dfa993ed34a0d"
  },
  {
    "url": "2.1.0/configure/index.html",
    "revision": "e76719710351ea6d0a41d012d70d979b"
  },
  {
    "url": "2.1.0/configure/invoice-settings.html",
    "revision": "3d631fd4af4281021329fd0a5b156d02"
  },
  {
    "url": "2.1.0/configure/magic-ai.html",
    "revision": "dbe47b6beb6b7ca16e57146fda78a6be"
  },
  {
    "url": "2.1.0/configure/notifications.html",
    "revision": "4a47ee606dc336eca499403e71b1b1ce"
  },
  {
    "url": "2.1.0/configure/orders-settings.html",
    "revision": "63fc1393b7de2bb67741ad0ca8ed3be9"
  },
  {
    "url": "2.1.0/configure/payment-methods.html",
    "revision": "ed3141e1daf2bdd1add5f753a8a0aa44"
  },
  {
    "url": "2.1.0/configure/pricing.html",
    "revision": "0aa6550f146b1502a59fc28ad48fe5e7"
  },
  {
    "url": "2.1.0/configure/product-view-page.html",
    "revision": "0bc132787ee5004fec4aa0fe8d4c953a"
  },
  {
    "url": "2.1.0/configure/review.html",
    "revision": "bd6f1b5227421f5ad5675eecc4927a6b"
  },
  {
    "url": "2.1.0/configure/rich-snippets.html",
    "revision": "81adaaafac61879f051845a9ed6eb014"
  },
  {
    "url": "2.1.0/configure/settings.html",
    "revision": "7d260fdd7ca24dfd707853d132500e9a"
  },
  {
    "url": "2.1.0/configure/shipping-methods.html",
    "revision": "cfe30cd123b383c1c14dee1d045af729"
  },
  {
    "url": "2.1.0/configure/shipping.html",
    "revision": "596635282fae53ee31e950279fe6ee4a"
  },
  {
    "url": "2.1.0/configure/social-share.html",
    "revision": "762a43514acd87e9f2cc799d7ca97e2a"
  },
  {
    "url": "2.1.0/configure/taxes.html",
    "revision": "00e238209249504caa5dafed851694fd"
  },
  {
    "url": "2.1.0/configure/weight-unit.html",
    "revision": "e7d05172c58403cc72c74d2d92dbd861"
  },
  {
    "url": "2.1.0/customer/create-customer.html",
    "revision": "5420b47f6e1ca1fbfdfb5ad69849cf10"
  },
  {
    "url": "2.1.0/customer/customer-groups.html",
    "revision": "3bfa7021a763fd2222b16c1ac96dd8be"
  },
  {
    "url": "2.1.0/customer/customer-reviews.html",
    "revision": "b1ee72e28a84b2f343b911ed15c42550"
  },
  {
    "url": "2.1.0/customer/index.html",
    "revision": "c43da383ebdfec0fd8018cd1aaa290e0"
  },
  {
    "url": "2.1.0/introduction/index.html",
    "revision": "3c3e5ab626bb6d66f8d8588fe0825a39"
  },
  {
    "url": "2.1.0/introduction/introductions.html",
    "revision": "e7b8bf8476bc2a5bfb62965605a51d19"
  },
  {
    "url": "2.1.0/magic/magic-ai.html",
    "revision": "7349edba45c3e0a1f0f3cbb5427255c5"
  },
  {
    "url": "2.1.0/marketing/communications.html",
    "revision": "8af88c04fa7426f3babeceb170aa804f"
  },
  {
    "url": "2.1.0/marketing/index.html",
    "revision": "bc172f9105a212f373d8ff31901a591e"
  },
  {
    "url": "2.1.0/marketing/promotions.html",
    "revision": "00d1cc82660c5173bd48d68caebc95aa"
  },
  {
    "url": "2.1.0/marketing/searchseo.html",
    "revision": "bdee4954adafa2088633f59eea3905cf"
  },
  {
    "url": "2.1.0/orders/create-invoice.html",
    "revision": "521bf021bcdd3e2b3bce557bff2c5201"
  },
  {
    "url": "2.1.0/orders/create-order.html",
    "revision": "df2c8fc32646e3d60ec3514ff1dd4c66"
  },
  {
    "url": "2.1.0/orders/create-shipment.html",
    "revision": "bdfd6cd02ebaceb6fcbeeaec358e7dce"
  },
  {
    "url": "2.1.0/orders/index.html",
    "revision": "5a8a5abfb526ca7ee30f073d45da3f0e"
  },
  {
    "url": "2.1.0/orders/refunds.html",
    "revision": "0b814612197b76ace069c64b168b6840"
  },
  {
    "url": "2.1.0/orders/transaction.html",
    "revision": "d4cefdb87acbe3e4561292feaad65341"
  },
  {
    "url": "2.1.0/payment-method/payment-method.html",
    "revision": "77b15425cacc85509d82240b28f98337"
  },
  {
    "url": "2.1.0/products/bundle.html",
    "revision": "7cc119b004c67e86f84463fb391145c8"
  },
  {
    "url": "2.1.0/products/configurable.html",
    "revision": "d96e00c91c26dd48075f366d14671e6b"
  },
  {
    "url": "2.1.0/products/downloadable.html",
    "revision": "f1dc5a93850758e0c80c6bc880067757"
  },
  {
    "url": "2.1.0/products/grouped.html",
    "revision": "fd141e6159507b918d1f707e38c90d43"
  },
  {
    "url": "2.1.0/products/index.html",
    "revision": "4a2dee83fa3dd81092ef84dcfdb932b8"
  },
  {
    "url": "2.1.0/products/simple.html",
    "revision": "b79d98143693fa8da0bc598ef082ade4"
  },
  {
    "url": "2.1.0/products/virtual.html",
    "revision": "baba60a1b3d069f3148d76eb745b03f5"
  },
  {
    "url": "2.1.0/reporting/customers.html",
    "revision": "d0f97a07603ece9243bf66521345663d"
  },
  {
    "url": "2.1.0/reporting/index.html",
    "revision": "28ae51f460dcd5c5dc705e6ae0d4f5d4"
  },
  {
    "url": "2.1.0/reporting/products.html",
    "revision": "b4edb980069f84f4778be743d9d9c466"
  },
  {
    "url": "2.1.0/reporting/sales.html",
    "revision": "7b95e940b98ce77d148109c4591b7e1b"
  },
  {
    "url": "2.1.0/settings/channels.html",
    "revision": "4a842b916d4282ffcbbc7551efd55623"
  },
  {
    "url": "2.1.0/settings/currencies.html",
    "revision": "47076ede35d331163673d5393a780c8c"
  },
  {
    "url": "2.1.0/settings/data-transfer.html",
    "revision": "8254bb61ef5199bdf31780dca56c91c1"
  },
  {
    "url": "2.1.0/settings/exchange-rates.html",
    "revision": "56d1b1143a740f4c2f651787c8033267"
  },
  {
    "url": "2.1.0/settings/index.html",
    "revision": "2d2a9d5c8fcc09b11596d492f847e985"
  },
  {
    "url": "2.1.0/settings/inventory-source.html",
    "revision": "6105a5fe84a1e0b6165788d473254919"
  },
  {
    "url": "2.1.0/settings/locale.html",
    "revision": "b8a138b1b77839093086fe8ef6977164"
  },
  {
    "url": "2.1.0/settings/roles.html",
    "revision": "e2293befd43e8656a86de0b32a63ea51"
  },
  {
    "url": "2.1.0/settings/taxes.html",
    "revision": "f18866321c29fd85759a054b88d89c67"
  },
  {
    "url": "2.1.0/settings/themes.html",
    "revision": "d70c6116117a2cce66843c627ac70a7c"
  },
  {
    "url": "2.1.0/settings/users.html",
    "revision": "dfd331980cb97f89c2c4637081ca67e9"
  },
  {
    "url": "2.1.0/shipping-method/shipping-method.html",
    "revision": "9703a388161e211c9465dd7f79eda67d"
  },
  {
    "url": "2.2.0/attribute-family/attribute-families.html",
    "revision": "4a56097c875dc2e1b38d75cd500957a5"
  },
  {
    "url": "2.2.0/attribute/attribute-input.html",
    "revision": "8f658ac1a971710b12ed6b34acec51f7"
  },
  {
    "url": "2.2.0/attribute/index.html",
    "revision": "300e0edf90210aab48f45f6d853b0f6a"
  },
  {
    "url": "2.2.0/attribute/product-attribute.html",
    "revision": "e46dbb3200d24da3ed565d375611b514"
  },
  {
    "url": "2.2.0/blog/categories.html",
    "revision": "2e3277e8d06b2d0308b34f00dfbf813f"
  },
  {
    "url": "2.2.0/blog/index.html",
    "revision": "3800e9dfca16615a0bd8966ebbb92b80"
  },
  {
    "url": "2.2.0/blog/posts.html",
    "revision": "f965133d90aee41be5e0e9719cacd4e9"
  },
  {
    "url": "2.2.0/category/create-category.html",
    "revision": "cc7a7e9b5bf502e4ef9c61e1b1286fd2"
  },
  {
    "url": "2.2.0/category/index.html",
    "revision": "a87d18a2e5ad04599cb72de9bfec6abe"
  },
  {
    "url": "2.2.0/cms/cms-page.html",
    "revision": "a80c2373e387d3edaaeca3934af56b79"
  },
  {
    "url": "2.2.0/cms/index.html",
    "revision": "741f85c6ae787892d5263026d532a75a"
  },
  {
    "url": "2.2.0/configure/address.html",
    "revision": "bae501e11f5a9fe14b7f97e988f6bca0"
  },
  {
    "url": "2.2.0/configure/attribute.html",
    "revision": "33d30a6caa588ec6c600c785e1e7629c"
  },
  {
    "url": "2.2.0/configure/back-orders.html",
    "revision": "b9ed569d7f12fe78e593af17efef4c56"
  },
  {
    "url": "2.2.0/configure/captcha.html",
    "revision": "16517df8c3c3533dd372d06b320687df"
  },
  {
    "url": "2.2.0/configure/cart-view-page.html",
    "revision": "dde8d5a6b487f31f896c26306017b5de"
  },
  {
    "url": "2.2.0/configure/checkout.html",
    "revision": "26d565db3b7d9997b5a129199c18f94d"
  },
  {
    "url": "2.2.0/configure/configurable-choices.html",
    "revision": "7654f1b0ac7b98a0624e5b7db0f8c87e"
  },
  {
    "url": "2.2.0/configure/configurations.html",
    "revision": "8f30eb906602666357cc6894db950274"
  },
  {
    "url": "2.2.0/configure/custom-scripts.html",
    "revision": "8cdfe06b410c8900019829fb45449cb7"
  },
  {
    "url": "2.2.0/configure/design.html",
    "revision": "e49e0680f9547c7353fa2c15e0755396"
  },
  {
    "url": "2.2.0/configure/email-settings.html",
    "revision": "86310a8f17c4e9ed343cdcfd260beb33"
  },
  {
    "url": "2.2.0/configure/frontend.html",
    "revision": "089772cbae4265baafa09ddb4f77b7f3"
  },
  {
    "url": "2.2.0/configure/guest-checkout.html",
    "revision": "ff0a2dcd1ccf4f50b064f33bc6125b0f"
  },
  {
    "url": "2.2.0/configure/image-size.html",
    "revision": "5c3025725d4339a209499067e2170f63"
  },
  {
    "url": "2.2.0/configure/index.html",
    "revision": "fa00b9b0175e60c15c08c76f50d6d96b"
  },
  {
    "url": "2.2.0/configure/invoice-settings.html",
    "revision": "6e596ced37686c9b1d091d9aec3d5a4f"
  },
  {
    "url": "2.2.0/configure/magic-ai.html",
    "revision": "ea98f1ce66b30086235ff8404bd43dcf"
  },
  {
    "url": "2.2.0/configure/notifications.html",
    "revision": "07b0a35b1e21219f29c41f19083b4087"
  },
  {
    "url": "2.2.0/configure/orders-settings.html",
    "revision": "8c7076d242e3a62661c7cdf9edbd1487"
  },
  {
    "url": "2.2.0/configure/payment-methods.html",
    "revision": "e5598d374b5f1f217e1915605e7417ae"
  },
  {
    "url": "2.2.0/configure/pricing.html",
    "revision": "2ae2a9a7f35bbe00de3b279af4ac05c1"
  },
  {
    "url": "2.2.0/configure/product-view-page.html",
    "revision": "1ddd5da65000090004b3f652fe52674e"
  },
  {
    "url": "2.2.0/configure/review.html",
    "revision": "04e71dc92386885dd6159fd06df3d1a9"
  },
  {
    "url": "2.2.0/configure/rich-snippets.html",
    "revision": "459fa5623c21c6db4cf920ab2b3abc93"
  },
  {
    "url": "2.2.0/configure/settings.html",
    "revision": "a699bd91525bd240e4d034f26907a115"
  },
  {
    "url": "2.2.0/configure/shipping-methods.html",
    "revision": "61ea2e6b28825b83b8bc09b623c2a6b7"
  },
  {
    "url": "2.2.0/configure/shipping.html",
    "revision": "f08cae7aff933fe3f4ef65653813c077"
  },
  {
    "url": "2.2.0/configure/social-share.html",
    "revision": "3b1f5750f2b6320cb810af8a4ded6a0d"
  },
  {
    "url": "2.2.0/configure/taxes.html",
    "revision": "c477529ffd1181028a28a720c2283ccf"
  },
  {
    "url": "2.2.0/configure/weight-unit.html",
    "revision": "5a8e3f1ad46fdd8a79ae4bfb6b19b869"
  },
  {
    "url": "2.2.0/customer/create-customer.html",
    "revision": "d4d54a7c0c9bbb9fd1bec891ccc42ea8"
  },
  {
    "url": "2.2.0/customer/customer-groups.html",
    "revision": "4fd202b43c123b7ec3929605ccdd6df1"
  },
  {
    "url": "2.2.0/customer/customer-reviews.html",
    "revision": "ee9fb3de48082e0c76ce30136964ce2d"
  },
  {
    "url": "2.2.0/customer/index.html",
    "revision": "0a1c50dd22f355ca80bc8193523f4255"
  },
  {
    "url": "2.2.0/dealers/dealers.html",
    "revision": "b8578cae2093eb89b792ed37cc504243"
  },
  {
    "url": "2.2.0/dealers/index.html",
    "revision": "31a26cc8ae1647ab9186d3dd307837de"
  },
  {
    "url": "2.2.0/faqs/categories.html",
    "revision": "14f0f2465d4a563907485a485b5d6a35"
  },
  {
    "url": "2.2.0/faqs/index.html",
    "revision": "595dbea62d2e757d2f417a67e63aada2"
  },
  {
    "url": "2.2.0/faqs/items.html",
    "revision": "25cd80948f4a851cbd9926d69063ded7"
  },
  {
    "url": "2.2.0/introduction/index.html",
    "revision": "8c48e7946ca8dacf66c293029335d55d"
  },
  {
    "url": "2.2.0/introduction/introductions.html",
    "revision": "db006e58a3c1ba65be14f4c2ee8d019e"
  },
  {
    "url": "2.2.0/magic/magic-ai.html",
    "revision": "e6d44aae28f28679c4db57af780ad132"
  },
  {
    "url": "2.2.0/marketing/communications.html",
    "revision": "f1287885fc9a51fcc7bf4237ad2bb779"
  },
  {
    "url": "2.2.0/marketing/index.html",
    "revision": "95a838184234e5272a34430f62c8d92a"
  },
  {
    "url": "2.2.0/marketing/promotions.html",
    "revision": "7bb5325ebb92aa379f68cd51a3d11bfe"
  },
  {
    "url": "2.2.0/marketing/searchseo.html",
    "revision": "287941744eecdacdc36eace87af0e443"
  },
  {
    "url": "2.2.0/orders/admin-order.html",
    "revision": "3ef434c78fecfdd8c903f4922b62198a"
  },
  {
    "url": "2.2.0/orders/create-invoice.html",
    "revision": "f6db31d6f7513befcdb35a43c363d14f"
  },
  {
    "url": "2.2.0/orders/create-order.html",
    "revision": "a96dda972a36e00bb9d88f59cf17d37e"
  },
  {
    "url": "2.2.0/orders/create-shipment.html",
    "revision": "6bf59055f40c97d08b7dec15f2630b23"
  },
  {
    "url": "2.2.0/orders/index.html",
    "revision": "6da06d739deb7135c1f6bc69ae22d0fa"
  },
  {
    "url": "2.2.0/orders/refunds.html",
    "revision": "d5c82c5494f1d089137a5a44141a394b"
  },
  {
    "url": "2.2.0/orders/reorder.html",
    "revision": "1f143da7e15a14e517686bf386424232"
  },
  {
    "url": "2.2.0/orders/transaction.html",
    "revision": "d7d135af8a2f8fa3ede7e316db2f61d0"
  },
  {
    "url": "2.2.0/payment-method/payment-method.html",
    "revision": "62ed0fb82b72a6456a5784afee406cdd"
  },
  {
    "url": "2.2.0/products/booking.html",
    "revision": "0734b840862ea3bb170269df7ebdc3ce"
  },
  {
    "url": "2.2.0/products/bundle.html",
    "revision": "858e03d6baf27adf272778b6fb697243"
  },
  {
    "url": "2.2.0/products/configurable.html",
    "revision": "bc2b0a6ece27a5839c42cf68d5c41f05"
  },
  {
    "url": "2.2.0/products/downloadable.html",
    "revision": "47b5b7702592420feb033fb2c0d8afb3"
  },
  {
    "url": "2.2.0/products/grouped.html",
    "revision": "364c13b6ecf11a0568ffb614c90d8609"
  },
  {
    "url": "2.2.0/products/index.html",
    "revision": "6d4f2bd498533e136e2eb78d4a4a7168"
  },
  {
    "url": "2.2.0/products/simple.html",
    "revision": "09b1493c7fbefa49dae7fa2e6eac0e8d"
  },
  {
    "url": "2.2.0/products/virtual.html",
    "revision": "c38d6178ca2bb24ffa2f4311aa16576d"
  },
  {
    "url": "2.2.0/reporting/customers.html",
    "revision": "0fcbe2322a7ecc1b95db30f512c6fe0a"
  },
  {
    "url": "2.2.0/reporting/index.html",
    "revision": "a95d4519ae12fdeec381b9976027efe5"
  },
  {
    "url": "2.2.0/reporting/products.html",
    "revision": "d8ec608993c5ae3854c44169c5a2b26a"
  },
  {
    "url": "2.2.0/reporting/sales.html",
    "revision": "78d11916bd4ef349eeaceb6d227082a2"
  },
  {
    "url": "2.2.0/settings/channels.html",
    "revision": "8149f1f264096a794ab807d8b4ab3f3c"
  },
  {
    "url": "2.2.0/settings/currencies.html",
    "revision": "34dbd3fd25d60f30eafeab5382f6d3bd"
  },
  {
    "url": "2.2.0/settings/data-transfer.html",
    "revision": "f5eea0755401875819feb1694aeb9a41"
  },
  {
    "url": "2.2.0/settings/exchange-rates.html",
    "revision": "268cefade94948350391e1364d7874ba"
  },
  {
    "url": "2.2.0/settings/index.html",
    "revision": "52b354fae8914a7d7a718c50abb3c690"
  },
  {
    "url": "2.2.0/settings/inventory-source.html",
    "revision": "565e8b5affc79337ec2aaed0063835c5"
  },
  {
    "url": "2.2.0/settings/locale.html",
    "revision": "e79b3389d66588e4f0c05567d20c4f38"
  },
  {
    "url": "2.2.0/settings/roles.html",
    "revision": "df7bcf1f76d613d6304e18a8c918e68b"
  },
  {
    "url": "2.2.0/settings/taxes.html",
    "revision": "3e4dcbe2557fe2ca2c6b790d2ca8f113"
  },
  {
    "url": "2.2.0/settings/themes.html",
    "revision": "395864bd43392f0502b284d54eb23e12"
  },
  {
    "url": "2.2.0/settings/users.html",
    "revision": "97c68a20f0cfba7d64dceb51e539609e"
  },
  {
    "url": "2.2.0/shipping-method/shipping-method.html",
    "revision": "cc2aac69e12e4cd1c8556021891ccc84"
  },
  {
    "url": "2.2.0/site-config/achievement.html",
    "revision": "93890c0407fde8c151fa99bf1406c8fc"
  },
  {
    "url": "2.2.0/site-config/frontend-cache.html",
    "revision": "288f27dd7d429df8d59e47f03662b0a6"
  },
  {
    "url": "2.2.0/site-config/home-banner.html",
    "revision": "04d35e0b2a588c667c2bfe45a497eefc"
  },
  {
    "url": "2.2.0/site-config/home-info.html",
    "revision": "35dedf81b12f71f4266dc9b721e8f858"
  },
  {
    "url": "2.2.0/site-config/index.html",
    "revision": "4c3d1b760e1ac187053d96a78b580b2d"
  },
  {
    "url": "2.3.0/attribute-family/attribute-families.html",
    "revision": "73756e8433a5e3d74a198a3aacc9a727"
  },
  {
    "url": "2.3.0/attribute/attribute-input.html",
    "revision": "b4a3fef4bcc288462041f207e17f216d"
  },
  {
    "url": "2.3.0/attribute/index.html",
    "revision": "5f854867005c42933531a0290eef4bbf"
  },
  {
    "url": "2.3.0/attribute/product-attribute.html",
    "revision": "37ba7ff00d92a6f214b3ad9fb3b0139a"
  },
  {
    "url": "2.3.0/category/create-category.html",
    "revision": "c97b659bc8b029c0379f512d532d7e4c"
  },
  {
    "url": "2.3.0/category/index.html",
    "revision": "9e4b4e0e33a216cc46604e62108ef821"
  },
  {
    "url": "2.3.0/cms/cms-page.html",
    "revision": "071099e0889c9246df2959ac7ad25d61"
  },
  {
    "url": "2.3.0/cms/index.html",
    "revision": "a4d1d3e709d61d869811900ccd30bfef"
  },
  {
    "url": "2.3.0/configure/address.html",
    "revision": "caf8579572cdd34b5c391bd398a97e82"
  },
  {
    "url": "2.3.0/configure/attribute.html",
    "revision": "c2f9cde5c8e74575c023e2cb934102a9"
  },
  {
    "url": "2.3.0/configure/back-orders.html",
    "revision": "ac4cf7da3dd2d93b80a9ce40c9205d2b"
  },
  {
    "url": "2.3.0/configure/captcha.html",
    "revision": "6f0aeedd449cb688d18542ef160a782c"
  },
  {
    "url": "2.3.0/configure/cart-view-page.html",
    "revision": "c01fbf298768604ff588372e1b19a31e"
  },
  {
    "url": "2.3.0/configure/checkout.html",
    "revision": "a76b5e1f09e67c7bed0eca508d430cc2"
  },
  {
    "url": "2.3.0/configure/configurable-choices.html",
    "revision": "fcd0f82f4af9bfd5e4d14b0bff76279c"
  },
  {
    "url": "2.3.0/configure/configurations.html",
    "revision": "caa2a4c08b549d0eb7b23eaeb116c0be"
  },
  {
    "url": "2.3.0/configure/content.html",
    "revision": "cece7a8c75c42dc677e3b7ef7b30d91e"
  },
  {
    "url": "2.3.0/configure/custom-scripts.html",
    "revision": "e7aad8cc24703a6a68c0ab5758b3c2f1"
  },
  {
    "url": "2.3.0/configure/design.html",
    "revision": "31d7e4c7b10057fb68fe0424ffa3d5e4"
  },
  {
    "url": "2.3.0/configure/email-settings.html",
    "revision": "44e9e8fc33008e4123792f214470e0d7"
  },
  {
    "url": "2.3.0/configure/frontend.html",
    "revision": "8d0bac12671b27063f1f5dbf3f7b19a6"
  },
  {
    "url": "2.3.0/configure/gdpr.html",
    "revision": "c3697f8a69151258b3fd2b4e7d60d113"
  },
  {
    "url": "2.3.0/configure/guest-checkout.html",
    "revision": "ce0b487baa507bbeec9191cb41bd78f4"
  },
  {
    "url": "2.3.0/configure/image-size.html",
    "revision": "09fdbdb39ca7070faa833068fb80f5b0"
  },
  {
    "url": "2.3.0/configure/index.html",
    "revision": "f9e02d840acf8bb4db212bb636c7fc6c"
  },
  {
    "url": "2.3.0/configure/invoice-settings.html",
    "revision": "7e7b800240514207b9a529b9276fa4a1"
  },
  {
    "url": "2.3.0/configure/magic-ai.html",
    "revision": "5f25ebb5f3555f7bac099e74d3e0d206"
  },
  {
    "url": "2.3.0/configure/notifications.html",
    "revision": "9293e307f01fffa47cf326901289cd54"
  },
  {
    "url": "2.3.0/configure/orders-settings.html",
    "revision": "70fe948287076f9f4eb24c7e91be6d5d"
  },
  {
    "url": "2.3.0/configure/payment-methods.html",
    "revision": "69bfa90dc0af14105eea93b10d2a9e47"
  },
  {
    "url": "2.3.0/configure/pricing.html",
    "revision": "32ba043f72bf07a700cc9b2be3af0b4c"
  },
  {
    "url": "2.3.0/configure/product-view-page.html",
    "revision": "9deed694f4431b35e13b120db2480454"
  },
  {
    "url": "2.3.0/configure/review.html",
    "revision": "4becdf83f1da806d6c0aba430aadcb9c"
  },
  {
    "url": "2.3.0/configure/rich-snippets.html",
    "revision": "6bd95869f966f49d0ce459636c8f3ade"
  },
  {
    "url": "2.3.0/configure/settings.html",
    "revision": "ba01c5581336af6f7068aa3c79aa3602"
  },
  {
    "url": "2.3.0/configure/shipping-methods.html",
    "revision": "ea2aa1e8aee71b5e972a583d684a42d9"
  },
  {
    "url": "2.3.0/configure/shipping.html",
    "revision": "d1ca57da9f3a1ecb1db56f37721d2d14"
  },
  {
    "url": "2.3.0/configure/social-share.html",
    "revision": "b6cdfe7944a8c5d70058646dfe40ca15"
  },
  {
    "url": "2.3.0/configure/taxes.html",
    "revision": "42c444eb0f2109ce08fcf1f647ca664b"
  },
  {
    "url": "2.3.0/configure/weight-unit.html",
    "revision": "5e52f95f3e0724de90f669469b61d265"
  },
  {
    "url": "2.3.0/customer/create-customer.html",
    "revision": "bfe8fb8b00f27810012e9c31b4c54dbb"
  },
  {
    "url": "2.3.0/customer/customer-groups.html",
    "revision": "7fbddb494a7c5144b8afe88e17d683fd"
  },
  {
    "url": "2.3.0/customer/customer-reviews.html",
    "revision": "b265739d0a07ecfa8c83122232b80009"
  },
  {
    "url": "2.3.0/customer/gdpr-request.html",
    "revision": "33d7db3fcbe13ad3551aecff49722596"
  },
  {
    "url": "2.3.0/customer/index.html",
    "revision": "ab49ba100f5adadb5ff9f58eca3fe208"
  },
  {
    "url": "2.3.0/introduction/index.html",
    "revision": "0891250fcf9822c510af5bc182e9bbd5"
  },
  {
    "url": "2.3.0/introduction/introductions.html",
    "revision": "c5022ef7c211ac96969218a908457f6a"
  },
  {
    "url": "2.3.0/magic/magic-ai.html",
    "revision": "28320a0d49fefb771d6eb8be445eadd0"
  },
  {
    "url": "2.3.0/marketing/communications.html",
    "revision": "9beccdb8431a575b7391a7f22116d81c"
  },
  {
    "url": "2.3.0/marketing/index.html",
    "revision": "144616fdf8e0c58bd8a34f2dd63b8b1a"
  },
  {
    "url": "2.3.0/marketing/promotions.html",
    "revision": "f69cf24c350f0acea122314403a303ed"
  },
  {
    "url": "2.3.0/marketing/searchseo.html",
    "revision": "48e29761e4c9599c44dbe2a7cb96f800"
  },
  {
    "url": "2.3.0/orders/admin-order.html",
    "revision": "c0b721679afb8949a170535e625fd2f0"
  },
  {
    "url": "2.3.0/orders/create-invoice.html",
    "revision": "6c67196bf90c3409eeeb609e5e0dc61b"
  },
  {
    "url": "2.3.0/orders/create-order.html",
    "revision": "8c7d48b351df4545f0f72b1e1949d873"
  },
  {
    "url": "2.3.0/orders/create-shipment.html",
    "revision": "7359fc4545972c5f224e01075d77507f"
  },
  {
    "url": "2.3.0/orders/index.html",
    "revision": "210e9da423385611ac919b88e2c48817"
  },
  {
    "url": "2.3.0/orders/refunds.html",
    "revision": "9a8300b2ba4d902d25eead4cc0092a60"
  },
  {
    "url": "2.3.0/orders/reorder.html",
    "revision": "caded02199e74af1171da207a7b8e7ae"
  },
  {
    "url": "2.3.0/orders/transaction.html",
    "revision": "e7df49f77eeb325c65e796fc17c8c89d"
  },
  {
    "url": "2.3.0/payment-method/payment-method.html",
    "revision": "5c18179444a1b58da0c9224f01314f20"
  },
  {
    "url": "2.3.0/products/booking.html",
    "revision": "ac3794a5a9ccbafc0ce77c95c5265794"
  },
  {
    "url": "2.3.0/products/bundle.html",
    "revision": "87424242b73761954971543df23c763f"
  },
  {
    "url": "2.3.0/products/configurable.html",
    "revision": "e79d354e69c3aa75e4425e79cecaa5e0"
  },
  {
    "url": "2.3.0/products/downloadable.html",
    "revision": "9385a6207fa8c7f8a61c6164fccdd6ee"
  },
  {
    "url": "2.3.0/products/grouped.html",
    "revision": "601ba54a4ab6c5e4830199d5d94ad870"
  },
  {
    "url": "2.3.0/products/index.html",
    "revision": "fbe43f2a4bbc0c775366e790763393f3"
  },
  {
    "url": "2.3.0/products/simple.html",
    "revision": "b269a5cc0e5f645addc25ef8122534c8"
  },
  {
    "url": "2.3.0/products/virtual.html",
    "revision": "efe787b4d01fb39432a3ac093ee99b25"
  },
  {
    "url": "2.3.0/settings/channels.html",
    "revision": "b894aa4b8132025ffcf271134ff6087f"
  },
  {
    "url": "2.3.0/settings/currencies.html",
    "revision": "46bb0033f5cf5ea71df2aed462f7fd2b"
  },
  {
    "url": "2.3.0/settings/data-transfer.html",
    "revision": "3909d34d5c71a2806289520a50cad94c"
  },
  {
    "url": "2.3.0/settings/exchange-rates.html",
    "revision": "2394db2858e39b8a8ec476ad55e02c20"
  },
  {
    "url": "2.3.0/settings/index.html",
    "revision": "557208af385ea3e594df03970bb13a2a"
  },
  {
    "url": "2.3.0/settings/inventory-source.html",
    "revision": "99d8e6625f60744b982dbe1ecd8da269"
  },
  {
    "url": "2.3.0/settings/locale.html",
    "revision": "33e51873488fa139c957dc69e1636a58"
  },
  {
    "url": "2.3.0/settings/roles.html",
    "revision": "53e1f2ccc8699cf32dd3ae1db0f705b0"
  },
  {
    "url": "2.3.0/settings/taxes.html",
    "revision": "e5a6b7daebf6eef603bf0a5776396c1e"
  },
  {
    "url": "2.3.0/settings/themes.html",
    "revision": "59c8186837be89797a7ba599b26255f4"
  },
  {
    "url": "2.3.0/settings/users.html",
    "revision": "cc73fedf9827217fe47e51b3cd2cd476"
  },
  {
    "url": "2.3.0/shipping-method/shipping-method.html",
    "revision": "5ffe07e543f4d2a6a3c08833b916e111"
  },
  {
    "url": "404.html",
    "revision": "8d768a6bf3c0aca4bc5e5a1105869493"
  },
  {
    "url": "assets/css/0.styles.35bb4407.css",
    "revision": "1940561d1ab1831d1bcc4d52598cfc63"
  },
  {
    "url": "assets/img/1frontend.60a9f83d.png",
    "revision": "60a9f83d3897ccfc85b19edaa45be0da"
  },
  {
    "url": "assets/img/1mycart.fea04e56.png",
    "revision": "fea04e5670e65fc427e521a15ff61b17"
  },
  {
    "url": "assets/img/7mycart.0d9c99f7.png",
    "revision": "0d9c99f7cae4aee1152866dcfb712fa4"
  },
  {
    "url": "assets/img/abandoned-cart.40d28282.png",
    "revision": "40d282829a330c99a715eed34402753b"
  },
  {
    "url": "assets/img/accessControl.76a3d346.png",
    "revision": "76a3d3469396fe88d18e5ee5aaa1a19a"
  },
  {
    "url": "assets/img/add-new-achievement.9f33afab.png",
    "revision": "9f33afab1c398e3ba926380097751caf"
  },
  {
    "url": "assets/img/add-slot.f443a0e2.png",
    "revision": "f443a0e2e02e4ab8691ccb4f8e09d389"
  },
  {
    "url": "assets/img/address.54c54bb8.png",
    "revision": "54c54bb834084ac699488810bd27877b"
  },
  {
    "url": "assets/img/address.73f9d9c3.png",
    "revision": "73f9d9c3c0accc57e57c570a4e5e1bd6"
  },
  {
    "url": "assets/img/adjust.167cbf6f.png",
    "revision": "167cbf6fcbb3f92a4f1ce26f03aec4c5"
  },
  {
    "url": "assets/img/adjustFee.d7f3f7e8.png",
    "revision": "d7f3f7e8aeabaa98c1535cfa96b4e917"
  },
  {
    "url": "assets/img/adjustfeeRefund.cc122ee9.png",
    "revision": "cc122ee9d3f39af1766aa0189bb021a6"
  },
  {
    "url": "assets/img/adjustRefund.8d6b314f.png",
    "revision": "8d6b314f9cd68097a791b6d5d79411c2"
  },
  {
    "url": "assets/img/adminOrder.c87ffdf0.png",
    "revision": "c87ffdf09c7707c0396195d25f4a113d"
  },
  {
    "url": "assets/img/adminReorder.95b00c0d.png",
    "revision": "95b00c0d6f0e1e733882929a7fad3f9f"
  },
  {
    "url": "assets/img/adminReview.926c6afe.png",
    "revision": "926c6afed308f60f485e3a6f4f3ec560"
  },
  {
    "url": "assets/img/allowReorder.bcf70145.png",
    "revision": "bcf701459c18156b50cbeb2789b7addf"
  },
  {
    "url": "assets/img/applyCoupon.1fd0032b.png",
    "revision": "1fd0032b9015a51ef289c19eb6a0a09e"
  },
  {
    "url": "assets/img/appointment-duration.86c30215.png",
    "revision": "86c302159028e4ccf728cfec91c6d9a7"
  },
  {
    "url": "assets/img/appointment.011047ff.png",
    "revision": "011047ff7a21be2a353ad09cfcaf05b6"
  },
  {
    "url": "assets/img/attribute.096f9150.png",
    "revision": "096f9150a23344cbae1bd9105771034c"
  },
  {
    "url": "assets/img/attributeCondition.655b39fd.png",
    "revision": "655b39fd6c08eb73855b1e8eebc63faa"
  },
  {
    "url": "assets/img/attributeFamily.288663af.png",
    "revision": "288663afa26b990715f1742c296a81e8"
  },
  {
    "url": "assets/img/attributeTypes.1a15bed5.png",
    "revision": "1a15bed5d16ae27a096828f27bca331e"
  },
  {
    "url": "assets/img/average-order-value.69fd907e.png",
    "revision": "69fd907e92e903d661ce74438d838c9d"
  },
  {
    "url": "assets/img/backorder.ce2cbb76.png",
    "revision": "ce2cbb765a1ab49f0e7e6e1bfab71561"
  },
  {
    "url": "assets/img/backorderOutput.a79776d7.png",
    "revision": "a79776d71b3aa529893f99db22817b03"
  },
  {
    "url": "assets/img/bill.3dc36a38.png",
    "revision": "3dc36a3808a0e6c75efcceb8cc7c0836"
  },
  {
    "url": "assets/img/billAddress.3e38faa1.png",
    "revision": "3e38faa114ff98f1763a700e9b881960"
  },
  {
    "url": "assets/img/billingAddress.89151ce8.png",
    "revision": "89151ce8150f7098db13961aef747ca0"
  },
  {
    "url": "assets/img/booking-type.1471d100.png",
    "revision": "1471d100ce40213e1b19f5118b9c1aac"
  },
  {
    "url": "assets/img/both-basis.412f1c79.png",
    "revision": "412f1c79fb6cbc9d6d4c2c93a6ce762c"
  },
  {
    "url": "assets/img/bundle.5302b129.png",
    "revision": "5302b129967146ebc686735ba8c55ff0"
  },
  {
    "url": "assets/img/bundleOptions.01cb8cdc.png",
    "revision": "01cb8cdc5eeee8f6684dd51da2050d5a"
  },
  {
    "url": "assets/img/buyNow.2683aa9c.png",
    "revision": "2683aa9c5033194aa12b7c5222915613"
  },
  {
    "url": "assets/img/cache-management.ed530c1c.png",
    "revision": "ed530c1c7d91bfd7ea352129a2eb3009"
  },
  {
    "url": "assets/img/calender-view.f7c3ffa9.png",
    "revision": "f7c3ffa9d46b8b4d0390d0cffe81595b"
  },
  {
    "url": "assets/img/calender.9f451667.png",
    "revision": "9f451667563e5247c3ea4b7430613796"
  },
  {
    "url": "assets/img/campaign.91fe3411.png",
    "revision": "91fe3411810de28aea525a453a58d967"
  },
  {
    "url": "assets/img/campaignConfigration.e42a9937.png",
    "revision": "e42a99378a914bf01862025b214b79d7"
  },
  {
    "url": "assets/img/campaignOutput.f00bb683.png",
    "revision": "f00bb683ca4455f7e3ca9a38a20f3d21"
  },
  {
    "url": "assets/img/captcha.67275c7f.png",
    "revision": "67275c7f46a825296a8f97e966834997"
  },
  {
    "url": "assets/img/cart.0d42b772.png",
    "revision": "0d42b772a15096e9edc7056fa2fe2d97"
  },
  {
    "url": "assets/img/cartpageConfiguration.2a8cc626.png",
    "revision": "2a8cc6265574d17e2cad9a0b66d1607f"
  },
  {
    "url": "assets/img/cartSummary.ddb14953.png",
    "revision": "ddb14953d3dd65cf481f2c74cda92a64"
  },
  {
    "url": "assets/img/catAdmin.dabb8c35.png",
    "revision": "dabb8c35436d23f43f4a7ca5b405cc8f"
  },
  {
    "url": "assets/img/catalogConditions.3f3cf255.png",
    "revision": "3f3cf255fede57553424291559b4e0ac"
  },
  {
    "url": "assets/img/catalogConfigurations.ecca3049.png",
    "revision": "ecca304994b24c73e3fb55130153639b"
  },
  {
    "url": "assets/img/catalogFront.04438821.png",
    "revision": "04438821a4e0bf377024e9a786ac335a"
  },
  {
    "url": "assets/img/catalogOutput.db2a4bb7.png",
    "revision": "db2a4bb7d81cfd5ac38d76b730cef561"
  },
  {
    "url": "assets/img/catalogRule.d389090c.png",
    "revision": "d389090cbd9b5b05a33d7f83f180ac43"
  },
  {
    "url": "assets/img/categories.9654bd7b.png",
    "revision": "9654bd7bc173241027a741805b2bc98a"
  },
  {
    "url": "assets/img/categoryGrid.30d2b5c1.png",
    "revision": "30d2b5c1f28ee421ad2949fbe956fbc4"
  },
  {
    "url": "assets/img/catSide.ffabd07f.png",
    "revision": "ffabd07f8c2548322f4dc8d7c17e84e9"
  },
  {
    "url": "assets/img/channelGrid.2fb2d268.png",
    "revision": "2fb2d268ad269255efd23c1148ab16e7"
  },
  {
    "url": "assets/img/channels.eadfb45b.png",
    "revision": "eadfb45be94bde3cf14aa99e48f442de"
  },
  {
    "url": "assets/img/checkout.ab9b0f97.png",
    "revision": "ab9b0f976dfe52f807452715beb19d82"
  },
  {
    "url": "assets/img/checkoutMessage.7fec4305.png",
    "revision": "7fec4305b6e80c79137eda387ce363d1"
  },
  {
    "url": "assets/img/checkoutPage.d39fa003.png",
    "revision": "d39fa003a222d6dddd99ae40363bd2ca"
  },
  {
    "url": "assets/img/cod.a12ca48a.png",
    "revision": "a12ca48af4446c77d697d6a91c4859a0"
  },
  {
    "url": "assets/img/command.9351feae.png",
    "revision": "9351feaecaec23c14bbc13be7942a439"
  },
  {
    "url": "assets/img/condition.ab321770.png",
    "revision": "ab32177015ee86d4aa9934cedd5b30e1"
  },
  {
    "url": "assets/img/configurable.9fa6fb76.png",
    "revision": "9fa6fb7664af716acdf07eb82708f5ba"
  },
  {
    "url": "assets/img/configurableAttributes.0341eddd.png",
    "revision": "0341eddd298735466ee157f6485d9706"
  },
  {
    "url": "assets/img/configurations.5d9c124c.png",
    "revision": "5d9c124ce63ba29a935aad5281986e68"
  },
  {
    "url": "assets/img/contactInfo.4d1e076d.png",
    "revision": "4d1e076dfd3113456026a3f539bdbdaf"
  },
  {
    "url": "assets/img/contains.3ed8311c.png",
    "revision": "3ed8311c9895e1cedf09bec880bd00a1"
  },
  {
    "url": "assets/img/content.7e1b8e48.png",
    "revision": "7e1b8e486e6c73a245083b7239471f9d"
  },
  {
    "url": "assets/img/content.9140afd6.png",
    "revision": "9140afd64a40ae73085809e92f97a2a6"
  },
  {
    "url": "assets/img/content.d90f471e.png",
    "revision": "d90f471eb0cb66d7c7da150e4ab7a89c"
  },
  {
    "url": "assets/img/contentspec.67545044.png",
    "revision": "67545044fe5fc1c5d5dbce946f640f56"
  },
  {
    "url": "assets/img/cookies-position.bcba3078.png",
    "revision": "bcba30784d5b2c9e2c01881c11610bed"
  },
  {
    "url": "assets/img/cookies-Preferences.0a706068.png",
    "revision": "0a706068aaa824c26b3b949c44acd897"
  },
  {
    "url": "assets/img/couponApplied.22a6cb26.png",
    "revision": "22a6cb2644a9db78adb2818f756a4b35"
  },
  {
    "url": "assets/img/couponCode.7f792622.png",
    "revision": "7f7926226eef9ed70ee18bd80dcfd3dd"
  },
  {
    "url": "assets/img/create-new-faqs-item.6bf46ea5.png",
    "revision": "6bf46ea598da62969eb00593388f1a31"
  },
  {
    "url": "assets/img/create-post.268f4f4e.png",
    "revision": "268f4f4e91bbeea8c6eeead9fab53ea9"
  },
  {
    "url": "assets/img/create-product.de3763bd.png",
    "revision": "de3763bd35b420fae98e2bd46f259ddb"
  },
  {
    "url": "assets/img/create.757552e8.png",
    "revision": "757552e8c1a3f7f3623eafd87da6e3db"
  },
  {
    "url": "assets/img/createAttribute.bf9dd39a.png",
    "revision": "bf9dd39ae6079ef5613992d6e4812d50"
  },
  {
    "url": "assets/img/createCartrule.f59d3c55.png",
    "revision": "f59d3c55e87645f1ab3bca95d4d9eed6"
  },
  {
    "url": "assets/img/createCurrency.80f5dbec.png",
    "revision": "80f5dbec7e268bf73a29385cbb371f4c"
  },
  {
    "url": "assets/img/createCustomer.a6c9698b.png",
    "revision": "a6c9698b28099326d39cf735ca3468c1"
  },
  {
    "url": "assets/img/createFamily.ba7fc9a9.png",
    "revision": "ba7fc9a9c8e73f8962cad699c47e340d"
  },
  {
    "url": "assets/img/createGroup.08afdc81.png",
    "revision": "08afdc8109ffa43d47e454900e483da5"
  },
  {
    "url": "assets/img/createImport.8a18e6f7.png",
    "revision": "8a18e6f712cebe01f4966ba2cea89567"
  },
  {
    "url": "assets/img/createPage.8392fa25.png",
    "revision": "8392fa251d47307c792bbd8ab88cb9c5"
  },
  {
    "url": "assets/img/createShipment.f1b18478.png",
    "revision": "f1b18478ca01419ad43d14af3c624c9e"
  },
  {
    "url": "assets/img/createSitemap.d3b98b83.png",
    "revision": "d3b98b83b7631a9f494f69c5cd0891f3"
  },
  {
    "url": "assets/img/createSitemap.d6148cff.png",
    "revision": "d6148cff22a71aaaae2df2d116e6077c"
  },
  {
    "url": "assets/img/createTheme.0b94db18.png",
    "revision": "0b94db1864cfe92426a3044bf75cdea3"
  },
  {
    "url": "assets/img/createTransaction.71680d0a.png",
    "revision": "71680d0a0aebb6babfc0564d1b12ef1d"
  },
  {
    "url": "assets/img/createUser.f36e2467.png",
    "revision": "f36e2467b839a9711fe536a06b5e6f42"
  },
  {
    "url": "assets/img/css.2b4e1926.png",
    "revision": "2b4e19263e7221e2f43c054f7ab1a6d6"
  },
  {
    "url": "assets/img/cssOutput.f20f7109.png",
    "revision": "f20f710933d21bed21ab4f1db6ee9e93"
  },
  {
    "url": "assets/img/currencyLocal.4e83b107.png",
    "revision": "4e83b1073426ccd438831e6d3abb9d40"
  },
  {
    "url": "assets/img/custom-shoes.3855e8a7.png",
    "revision": "3855e8a774d155b4316a5c8cd91af44d"
  },
  {
    "url": "assets/img/custom.bad01684.png",
    "revision": "bad01684012cb08bd3bf4e36c39ec5e6"
  },
  {
    "url": "assets/img/customer-group.b2e8d240.png",
    "revision": "b2e8d24057db830319da6ab27135a77d"
  },
  {
    "url": "assets/img/customer-most-order.ab12bc7e.png",
    "revision": "ab12bc7ed09a30f4b9735fd7301d3d5a"
  },
  {
    "url": "assets/img/customer-most-review.2e3306dd.png",
    "revision": "2e3306dd0b905807240960ec38f5e4ad"
  },
  {
    "url": "assets/img/customer-traffic.cb4d6371.png",
    "revision": "cb4d6371213745f5544b2905247b7507"
  },
  {
    "url": "assets/img/customer.4e4dd06f.png",
    "revision": "4e4dd06f9864f5c9993299da841d35e9"
  },
  {
    "url": "assets/img/customerGrid.3a719b2e.png",
    "revision": "3a719b2e9bd9e2a9e7ba7867800b26c1"
  },
  {
    "url": "assets/img/customerPrice.9d1e5d18.png",
    "revision": "9d1e5d18955dede0d7c9a90fae5e5da9"
  },
  {
    "url": "assets/img/customization.3b816a28.png",
    "revision": "3b816a283d78e65c0a6da9a6906323bc"
  },
  {
    "url": "assets/img/customization.ee6ffc23.png",
    "revision": "ee6ffc2366ed4d947c9c00ab7fe80f85"
  },
  {
    "url": "assets/img/default-booking.01849695.png",
    "revision": "018496952ec06f81d7b36837cb6df20c"
  },
  {
    "url": "assets/img/description.0c5cd1d1.png",
    "revision": "0c5cd1d17dd0de93eb5775d38cc824ff"
  },
  {
    "url": "assets/img/description.40848a5f.png",
    "revision": "40848a5f5f247f682852c84998efa3c0"
  },
  {
    "url": "assets/img/description.8a01022f.png",
    "revision": "8a01022faa9c7169b3b464d3b50ae2db"
  },
  {
    "url": "assets/img/description.b1ef58bc.png",
    "revision": "b1ef58bcfccd11a44c92be2741854a59"
  },
  {
    "url": "assets/img/description.cf62b04a.png",
    "revision": "cf62b04aa2f445f10339b56579fa52f8"
  },
  {
    "url": "assets/img/description.d969131c.png",
    "revision": "d969131c908608da5860ee182e6229bd"
  },
  {
    "url": "assets/img/description.dcf2688e.png",
    "revision": "dcf2688ee434ac2cfd839e613c73bd5d"
  },
  {
    "url": "assets/img/descriptions.765ffef8.png",
    "revision": "765ffef8e6c1d256cd89e6cd63e8a99e"
  },
  {
    "url": "assets/img/design.242fdac4.png",
    "revision": "242fdac496c51c86a3441fbfa1957133"
  },
  {
    "url": "assets/img/design.3a73ffcb.png",
    "revision": "3a73ffcb7572045dddabe71e47447436"
  },
  {
    "url": "assets/img/designOutput.9f21e89f.png",
    "revision": "9f21e89ff570e9fa4bafe0a6248d57ba"
  },
  {
    "url": "assets/img/designOutput.c4642cb8.png",
    "revision": "c4642cb8d8e8c75bb2096f11e22521e3"
  },
  {
    "url": "assets/img/designOutput2.f072f094.png",
    "revision": "f072f094c679f8c291199b166ded471a"
  },
  {
    "url": "assets/img/destination.6deed041.png",
    "revision": "6deed041fc5339ded21e4918591a455b"
  },
  {
    "url": "assets/img/disableminiCart.4a099c89.png",
    "revision": "4a099c89ed6b902f3af25fcba3a1b832"
  },
  {
    "url": "assets/img/downloadable.67051ddc.png",
    "revision": "67051ddc29b8b662b724eddb30ba604e"
  },
  {
    "url": "assets/img/downlodableInfo.b6d199cc.png",
    "revision": "b6d199cc406607e28eaa126d0e1b8b6e"
  },
  {
    "url": "assets/img/duration.849dd4ce.png",
    "revision": "849dd4ceae32bc631055dca8fb8748f8"
  },
  {
    "url": "assets/img/edit-carousel-slide.c7014d66.png",
    "revision": "c7014d66fe40d0d850d2f7e67c66e392"
  },
  {
    "url": "assets/img/edit-categories.123dfda0.png",
    "revision": "123dfda0da615ef54c941b6df055c985"
  },
  {
    "url": "assets/img/edit-dealer.0aca89f0.png",
    "revision": "0aca89f0d96b792048b1cc84162174e3"
  },
  {
    "url": "assets/img/edit-faqs-category.b188c625.png",
    "revision": "b188c62543821554c98eec38f35c2b3e"
  },
  {
    "url": "assets/img/edit-product.795e7782.png",
    "revision": "795e7782de26403aa2a2b3b9b1be9607"
  },
  {
    "url": "assets/img/editCategory.1e673965.png",
    "revision": "1e673965381721c39d193150c361755d"
  },
  {
    "url": "assets/img/editPage.5ad3e91b.png",
    "revision": "5ad3e91b4ed121bbc11c70665f3a0284"
  },
  {
    "url": "assets/img/editProduct.24b4c21d.png",
    "revision": "24b4c21dd133cc882224853a6be174fd"
  },
  {
    "url": "assets/img/editProduct.a0f174d2.png",
    "revision": "a0f174d28c7d61054863da62174ba8d1"
  },
  {
    "url": "assets/img/editProduct.ccce09c2.png",
    "revision": "ccce09c29ff97353f018001dfac74cd9"
  },
  {
    "url": "assets/img/editProduct.f3d03ba3.png",
    "revision": "f3d03ba38a9663379dd57eb22b49d626"
  },
  {
    "url": "assets/img/editProduct.fff08496.png",
    "revision": "fff0849642df2f8807b13fad295e8837"
  },
  {
    "url": "assets/img/editProducts.1d1ea4f3.png",
    "revision": "1d1ea4f388a0ccd939097fe3c8139328"
  },
  {
    "url": "assets/img/emailSetting.861f2aa4.png",
    "revision": "861f2aa493357812b89efe051baaa4a5"
  },
  {
    "url": "assets/img/emailSettings.39150cea.png",
    "revision": "39150cea1ae9747a18b55493c028cb17"
  },
  {
    "url": "assets/img/enableNewsletter.d0472579.png",
    "revision": "d04725797a67f04091339da2de467b92"
  },
  {
    "url": "assets/img/event-booking.33f16931.png",
    "revision": "33f169316c2470813bc66b473b605f5a"
  },
  {
    "url": "assets/img/event.7eb17475.png",
    "revision": "7eb17475b469586397490e70b4dadec0"
  },
  {
    "url": "assets/img/eventName.50f4e068.png",
    "revision": "50f4e0685269914c2d3ff2a0a3887c05"
  },
  {
    "url": "assets/img/eventOutput.ca12f7e6.png",
    "revision": "ca12f7e6e171f8e2945da64a1bde655d"
  },
  {
    "url": "assets/img/exchangeOutput.c1dd511d.png",
    "revision": "c1dd511d49748d1caa1b31e16ccb0b84"
  },
  {
    "url": "assets/img/exchangeRate.6949e640.png",
    "revision": "6949e6408e43a509bad3c4a68dec9b5b"
  },
  {
    "url": "assets/img/exchangerateConfigurations.3fef1f77.png",
    "revision": "3fef1f77ac2ea8c113ad3fee785e79c8"
  },
  {
    "url": "assets/img/exchangerateGrid.18b0f0f7.png",
    "revision": "18b0f0f767a286b8ecec4305e7e015fb"
  },
  {
    "url": "assets/img/excludeTax.ca9ac8ea.png",
    "revision": "ca9ac8ea55c2fe44feebf857f259cf52"
  },
  {
    "url": "assets/img/familyGrid.8370fbab.png",
    "revision": "8370fbabc01b668e7d0b83c858d9e089"
  },
  {
    "url": "assets/img/faviconOutput.0af4ffb5.png",
    "revision": "0af4ffb591592d1e7893fc1a040730ca"
  },
  {
    "url": "assets/img/frontend2.864a8940.png",
    "revision": "864a894032e86df0e8cd907d60957280"
  },
  {
    "url": "assets/img/frontend3.eabff820.png",
    "revision": "eabff820731fe9ccc11cb51642570f78"
  },
  {
    "url": "assets/img/frontend4.2e6593e2.png",
    "revision": "2e6593e2b87e9d87d1991c250b0527c8"
  },
  {
    "url": "assets/img/frontend5.eed29077.png",
    "revision": "eed2907742fe5034f078de31c76f15e5"
  },
  {
    "url": "assets/img/frontendFavicon.2fb0d95a.png",
    "revision": "2fb0d95aaeb8e6138715620a1599af7a"
  },
  {
    "url": "assets/img/frontendLogos.686a5669.png",
    "revision": "686a5669a7300675dccc77bcc0832cd8"
  },
  {
    "url": "assets/img/frontendOutput.380a6cd1.png",
    "revision": "380a6cd10fc15e240b0ca3e629a661e5"
  },
  {
    "url": "assets/img/frontreorder.22b948e2.png",
    "revision": "22b948e2b1b2378d14827dee2e387096"
  },
  {
    "url": "assets/img/gdpr-agreement.7ac81b74.png",
    "revision": "7ac81b74bd66792f67ef20f4f625418b"
  },
  {
    "url": "assets/img/gdpr-agreement2.47141f66.png",
    "revision": "47141f669aac6be789eeebaa121da930"
  },
  {
    "url": "assets/img/gdpr-message.0fa31f5d.png",
    "revision": "0fa31f5d75b428ae639522e07dc5ff3c"
  },
  {
    "url": "assets/img/gdpr-request.839731e3.png",
    "revision": "839731e3e3f72a1d48c97e520dacca98"
  },
  {
    "url": "assets/img/gdpr-status.d0a0ef87.png",
    "revision": "d0a0ef87ad696b4cb44037d65cc1a94e"
  },
  {
    "url": "assets/img/gdpr1.526b5a64.png",
    "revision": "526b5a646882a0367ffc008ac98e2588"
  },
  {
    "url": "assets/img/general.5849fe78.png",
    "revision": "5849fe78c23e9940aa3c4bab5eb717a8"
  },
  {
    "url": "assets/img/gridmode.74754395.png",
    "revision": "747543955a832346c7beaa7d39568ff8"
  },
  {
    "url": "assets/img/grouped.2f44c858.png",
    "revision": "2f44c858253f417437320c5c9ea3667c"
  },
  {
    "url": "assets/img/groupGrid.c4785f5f.png",
    "revision": "c4785f5ff2390e4d265850c801bdad2e"
  },
  {
    "url": "assets/img/groupPrice.924928de.png",
    "revision": "924928de7250cc7817f1d014bc84ed09"
  },
  {
    "url": "assets/img/groupProducts.67a99166.png",
    "revision": "67a99166d6e7b65e0fa7777cfabace42"
  },
  {
    "url": "assets/img/guestCheckout.4e097830.png",
    "revision": "4e097830b799d41574e207014b0d6bad"
  },
  {
    "url": "assets/img/header.29950b1c.png",
    "revision": "29950b1c7b632f9f7922feb01f721825"
  },
  {
    "url": "assets/img/home-config-full.96e57702.png",
    "revision": "96e577022dd2c4c710bb68020c23ec1a"
  },
  {
    "url": "assets/img/hourly-basis.21c795c2.png",
    "revision": "21c795c2f086d40da1312cca586ff568"
  },
  {
    "url": "assets/img/image-ai.fd1bf4e0.png",
    "revision": "fd1bf4e02f90dc729016319dbddacadf"
  },
  {
    "url": "assets/img/image.14ecf612.png",
    "revision": "14ecf612cd25f06d6b8e0697ba510c52"
  },
  {
    "url": "assets/img/image.4fb420d5.png",
    "revision": "4fb420d5f271c4c97f186eb11e1dff05"
  },
  {
    "url": "assets/img/image.5fcfa261.png",
    "revision": "5fcfa261a6017b174d1da408d814911f"
  },
  {
    "url": "assets/img/image.6a9cc529.png",
    "revision": "6a9cc529f91e47c9fed2a5bca27de29a"
  },
  {
    "url": "assets/img/image.ac99298b.png",
    "revision": "ac99298bc7c874fc29cd2279398e2655"
  },
  {
    "url": "assets/img/image.b30e57d4.png",
    "revision": "b30e57d4619cab816c7f63f1f039c26a"
  },
  {
    "url": "assets/img/image.e99c275b.png",
    "revision": "e99c275be41933e50a8ebfbb862e0e59"
  },
  {
    "url": "assets/img/imageMagic.3cc5adec.png",
    "revision": "3cc5adeccff6836619050eb055c5e5fd"
  },
  {
    "url": "assets/img/images.4a69d22e.png",
    "revision": "4a69d22e7884b0a3cde7ff619496f46f"
  },
  {
    "url": "assets/img/images.f98aa4ee.png",
    "revision": "f98aa4ee292000aba41322d91160024a"
  },
  {
    "url": "assets/img/imageSize.8e066795.png",
    "revision": "8e066795f9129b4fd7da35ec8f8288d1"
  },
  {
    "url": "assets/img/import.724fed65.png",
    "revision": "724fed65d7ed4881824b62c03a95dc11"
  },
  {
    "url": "assets/img/importDone.0d444b37.png",
    "revision": "0d444b374f97ef023c12a81ef49f86ad"
  },
  {
    "url": "assets/img/importOutput.eeb6d038.png",
    "revision": "eeb6d038073f42ffa84377842b7d5270"
  },
  {
    "url": "assets/img/includeexcludeBoth.0cd8803b.png",
    "revision": "0cd8803b37bd819db03d7464e8a1e441"
  },
  {
    "url": "assets/img/includeTax.d3a03586.png",
    "revision": "d3a035865b78aa7dafd152de912d4631"
  },
  {
    "url": "assets/img/inventoryConfiguration.3d59b832.png",
    "revision": "3d59b832b80fb87801a0fb424a93c2bc"
  },
  {
    "url": "assets/img/inventoryOutput.2b30b856.png",
    "revision": "2b30b856b6f4572dc578e9838781b3c4"
  },
  {
    "url": "assets/img/inventorySetting.bfce85d5.png",
    "revision": "bfce85d5821f613402a25b49b762249e"
  },
  {
    "url": "assets/img/inventorySource.703ce5b3.png",
    "revision": "703ce5b39e6977f9ac933c806b203fb0"
  },
  {
    "url": "assets/img/invoice.befbdba3.png",
    "revision": "befbdba38ad837425e6a20e8278637b7"
  },
  {
    "url": "assets/img/invoicenumberSettings.495f7127.png",
    "revision": "495f712718a7b86806df3307165d04c0"
  },
  {
    "url": "assets/img/invoiceReminder.d09415a1.png",
    "revision": "d09415a145d7bbdb914ae41f9cbd0928"
  },
  {
    "url": "assets/img/invoiceSlip.8d53aba6.png",
    "revision": "8d53aba693968cfbe1f4e6a4dddcf977"
  },
  {
    "url": "assets/img/invoiceSubmit.da097460.png",
    "revision": "da0974603b074d5dd4a66eba35945d63"
  },
  {
    "url": "assets/img/itemQuantity.c04ba958.png",
    "revision": "c04ba958e61a9aa20469869e477527b6"
  },
  {
    "url": "assets/img/items.33946b16.png",
    "revision": "33946b16a190e59f25ac0c4392f12443"
  },
  {
    "url": "assets/img/js.c347da35.png",
    "revision": "c347da35f27b670819805af58578695c"
  },
  {
    "url": "assets/img/last-searchTerm.9aea5eda.png",
    "revision": "9aea5edaab70881c5e2f17dd7dfa12a2"
  },
  {
    "url": "assets/img/link.68f3ea34.png",
    "revision": "68f3ea347f52221dab0cfb28f17f3a6e"
  },
  {
    "url": "assets/img/link.ef489c2e.png",
    "revision": "ef489c2ecd25145c1ea738c82eaf4edc"
  },
  {
    "url": "assets/img/list-achievement.2ddbdaef.png",
    "revision": "2ddbdaef63510c3b356a9482ece26a78"
  },
  {
    "url": "assets/img/list-carousel-slides.2ef9989c.png",
    "revision": "2ef9989cc2aece83d1945e81f0a60dff"
  },
  {
    "url": "assets/img/list-dealers.2198c47c.png",
    "revision": "2198c47c09eb8c942be2e52047ed5f64"
  },
  {
    "url": "assets/img/listmode.c8699863.png",
    "revision": "c86998630824813567c96ac7d20a4ed5"
  },
  {
    "url": "assets/img/localeChannel.61e5efa8.png",
    "revision": "61e5efa86318d439b1d7438389eb3bc2"
  },
  {
    "url": "assets/img/localeGrid.3cc059ab.png",
    "revision": "3cc059ab5b961f59a840fd4f4a24f944"
  },
  {
    "url": "assets/img/locales.1eec3541.png",
    "revision": "1eec3541589c43acfd900c577a90e2cb"
  },
  {
    "url": "assets/img/logoOutputs.3be56cf8.png",
    "revision": "3be56cf8cce9f1405a499e2c5cf7ed82"
  },
  {
    "url": "assets/img/magic.c9b20146.png",
    "revision": "c9b20146402bfb72c7b2b32f67b104f1"
  },
  {
    "url": "assets/img/meta-fields.8fd70f1b.png",
    "revision": "8fd70f1b7e5a02a64c3cf36590a5c7f2"
  },
  {
    "url": "assets/img/metaDescription.16764ed9.png",
    "revision": "16764ed924978ceba5e8309f09f5ca78"
  },
  {
    "url": "assets/img/metaDescription.74f66c89.png",
    "revision": "74f66c899f15052cfaaa76033580ef0e"
  },
  {
    "url": "assets/img/metaDescription.afb36600.png",
    "revision": "afb36600eab84ea9868a197a962dde20"
  },
  {
    "url": "assets/img/metaDescription.dd43b5fa.png",
    "revision": "dd43b5fa54988ec0dd492416f63f6deb"
  },
  {
    "url": "assets/img/metaDescription.efc89005.png",
    "revision": "efc890052f6645d6745646af2b18bd40"
  },
  {
    "url": "assets/img/metaDescriptions.4dfbc31b.png",
    "revision": "4dfbc31baabc5bdc385e298bb43d42b2"
  },
  {
    "url": "assets/img/mini-cart.6439a672.png",
    "revision": "6439a6720799a5062489518f7dc83cfa"
  },
  {
    "url": "assets/img/mini-cart1.cc6fcbbf.png",
    "revision": "cc6fcbbf7b7c1d7acdb214369078169f"
  },
  {
    "url": "assets/img/moneyTransfer.d78c9eeb.png",
    "revision": "d78c9eebbc07cf1dbcc0e20c2ca0a2ef"
  },
  {
    "url": "assets/img/new-slots.1863be66.png",
    "revision": "1863be665ddc8b63c18090a5c137495b"
  },
  {
    "url": "assets/img/newCurrency.ad269f28.png",
    "revision": "ad269f28da67564867b6782f90199416"
  },
  {
    "url": "assets/img/newGroup.0ffae93a.png",
    "revision": "0ffae93ad5842d7e77209c73c2ee8f10"
  },
  {
    "url": "assets/img/newLocale.0e9afa70.png",
    "revision": "0e9afa702eff98da246a19e18ee54007"
  },
  {
    "url": "assets/img/news.da67ed03.png",
    "revision": "da67ed0331fdd3a5bfad7054438d3e01"
  },
  {
    "url": "assets/img/newsletter.c363c83a.png",
    "revision": "c363c83a145fe9742343bf1dab91bd34"
  },
  {
    "url": "assets/img/newsletterGrid.fe1bd92d.png",
    "revision": "fe1bd92df43b9eef5ebe493650930929"
  },
  {
    "url": "assets/img/newsletterSettings.b9d66c0a.png",
    "revision": "b9d66c0a1c96bf0d50fc15edc511c050"
  },
  {
    "url": "assets/img/notifications.0cf7b2b1.png",
    "revision": "0cf7b2b1537dad395e36ef791eae7e0d"
  },
  {
    "url": "assets/img/numberItems.a5fcac32.png",
    "revision": "a5fcac321184a03259d7db4bbc4c4f12"
  },
  {
    "url": "assets/img/options.001937e2.png",
    "revision": "001937e250d31e5f629729cfe7151e50"
  },
  {
    "url": "assets/img/options.725fc8d0.png",
    "revision": "725fc8d0e18059346598f02e4aabf2de"
  },
  {
    "url": "assets/img/orderID.05515d8b.png",
    "revision": "05515d8b0ec724d380e00578091597cf"
  },
  {
    "url": "assets/img/orderID.2c2d3b76.png",
    "revision": "2c2d3b7625544f02c95f3120fdb7ed0c"
  },
  {
    "url": "assets/img/orderInfo.653f834c.png",
    "revision": "653f834c7e13e5eda039763e29a7011b"
  },
  {
    "url": "assets/img/orderPlace.c0ba8da5.png",
    "revision": "c0ba8da5e4cde026b7ee7268b94b1717"
  },
  {
    "url": "assets/img/orderSettings.f4ab6c13.png",
    "revision": "f4ab6c13c25e37cd93dde2287785c7a8"
  },
  {
    "url": "assets/img/other.de9bb79b.png",
    "revision": "de9bb79b1f5e1bb89519f95b3a23523b"
  },
  {
    "url": "assets/img/outofstock.383c7271.png",
    "revision": "383c727177947943215434993682c870"
  },
  {
    "url": "assets/img/output.16c1b819.png",
    "revision": "16c1b819868428bcdd6f034f1d5d66a8"
  },
  {
    "url": "assets/img/output.31b099f6.png",
    "revision": "31b099f668578a9215701cbe7e382c5a"
  },
  {
    "url": "assets/img/output.41bd8676.png",
    "revision": "41bd86762890d2f525078bca7e186536"
  },
  {
    "url": "assets/img/output.4778ea36.png",
    "revision": "4778ea36ffc3c72e1c69e17d3b36d50f"
  },
  {
    "url": "assets/img/output.71dc9bec.png",
    "revision": "71dc9bece4c5b15ab5f7dd076fe361cb"
  },
  {
    "url": "assets/img/output.7881c7c4.png",
    "revision": "7881c7c4e6cc64e4163339e667b411d7"
  },
  {
    "url": "assets/img/output.919d1184.png",
    "revision": "919d1184445ccdc6575ac69f96fc81c4"
  },
  {
    "url": "assets/img/output.c8ed1df3.png",
    "revision": "c8ed1df3080c6c55af735ddb1d491ff7"
  },
  {
    "url": "assets/img/output.cc9621ee.png",
    "revision": "cc9621eecc949453e93b99ae86a9ce7e"
  },
  {
    "url": "assets/img/output.df4635e8.png",
    "revision": "df4635e844f2cca421177674a30e307e"
  },
  {
    "url": "assets/img/output.f6302d0e.png",
    "revision": "f6302d0e87674b638a14a9e97e755125"
  },
  {
    "url": "assets/img/pageConfiguration.d4acc9ec.png",
    "revision": "d4acc9ecfa471060a232843411b19558"
  },
  {
    "url": "assets/img/paymentmethod.50f0f3d5.png",
    "revision": "50f0f3d52b4b753d936b49e9356dfe2a"
  },
  {
    "url": "assets/img/paymentTerms.6bc06672.png",
    "revision": "6bc066729a21ce264d448791c7599b08"
  },
  {
    "url": "assets/img/paypal.08e56b66.png",
    "revision": "08e56b6616a2f58b5f79e2aaf49ad38b"
  },
  {
    "url": "assets/img/paypalStandard.eb088da0.png",
    "revision": "eb088da0fea21d1a77683e6e02549e18"
  },
  {
    "url": "assets/img/personalizedCheckout.0a465abe.png",
    "revision": "0a465abefe3c21e37d6644363e8c21a0"
  },
  {
    "url": "assets/img/personalizedCheckout.a6f6b184.png",
    "revision": "a6f6b1842f555ec1b60c1ca29b7a65ed"
  },
  {
    "url": "assets/img/placeOrder.4b5ab597.png",
    "revision": "4b5ab5978315613992e24f88515d4db7"
  },
  {
    "url": "assets/img/price.4315931a.png",
    "revision": "4315931a1c332f9f20eb322b394f1258"
  },
  {
    "url": "assets/img/price.86fae45c.png",
    "revision": "86fae45cb1a4e4afe4bde5667ab03074"
  },
  {
    "url": "assets/img/price.b32785ac.png",
    "revision": "b32785acffd1121a1079927e0670f95a"
  },
  {
    "url": "assets/img/priceOutput.cd52618f.png",
    "revision": "cd52618fad240d3beeb7fb2f71cbf543"
  },
  {
    "url": "assets/img/pricing.05f6d9d9.png",
    "revision": "05f6d9d9f5e5f4461e1e2ba8b1d36a54"
  },
  {
    "url": "assets/img/product-review.832df4ac.png",
    "revision": "832df4ac826b534b3d1bfb0821363fd2"
  },
  {
    "url": "assets/img/product-visits.c040062e.png",
    "revision": "c040062e393eb3349d29e5f25c512333"
  },
  {
    "url": "assets/img/product.4402c959.png",
    "revision": "4402c959fad67f9bbeb0855e84b8e541"
  },
  {
    "url": "assets/img/productCarousel.5a334508.png",
    "revision": "5a334508dcf6e400ecd526cf4d74f9bc"
  },
  {
    "url": "assets/img/productCategory.c158016f.png",
    "revision": "c158016f873fce0881518c9e3633878c"
  },
  {
    "url": "assets/img/productInventory.2a6d376b.png",
    "revision": "2a6d376b49a37ba160dd486f55ec3ce1"
  },
  {
    "url": "assets/img/productPage.0913d8b4.png",
    "revision": "0913d8b48fc4906e17f430524af08086"
  },
  {
    "url": "assets/img/products-quantity.a06852b1.png",
    "revision": "a06852b1b1f3820dda928e5afc3df529"
  },
  {
    "url": "assets/img/products-wishlist.269e3206.png",
    "revision": "269e3206e5340715882c5b0d01ab7dba"
  },
  {
    "url": "assets/img/products.3865c39b.png",
    "revision": "3865c39b4ef983793361bb01e55b8403"
  },
  {
    "url": "assets/img/purchase-funnel.97aef38c.png",
    "revision": "97aef38c811c7dc146ed8935c2051156"
  },
  {
    "url": "assets/img/rating.3679908c.png",
    "revision": "3679908cff55dcc0c0fb4f7a99b500cd"
  },
  {
    "url": "assets/img/refund.09ecb441.png",
    "revision": "09ecb441a72704b1d28a4c8d54fb5789"
  },
  {
    "url": "assets/img/refund.d66c6517.png",
    "revision": "d66c6517591e4fbbbb23f8b881f274c9"
  },
  {
    "url": "assets/img/refundGrid.42bc1d1c.png",
    "revision": "42bc1d1c90cc25b6a1f6d4e24d377f70"
  },
  {
    "url": "assets/img/refundShipped.99608d23.png",
    "revision": "99608d23ded540d9778491b0fca93f4b"
  },
  {
    "url": "assets/img/refundShipping.4d8b9070.png",
    "revision": "4d8b90709a1a6f071c8eddf6da1ce0a3"
  },
  {
    "url": "assets/img/reorder.20a44d56.png",
    "revision": "20a44d567c5c2ebc58ee88c05aad13ae"
  },
  {
    "url": "assets/img/reorderAddress.e6723f30.png",
    "revision": "e6723f303700199f3b8ad8ad9c7c2918"
  },
  {
    "url": "assets/img/reorderOutput.38c4eec0.png",
    "revision": "38c4eec04252cdb695e1f47d6810fde8"
  },
  {
    "url": "assets/img/revenue-products.a40f8679.png",
    "revision": "a40f86797d05794666e995347483083c"
  },
  {
    "url": "assets/img/review.91414169.png",
    "revision": "91414169bfcb300e4a48ab09ab60c09d"
  },
  {
    "url": "assets/img/review.97d17f45.png",
    "revision": "97d17f45342502ee075640a128762069"
  },
  {
    "url": "assets/img/reviewMagic.a6377095.png",
    "revision": "a6377095f839990b377eda2ca3b079c6"
  },
  {
    "url": "assets/img/reviewMagic.f9bb1189.png",
    "revision": "f9bb1189c73e87d904035c4c923c790f"
  },
  {
    "url": "assets/img/reviewStatus.347d2b17.png",
    "revision": "347d2b17a6d7abc03995c73d55ca0837"
  },
  {
    "url": "assets/img/role.d29f5e51.png",
    "revision": "d29f5e513d513b6bb333491d7716db7a"
  },
  {
    "url": "assets/img/roleGrid.8c856367.png",
    "revision": "8c856367466c7cd785ee13da5856fb5b"
  },
  {
    "url": "assets/img/saveCategory.89f05b5c.png",
    "revision": "89f05b5cf82a626e6691689505f2fba0"
  },
  {
    "url": "assets/img/saveCurrency.d61ef1e7.png",
    "revision": "d61ef1e7e058aaf2df07595c9f15af22"
  },
  {
    "url": "assets/img/saveCurrency.f006311d.png",
    "revision": "f006311d38ecd3502f3a4e82cf9488e0"
  },
  {
    "url": "assets/img/saveFamily.30a732be.png",
    "revision": "30a732be79f350059a629ce8c9fcc461"
  },
  {
    "url": "assets/img/saveSitemap.9d549fa5.png",
    "revision": "9d549fa5eda56a30d0f36770bb69198d"
  },
  {
    "url": "assets/img/saveSitemap.c7785ab4.png",
    "revision": "c7785ab45983693dee9e0b2ee7aa1fb9"
  },
  {
    "url": "assets/img/savetaxRate.30e22c4d.png",
    "revision": "30e22c4d79233052db8f64938aa647bc"
  },
  {
    "url": "assets/img/saveTheme.d74db5b4.png",
    "revision": "d74db5b4d4c3f8885223fcb19f6c6701"
  },
  {
    "url": "assets/img/saveTheme.fece12f0.png",
    "revision": "fece12f03744c824b2525579e71d93f6"
  },
  {
    "url": "assets/img/saveTransaction.33483e9f.png",
    "revision": "33483e9fe758a9e416ce7414e1c39635"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/searchCustomer.95d5654c.png",
    "revision": "95d5654c56267778606419349014da53"
  },
  {
    "url": "assets/img/searchField.de2dd0e2.png",
    "revision": "de2dd0e25b64eb5052c6c59cfbbfa266"
  },
  {
    "url": "assets/img/searchGrids.05edc08e.png",
    "revision": "05edc08ecf31f7a0344df346d681ec15"
  },
  {
    "url": "assets/img/searchProduct.6f685a4a.png",
    "revision": "6f685a4a8ec35e726ff2cffcfe26a21e"
  },
  {
    "url": "assets/img/searchSynonym.3844db4a.png",
    "revision": "3844db4a8f0c024759d2b7b6b5fb504d"
  },
  {
    "url": "assets/img/searchTerm.848f16e0.png",
    "revision": "848f16e0d25339ad014fd1ce824f00ee"
  },
  {
    "url": "assets/img/seo.0fe2a12e.png",
    "revision": "0fe2a12e28ae684ad59cded993695277"
  },
  {
    "url": "assets/img/seo.43c81d1e.png",
    "revision": "43c81d1e466f44350197e09d98ce17ca"
  },
  {
    "url": "assets/img/settings.bc0811ed.png",
    "revision": "bc0811ed6f10a3efbb433a05c37d80ee"
  },
  {
    "url": "assets/img/shipmentOutput.3e0d9740.png",
    "revision": "3e0d9740c504c803c7e8cea13595ed43"
  },
  {
    "url": "assets/img/shipping-collected.d2126828.png",
    "revision": "d21268289fb68775e60ac70cdf6cf6b6"
  },
  {
    "url": "assets/img/shipping.c2dae652.png",
    "revision": "c2dae652ee87990725785957fe6b604b"
  },
  {
    "url": "assets/img/shippingMethods.cfa03447.png",
    "revision": "cfa03447db2765d2e65294b8c2b2063a"
  },
  {
    "url": "assets/img/shippingOutput.028aea9a.png",
    "revision": "028aea9ac047f921d6d8925b81b6f64e"
  },
  {
    "url": "assets/img/shoppingCart.a89412b1.png",
    "revision": "a89412b1e66c5f066c6f162baccbd2a4"
  },
  {
    "url": "assets/img/simple-product.ddb1ac42.png",
    "revision": "ddb1ac42f19502140c2055e41cba8496"
  },
  {
    "url": "assets/img/simple.548f03a1.png",
    "revision": "548f03a1366af976be5f6baa86428155"
  },
  {
    "url": "assets/img/sitemapOutput.ceffe7ff.png",
    "revision": "ceffe7ffe838b6f514286cef4b25fb0d"
  },
  {
    "url": "assets/img/sitemapOutput.e24ff06d.png",
    "revision": "e24ff06d3165dceebb45c6453657eb5a"
  },
  {
    "url": "assets/img/slot-duration.97d528dc.png",
    "revision": "97d528dc99f4c126c6bcac25a239c60f"
  },
  {
    "url": "assets/img/slot2.f53bdadc.png",
    "revision": "f53bdadc215bb8b77c77ed50ea770c8e"
  },
  {
    "url": "assets/img/socialOutput.3896fec4.png",
    "revision": "3896fec4529040dcaac7eb7940371192"
  },
  {
    "url": "assets/img/socialShare.dcf350bd.png",
    "revision": "dcf350bd7c6a69e01a684aa44e9514fb"
  },
  {
    "url": "assets/img/sold-products.af8d9c44.png",
    "revision": "af8d9c44e608f4af48d1c875b6a42974"
  },
  {
    "url": "assets/img/sourceAddress.ee2e69a5.png",
    "revision": "ee2e69a5700fec03accb2b06a106d51d"
  },
  {
    "url": "assets/img/storefront.a0695081.png",
    "revision": "a0695081bf6125bf67739945536454b8"
  },
  {
    "url": "assets/img/synonymField.dac8c96a.png",
    "revision": "dac8c96ae4ec7249b2869618909d7d84"
  },
  {
    "url": "assets/img/synonymGrid.72ffd066.png",
    "revision": "72ffd066b60baa41373c2a0926800f85"
  },
  {
    "url": "assets/img/synonymOutput.67432a8c.png",
    "revision": "67432a8c2936f23947b87957dcfa2219"
  },
  {
    "url": "assets/img/table-booking.ed1d9c74.png",
    "revision": "ed1d9c746f27cf8483fae799845bf07c"
  },
  {
    "url": "assets/img/table-duration.25063880.png",
    "revision": "250638802b8bcdd539b599c7d98a6d81"
  },
  {
    "url": "assets/img/table.aa2f4277.png",
    "revision": "aa2f4277b7c83ce60c0aedd6e2321edb"
  },
  {
    "url": "assets/img/tax-collected.07bbefb7.png",
    "revision": "07bbefb72f03e792cd3042113103b328"
  },
  {
    "url": "assets/img/taxFront.5242347c.png",
    "revision": "5242347c1306003a46e2810d37931087"
  },
  {
    "url": "assets/img/taxRate.023eb978.png",
    "revision": "023eb97817841b7c866ed3a6c6613dbb"
  },
  {
    "url": "assets/img/template.9b486bdd.png",
    "revision": "9b486bdd4d7175b34e132a6df8148c2c"
  },
  {
    "url": "assets/img/templateName.43120a7a.png",
    "revision": "43120a7a054d78614433576051480f3b"
  },
  {
    "url": "assets/img/theme.9274b839.png",
    "revision": "9274b83993edf501f5935d220fed10d0"
  },
  {
    "url": "assets/img/themeOutput.02bd1082.png",
    "revision": "02bd1082e7cbad107c58e4db4b5f1089"
  },
  {
    "url": "assets/img/themeOutput.fb0c0721.png",
    "revision": "fb0c072183d8d0df429c56772e2dc1d8"
  },
  {
    "url": "assets/img/toggle-buttons.f44cfaa1.png",
    "revision": "f44cfaa142299d65bc4922b3c44dc583"
  },
  {
    "url": "assets/img/toggleButtons.db6f5a12.png",
    "revision": "db6f5a120e98bbbf4768bbe493ad4a67"
  },
  {
    "url": "assets/img/top-payment-method.d0b65af5.png",
    "revision": "d0b65af5724aeea668e7a0a967976c52"
  },
  {
    "url": "assets/img/top-searchTerm.1bcd799b.png",
    "revision": "1bcd799b2532a2a8770bbd23276b5426"
  },
  {
    "url": "assets/img/total-customers.96945387.png",
    "revision": "969453873e32f3d7ca733bf92d1d5f32"
  },
  {
    "url": "assets/img/total-order.3c1ec690.png",
    "revision": "3c1ec690a194c87c4bc034a9e0cd6a5e"
  },
  {
    "url": "assets/img/total-sale-customers.fee25dfd.png",
    "revision": "fee25dfdce011f1883efa99361060018"
  },
  {
    "url": "assets/img/total-sale.b80c8593.png",
    "revision": "b80c859320a684149b530794ebe507f7"
  },
  {
    "url": "assets/img/transactionGrid.3028d914.png",
    "revision": "3028d9147e16a6477b4adedb13634d75"
  },
  {
    "url": "assets/img/transactionOutput.45613c77.png",
    "revision": "45613c77d231e3d01bf739d96e30c089"
  },
  {
    "url": "assets/img/urlFields.51f0b59e.png",
    "revision": "51f0b59e3066f795bfb7060828724db9"
  },
  {
    "url": "assets/img/urlOutput.1a1e6414.png",
    "revision": "1a1e641433cd569d5186488a3513435f"
  },
  {
    "url": "assets/img/urlRewrite.cc5d8f75.png",
    "revision": "cc5d8f75656cac9b722dcf499c9cad94"
  },
  {
    "url": "assets/img/user.506a3658.png",
    "revision": "506a3658ffbe570bb93948b46bc4ec28"
  },
  {
    "url": "assets/img/userOutput.113745b3.png",
    "revision": "113745b35c89cc73195439db94fa4625"
  },
  {
    "url": "assets/img/validation.9c7ee3aa.png",
    "revision": "9c7ee3aae6a85912e64cf5879932b696"
  },
  {
    "url": "assets/img/variations.9be19c16.png",
    "revision": "9be19c168dd7dc86d64dd341abb15832"
  },
  {
    "url": "assets/img/virtual-customization.42885b7d.png",
    "revision": "42885b7d390f0c44b7cf838137ff1bf4"
  },
  {
    "url": "assets/img/virtual.e6449259.png",
    "revision": "e64492590e33b4093062965c17de2d84"
  },
  {
    "url": "assets/img/weight.89219627.png",
    "revision": "8921962778524cd41b2927b18d690641"
  },
  {
    "url": "assets/js/1.447fcb13.js",
    "revision": "75376ccbec8291fdd6aac1cea74b05f9"
  },
  {
    "url": "assets/js/10.84c869aa.js",
    "revision": "17718ebc7cb56ac82efa8c80ea39e869"
  },
  {
    "url": "assets/js/100.6064e8e3.js",
    "revision": "7007a0b759280a0b8a6fd4296c673395"
  },
  {
    "url": "assets/js/101.7a0a24a5.js",
    "revision": "689e10bd4274f77983b1e674ba155a21"
  },
  {
    "url": "assets/js/102.fd64d8af.js",
    "revision": "297b19ed478c96476b93b7321faed8e6"
  },
  {
    "url": "assets/js/103.9acd3b35.js",
    "revision": "5ad98cbaf032aade43a4779eead038a4"
  },
  {
    "url": "assets/js/104.18f60cb5.js",
    "revision": "e7cd0f79b8f2160374e1b8c40ab13380"
  },
  {
    "url": "assets/js/105.e71c5050.js",
    "revision": "dc449e53a0c872ce5d939e3de707b2ae"
  },
  {
    "url": "assets/js/106.76b6166a.js",
    "revision": "fc32024abc505c27e330ae136054c239"
  },
  {
    "url": "assets/js/107.0414f9da.js",
    "revision": "34cc7f8efc2a99921b890e218a83c755"
  },
  {
    "url": "assets/js/108.21807d8b.js",
    "revision": "fd4af29f2b5d4c32f4b20d5edc3fac21"
  },
  {
    "url": "assets/js/109.76da3761.js",
    "revision": "4b10523c3c8c01d01b9e2dbf09d800a0"
  },
  {
    "url": "assets/js/11.dd741dfc.js",
    "revision": "3431b7b26516e33cc082c7397f963b85"
  },
  {
    "url": "assets/js/110.e5e6baf1.js",
    "revision": "374cf36df1dd7dbb36ca800cdd5ea696"
  },
  {
    "url": "assets/js/111.6a50d5dc.js",
    "revision": "dbd57d7d7fa5973beede225b7bc60c46"
  },
  {
    "url": "assets/js/112.6f027c15.js",
    "revision": "950332d2c5edb1579880854920dad46e"
  },
  {
    "url": "assets/js/113.e410400f.js",
    "revision": "1ea25b852806c6691c040e7c9ae162b1"
  },
  {
    "url": "assets/js/114.9b2b15e6.js",
    "revision": "781ce2cb124630599c0099473cf9c1be"
  },
  {
    "url": "assets/js/115.ae32bc2a.js",
    "revision": "671a8cfed7e2b46c7a050d1f74e42d3d"
  },
  {
    "url": "assets/js/116.b861d15d.js",
    "revision": "80ae0bdab3231e8a088663ca72238ddb"
  },
  {
    "url": "assets/js/117.5559451c.js",
    "revision": "cc58b7f2d8313b3d26f70777e160b6fa"
  },
  {
    "url": "assets/js/118.aaaebfd6.js",
    "revision": "85abaa4a00f7b92f8e25a3c124814b4c"
  },
  {
    "url": "assets/js/119.88bd2931.js",
    "revision": "563a427a534db0f8726952b6f8160681"
  },
  {
    "url": "assets/js/12.5405ed40.js",
    "revision": "f961db8682b98601233e2fdbaebc1075"
  },
  {
    "url": "assets/js/120.7b52ad85.js",
    "revision": "178200d0cffbc0122013e252c8d1c4fa"
  },
  {
    "url": "assets/js/121.35ea7d10.js",
    "revision": "31279f1c45734b092ed32279878190db"
  },
  {
    "url": "assets/js/122.c2d1c71f.js",
    "revision": "4c42ae67c4b3b01a8efa408d72579460"
  },
  {
    "url": "assets/js/123.90b0565a.js",
    "revision": "9206c4daad30c26d47e4e93482f422cd"
  },
  {
    "url": "assets/js/124.b5b419f2.js",
    "revision": "c35d0e794cd26a2e179cbd8008bbdd2a"
  },
  {
    "url": "assets/js/125.89913cf3.js",
    "revision": "05d6a9e9345af175775b58adc548226b"
  },
  {
    "url": "assets/js/126.472343f1.js",
    "revision": "d320ad5864a113fe31439cb78d9ee956"
  },
  {
    "url": "assets/js/127.8d62fad9.js",
    "revision": "bfc84a61905ef52d8ab23d6f16cccf70"
  },
  {
    "url": "assets/js/128.d0b09847.js",
    "revision": "13074bda78f54737e445ac836f0262a6"
  },
  {
    "url": "assets/js/129.33b43335.js",
    "revision": "d5e1e69c37848f9fdb74e1495f7921c7"
  },
  {
    "url": "assets/js/13.fd607fb9.js",
    "revision": "a2e343df3265c8c57260a21ce8bd7e21"
  },
  {
    "url": "assets/js/130.097a1d2b.js",
    "revision": "ddb14f812a21ccc6b0a40a78addf1941"
  },
  {
    "url": "assets/js/131.e1dae9f0.js",
    "revision": "6b1e056226323f4ee85f0fbf999177b2"
  },
  {
    "url": "assets/js/132.fcb8aa30.js",
    "revision": "79f8e7bdc3d2b7c237c8363787ae4a5e"
  },
  {
    "url": "assets/js/133.bd42519e.js",
    "revision": "d2a6fcfb8f2eccfe738743c1efec8107"
  },
  {
    "url": "assets/js/134.a25c9693.js",
    "revision": "746b885ff239cd90a81a523158bcad7d"
  },
  {
    "url": "assets/js/135.e6daab17.js",
    "revision": "b2bed71a4c63938666ec50457cf0bc89"
  },
  {
    "url": "assets/js/136.e5b939ad.js",
    "revision": "4398d6e05a74446d4d0a4968472efe19"
  },
  {
    "url": "assets/js/137.7f5d08be.js",
    "revision": "3d5f51a4e0c5956167d19cf277158673"
  },
  {
    "url": "assets/js/138.0d58bfdc.js",
    "revision": "5d27b110d5fb0a8679c59463a7682f19"
  },
  {
    "url": "assets/js/139.7e02761c.js",
    "revision": "c453ffefae6d4cf45e685615a9c42769"
  },
  {
    "url": "assets/js/14.8d6374cd.js",
    "revision": "7278666503a08effa25b0bf4ed0f4bcd"
  },
  {
    "url": "assets/js/140.0ffefb6a.js",
    "revision": "1fcc7d76b566d23c77f3658697e38250"
  },
  {
    "url": "assets/js/141.91916045.js",
    "revision": "db35add7a2dd39e0fe5c86eee51e1f0b"
  },
  {
    "url": "assets/js/142.70369f46.js",
    "revision": "2a2bbad9dc8764e4372ad9b0c2c2d07a"
  },
  {
    "url": "assets/js/143.3ad632a6.js",
    "revision": "269d282a43adff2d1362ba3461875ebf"
  },
  {
    "url": "assets/js/144.0975abd7.js",
    "revision": "647cd7c7e1cb302faff731fc1db41a1a"
  },
  {
    "url": "assets/js/145.4bbacdbe.js",
    "revision": "b28dd0a07bd4f525d524ee9f22e453ef"
  },
  {
    "url": "assets/js/146.43a6c7de.js",
    "revision": "e0e77f3ed8f2c4cbed38dace965896e0"
  },
  {
    "url": "assets/js/147.3bb1e24b.js",
    "revision": "4fc8a2ba6b710ee5e7f145068370d64c"
  },
  {
    "url": "assets/js/148.f38c5e2d.js",
    "revision": "368dbbf43355f7071b6fdd0136c13387"
  },
  {
    "url": "assets/js/149.ebd1959a.js",
    "revision": "40f6e3aa0c529fb79e3e2400294c8381"
  },
  {
    "url": "assets/js/15.2d5b6f24.js",
    "revision": "467ad296dc7f80e49b694cc627c3e8c6"
  },
  {
    "url": "assets/js/150.5196ee20.js",
    "revision": "6ff804d14a440e2f6b50c6dabbf0c160"
  },
  {
    "url": "assets/js/151.d70cb01b.js",
    "revision": "d17e984020024d1c54c273173a063641"
  },
  {
    "url": "assets/js/152.a0a91f9a.js",
    "revision": "8a9861fccc4ed54148214cd733f8b18d"
  },
  {
    "url": "assets/js/153.9d3874c7.js",
    "revision": "8bd42d3c58df9fe3a388fe0e3629c5ba"
  },
  {
    "url": "assets/js/154.3de04604.js",
    "revision": "c6ebbb941f322c3ac4ebe5ecbee284aa"
  },
  {
    "url": "assets/js/155.d0136449.js",
    "revision": "e30783905a0bc61e94c010016b2e839e"
  },
  {
    "url": "assets/js/156.8c890208.js",
    "revision": "2f6c03d582f60299b4b2d7477731213c"
  },
  {
    "url": "assets/js/157.6bd1cab2.js",
    "revision": "db7f409a13030de3dfed5d8484cf6adf"
  },
  {
    "url": "assets/js/158.0c91c74f.js",
    "revision": "2d5da37aee155185f423c58e0d259d4c"
  },
  {
    "url": "assets/js/159.03baab0a.js",
    "revision": "a0a268106737df9de0cde15e21b727de"
  },
  {
    "url": "assets/js/16.786caf0b.js",
    "revision": "2f762ed8479b943363f4169f1e381238"
  },
  {
    "url": "assets/js/160.e229549a.js",
    "revision": "a348f0713423fc27ed26569139455d61"
  },
  {
    "url": "assets/js/161.8a4fd445.js",
    "revision": "0f5ba3c9a5b4cf99c7e5a37e31505a39"
  },
  {
    "url": "assets/js/162.b427dabf.js",
    "revision": "fd66fc99ba630b918294d6d44685dd3b"
  },
  {
    "url": "assets/js/163.a5fa6950.js",
    "revision": "43aa6134cf24fd60d3707a04df099727"
  },
  {
    "url": "assets/js/164.1bf06fa1.js",
    "revision": "f71dffa2221cee3e9bcb8b811d236f23"
  },
  {
    "url": "assets/js/165.52434c1d.js",
    "revision": "385b1b4e5d42675a3bcfa387549f35da"
  },
  {
    "url": "assets/js/166.44e2f3bc.js",
    "revision": "a8d04f8eaf4a0c5c877f598387ffce37"
  },
  {
    "url": "assets/js/167.806da3b0.js",
    "revision": "394d29dc547eed6ee320db7c9af227a4"
  },
  {
    "url": "assets/js/168.6c6b95e9.js",
    "revision": "73b1a0f55c3c1a0eb239c5228d0d7d28"
  },
  {
    "url": "assets/js/169.f4d483b4.js",
    "revision": "227689904dcdc3421bc992663db6a5a8"
  },
  {
    "url": "assets/js/17.b9019ccb.js",
    "revision": "782082d2715c0c4d73410985e9df9f9f"
  },
  {
    "url": "assets/js/170.79304985.js",
    "revision": "a78fe6594a94661b782f6989e6dad847"
  },
  {
    "url": "assets/js/171.844298c4.js",
    "revision": "091a9b2fba977d9804a80d2c5fd3ea12"
  },
  {
    "url": "assets/js/172.5ecb138d.js",
    "revision": "d334c017c3aaf044896552b6cfaf50ad"
  },
  {
    "url": "assets/js/173.2e293a16.js",
    "revision": "c96ce35877d069ecc15c64d892e3c954"
  },
  {
    "url": "assets/js/174.742bac0d.js",
    "revision": "d711e1d27439571e6e5b8312929ee0f6"
  },
  {
    "url": "assets/js/175.a3142903.js",
    "revision": "07c6fe828e0fbe651cd8913dbe87f298"
  },
  {
    "url": "assets/js/176.760ed577.js",
    "revision": "0c8e9a64cfa42ed8e41172ae544d2146"
  },
  {
    "url": "assets/js/177.8ce6e60b.js",
    "revision": "545ca4b02748c60d65cfaa46b0d70400"
  },
  {
    "url": "assets/js/178.f98e3842.js",
    "revision": "55a7cda2978a12b541d7f23a153789a7"
  },
  {
    "url": "assets/js/179.595116c4.js",
    "revision": "58c6814c7c751db13d11374db101c29e"
  },
  {
    "url": "assets/js/18.404b13cf.js",
    "revision": "3f5f6f8616e357381c7dd0fbbfef47f3"
  },
  {
    "url": "assets/js/180.61627ed2.js",
    "revision": "1d730dd2fb2d09cdfc4b5a1aac635133"
  },
  {
    "url": "assets/js/181.0107560d.js",
    "revision": "cc609b9c42ffbc8fccef3180ff1a14a3"
  },
  {
    "url": "assets/js/182.bf84ae6a.js",
    "revision": "362105494b10bde822bc26771f3a2ff5"
  },
  {
    "url": "assets/js/183.ed806eda.js",
    "revision": "367265bf42ac1096765c9fdbd5364616"
  },
  {
    "url": "assets/js/184.93fc98a5.js",
    "revision": "fbe1fe1859473a5860c479e4e126a32e"
  },
  {
    "url": "assets/js/185.df58ad73.js",
    "revision": "61f963b000d910553f98b44a025ce5aa"
  },
  {
    "url": "assets/js/186.205ad71d.js",
    "revision": "250bd523cf500c6af423701efe99f5fd"
  },
  {
    "url": "assets/js/187.f731253f.js",
    "revision": "eb03b647d4957ab7a9d6591dc3d44c71"
  },
  {
    "url": "assets/js/188.1bf1d3cc.js",
    "revision": "9264c6b591aad5debb094f4a7d673f32"
  },
  {
    "url": "assets/js/189.e6dea734.js",
    "revision": "03ff0557fab05cbb015369490cece5a1"
  },
  {
    "url": "assets/js/19.5046a67c.js",
    "revision": "209e5246f000b3c8c7ac2d60988c59f9"
  },
  {
    "url": "assets/js/190.2cb46a80.js",
    "revision": "bc91fcea6fafad55e8d3742ac4387472"
  },
  {
    "url": "assets/js/191.ae21871f.js",
    "revision": "d81c6f01bb69551b3632b8b3305effc9"
  },
  {
    "url": "assets/js/192.8e3bc971.js",
    "revision": "74bf7a098646ad4bd8d9aff43eff3ed9"
  },
  {
    "url": "assets/js/193.77e90625.js",
    "revision": "4d34edcffec2a7136b2ac9ee754580bf"
  },
  {
    "url": "assets/js/194.5adb9529.js",
    "revision": "6c3349ce98ff032280b0f4a01caefd97"
  },
  {
    "url": "assets/js/195.03468cca.js",
    "revision": "bb527464713ddb0b09957dfa76e5fc0e"
  },
  {
    "url": "assets/js/196.65629243.js",
    "revision": "9c036b1e588cc4cd52c6f860e60a91dc"
  },
  {
    "url": "assets/js/197.3525a92f.js",
    "revision": "ebc8cfcefe3002f66b76c7b15f69bd76"
  },
  {
    "url": "assets/js/198.2bcd4d41.js",
    "revision": "87ebbbf21181a09eaab7c764c8df6ef6"
  },
  {
    "url": "assets/js/199.ab5584d9.js",
    "revision": "9e234c63cff85e11df8b0989830c272f"
  },
  {
    "url": "assets/js/2.16af4c7c.js",
    "revision": "b9d59e380bb3e8a23a8c41ed479583c1"
  },
  {
    "url": "assets/js/20.231930c2.js",
    "revision": "431642dffbb763fe4ed44c7eed2ae350"
  },
  {
    "url": "assets/js/200.6c36366e.js",
    "revision": "7c103389e954ff74d903a410711c2083"
  },
  {
    "url": "assets/js/201.29679d8c.js",
    "revision": "c79d9f8814068d4d7903419a137ecebf"
  },
  {
    "url": "assets/js/202.d50d0389.js",
    "revision": "d57a59b1e2147944724fae45627c9737"
  },
  {
    "url": "assets/js/203.ee129b6f.js",
    "revision": "14eca5fb69947da4da4e93c39df9a367"
  },
  {
    "url": "assets/js/204.8c489961.js",
    "revision": "d9c001e03f1371ef8f11157a0a6170dd"
  },
  {
    "url": "assets/js/205.6dfc5fe4.js",
    "revision": "e071ec5922a6705ea7bee5aac55e971e"
  },
  {
    "url": "assets/js/206.83c07b9d.js",
    "revision": "a465e19d05099df444650d6b43d55e9b"
  },
  {
    "url": "assets/js/207.5153f09f.js",
    "revision": "31429c54b9b60e1514792256297bf25d"
  },
  {
    "url": "assets/js/208.6638e48e.js",
    "revision": "8af7d1c02bf13f908146ed7c0c3a7e72"
  },
  {
    "url": "assets/js/209.9843d91b.js",
    "revision": "5c4c3e9ae2a93e7adb9ce2d8fadda0b8"
  },
  {
    "url": "assets/js/21.f02c0db3.js",
    "revision": "712eeabd6577df8fff0f40662c4d4902"
  },
  {
    "url": "assets/js/210.29c2287b.js",
    "revision": "c268d3d0a7429b70fe3c1fc08d8cf5ed"
  },
  {
    "url": "assets/js/211.38d5b52e.js",
    "revision": "099412d877f5ba8f705304a622ec90fc"
  },
  {
    "url": "assets/js/212.10939b4f.js",
    "revision": "52f2ab471dff43b3cab30bc99f8e4a58"
  },
  {
    "url": "assets/js/213.a5e3f80c.js",
    "revision": "a8f8b44f9b7e15880a8d60d0c98d04f4"
  },
  {
    "url": "assets/js/214.9aa31d79.js",
    "revision": "d857d52b4f1f7b97a0b4804b04085459"
  },
  {
    "url": "assets/js/215.de0ded9b.js",
    "revision": "16483742f75ac91ca2b81b99ff7404ac"
  },
  {
    "url": "assets/js/216.ade6acfa.js",
    "revision": "687197f6c294f6056cc978bad18480e8"
  },
  {
    "url": "assets/js/217.a8d88943.js",
    "revision": "9f1bfed24ffd58d78ce27dad00052012"
  },
  {
    "url": "assets/js/218.48f6bd23.js",
    "revision": "b70948d01e7492d091b19502174fb9fa"
  },
  {
    "url": "assets/js/219.a6a07be5.js",
    "revision": "43e8dcc703c71071c33d765035b88e01"
  },
  {
    "url": "assets/js/22.286c67c9.js",
    "revision": "cf162435b0bc53328d5557ad1085b4cd"
  },
  {
    "url": "assets/js/220.c07b59d2.js",
    "revision": "12897ea0a50bfa8b55c94c34bee6d376"
  },
  {
    "url": "assets/js/221.688e2dd2.js",
    "revision": "b2ea503410c29cea73cda9c9538f24a3"
  },
  {
    "url": "assets/js/222.052b05d3.js",
    "revision": "4fae3c9cc2cf8e3244b8b1d76e8908b4"
  },
  {
    "url": "assets/js/223.4d3f2068.js",
    "revision": "5ed29dedfe890c9e16636908d1569818"
  },
  {
    "url": "assets/js/224.179a116e.js",
    "revision": "fad3252d86feff51b61400237717b1a4"
  },
  {
    "url": "assets/js/225.ce8a7588.js",
    "revision": "63177ff3d031334d652407580cacfc88"
  },
  {
    "url": "assets/js/226.f9c79e83.js",
    "revision": "41f1c2038f13e806533c45071e7037a7"
  },
  {
    "url": "assets/js/227.ce917cb5.js",
    "revision": "71c717f9cfbded809b0fdf38071a5214"
  },
  {
    "url": "assets/js/228.1d6a9b14.js",
    "revision": "23a6245970d96161d7bd976677bc5c1c"
  },
  {
    "url": "assets/js/229.bc465a32.js",
    "revision": "4dc207fffa6702e5f33f90f928d0ab30"
  },
  {
    "url": "assets/js/23.9484a4a6.js",
    "revision": "2454dc0952927ae194c104575215f5fc"
  },
  {
    "url": "assets/js/230.957b702e.js",
    "revision": "4a7509570d6fd90876ebed9e18497720"
  },
  {
    "url": "assets/js/231.edeab15b.js",
    "revision": "b403510a2520f276d5545454c0285287"
  },
  {
    "url": "assets/js/232.254bc4f4.js",
    "revision": "bbc0ead6bcd9b780af8f94293cd80357"
  },
  {
    "url": "assets/js/233.40e1c23b.js",
    "revision": "a4d58bdd445fb5ddda22cbc55fed8562"
  },
  {
    "url": "assets/js/234.d3208a12.js",
    "revision": "6b1c91173db2cfdb988e8ba3f8c4e7c8"
  },
  {
    "url": "assets/js/235.b158df7d.js",
    "revision": "34ad88d2eeaa2dfb8c6c59b69aa2f101"
  },
  {
    "url": "assets/js/236.9a2e966d.js",
    "revision": "de53afe179f6af48825c45a22b84da8f"
  },
  {
    "url": "assets/js/237.ca6ce04a.js",
    "revision": "a4ae68e3c64c29d335366905e5d1efa2"
  },
  {
    "url": "assets/js/238.a70c5837.js",
    "revision": "8684a5b7c134dc17e29c8f0550cbc683"
  },
  {
    "url": "assets/js/239.0a6dea29.js",
    "revision": "043ccd100f1e0785b7753e5ec355df62"
  },
  {
    "url": "assets/js/24.19e6a8b1.js",
    "revision": "acd406e199bf89a0ef2aa51c92673059"
  },
  {
    "url": "assets/js/240.093feb8d.js",
    "revision": "78a9ff1c9e87a7e9abc588f145558606"
  },
  {
    "url": "assets/js/241.dec628ce.js",
    "revision": "315b0a0c839f1e70120b2df7028608a9"
  },
  {
    "url": "assets/js/242.3ab51dfb.js",
    "revision": "6e713151adb61879c1532ce55f53dcc1"
  },
  {
    "url": "assets/js/243.a55ffca2.js",
    "revision": "259174eb28c2ae7646d7b0ea29dab178"
  },
  {
    "url": "assets/js/244.935637ab.js",
    "revision": "6de18654db0d56a1416a704fb75b0bd2"
  },
  {
    "url": "assets/js/245.90716ac6.js",
    "revision": "1300472226415ff42868d78558b155ca"
  },
  {
    "url": "assets/js/246.8ab031d2.js",
    "revision": "0e94e613c64a6b1fc4773309dd8e4f9a"
  },
  {
    "url": "assets/js/247.3e6c8546.js",
    "revision": "022651cfd5d1ac785ef1f6a29abfa78b"
  },
  {
    "url": "assets/js/248.c6f8b353.js",
    "revision": "705520fcf2cab84cec41bb6e1ce1ce98"
  },
  {
    "url": "assets/js/249.3d74a86e.js",
    "revision": "fa7b0cd97e2d3f03a7cf6f1a62849e80"
  },
  {
    "url": "assets/js/25.1dbf3147.js",
    "revision": "97db6d24b4ac4d0658f6dfc403ed7115"
  },
  {
    "url": "assets/js/250.7a9d156c.js",
    "revision": "41bfc274a64dad99a669a61c17e62632"
  },
  {
    "url": "assets/js/251.ed4c471a.js",
    "revision": "ecc1c07203b6ed9ef0497442b3ac2ac1"
  },
  {
    "url": "assets/js/252.afc640db.js",
    "revision": "6cf8bed450eceb8cf6f9629591ce445e"
  },
  {
    "url": "assets/js/253.0c5489ad.js",
    "revision": "93bee6c10d5611f0362df24bb619861e"
  },
  {
    "url": "assets/js/254.bc912a6b.js",
    "revision": "5229083f2180fff72e115a91c06e6a39"
  },
  {
    "url": "assets/js/255.55f63693.js",
    "revision": "91007fb6956d45a1789612381a0ec60c"
  },
  {
    "url": "assets/js/256.6a1b7d52.js",
    "revision": "b60762105bb4f4049394da257fa83098"
  },
  {
    "url": "assets/js/257.30a7208e.js",
    "revision": "b9ab28402344186f34135a117e62aaef"
  },
  {
    "url": "assets/js/258.86fbf168.js",
    "revision": "c0b8b0907e72f67343852359f9585252"
  },
  {
    "url": "assets/js/259.e8bc5e97.js",
    "revision": "eef52a9f46b5efe453af9806abad87c6"
  },
  {
    "url": "assets/js/26.f7948e61.js",
    "revision": "7fa7cdac338012df9441aa84c78ad8f4"
  },
  {
    "url": "assets/js/260.8665f79d.js",
    "revision": "3946ea89e777717adc0d912b586b9565"
  },
  {
    "url": "assets/js/261.ada5c535.js",
    "revision": "771b110385adfe16a0c613b57681a363"
  },
  {
    "url": "assets/js/262.2effaf1d.js",
    "revision": "96b08b0894bccd82f3a27e83b1cb2f57"
  },
  {
    "url": "assets/js/263.3447663b.js",
    "revision": "8b841214655dbb38052143c0c5c6fe0e"
  },
  {
    "url": "assets/js/264.ac996c42.js",
    "revision": "99d71645a17542f9a550d63418507f02"
  },
  {
    "url": "assets/js/265.d0eac324.js",
    "revision": "62702ef0f54c2417d0bbad6fe43ff27b"
  },
  {
    "url": "assets/js/266.4e1ff1b2.js",
    "revision": "ec8575b7341f408c05eb91b0378d6303"
  },
  {
    "url": "assets/js/267.bc7a89df.js",
    "revision": "0fbbce6f4d03f517fda35df055a9c0da"
  },
  {
    "url": "assets/js/268.95eb0703.js",
    "revision": "3284d438a189cf2e7a956a900f1c7f28"
  },
  {
    "url": "assets/js/269.cf3bafa8.js",
    "revision": "a2e67d292eaf917e41991af314baa068"
  },
  {
    "url": "assets/js/27.3ba8f6fd.js",
    "revision": "fae78cf9c376df2ddc199d19a4485f2d"
  },
  {
    "url": "assets/js/270.83b7e8f0.js",
    "revision": "eb3e2ef3c4446893496c3f17662d80d0"
  },
  {
    "url": "assets/js/271.0b99477f.js",
    "revision": "d4ec6cf4f5735eefc7a3d9cb6041d09d"
  },
  {
    "url": "assets/js/272.60557a6d.js",
    "revision": "730918308563267be97488380a2f5f1a"
  },
  {
    "url": "assets/js/273.b5e06a8a.js",
    "revision": "694c8f1811ec4180233a1e9555ee96be"
  },
  {
    "url": "assets/js/274.a5ac46fd.js",
    "revision": "ccf5dd9ce99db7b87fcbf1e4dfa87c13"
  },
  {
    "url": "assets/js/275.e6ea1445.js",
    "revision": "03fa2e9852c576f2f6697859d967ce8f"
  },
  {
    "url": "assets/js/276.0102e023.js",
    "revision": "f803aafa659afa7ab8c11574c536bb1f"
  },
  {
    "url": "assets/js/277.3f14a940.js",
    "revision": "5022e3cc4f087223dd4970031e0354e9"
  },
  {
    "url": "assets/js/278.29feebba.js",
    "revision": "ae5f9eafb90728ea1fa4144d43f44949"
  },
  {
    "url": "assets/js/279.24cc31dc.js",
    "revision": "b7156c3b922dadca386a11310491285d"
  },
  {
    "url": "assets/js/28.ee488b5f.js",
    "revision": "61e43c4cc9bded8776f325d6580d3e17"
  },
  {
    "url": "assets/js/280.b0687449.js",
    "revision": "7e3227e4bbb887185ef0de4dbe9ff670"
  },
  {
    "url": "assets/js/281.2c236997.js",
    "revision": "7ec82e1a1f5c52e8a6f0fd393e05a280"
  },
  {
    "url": "assets/js/282.b73df660.js",
    "revision": "62f77cbff7096cb2384ca06aca468531"
  },
  {
    "url": "assets/js/283.97f25496.js",
    "revision": "cf98ae705269e0936cf3b9126f2c88c7"
  },
  {
    "url": "assets/js/284.5c3edcd7.js",
    "revision": "a93b1dc46f9fc3fc5ea26a269f0d1550"
  },
  {
    "url": "assets/js/285.c5dc5a86.js",
    "revision": "4defb8cd2732e2786af60363b51f2df4"
  },
  {
    "url": "assets/js/286.d1ea867b.js",
    "revision": "7b53fb2ef2aa99c6b8ba6fdf71527560"
  },
  {
    "url": "assets/js/287.1fd4f374.js",
    "revision": "0d80d3d330b3ea32d16c3c702cc886d2"
  },
  {
    "url": "assets/js/288.83edb49b.js",
    "revision": "a570e179f3ecc30afe6f543392a34d6c"
  },
  {
    "url": "assets/js/289.48ba305b.js",
    "revision": "74f0ef5e338d5730ffd7720c07b4904e"
  },
  {
    "url": "assets/js/29.92f688f6.js",
    "revision": "569f08f58aae57bf7bc3b0709e6094dc"
  },
  {
    "url": "assets/js/290.fcd9f488.js",
    "revision": "bf3ba79e06a1e50292dd559e7b57ffa7"
  },
  {
    "url": "assets/js/291.c4f1fbbf.js",
    "revision": "147dcf8291a6e155295da5a9e384b185"
  },
  {
    "url": "assets/js/292.cae4fd10.js",
    "revision": "6f4c742605397d9843758a99c503974a"
  },
  {
    "url": "assets/js/293.55bd966c.js",
    "revision": "9e3a234c5185395e5d8714df865a7482"
  },
  {
    "url": "assets/js/294.2e562562.js",
    "revision": "1beba5b58645344360f9fecfbb867143"
  },
  {
    "url": "assets/js/295.8753a79e.js",
    "revision": "6d3c4265bd6284dc2bff4d40e444f452"
  },
  {
    "url": "assets/js/296.1effe299.js",
    "revision": "5ab43df044ab95355472cc82c54e0e8b"
  },
  {
    "url": "assets/js/297.5038d623.js",
    "revision": "3b662a6fc1503f28f7382d2b425d736d"
  },
  {
    "url": "assets/js/298.e3f0f8fb.js",
    "revision": "b2aeed579bd73784f97e61e8b9b1bd85"
  },
  {
    "url": "assets/js/299.ec9a5b37.js",
    "revision": "a1ee029650c30c6d383176902dee5793"
  },
  {
    "url": "assets/js/3.5d585ad5.js",
    "revision": "a8edc2f2b0415886d99f7479567d598e"
  },
  {
    "url": "assets/js/30.42451836.js",
    "revision": "6f6d0c6520f9c0ab7c1e7f9ea2dfba05"
  },
  {
    "url": "assets/js/300.d419bd7f.js",
    "revision": "26c47cd46bfb436ffd64f48247cb39d5"
  },
  {
    "url": "assets/js/301.02790f92.js",
    "revision": "852b8cbfd068ea29fd143aa319c675d3"
  },
  {
    "url": "assets/js/302.b696960a.js",
    "revision": "79fcb30ecb823958ff3f669f7883f55e"
  },
  {
    "url": "assets/js/303.fad083eb.js",
    "revision": "57fe00e60c6db4b7556f41c8ec8eeaa4"
  },
  {
    "url": "assets/js/304.525d4a78.js",
    "revision": "549cd37a9c1c62c3a309c0c4e2ed5d72"
  },
  {
    "url": "assets/js/305.53550d9a.js",
    "revision": "e0f176f6948fb4389a66000701a6f457"
  },
  {
    "url": "assets/js/306.a02f89d5.js",
    "revision": "d9657a3495953f9cbf7c8886d540b16d"
  },
  {
    "url": "assets/js/307.f4e68a27.js",
    "revision": "97aed3e8ad851fc4d64aba8f8f17fec7"
  },
  {
    "url": "assets/js/308.6ee36480.js",
    "revision": "555fd1e0454fb8171e1e1d57a7482434"
  },
  {
    "url": "assets/js/309.91daf216.js",
    "revision": "002e1ae3ee63fca1a72756a02fd5bfe7"
  },
  {
    "url": "assets/js/31.a9db559a.js",
    "revision": "5c3d7938d2e6bcc17ae785fc084bbea0"
  },
  {
    "url": "assets/js/310.0418a716.js",
    "revision": "fcf0de3d32d59c14c61c739a1d2b5726"
  },
  {
    "url": "assets/js/311.68bfa4c1.js",
    "revision": "db231a8cd6ded55f1d1683fd4ecc914d"
  },
  {
    "url": "assets/js/312.8293abf6.js",
    "revision": "15bac9ccbf1409a37ae2674f2f15e21a"
  },
  {
    "url": "assets/js/313.9ea7307b.js",
    "revision": "9ca2912022ebef864846916e4ff7c0f9"
  },
  {
    "url": "assets/js/314.bdde59ec.js",
    "revision": "cf23ffd6e17b9cfa7c6dee8f605ce33e"
  },
  {
    "url": "assets/js/315.417823f8.js",
    "revision": "c086fba4c1cd8d6d2afcf0e4904c763a"
  },
  {
    "url": "assets/js/316.2d8935a3.js",
    "revision": "9618f477660abbe57f0dc61a905c0be3"
  },
  {
    "url": "assets/js/317.163ea7c4.js",
    "revision": "c549ce2c40d27329db0ef00eceeab23a"
  },
  {
    "url": "assets/js/318.20e80e35.js",
    "revision": "6e365bc5eee00768574fd5cc8e4aafb2"
  },
  {
    "url": "assets/js/319.fee4606b.js",
    "revision": "b96a9c7867605979ca5d0131a714f34e"
  },
  {
    "url": "assets/js/32.6207f7de.js",
    "revision": "4edbbc7784eac5c7c04d9db703012fa3"
  },
  {
    "url": "assets/js/320.591f3ec2.js",
    "revision": "76b5100af8f225e7fe269772b2f601bf"
  },
  {
    "url": "assets/js/321.c1f3bf86.js",
    "revision": "c2e62d84e24f651ed32f006d1cb9c504"
  },
  {
    "url": "assets/js/322.603679c0.js",
    "revision": "31fa3c3d7e3ee41ca447f3aefeb2eaf8"
  },
  {
    "url": "assets/js/323.d3109a2a.js",
    "revision": "285d188ab3fbaafd64d67aff1d83180f"
  },
  {
    "url": "assets/js/324.155da7f8.js",
    "revision": "d6f7118a16e4b3be9d87305c86bc6f81"
  },
  {
    "url": "assets/js/325.1f891e16.js",
    "revision": "b3a65b293256f537630da3d37dc01577"
  },
  {
    "url": "assets/js/326.ef3fc0fa.js",
    "revision": "b277edea027e920442c704c341c0003f"
  },
  {
    "url": "assets/js/327.2d75db52.js",
    "revision": "0819212dfabd40f9836ec635b141c354"
  },
  {
    "url": "assets/js/328.63c1f79a.js",
    "revision": "5c5d978d06a8074ae1c92dcc00a89647"
  },
  {
    "url": "assets/js/329.3f3a7333.js",
    "revision": "f92398feddb3039bdbd33f079adc63b8"
  },
  {
    "url": "assets/js/33.382ca584.js",
    "revision": "d0971681c72ff12eb361bb089273ba54"
  },
  {
    "url": "assets/js/330.a1e527b2.js",
    "revision": "8c5dd4c41f159d389f3bf24e24218524"
  },
  {
    "url": "assets/js/331.5ae07289.js",
    "revision": "7badf6b1c923a6d0997ee6b00b2d62fb"
  },
  {
    "url": "assets/js/332.2a70dbd2.js",
    "revision": "9cec5952d89256343c78bdb903836487"
  },
  {
    "url": "assets/js/333.bfa1c5b9.js",
    "revision": "c0925231fdc39f4fcdecd1ea17b23c78"
  },
  {
    "url": "assets/js/334.51afeb4d.js",
    "revision": "d297fbd0db95a82de8437cdc40d38f6a"
  },
  {
    "url": "assets/js/335.d39abed5.js",
    "revision": "7e56d110ea9e9110cea84105683d9d37"
  },
  {
    "url": "assets/js/336.9563508b.js",
    "revision": "d66afee1cce00b6e50213d5f27dcd032"
  },
  {
    "url": "assets/js/337.32e71787.js",
    "revision": "104e53434b25b360e549b8d6d5eab006"
  },
  {
    "url": "assets/js/338.c55b86d0.js",
    "revision": "ddf0aae0ae1354988141b18bfa910672"
  },
  {
    "url": "assets/js/339.adbefc0a.js",
    "revision": "919140017f2504576564a47b163f2cd2"
  },
  {
    "url": "assets/js/34.b5719265.js",
    "revision": "74339b62d99d6f1ca602e4c4c5dde91a"
  },
  {
    "url": "assets/js/340.2ebe96a3.js",
    "revision": "30f387d2bd794cd3171731a6eccf5cfb"
  },
  {
    "url": "assets/js/341.81c3cf8d.js",
    "revision": "f378b87c22d6d43895f0451155b6ea27"
  },
  {
    "url": "assets/js/342.f8c94fee.js",
    "revision": "584cc6c2ca519061194d2e1a2f7dc38a"
  },
  {
    "url": "assets/js/343.5a65f9d8.js",
    "revision": "18d58fce20d7695bb6ae830565885a36"
  },
  {
    "url": "assets/js/344.7a0b71e8.js",
    "revision": "2f4559e80305ff7fbe31b774ca36c686"
  },
  {
    "url": "assets/js/345.64f70b5d.js",
    "revision": "da0a4c19d5f215faa8a6e346e49b9b9b"
  },
  {
    "url": "assets/js/346.47858bca.js",
    "revision": "e8514158685878a35841e65b62ee3a9e"
  },
  {
    "url": "assets/js/347.4f300e1c.js",
    "revision": "a8502d4ff8e6594b53d1509e1d393520"
  },
  {
    "url": "assets/js/348.42740d9b.js",
    "revision": "d3ff5c757783896614a9c47beeb9064e"
  },
  {
    "url": "assets/js/349.bee2de59.js",
    "revision": "436a09611edde46d36c0217d4b059a15"
  },
  {
    "url": "assets/js/35.54669671.js",
    "revision": "daad8c46d3e52e77bc07d0bd65e3585e"
  },
  {
    "url": "assets/js/36.e5769adf.js",
    "revision": "eb85cbd3f26b6f2f81bdc38d949ad6d6"
  },
  {
    "url": "assets/js/37.c47ff650.js",
    "revision": "37dac26733ddc6a3347b308f352a7400"
  },
  {
    "url": "assets/js/38.f53e2594.js",
    "revision": "0682a0b6c6b7778cff0f65ab409c58d2"
  },
  {
    "url": "assets/js/39.0e81fd36.js",
    "revision": "72915548182358d70ce6c00e9d317e1a"
  },
  {
    "url": "assets/js/4.3fc00fe1.js",
    "revision": "1400cfe25e4224e35e70910678b281de"
  },
  {
    "url": "assets/js/40.4b7790ef.js",
    "revision": "d233a767c65fc4a5b4902e3a97f48c8f"
  },
  {
    "url": "assets/js/41.609feb67.js",
    "revision": "8c7e5ebbf336de1dc024c59dc99617da"
  },
  {
    "url": "assets/js/42.63569307.js",
    "revision": "3371c87d63ea4ecfc48e9de41f9c51cc"
  },
  {
    "url": "assets/js/43.0ef43e4c.js",
    "revision": "86289f6624fa87ed2cefe3ad198f17a2"
  },
  {
    "url": "assets/js/44.ae031e57.js",
    "revision": "7ccaf0fe0347f9276cd51a92dbf5d6e0"
  },
  {
    "url": "assets/js/45.c8127401.js",
    "revision": "38038e8027878c894a318a566e0cd4c2"
  },
  {
    "url": "assets/js/46.125d215f.js",
    "revision": "59082d49945bfc3f7bab8f58c7201fc2"
  },
  {
    "url": "assets/js/47.6e62e0ba.js",
    "revision": "976661b499b84726b1fc349da7dfb38b"
  },
  {
    "url": "assets/js/48.052df377.js",
    "revision": "1df0c7a64ccc3a692bdd4c8ed67b7c2c"
  },
  {
    "url": "assets/js/49.27dca2b3.js",
    "revision": "86d0b2084ac1340d801bebc6f60ea745"
  },
  {
    "url": "assets/js/5.d52e6949.js",
    "revision": "13a5180d64dd7db6425e5a0b9d15c07a"
  },
  {
    "url": "assets/js/50.e7f0cdbb.js",
    "revision": "0d59fb26c3576fec0ce678715a4e9d1e"
  },
  {
    "url": "assets/js/51.816a8261.js",
    "revision": "1fa2f47f2440b4156f0541f669162d19"
  },
  {
    "url": "assets/js/52.0fb50961.js",
    "revision": "4c7cb656be608a1b844d936fe77b224e"
  },
  {
    "url": "assets/js/53.b6576a4e.js",
    "revision": "71df2b683f50d15c460017f525000abb"
  },
  {
    "url": "assets/js/54.6fec9496.js",
    "revision": "b570f37dc66e63eddc97ccc5b1c43c47"
  },
  {
    "url": "assets/js/55.da7f3d93.js",
    "revision": "273d1d5e3aff7fc0200dcdb67acb556e"
  },
  {
    "url": "assets/js/56.1b7aba5b.js",
    "revision": "dbf530597ee54d6fa04f3426d5c25e6b"
  },
  {
    "url": "assets/js/57.f9901cf3.js",
    "revision": "f38fd755254bda2281ec4d23815041e9"
  },
  {
    "url": "assets/js/58.2ed96546.js",
    "revision": "d3ed90d9037458ce7a25b4e302abcc7b"
  },
  {
    "url": "assets/js/59.d5e09bb4.js",
    "revision": "6e22f1163c213016e5f4fb70aa680fd3"
  },
  {
    "url": "assets/js/60.9d9d54ed.js",
    "revision": "3340c39805fdfcf521536739f5307cc0"
  },
  {
    "url": "assets/js/61.b290d237.js",
    "revision": "ef94ab25793410dbd7368970ae8bfba2"
  },
  {
    "url": "assets/js/62.de02714c.js",
    "revision": "246a8b5fb6634dea3243ea1d7295eea5"
  },
  {
    "url": "assets/js/63.0b280cb9.js",
    "revision": "81434a5c01b010f9dc4531ff025a5e4d"
  },
  {
    "url": "assets/js/64.c832b9b5.js",
    "revision": "805429cb5cfaf0cb42f5d999436be1a1"
  },
  {
    "url": "assets/js/65.81966734.js",
    "revision": "31765411769d914af68e5e9048ef8374"
  },
  {
    "url": "assets/js/66.aab11689.js",
    "revision": "bb15ba17587280175344fc2e52ddc4e7"
  },
  {
    "url": "assets/js/67.95b4dc5d.js",
    "revision": "cd0b241eef8ed8450832fb4e2163c64c"
  },
  {
    "url": "assets/js/68.7d87cb89.js",
    "revision": "0eb08fbb8f625c94936ccd46ea736515"
  },
  {
    "url": "assets/js/69.b6eaab25.js",
    "revision": "5b247734cb243bd9ba4e4c8daa345c6f"
  },
  {
    "url": "assets/js/70.fd811ac0.js",
    "revision": "f3cf2896b9456cd80ea7fd37c71602c5"
  },
  {
    "url": "assets/js/71.33b3490e.js",
    "revision": "b8b3f26a8511778807c0c8609c73b274"
  },
  {
    "url": "assets/js/72.851d4ef6.js",
    "revision": "dd47bf6de97201b00f3f00d5b0efed53"
  },
  {
    "url": "assets/js/73.d9ec371e.js",
    "revision": "1032e90be259716161dd72fda3a7ae79"
  },
  {
    "url": "assets/js/74.336759a7.js",
    "revision": "a03c9a30294d1f1d4ef9a6748718ee6a"
  },
  {
    "url": "assets/js/75.fd6e58d7.js",
    "revision": "2e5aa99b0d3e4faa0b6a30c1aa7cb9c5"
  },
  {
    "url": "assets/js/76.0f32db57.js",
    "revision": "3fa777583b6ab92f507cf67da22c08fd"
  },
  {
    "url": "assets/js/77.71453f95.js",
    "revision": "859328e8df0c8937844025a92a7c81c0"
  },
  {
    "url": "assets/js/78.a6af0fef.js",
    "revision": "df4bdad668c5c361bf2081436928731f"
  },
  {
    "url": "assets/js/79.839d8b02.js",
    "revision": "018931759c43b373a1ff947e2c0a49a0"
  },
  {
    "url": "assets/js/8.0ba4a133.js",
    "revision": "7f5188caf2767b325ca09e2fe74599b8"
  },
  {
    "url": "assets/js/80.1485b07d.js",
    "revision": "90163f5af27b478e6b57657ad53ea2b4"
  },
  {
    "url": "assets/js/81.7531bd53.js",
    "revision": "7bd1fe43be6e9db8f53936924d74f38f"
  },
  {
    "url": "assets/js/82.29ba4f94.js",
    "revision": "6bcf3730b200678cc867e14e2fc31fb5"
  },
  {
    "url": "assets/js/83.dbdf6bc2.js",
    "revision": "79f4a6cb20eda91c6d36da92a6a2337f"
  },
  {
    "url": "assets/js/84.bd5e2612.js",
    "revision": "84b3a2486f9ff54f58837cb753626881"
  },
  {
    "url": "assets/js/85.bf39045a.js",
    "revision": "bfae988d37bc14560fc7e2f0041557df"
  },
  {
    "url": "assets/js/86.a6063556.js",
    "revision": "08f1b374bf1817184da3c15ff66b409f"
  },
  {
    "url": "assets/js/87.1491ba06.js",
    "revision": "d9540a711e513bca82a46cf53a0bc898"
  },
  {
    "url": "assets/js/88.acf07838.js",
    "revision": "f37c0f8245c39323506ab22bee852c09"
  },
  {
    "url": "assets/js/89.badcb618.js",
    "revision": "47161dc1cc1693f2a4d74306b0d0d1e0"
  },
  {
    "url": "assets/js/9.ab3ccff4.js",
    "revision": "c7e6e6394c00229efdae9a1258747ec2"
  },
  {
    "url": "assets/js/90.6771e28c.js",
    "revision": "dd9ba3b7c03bb14f855363745f0fbd86"
  },
  {
    "url": "assets/js/91.b8c9ea0e.js",
    "revision": "b8185d8cd2beaa534d12ee4e12801dc0"
  },
  {
    "url": "assets/js/92.42a96368.js",
    "revision": "57d55bd19c64326bcd9cc44d52a8257d"
  },
  {
    "url": "assets/js/93.40cc7409.js",
    "revision": "b709add6fafce65b0098f9311018fc90"
  },
  {
    "url": "assets/js/94.a2354aea.js",
    "revision": "f5f8ddbd555ace68beaf2160b6ae9546"
  },
  {
    "url": "assets/js/95.54f568bf.js",
    "revision": "d6d480b241657fc7669dd1c40a626947"
  },
  {
    "url": "assets/js/96.82124f56.js",
    "revision": "b3445769f965f48b0269da0fae1e2493"
  },
  {
    "url": "assets/js/97.94b4e02f.js",
    "revision": "12a6490a603f81da7080bedcdb62b3d5"
  },
  {
    "url": "assets/js/98.bc5f05c9.js",
    "revision": "feeac383b253101ba5b53d56a3f67775"
  },
  {
    "url": "assets/js/99.257ffb14.js",
    "revision": "754500ad0a4a45d10dfb94592071c64a"
  },
  {
    "url": "assets/js/app.17164b98.js",
    "revision": "a46fa8c2488a9943579593ac9acc4a64"
  },
  {
    "url": "assets/js/vendors~docsearch.7b063a7e.js",
    "revision": "85d237463fbc241851de16f3ff2e1b88"
  },
  {
    "url": "index.html",
    "revision": "4ada35b879a64ad470ea37f3decb0ecd"
  },
  {
    "url": "logo.png",
    "revision": "017e297caf13c3b98e31528bae7f2630"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
