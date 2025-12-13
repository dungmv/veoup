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
    <div className="flex items-center border-b border-gray-200 px-2 pt-2">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative -mb-px flex items-center gap-2 rounded-t-lg border px-4 py-2 text-sm font-medium transition-colors ${
              isActive
                ? "border-gray-200 border-b-white bg-white text-blue-600"
                : "border-transparent bg-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            <tab.icon className="h-4 w-4" />
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
