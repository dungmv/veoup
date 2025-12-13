import React from "react";

export function TextToVideoTab() {
  return (
    <div className="h-full p-4">
      <textarea
        className="h-full w-full resize-none border-none bg-transparent p-0 text-sm focus:outline-none"
        placeholder="Dán danh sách prompt vào đây&#10;&#10;Xuống dòng sẽ tính là một prompt mới...&#10;&#10;NÊN DÙNG PROMPT BẰNG TIẾNG ANH&#10;&#10;Người dùng miễn phí được tạo 1 prompt 1 lần"
      />
    </div>
  );
}
