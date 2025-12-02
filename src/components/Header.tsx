import { FileText, Image, Play, Users } from "lucide-react";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Header({ activeTab, setActiveTab }: HeaderProps) {
  const tabs = [
    { id: "text-to-video", label: "Text to Video", icon: FileText },
    { id: "image-to-video", label: "Image to Video", icon: Image },
    { id: "start-end", label: "Start-End", icon: Play },
    { id: "character-sync", label: "Đồng bộ nhân vật", icon: Users },
  ];

  return (
    <div className="flex items-center border-b bg-white px-2">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
            activeTab === tab.id
              ? "border-b-2 border-blue-500 text-blue-600"
              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
          }`}
        >
          <tab.icon className="h-4 w-4" />
          {tab.label}
        </button>
      ))}
    </div>
  );
}
