# Hướng dẫn dùng tool json-to-pdf.js

## Bước 1: Cài Script:
- Tải file script về, coppy file `json-to-pdf.js` vào thư mục `C:\Program Files\Adobe\Adobe Photoshop 2020\Presets\Scripts`
- Khởi động lại photoshop.
## Bước 2: Chạy Script:
### 1. Chuẩn bị dữ liệu:
- Get `.json` file từ Omegatics
- Đổi tên file `.psd` thành tên của variant
- Trong file psd chỉ để duy nhất 1 layer text thì tool mới nhận biết đc, và ko đặt trong 1 group nào.
### 2. Chạy Script:
- Mở tất cả file `.psd` lên, nếu máy yếu có thể mở 10 cái 1 lúc rồi xuất.
- Vào `File > Script > json-to-pdf`
- Sẽ có 2 lựa chọn là Gộp layer và Giữ layer, mọi người chọn 1 trong 2 rồi bấm OK.

|Gộp layer| Giữ layer |
|--|--|
| - Tốc độ xuất file nhanh, file nhẹ | Tốc độ xuất file chậm, file nặng |
| - Không lỗi | Hay gặp lỗi ko lưu đc file, lỗi font |
| - Không thể chỉnh sửa file pdf | Có thể chỉnh sửa |

- 1 cửa sổ mới hiện lên, chọn file `.json` tạo từ omegatics, sau đó chọn thư mục lưu file.
- Done!

**[>>> Video hướng dẫn](https://www.youtube.com/watch?v=u8GYd7EEBnQ)**
