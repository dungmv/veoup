import { Rocket, CreditCard } from "lucide-react";

export function TextToVideo() {
  return (
    <div className="flex h-full flex-col gap-4 p-4">
      <div className="flex-1 rounded-lg border bg-white p-4 shadow-sm">
        <textarea
          className="h-full w-full resize-none border-none bg-transparent p-0 text-sm focus:outline-none"
          placeholder="Dán danh sách prompt vào đây&#10;&#10;Xuống dòng sẽ tính là một prompt mới...&#10;&#10;NÊN DÙNG PROMPT BẰNG TIẾNG ANH&#10;&#10;Người dùng miễn phí được tạo 1 prompt 1 lần"
        />
      </div>

      <div className="flex items-center gap-4 rounded-lg border bg-white p-2 shadow-sm">
        <span className="text-sm font-medium text-gray-700">Thời lượng mỗi video</span>
        <div className="flex-1" />
        <select className="rounded border border-gray-300 px-3 py-1 text-sm">
          <option>5 giây</option>
          <option>10 giây</option>
          <option selected>15 giây</option>
        </select>
      </div>

      <div className="flex gap-4">
        <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-indigo-600 py-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-700">
          <Rocket className="h-4 w-4" />
          BẮT ĐẦU TẠO VIDEO
        </button>
        
        <div className="flex items-center gap-2 rounded-lg border bg-white px-4 shadow-sm">
          <input type="radio" name="quality" id="1080p" className="h-4 w-4 text-indigo-600" />
          <label htmlFor="1080p" className="text-sm font-medium text-gray-700">1080p</label>
        </div>

        <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-cyan-500 py-3 text-sm font-bold text-white shadow-sm hover:bg-cyan-600">
          <CreditCard className="h-4 w-4" />
          MUA GÓI CƯỚC
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-lg border bg-white p-3 shadow-sm">
          <div className="mb-1 text-xs text-gray-500">Tỷ lệ khung hình</div>
          <select className="w-full border-none bg-transparent p-0 text-sm font-medium focus:outline-none">
            <option>16:9 (Ngang)</option>
            <option>9:16 (Dọc)</option>
            <option>1:1 (Vuông)</option>
          </select>
        </div>

        <div className="rounded-lg border bg-white p-3 shadow-sm">
          <div className="mb-1 text-xs text-gray-500">Chọn thư mục lưu video</div>
          <div className="flex items-center gap-2">
            <span className="truncate text-sm text-gray-600">C:\Users\chung\Desktop\Veo3Output</span>
            <button className="ml-auto text-gray-400 hover:text-gray-600">
              📂
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
