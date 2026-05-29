type IconProps = {
  name: string;
  className?: string;
};

const paths: Record<string, React.ReactNode> = {
  arrow: <><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>,
  check: <path d="M20 6 9 17l-5-5" />,
  close: <><path d="M18 6 6 18" /><path d="m6 6 12 12" /></>,
  cpu: <><rect width="16" height="16" x="4" y="4" rx="2" /><path d="M9 9h6v6H9z" /><path d="M9 1v3" /><path d="M15 1v3" /><path d="M9 20v3" /><path d="M15 20v3" /><path d="M20 9h3" /><path d="M20 14h3" /><path d="M1 9h3" /><path d="M1 14h3" /></>,
  file: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M16 13H8" /><path d="M16 17H8" /></>,
  headset: <><path d="M3 11a9 9 0 0 1 18 0" /><path d="M21 11v5a2 2 0 0 1-2 2h-1" /><path d="M3 11v5a2 2 0 0 0 2 2h1" /><path d="M12 21h3a2 2 0 0 0 2-2v-1" /><path d="M7 12v5" /><path d="M17 12v5" /></>,
  list: <><path d="M9 6h11" /><path d="M9 12h11" /><path d="M9 18h11" /><path d="m4 6 1 1 2-2" /><path d="m4 12 1 1 2-2" /><path d="m4 18 1 1 2-2" /></>,
  mail: <><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-10 6L2 7" /></>,
  menu: <><path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" /></>,
  panel: <><rect width="16" height="14" x="4" y="5" rx="2" /><path d="M8 9h8" /><path d="M8 13h4" /><path d="M16 13h.01" /></>,
  phone: <><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.18 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.72c.13.96.34 1.9.62 2.8a2 2 0 0 1-.45 2.11L8 9.9a16 16 0 0 0 6.1 6.1l1.27-1.27a2 2 0 0 1 2.11-.45c.9.28 1.84.49 2.8.62A2 2 0 0 1 22 16.92Z" /></>,
  refresh: <><path d="M21 12a9 9 0 0 1-9 9 9.8 9.8 0 0 1-6.74-2.74L3 16" /><path d="M3 21v-5h5" /><path d="M3 12a9 9 0 0 1 9-9 9.8 9.8 0 0 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /></>,
  send: <><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></>,
  shield: <><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.68 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.2 1.2 0 0 1 1.52 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></>,
  whatsapp: <path fill="currentColor" d="M16.01 3.2A12.68 12.68 0 0 0 5.15 22.44L3.2 29l6.72-1.78A12.65 12.65 0 1 0 16.01 3.2Zm0 22.98c-2.02 0-3.98-.59-5.66-1.72l-.4-.26-3.98 1.05 1.06-3.88-.26-.4a10.26 10.26 0 1 1 9.24 5.21Zm5.62-7.67c-.31-.15-1.82-.9-2.1-1-.28-.1-.48-.15-.69.15-.2.31-.79 1-.97 1.2-.18.21-.36.23-.67.08-.31-.15-1.31-.48-2.49-1.54-.92-.82-1.54-1.84-1.72-2.15-.18-.31-.02-.48.14-.63.14-.14.31-.36.46-.54.15-.18.2-.31.31-.51.1-.2.05-.38-.03-.54-.08-.15-.69-1.66-.94-2.28-.25-.6-.5-.52-.69-.53h-.59c-.2 0-.54.08-.82.38-.28.31-1.08 1.05-1.08 2.56 0 1.51 1.1 2.97 1.25 3.17.15.2 2.16 3.3 5.24 4.63.73.32 1.3.5 1.75.64.74.23 1.4.2 1.93.12.59-.09 1.82-.74 2.08-1.46.26-.72.26-1.33.18-1.46-.08-.13-.28-.21-.59-.36Z" />,
  wrench: <><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.1-3.1a6 6 0 0 1-7.9 7.9l-6.6 6.6a2.1 2.1 0 0 1-3-3l6.6-6.6a6 6 0 0 1 7.9-7.9z" /></>,
  zap: <path d="M13 2 3 14h9l-1 8 10-12h-9z" />
};

export function Icon({ name, className = "h-5 w-5" }: IconProps) {
  const isFilled = name === "whatsapp";

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill={isFilled ? "currentColor" : "none"}
      stroke={isFilled ? "none" : "currentColor"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      {paths[name] ?? paths.zap}
    </svg>
  );
}
