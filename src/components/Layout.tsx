import { useState } from "react";
import { Header } from "./Header";
import { TextToVideo } from "./TextToVideo";
import { RightPanel } from "./RightPanel";

export function Layout() {
  const [activeTab, setActiveTab] = useState("text-to-video");

  return (
    <div className="flex h-screen flex-col bg-gray-100 font-sans text-gray-900">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex flex-1 overflow-hidden">
        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto">
          {activeTab === "text-to-video" && <TextToVideo />}
          {activeTab === "image-to-video" && (
            <div className="flex h-full items-center justify-center text-gray-500">
              Chức năng Image to Video đang phát triển
            </div>
          )}
          {activeTab === "start-end" && (
            <div className="flex h-full items-center justify-center text-gray-500">
              Chức năng Start-End đang phát triển
            </div>
          )}
          {activeTab === "character-sync" && (
            <div className="flex h-full items-center justify-center text-gray-500">
              Chức năng Đồng bộ nhân vật đang phát triển
            </div>
          )}
        </div>

        {/* Right Panel */}
        <div className="w-[400px] flex-shrink-0">
          <RightPanel />
        </div>
      </div>
    </div>
  );
}
