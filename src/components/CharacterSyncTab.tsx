import { FolderOpen } from "lucide-react";

interface CharacterSyncTabProps {
  characterImages: string[];
  setCharacterImages: (files: string[]) => void;
  handleSelectFiles: (setter: (files: string[]) => void) => Promise<void>;
}

export function CharacterSyncTab({ characterImages, setCharacterImages, handleSelectFiles }: CharacterSyncTabProps) {
  return (
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
  );
}
