// Illustrative interface mockups, one per project. They depict what each project does;
// they are drawings, not screenshots, and are labelled as such in the UI.

const bar = "rounded-full bg-white/15";

function Frame({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-xl border border-white/10 bg-[#061E48] text-[10px] text-white/80 shadow-2xl">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2" aria-hidden>
        <span className="h-2 w-2 rounded-full bg-[#FF5F57]" />
        <span className="h-2 w-2 rounded-full bg-[#FEBC2E]" />
        <span className="h-2 w-2 rounded-full bg-[#28C840]" />
        <span className="ml-2 truncate rounded bg-white/10 px-2 py-0.5 text-[9px] text-white/50">{label}</span>
      </div>
      <div className="relative min-h-0 flex-1 p-3">{children}</div>
    </div>
  );
}

function Phone({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex h-full max-h-full aspect-[9/17] flex-col overflow-hidden rounded-[22px] border-4 border-[#0F3570] bg-[#061E48] text-[9px] text-white/80 shadow-2xl">
      <div className="mx-auto mt-1.5 h-1.5 w-10 rounded-full bg-[#0F3570]" aria-hidden />
      <div className="min-h-0 flex-1 p-2.5">{children}</div>
    </div>
  );
}

function RealEstate() {
  return (
    <Frame label="estate.app/listings/3d">
      <div className="grid h-full grid-cols-5 gap-3">
        <div className="col-span-3 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#0A2858] to-[#0F3570]">
          <svg viewBox="0 0 120 100" className="h-4/5 w-4/5" fill="none" stroke="#2092E5" strokeWidth="1.5">
            <path d="M20 55 L60 32 L100 55 L60 78 Z" fill="#2092E5" fillOpacity="0.12" />
            <path d="M20 55 V80 L60 98 V78" />
            <path d="M100 55 V80 L60 98" />
            <path d="M30 50 L60 12 L90 50" stroke="#7FC4F5" />
            <path d="M60 12 L60 32" strokeDasharray="3 3" />
            <path d="M40 72 V84 L50 88 V76 Z" fill="#2092E5" fillOpacity="0.35" />
          </svg>
        </div>
        <div className="col-span-2 flex flex-col gap-2">
          {["Villa, 4 rooms", "Apartment, 2 rooms", "Riad, 5 rooms"].map((t, i) => (
            <div key={t} className={`rounded-lg border p-2 ${i === 0 ? "border-[#2092E5] bg-[#2092E5]/10" : "border-white/10"}`}>
              <p className="font-semibold text-white">{t}</p>
              <div className={`${bar} mt-1.5 h-1 w-3/4`} />
              <p className="mt-1.5 font-semibold text-[#2092E5]">View in 3D</p>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

function SmartHr() {
  const rows = [92, 84, 71, 58];
  return (
    <Frame label="hr.app/candidates">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold text-white">Candidate matching</p>
        <span className="rounded-full bg-[#7FC4F5]/20 px-2 py-0.5 text-[9px] text-[#7FC4F5]">AI ranked</span>
      </div>
      <ul className="mt-3 space-y-2.5">
        {rows.map((score, i) => (
          <li key={score} className="flex items-center gap-2 rounded-lg border border-white/10 p-2">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2092E5]/25 text-[9px] font-bold text-white">
              C{i + 1}
            </span>
            <div className="min-w-0 flex-1">
              <div className={`${bar} h-1 w-2/3`} />
              <div className="mt-1.5 h-1.5 rounded-full bg-white/10">
                <div className="h-full rounded-full bg-gradient-to-r from-[#1466B8] to-[#2092E5]" style={{ width: `${score}%` }} />
              </div>
            </div>
            <span className="font-semibold text-white">{score}%</span>
          </li>
        ))}
      </ul>
    </Frame>
  );
}

function StockManagement() {
  const items = [80, 35, 62, 15];
  return (
    <Frame label="stock.app/inventory">
      <div className="flex h-12 items-end gap-1.5" aria-hidden>
        {[40, 65, 50, 80, 55, 90, 70].map((h, i) => (
          <div key={i} className="flex-1 rounded-t bg-[#2092E5]/70" style={{ height: `${h}%` }} />
        ))}
      </div>
      <ul className="mt-3 space-y-1.5">
        {items.map((level, i) => (
          <li key={i} className="flex items-center gap-2">
            <div className={`${bar} h-1.5 w-14`} />
            <div className="h-1.5 flex-1 rounded-full bg-white/10">
              <div className={`h-full rounded-full ${level < 20 ? "bg-[#7FC4F5]" : "bg-[#2092E5]"}`} style={{ width: `${level}%` }} />
            </div>
            <span className={level < 20 ? "text-[#7FC4F5]" : "text-white/60"}>{level < 20 ? "Low" : `${level}`}</span>
          </li>
        ))}
      </ul>
    </Frame>
  );
}

function EmotionLearn() {
  const emotions = [
    { name: "Focused", v: 72 },
    { name: "Confused", v: 18 },
    { name: "Bored", v: 10 },
  ];
  return (
    <Frame label="emotionlearn.app/live">
      <div className="grid h-full grid-cols-2 gap-3">
        <div className="relative flex items-center justify-center rounded-lg bg-[#0A2858]">
          <svg viewBox="0 0 60 60" className="h-3/4 w-3/4" fill="none" stroke="white" strokeOpacity="0.5" strokeWidth="1.5">
            <circle cx="30" cy="24" r="11" />
            <path d="M12 56 C14 42, 46 42, 48 56" />
          </svg>
          <span className="absolute left-[22%] top-[10%] h-[52%] w-[56%] rounded border-2 border-[#2092E5]" />
          <span className="absolute left-[22%] top-[2%] rounded bg-[#2092E5] px-1 text-[8px] font-semibold text-white">Focused</span>
        </div>
        <div className="flex flex-col justify-center gap-2.5">
          {emotions.map((e) => (
            <div key={e.name}>
              <div className="flex justify-between">
                <span>{e.name}</span>
                <span className="text-white/60">{e.v}%</span>
              </div>
              <div className="mt-1 h-1.5 rounded-full bg-white/10">
                <div className="h-full rounded-full bg-[#2092E5]" style={{ width: `${e.v}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

function MobiCode() {
  return (
    <Phone>
      <p className="font-semibold text-white">MobiCode</p>
      <div className="mt-2 space-y-1.5 rounded-lg bg-black/30 p-2 font-mono">
        <div className="flex gap-1"><span className="text-[#7FC4F5]">fun</span><div className={`${bar} h-1.5 w-12 self-center`} /></div>
        <div className={`${bar} ml-2 h-1.5 w-16`} />
        <div className={`${bar} ml-2 h-1.5 w-10`} />
        <div className="flex gap-1"><span className="text-[#2092E5]">return</span><div className={`${bar} h-1.5 w-8 self-center`} /></div>
      </div>
      <div className="mt-2 rounded-lg border border-[#2092E5]/50 bg-[#2092E5]/10 p-2">
        <p className="font-semibold text-[#2092E5]">AI suggestion</p>
        <div className={`${bar} mt-1.5 h-1 w-full`} />
        <div className={`${bar} mt-1 h-1 w-2/3`} />
      </div>
      <div className="mt-2 rounded-full bg-[#2092E5] py-1 text-center font-semibold text-white">Generate</div>
    </Phone>
  );
}

function MediCare() {
  return (
    <Phone>
      <div className="relative h-[55%] rounded-lg bg-gradient-to-br from-[#0F3570] to-[#1466B8]">
        <svg viewBox="0 0 60 60" className="absolute inset-0 m-auto h-2/3 w-2/3" fill="none" stroke="white" strokeOpacity="0.6" strokeWidth="1.5">
          <circle cx="30" cy="22" r="10" />
          <path d="M12 56 C14 40, 46 40, 48 56" />
        </svg>
        <span className="absolute bottom-1.5 right-1.5 h-6 w-5 rounded border border-white/30 bg-[#061E48]" />
        <span className="absolute left-1.5 top-1.5 rounded bg-[#7FC4F5] px-1 text-[8px] font-semibold text-white">LIVE</span>
      </div>
      <div className="mt-2 rounded-lg border border-white/10 p-2">
        <p className="font-semibold text-white">Next appointment</p>
        <div className={`${bar} mt-1.5 h-1 w-3/4`} />
      </div>
      <div className="mt-2 flex justify-center gap-2" aria-hidden>
        <span className="h-5 w-5 rounded-full bg-white/15" />
        <span className="h-5 w-5 rounded-full bg-[#7FC4F5]" />
        <span className="h-5 w-5 rounded-full bg-white/15" />
      </div>
    </Phone>
  );
}

function Banking() {
  return (
    <Frame label="bank.app/dashboard">
      <div className="rounded-lg bg-gradient-to-br from-[#1466B8] to-[#2092E5] p-2.5">
        <p className="text-white/70">Balance</p>
        <div className="mt-1 h-2.5 w-20 rounded bg-white/80" />
        <p className="mt-2 font-mono text-white/70">•••• 4021</p>
      </div>
      <svg viewBox="0 0 120 30" className="mt-3 h-8 w-full" fill="none" aria-hidden>
        <path d="M0 24 L15 20 L30 22 L45 14 L60 16 L75 9 L90 12 L105 5 L120 7" stroke="#2092E5" strokeWidth="2" />
      </svg>
      <ul className="mt-2 space-y-1.5">
        {[0, 1, 2].map((i) => (
          <li key={i} className="flex items-center justify-between">
            <div className={`${bar} h-1.5 w-16`} />
            <span className={i === 1 ? "text-[#7FC4F5]" : "text-[#4ADE80]"}>{i === 1 ? "−" : "+"}</span>
          </li>
        ))}
      </ul>
    </Frame>
  );
}

function Clinic() {
  const booked = new Set([1, 4, 6, 9, 12, 15, 17]);
  return (
    <Frame label="clinic.app/agenda">
      <p className="text-xs font-semibold text-white">Appointments</p>
      <div className="mt-2 grid grid-cols-6 gap-1" aria-hidden>
        {Array.from({ length: 18 }, (_, i) => (
          <span
            key={i}
            className={`h-5 rounded ${booked.has(i) ? (i === 9 ? "bg-[#7FC4F5]/80" : "bg-[#2092E5]/70") : "bg-white/10"}`}
          />
        ))}
      </div>
      <div className="mt-2.5 flex items-center gap-2 rounded-lg border border-white/10 p-2">
        <span className="h-5 w-5 rounded-full bg-[#2092E5]/40" />
        <div className={`${bar} h-1.5 flex-1`} />
      </div>
    </Frame>
  );
}

const MOCKUPS: Record<string, () => JSX.Element> = {
  "smart-real-estate": RealEstate,
  "smart-hr": SmartHr,
  "stock-management": StockManagement,
  emotionlearn: EmotionLearn,
  mobicode: MobiCode,
  medicare: MediCare,
  "banking-system": Banking,
  "clinic-management": Clinic,
};

export function ProjectMockup({ id }: { id: string }) {
  const Mockup = MOCKUPS[id];
  return Mockup ? <Mockup /> : null;
}
