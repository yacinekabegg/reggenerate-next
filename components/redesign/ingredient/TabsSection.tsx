"use client";

import { useState } from "react";
import { TabPills } from "../TabPills";
import { Bienfaits } from "./Bienfaits";
import { Science } from "./Science";
import { Sourcing } from "./Sourcing";
import { Specifications } from "./Specifications";
import { Qualite } from "./Qualite";

type TabKey = "bienfaits" | "science" | "sourcing" | "specifications" | "qualite";

const TABS: { key: TabKey; label: string }[] = [
  { key: "bienfaits", label: "Bienfaits" },
  { key: "science", label: "Science" },
  { key: "sourcing", label: "Sourcing" },
  { key: "specifications", label: "Spécifications" },
  { key: "qualite", label: "Qualité" },
];

const PANELS: Record<TabKey, React.ComponentType> = {
  bienfaits: Bienfaits,
  science: Science,
  sourcing: Sourcing,
  specifications: Specifications,
  qualite: Qualite,
};

export function TabsSection() {
  const [active, setActive] = useState<TabKey>("bienfaits");
  const Panel = PANELS[active];

  return (
    <section style={{ background: "var(--cream)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "88px 32px" }} data-reveal>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "var(--fs-display-lg)",
            lineHeight: 1.1,
            letterSpacing: "-.02em",
            color: "var(--ink)",
            textAlign: "center",
            margin: "0 auto",
            maxWidth: "18ch",
          }}
        >
          Cinq façons de creuser le sujet.
        </h2>

        <div style={{ marginTop: "40px" }}>
          <TabPills tabs={TABS} active={active} onChange={setActive} />
        </div>

        <div style={{ background: "var(--white)", border: "1px solid var(--line)", borderRadius: "24px", boxShadow: "var(--shadow-card)", padding: "clamp(32px,4vw,56px)", marginTop: "36px" }}>
          <Panel />
        </div>
      </div>
    </section>
  );
}
