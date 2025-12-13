import { useState } from "react";
import { Header } from "./Header";
import { VideoCreationPanel } from "./VideoCreationPanel";
import { RightPanel } from "./RightPanel";

export function Layout() {
  const [activeTab, setActiveTab] = useState("text-to-video");
  const [rightPanelWidth, setRightPanelWidth] = useState(400);
  const [isDragging, setIsDragging] = useState(false);

  // Handle resizing
  const startResizing = () => {
    setIsDragging(true);
  };

  const stopResizing = () => {
    setIsDragging(false);
  };

  const resize = (e: MouseEvent) => {
    if (isDragging) {
      const newWidth = window.innerWidth - e.clientX;
      if (newWidth > 200 && newWidth < 800) { // Min/Max constraints
        setRightPanelWidth(newWidth);
      }
    }
  };

  return (
    <div 
      className={`flex h-screen flex-col bg-gray-100 font-sans text-gray-900 ${isDragging ? 'cursor-col-resize select-none' : ''}`}
      onMouseMove={(e) => isDragging && resize(e.nativeEvent)}
      onMouseUp={stopResizing}
      onMouseLeave={stopResizing} 
    >
      {/* 
         Note: moving mouse resizing to the container div for simplicity. 
         Ideally window listeners are better but this works if user stays in window.
      */}
      
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex flex-1 overflow-hidden">
        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto">
          
          {/* Shared Video Creation Panel for multiple modes */}
          {(activeTab === "text-to-video" || 
            activeTab === "image-to-video" || 
            activeTab === "start-end" || 
            activeTab === "character-sync") && (
            <VideoCreationPanel mode={activeTab} />
          )}
        </div>

        {/* Drag Handle */}
        <div 
          className="w-1 cursor-col-resize bg-gray-200 hover:bg-blue-400 active:bg-blue-600 transition-colors z-20"
          onMouseDown={startResizing}
        />

        {/* Right Panel */}
        <div 
          className="flex-shrink-0"
          style={{ width: rightPanelWidth }}
        >
          <RightPanel />
        </div>
      </div>
    </div>
  );
}
