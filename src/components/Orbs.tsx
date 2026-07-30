export function Orbs() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="orb h-[34rem] w-[34rem] -left-40 -top-32"
        style={{ background: "var(--brand-violet)" }}
      />
      <div
        className="orb h-[28rem] w-[28rem] right-[-8rem] top-24"
        style={{ background: "var(--brand-cyan)", animationDelay: "-6s" }}
      />
      <div
        className="orb h-[30rem] w-[30rem] left-1/3 bottom-[-10rem]"
        style={{ background: "var(--brand-blue)", animationDelay: "-12s" }}
      />
    </div>
  );
}
