import { Rocket, CreditCard, FolderOpen } from "lucide-react";
import { open } from "@tauri-apps/plugin-dialog";
import { useState } from "react";

interface VideoCreationPanelProps {
  mode: string; // To differentiate or show specific content if needed later
}

export function VideoCreationPanel({ mode }: VideoCreationPanelProps) {
  const [outputFolder, setOutputFolder] = useState("C:\\Users\\chung\\Desktop\\Veo3Output");
  
  // State for Image-to-Video
  const [inputImages, setInputImages] = useState<string[]>([]);

  // State for Start-End
  const [startImages, setStartImages] = useState<string[]>([]);
  const [endImages, setEndImages] = useState<string[]>([]);

  // State for Character-Sync
  const [characterImages, setCharacterImages] = useState<string[]>([]);

  const handleSelectFolder = async () => {
    try {
      const selected = await open({
        directory: true,
        multiple: false,
        defaultPath: outputFolder,
      });
      
      if (selected && typeof selected === "string") {
        setOutputFolder(selected);
      }
    } catch (error) {
      console.error("Failed to open dialog:", error);
    }
  };

  const handleSelectFiles = async (setter: (files: string[]) => void) => {
    try {
      const selected = await open({
        multiple: true,
        filters: [{ name: 'Images', extensions: ['png', 'jpg', 'jpeg', 'webp'] }]
      });
      if (selected) {
        setter(Array.isArray(selected) ? selected : [selected]);
      }
    } catch (error) {
      console.error("Failed to open dialog:", error);
    }
  };

  return (
    <div className="flex h-full flex-col gap-4 px-4 pb-4 pt-2">
      {/* 
          Placeholder for specific tab content if requested later.
          For 'text-to-video', it's just the shared prompt.
          For 'image-to-video', user said prompt is shared.
          We can add a slot here if needed.
       */}
       
      <div className="flex-1 overflow-hidden rounded-lg border bg-white shadow-sm">
        {mode === 'text-to-video' && (
          <div className="h-full p-4">
             <textarea
              className="h-full w-full resize-none border-none bg-transparent p-0 text-sm focus:outline-none"
              placeholder="Dán danh sách prompt vào đây&#10;&#10;Xuống dòng sẽ tính là một prompt mới...&#10;&#10;NÊN DÙNG PROMPT BẰNG TIẾNG ANH&#10;&#10;Người dùng miễn phí được tạo 1 prompt 1 lần"
            />
          </div>
        )}

        {mode === 'image-to-video' && (
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
        )}

        {mode === 'start-end' && (
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
        )}

        {mode === 'character-sync' && (
          <div className="flex h-full gap-4 p-4">
            <div className="flex-1 flex flex-col h-full rounded border p-2">
               <div className="mb-2 font-bold text-sm text-gray-700">Prompt hàng loạt</div>
               <textarea
                className="flex-1 w-full resize-none border-t border-gray-100 bg-transparent p-2 text-sm focus:outline-none"
                placeholder="Dán hàng loạt prompt, mỗi dòng 1 prompt&#10;- Chọn 10 ảnh nhân vật...&#10;- Gọi tên nhân vật..."
              />
            </div>
            
            <div className="w-[300px] flex flex-col rounded border border-dashed border-gray-300 bg-gray-50 p-4">
               <div className="mb-2 flex items-center justify-between">
                 <span className="text-sm font-bold text-gray-700">Chọn ảnh nhân vật (tối đa 10)</span>
                 <button 
                   onClick={() => handleSelectFiles(setCharacterImages)}
                   className="rounded bg-white p-1 shadow-sm hover:bg-gray-100"
                 >
                   <FolderOpen className="h-4 w-4 text-gray-500" />
                 </button>
               </div>
               
               <div className="flex flex-1 flex-col overflow-y-auto">
                 {characterImages.length > 0 ? (
                   <div className="space-y-2">
                     {characterImages.map((img, idx) => (
                       <div key={idx} className="flex gap-2 rounded border bg-white p-2">
                         <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded bg-gray-200">
                           <img src={img} alt="" className="h-full w-full object-cover" />
                         </div>
                         <div className="flex-1">
                           <input 
                             type="text" 
                             className="w-full text-sm font-medium focus:outline-none" 
                             placeholder={`Nhân vật ${idx + 1}`}
                           />
                           <div className="text-[10px] text-gray-400 truncate" title={img}>
                             {img.split(/[\\/]/).pop()}
                           </div>
                         </div>
                       </div>
                     ))}
                   </div>
                 ) : (
                   <div 
                     onClick={() => handleSelectFiles(setCharacterImages)}
                     className="flex flex-1 cursor-pointer flex-col items-center justify-center text-center text-xs text-gray-500 hover:bg-gray-100"
                   >
                     Click để chọn ảnh<br/>hoặc kéo ảnh vào khu vực này,<br/>sau đó đặt tên nhân vật<br/>(tối đa 10 ảnh)
                   </div>
                 )}
               </div>
            </div>
          </div>
        )}
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
        <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-indigo-600 py-2 text-sm font-bold text-white shadow-sm hover:bg-indigo-700">
          <Rocket className="h-4 w-4" />
          BẮT ĐẦU TẠO VIDEO
        </button>
        
        <div className="flex items-center gap-2 rounded-lg border bg-white px-4 shadow-sm">
          <input type="radio" name="quality" id="1080p" className="h-4 w-4 text-indigo-600" />
          <label htmlFor="1080p" className="text-sm font-medium text-gray-700">1080p</label>
        </div>

        <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-cyan-500 py-2 text-sm font-bold text-white shadow-sm hover:bg-cyan-600">
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
            <span className="truncate text-sm text-gray-600" title={outputFolder}>{outputFolder}</span>
            <button 
              onClick={handleSelectFolder}
              className="ml-auto text-gray-400 hover:text-gray-600"
            >
              📂
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
