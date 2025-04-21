import React from "react";
import Markdown from "react-markdown";
const markdown = `
*Cập nhật lần cuối: Ngày 11 tháng 11 năm 2024*

## 1. Giới Thiệu Chung

Chào mừng quý khách đến với SenStay – nền tảng trực tuyến kết nối đa dạng các loại hình chỗ ở và trải nghiệm du lịch ngắn hạn, dài hạn trên khắp Việt Nam. SenStay hoạt động như một đơn vị trung gian kết nối giữa chủ nhà (hoặc đơn vị cung cấp dịch vụ lưu trú, trải nghiệm) và khách hàng. Mỗi giao dịch đặt phòng thành công trên nền tảng sẽ phát sinh phí hoa hồng theo chính sách quy định.

Việc sử dụng trang web này đồng nghĩa với việc quý khách đã đọc, hiểu và đồng ý với các Điều khoản Dịch vụ dưới đây. Nếu không đồng ý với bất kỳ nội dung nào, vui lòng không sử dụng trang web và các dịch vụ của SenStay.

## 2. Định Nghĩa

- **SenStay**: Nền tảng trực tuyến do Công ty SenStay vận hành, cung cấp dịch vụ kết nối các loại hình chỗ ở và trải nghiệm du lịch.
- **Người dùng**: Gồm chủ nhà, đối tác cung cấp dịch vụ và khách hàng sử dụng trang web để tìm kiếm và đặt chỗ nghỉ.
- **Giao dịch**: Mọi hoạt động đặt phòng, đặt dịch vụ được tiến hành thông qua nền tảng của SenStay.
- **Hoa hồng**: Phí thu của SenStay trên mỗi giao dịch thành công như quy định trong chính sách của công ty.

## 3. Phạm Vi Áp Dụng

Các điều khoản này áp dụng cho mọi hoạt động truy cập, sử dụng và giao dịch trên trang web SenStay. SenStay có quyền cập nhật, bổ sung hoặc thay đổi các điều khoản mà không cần thông báo trước. Người dùng có trách nhiệm thường xuyên tra cứu Điều khoản Dịch vụ để cập nhật những thay đổi mới nhất.

## 4. Quyền và Trách Nhiệm của SenStay

### 4.1. Quyền của SenStay

- Quản lý, điều hành nền tảng kết nối người dùng và chủ nhà/dịch vụ.
- Thiết lập và điều chỉnh mức hoa hồng trên mỗi giao dịch đặt phòng.
- Tạm ngừng hoặc chấm dứt cung cấp dịch vụ đối với người dùng vi phạm Điều khoản Dịch vụ.
- Giải quyết các khiếu nại, tranh chấp giữa các bên liên quan theo quy định của pháp luật.

### 4.2. Trách nhiệm của SenStay

- Cung cấp thông tin đầy đủ, chính xác về dịch vụ, chỗ ở và trải nghiệm du lịch trên trang web.
- Bảo mật thông tin cá nhân của người dùng theo chính sách bảo mật đã quy định.
- Hỗ trợ giải đáp thắc mắc và xử lý các giao dịch hoặc sự cố phát sinh trong quá trình sử dụng dịch vụ.
- Không tham gia trực tiếp vào các giao dịch giữa khách hàng với chủ nhà/dịch vụ.

## 5. Quyền và Trách Nhiệm của Người Dùng

### 5.1. Đối với khách hàng

- Cung cấp thông tin cá nhân, liên hệ chính xác khi sử dụng dịch vụ.
- Tuân thủ các hướng dẫn về đặt phòng, thanh toán, hủy đặt chỗ theo chính sách của từng chủ nhà/dịch vụ.
- Chịu trách nhiệm về nội dung đánh giá, nhận xét sau khi sử dụng dịch vụ. Mọi thông tin đánh giá phải trung thực, không gây hiểu lầm cho người sử dụng khác.

### 5.2. Đối với chủ nhà/dịch vụ

- Cung cấp thông tin chi tiết, chân thực và đầy đủ về loại hình dịch vụ, chỗ ở được niêm yết trên website.
- Chịu trách nhiệm về chất lượng dịch vụ, đảm bảo đúng với mô tả khi khách hàng đến trải nghiệm.
- Tuân thủ các quy định về thanh toán, đặt lịch và chính sách hủy đặt chỗ theo quy định của SenStay.

## 6. Quy Trình Giao Dịch

- **Đặt Phòng/Dịch Vụ**: Khách hàng lựa chọn chỗ ở hoặc dịch vụ qua nền tảng, đọc kỹ các thông tin mô tả và điều kiện giao dịch.
- **Xác Nhận Giao Dịch**: Sau khi đặt chỗ, thông tin giao dịch sẽ được gửi đến cả khách hàng và chủ nhà/dịch vụ. Quá trình xác nhận có thể được thực hiện qua email hoặc tin nhắn hệ thống.
- **Thanh Toán**: Thanh toán được thực hiện theo phương thức được quy định trên website. Phí dịch vụ và hoa hồng được SenStay tự động tính toán và thu theo chính sách quy định.
- **Hủy Đặt Phòng**: Người dùng có thể thực hiện yêu cầu hủy đặt chỗ theo chính sách hủy của chủ nhà/dịch vụ. Mọi tranh chấp thời hạn hủy đặt chỗ sẽ được giải quyết theo quy định tại mục “Giải Quyết Tranh Chấp.”

`;
const page = () => {
  return (
    <div className="page-content policy">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="terms-text">
              <Markdown>{markdown}</Markdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
