# Nhập Dữ Liệu Hàng Loạt

Nhập dữ liệu hàng loạt là một tính năng cho phép người dùng nhập một lượng lớn dữ liệu vào hệ thống một cách nhanh chóng và hiệu quả. Tính năng này giúp đơn giản hóa quy trình và tiết kiệm thời gian thay vì phải thêm từng thông tin một cách thủ công. Tính năng này hoạt động khác nhau tùy từng hệ thống và có nhiều trường hợp sử dụng trong nhiều ngành, cũng như trên Bagisto.

### Các bước thêm Nhập Dữ Liệu Hàng Loạt trong Bagisto 2.2.0

**Bước 1:** Truy cập vào bảng quản trị của Bagisto, nhấp vào **Cài đặt >> Chuyển dữ liệu** và nhấn nút **Tạo nhập khẩu**.

![Import](../../assets/2.2.0/images/settings/import.png)

**Bước 2:** Trong phần cấu hình chung, chọn các trường sau:

**1) Loại** – Vui lòng chọn loại dữ liệu (Sản phẩm, Khách hàng, Thuế suất) mà bạn muốn nhập.

**2) Tệp** – Chọn tệp ở định dạng mong muốn (CSV, XLS, XLSX), và đảm bảo rằng tệp có đầy đủ các trường cần thiết.

**Lưu ý** – Khi nhập dữ liệu sản phẩm, các loại sản phẩm **Đơn giản, Cấu hình, Ảo, Gói & Nhóm** đều có thể nhập, ngoại trừ **Sản phẩm có thể tải xuống**.

**3) Tải mẫu** – Bạn cũng có thể tải các tệp mẫu cho các loại (Sản phẩm, Khách hàng, Thuế suất). Đảm bảo rằng tệp bạn tải lên giống với tệp mẫu này.

**4) Đường dẫn thư mục hình ảnh** – Sử dụng đường dẫn tương đối tới /project-root/storage/import/app, ví dụ: product-images, import-images.

**5) Hành động** – Chọn từ cấu hình cài đặt để Tạo/Cập nhật hoặc Xóa các bản ghi.

**6) Chiến lược xác thực** – Tính năng này cho phép bạn **Bỏ qua lỗi** hoặc **Dừng khi gặp lỗi** trong quá trình nhập dữ liệu.

**7) Số lỗi cho phép** – Tính năng này cho phép bạn xác định số lượng lỗi sẽ bị bỏ qua khi nhập dữ liệu.

**8) Ký tự phân tách trường** – Tính năng này cho phép bạn đặt ký tự phân tách các trường.

**9) Xử lý trong hàng đợi** – Tính năng này cho phép bạn chạy quá trình nhập dữ liệu trong hàng đợi.

Sau đó, nhấp vào nút **Lưu nhập khẩu**.

![Create Import](../../assets/2.2.0/images/settings/createImport.png)

**Bước 3:** Quá trình nhập sẽ bắt đầu và sau khi hoàn tất, quá trình nhập sản phẩm sẽ hoàn thành.

![Import Done](../../assets/2.2.0/images/settings/importDone.png)

**Bước 4:** Bây giờ bạn có thể xem tất cả sản phẩm trong mục **Danh mục >> Sản phẩm** như hình dưới đây.

![Import Done](../../assets/2.2.0/images/settings/importOutput.png)

Với các bước trên, bạn có thể dễ dàng tạo **Nhập Dữ Liệu Hàng Loạt** trong Bagisto 2.2.0.