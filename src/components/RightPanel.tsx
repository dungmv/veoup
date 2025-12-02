import { RefreshCw, Scissors, Trash2, MessageCircle, AlertCircle } from "lucide-react";

export function RightPanel() {
  return (
    <div className="flex h-full flex-col border-l bg-gray-50">
      {/* Top Actions */}
      <div className="grid grid-cols-3 gap-2 border-b bg-white p-2">
        <ActionButton icon={RefreshCw} label="Nối video" color="text-blue-600" />
        <ActionButton icon={RefreshCw} label="Tạo lại video" color="text-green-600" />
        <ActionButton icon={AlertCircle} label="Tạo lại video lỗi" color="text-orange-600" />
        <ActionButton icon={Scissors} label="Cắt ảnh cuối" color="text-cyan-600" />
        <ActionButton icon={Trash2} label="Xóa kết quả" color="text-red-600" />
        <ActionButton icon={MessageCircle} label="Nhóm zalo" color="text-blue-500" />
      </div>

      {/* Instructions */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="rounded-lg border bg-blue-50 p-4">
          <h3 className="mb-4 flex items-center gap-2 font-bold text-blue-900">
            <span className="flex h-6 w-6 items-center justify-center rounded bg-blue-600 text-xs text-white">?</span>
            Hướng dẫn sử dụng
          </h3>

          <div className="space-y-6">
            <InstructionItem
              title="1) Tạo video từ ảnh hàng loạt"
              steps={[
                "Bước 1: Chọn TẤT CẢ ảnh bạn muốn tạo video (ứng dụng sẽ tự sắp xếp theo TÊN FILE ẢNH).",
                "Bước 2: Dán HÀNG LOẠT prompt (mỗi dòng một prompt). Ứng dụng sẽ tự gán prompt vào ảnh tương ứng từ trên xuống.",
                "LƯU Ý: Bạn có thể click vào mỗi ảnh để chọn ảnh thay thế"
              ]}
            />
            <InstructionItem
              title="2) Tạo video dài (> 8 giây)"
              steps={[
                "Bước 1: Nhập hàng loạt prompt, mỗi dòng một prompt. Sau đó chọn thời lượng. Có thể chọn thời lượng riêng cho mỗi prompt",
                "LƯU Ý: Bạn nên nhập câu chuyện thay vì nhập prompt. Nên lưu ý thời lượng để phù hợp với câu chuyện."
              ]}
            />
            <InstructionItem
              title="3) Tạo video từ ảnh nhân vật"
              steps={[
                "Bước 1: Thêm ảnh nhân vật, tối đa 10 nhân vật. Đặt tên nhân vật (nên > 4 ký tự)",
                "Bước 2: Nhập hàng loạt prompt, mỗi dòng một prompt. Trong prompt nhắc tên nhân vật kèm hành động, bối cảnh",
                "LƯU Ý: Nên chọn ảnh nền trắng hoặc png ko nền."
              ]}
            />
          </div>
          
          <div className="mt-8 text-center text-sm text-gray-500">
            Chưa có video nào được tạo
          </div>
        </div>
      </div>

      {/* Account Info */}
      <div className="border-t bg-white p-4 text-sm">
        <h4 className="mb-2 font-bold text-blue-600">Thông tin tài khoản</h4>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1">
          <div className="text-gray-500">Email:</div>
          <div className="font-medium">chungmaiv@gmail.com</div>
          
          <div className="text-gray-500">Ngày hết hạn:</div>
          <div className="font-medium">2025-12-23</div>
          
          <div className="text-gray-500">Loại tài khoản:</div>
          <div className="font-medium">Miễn phí</div>
          
          <div className="text-gray-500">Đã sử dụng:</div>
          <div className="font-medium">26</div>
        </div>
        
        <div className="mt-2 flex items-center gap-2">
          <div className="text-gray-500">Hạn mức video:</div>
          <div className="relative flex-1 overflow-hidden rounded-full bg-gray-200 text-xs text-white">
            <div className="absolute inset-0 flex items-center justify-center z-10 drop-shadow-md font-medium">
              còn 45 / 45 video chưa dùng
            </div>
            <div className="h-4 bg-green-500" style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ActionButton({ icon: Icon, label, color }: { icon: any, label: string, color: string }) {
  return (
    <button className={`flex flex-col items-center justify-center gap-1 rounded p-2 hover:bg-gray-50 ${color}`}>
      <Icon className="h-4 w-4" />
      <span className="text-[10px] font-medium">{label}</span>
    </button>
  );
}

function InstructionItem({ title, steps }: { title: string, steps: string[] }) {
  return (
    <div className="space-y-2">
      <h4 className="font-bold text-gray-800">{title}</h4>
      <ul className="space-y-1 text-xs text-gray-600">
        {steps.map((step, i) => (
          <li key={i}>• {step}</li>
        ))}
      </ul>
    </div>
  );
}
