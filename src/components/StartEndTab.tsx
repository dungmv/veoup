import { FolderOpen } from "lucide-react";

interface StartEndTabProps {
  startImages: string[];
  setStartImages: (files: string[]) => void;
  endImages: string[];
  setEndImages: (files: string[]) => void;
  handleSelectFiles: (setter: (files: string[]) => void) => Promise<void>;
}

export function StartEndTab({ startImages, setStartImages, endImages, setEndImages, handleSelectFiles }: StartEndTabProps) {
  return (
    <div className="flex h-full flex-col p-4">
      <div className="mb-2 flex items-center justify-between rounded border bg-gray-50 p-2">
        <span className="font-bold text-sm">Bước 1: Chọn hàng loạt ảnh BẮT ĐẦU</span>
        <button 
          onClick={() => handleSelectFiles(setStartImages)}
          className="flex items-center gap-2 rounded border bg-white px-3 py-1 text-sm text-gray-600 hover:bg-gray-50"
        >
          {startImages.length > 0 ? `${startImages.length} ảnh start` : "Chưa chọn ảnh bắt đầu"}
          <FolderOpen className="h-4 w-4 text-blue-400" />
        </button>
      </div>

      <div className="mb-4 flex items-center justify-between rounded border bg-gray-50 p-2">
        <span className="font-bold text-sm">Bước 2: Chọn hàng loạt ảnh KẾT THÚC</span>
        <button 
          onClick={() => handleSelectFiles(setEndImages)}
          className="flex items-center gap-2 rounded border bg-white px-3 py-1 text-sm text-gray-600 hover:bg-gray-50"
        >
          {endImages.length > 0 ? `${endImages.length} ảnh end` : "Chưa chọn ảnh kết thúc"}
          <FolderOpen className="h-4 w-4 text-blue-400" />
        </button>
      </div>
      
      <div className="mb-2 font-bold text-sm">Bước 3: Nhập hàng loạt prompt tương ứng</div>
      <div className="mb-4 h-32 rounded border bg-white shadow-sm">
         <textarea
          className="h-full w-full resize-none border-none bg-transparent p-4 text-xs text-gray-500 focus:outline-none"
          placeholder="- Dán hàng loạt prompt vào, mỗi dòng là 1 prompt&#10;- Tool TỰ ĐỘNG ghép cặp: ảnh_start[0] + ảnh_end[0] + prompt[0], ...&#10;- KHÔNG CHẤP NHẬN ẢNH NHẠY CẢM..."
        />
      </div>

      <div className="flex-1 overflow-hidden rounded border">
        <div className="grid grid-cols-12 border-b bg-gray-100 p-2 text-sm font-bold text-gray-700">
          <div className="col-span-1">STT</div>
          <div className="col-span-2">Ảnh Start</div>
          <div className="col-span-2">Ảnh End</div>
          <div className="col-span-7">Prompt</div>
        </div>
        <div className="overflow-y-auto h-full bg-white">
          {/* Display rows based on the larger of start/end arrays to align them */ }
          {Array.from({ length: Math.max(startImages.length, endImages.length) }).map((_, idx) => (
            <div key={idx} className="grid grid-cols-12 border-b p-2 text-sm">
              <div className="col-span-1 flex items-center">{idx + 1}</div>
              <div className="col-span-2 truncate pr-2" title={startImages[idx] || ""}>
                {startImages[idx] ? startImages[idx].split(/[\\/]/).pop() : "-"}
              </div>
              <div className="col-span-2 truncate pr-2" title={endImages[idx] || ""}>
                {endImages[idx] ? endImages[idx].split(/[\\/]/).pop() : "-"}
              </div>
              <div className="col-span-7">
                <input type="text" className="w-full border-b border-gray-100 bg-transparent focus:border-blue-500 focus:outline-none" placeholder="Nhập prompt..." />
              </div>
            </div>
          ))}
          {startImages.length === 0 && endImages.length === 0 && (
             <div className="p-4 text-center text-xs text-gray-400">Chưa có ảnh nào được chọn</div>
          )}
        </div>
      </div>
    </div>
  );
}
