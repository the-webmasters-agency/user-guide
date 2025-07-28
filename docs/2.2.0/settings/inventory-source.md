# Nguồn Hàng Tồn Kho

Quản lý tồn kho đa kho là một trong những tính năng độc đáo của Bagisto. Ở đây, chúng tôi sẽ giải thích cách bạn có thể quản lý tồn kho đa kho trong Laravel eCommerce và cung cấp dịch vụ đáng tin cậy cho khách hàng của mình. Việc chỉ có một nguồn hàng tồn kho có thể gây ra một số hạn chế cho cửa hàng thương mại điện tử của bạn.

Ví dụ, giả sử bạn chỉ có một kho hàng ở Delhi. Một khách hàng từ Chennai đặt mua một số sản phẩm. Việc giao hàng từ kho Delhi có thể dẫn đến các vấn đề như chậm giao hàng, tăng chi phí vận chuyển, v.v. Tuy nhiên, nếu bạn có một kho hàng ở Chennai, sản phẩm sẽ đến tay khách hàng rất nhanh, giúp giảm thời gian và chi phí vận chuyển.

Bằng cách sử dụng quản lý tồn kho đa kho, bạn có thể dễ dàng quản lý tất cả các nguồn hàng tồn kho. Trong Bagisto, bạn có thể tạo nhiều nguồn hàng tồn kho và dễ dàng quản lý chúng.

### Các bước đơn giản để quản lý tồn kho trong Bagisto 2.2.0

**Bước 1:** Trên bảng quản trị của Bagisto, nhấp vào **Cài đặt >> Nguồn Hàng Tồn Kho >> Tạo Nguồn Hàng Tồn Kho** như hình dưới đây.

  ![Nguồn Hàng Tồn Kho](../../assets/2.2.0/images/settings/inventorySource.png)

**Bước 2:** **Chung**

Nhập **Mã, Tên, Mô tả, Vĩ độ, Kinh độ, và Độ ưu tiên**, và đặt **Trạng thái** là hoạt động.

![Cấu hình Tồn Kho](../../assets/2.2.0/images/settings/inventoryConfiguration.png)

**Bước 3:** **Thông Tin Liên Hệ**

Bạn cần nhập **Tên, Email, Fax, Số điện thoại liên hệ**  

![Thông Tin Liên Hệ](../../assets/2.2.0/images/settings/contactInfo.png)

**Bước 4:** **Địa Chỉ Nguồn Hàng**

Bạn cần nhập địa chỉ nguồn hàng như quốc gia, địa chỉ, bang, thành phố, v.v. của kho hàng.

![Địa Chỉ Nguồn Hàng](../../assets/2.2.0/images/settings/sourceAddress.png)

Sau đó, bạn cần nhấp vào **Lưu Nguồn Hàng Tồn Kho**. Bây giờ bạn sẽ thấy nguồn hàng tồn kho mới đã được tạo thành công như hình dưới đây.

![Kết Quả Tồn Kho](../../assets/2.2.0/images/settings/inventoryOutput.png)

**Bước 5:** Nhấp vào **Cài đặt >> Kênh**. Mở kênh đã chọn ở **Chế độ chỉnh sửa >> Nguồn Hàng Tồn Kho**. Đây là kiểu chọn nhiều, bạn có thể chọn nhiều nguồn hàng tồn kho cho các kênh của mình. Sau đó, nhấp **Lưu Kênh**.

### Cài Đặt Tồn Kho Trên Trang Sản Phẩm

Nhấp vào **Danh mục >> Sản phẩm.** Mở sản phẩm đã chọn ở **Chế độ chỉnh sửa** và nhập **số lượng** cho từng nguồn hàng tồn kho. Cuối cùng, sau khi điền đầy đủ các trường cần thiết, nhấp **Lưu Sản Phẩm**. Lưu ý: Nếu bạn không nhập số lượng, mặc định sẽ lưu là 0, và kho hàng có số lượng 0 sẽ không hiển thị trong tùy chọn tồn kho trên trang vận chuyển.

![Tồn Kho Sản Phẩm](../../assets/2.2.0/images/settings/productInventory.png)

### Cài Đặt Tồn Kho Trên Trang Vận Chuyển

Nhấp vào **Bán hàng >> Đơn hàng**. Mở đơn hàng đã chọn ở **Chế độ chỉnh sửa >> Hóa đơn >> Lưu hóa đơn >> Giao hàng**. Trong phần Sản phẩm đã đặt hàng, quản trị viên có thể quyết định giao sản phẩm từ kho hàng nào.

![Cài Đặt Tồn Kho](../../assets/2.2.0/images/settings/inventorySetting.png)

**Lưu ý:** Bạn chỉ có thể bật một kho hàng tại một thời điểm, khi bạn chọn một kho hàng thì các kho còn lại sẽ tự động bị vô hiệu hóa. Ví dụ, tôi chọn kho Noida thì các kho khác sẽ bị vô hiệu hóa. Nhập số lượng cần giao và **Tạo vận chuyển**.

Như vậy, bạn có thể dễ dàng tạo **Nguồn Hàng Tồn Kho** trong Bagisto.