"use client";

type TabPillsProps<T extends string> = {
  tabs: { key: T; label: string }[];
  active: T;
  onChange: (key: T) => void;
};

export function TabPills<T extends string>({ tabs, active, onChange }: TabPillsProps<T>) {
  return (
    <div
      role="tablist"
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        justifyContent: "center",
      }}
    >
      {tabs.map((t) => {
        const on = t.key === active;
        return (
          <button
            key={t.key}
            role="tab"
            aria-selected={on}
            onClick={() => onChange(t.key)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "10px 20px",
              borderRadius: "999px",
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              fontSize: "15px",
              cursor: "pointer",
              whiteSpace: "nowrap",
              transition: "background .2s cubic-bezier(.22,.61,.36,1), border-color .2s cubic-bezier(.22,.61,.36,1), color .2s cubic-bezier(.22,.61,.36,1)",
              border: `1.5px solid ${on ? "var(--teal)" : "var(--line)"}`,
              background: on ? "var(--teal)" : "var(--white)",
              color: on ? "#fff" : "var(--body-ink)",
            }}
          >
            {t.label}
          </button>
        );
      })}
    </div>
  );
}
