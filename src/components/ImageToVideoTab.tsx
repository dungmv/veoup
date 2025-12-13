import { FolderOpen } from "lucide-react";

interface ImageToVideoTabProps {
  inputImages: string[];
  setInputImages: (files: string[]) => void;
  handleSelectFiles: (setter: (files: string[]) => void) => Promise<void>;
}

export function ImageToVideoTab({ inputImages, setInputImages, handleSelectFiles }: ImageToVideoTabProps) {
  return (
    <div className="flex h-full flex-col p-4">
      <div className="mb-4 flex items-center justify-between rounded border bg-gray-50 p-2">
        <span className="font-bold text-sm">Bước 1: Chọn hàng loạt ảnh (Sẽ crop về tỷ lệ đã chọn)</span>
        <button 
          onClick={() => handleSelectFiles(setInputImages)}
          className="flex items-center gap-2 rounded border bg-white px-3 py-1 text-sm text-gray-600 hover:bg-gray-50"
        >
          {inputImages.length > 0 ? `${inputImages.length} ảnh đã chọn` : "Chưa chọn ảnh"}
          <FolderOpen className="h-4 w-4 text-blue-400" />
        </button>
      </div>
      
      <div className="mb-2 font-bold text-sm">Bước 2: Nhập hàng loạt prompt tương ứng</div>
      <div className="mb-4 h-32 rounded border bg-white shadow-sm">
         <textarea
          className="h-full w-full resize-none border-none bg-transparent p-4 text-xs text-gray-500 focus:outline-none"
          placeholder="- Dán hàng loạt prompt vào, mỗi dòng là 1 prompt. Tool TỰ ĐỘNG gán prompt vào ảnh theo thứ tự&#10;- Ảnh xếp theo alphabet, nếu tên là số thì nên đặt 001,002...đặt 1,2,3 sẽ lỗi (Tối đa 350MB ảnh)&#10;- KHÔNG CHẤP NHẬN ẢNH NHẠY CẢM, NGƯỜI NỔI TIẾNG, TRẺ EM, BẠO LỰC..."
        />
      </div>

      <div className="flex-1 overflow-hidden rounded border">
        <div className="grid grid-cols-12 border-b bg-gray-100 p-2 text-sm font-bold text-gray-700">
          <div className="col-span-1">STT</div>
          <div className="col-span-2">Ảnh</div>
          <div className="col-span-9">Prompt</div>
        </div>
        <div className="overflow-y-auto h-full bg-white">
          {inputImages.map((img, idx) => (
            <div key={idx} className="grid grid-cols-12 border-b p-2 text-sm">
              <div className="col-span-1 flex items-center">{idx + 1}</div>
              <div className="col-span-2 truncate pr-2" title={img}>
                {img.split(/[\\/]/).pop()}
              </div>
              <div className="col-span-9">
                <input type="text" className="w-full border-b border-gray-100 bg-transparent focus:border-blue-500 focus:outline-none" placeholder="Nhập prompt..." />
              </div>
            </div>
          ))}
          {inputImages.length === 0 && (
             <div className="p-4 text-center text-xs text-gray-400">Chưa có ảnh nào được chọn</div>
          )}
        </div>
      </div>
    </div>
  );
}
