
import React from "react";

type TabProps = {
  tab: "freelancer" | "client";
  setTab: (tab: "freelancer" | "client") => void;
};

export const UserTypeTabs: React.FC<TabProps> = ({ tab, setTab }) => (
  <div className="flex gap-2 mb-2">
    {(["freelancer", "client"] as const).map((t) => (
      <button
        key={t}
        type="button"
        className={`flex-1 px-4 py-2 rounded-xl font-semibold text-base shadow transition-all duration-150 border ${
          tab === t
            ? "bg-dwork-purple text-white border-dwork-purple shadow-md"
            : "bg-dwork-white text-dwork-purple border-gray-200 hover:bg-dwork-purple/10"
        }`}
        onClick={() => setTab(t)}
      >
        {t === "freelancer" ? "Freelancer" : "Client"}
      </button>
    ))}
  </div>
)
