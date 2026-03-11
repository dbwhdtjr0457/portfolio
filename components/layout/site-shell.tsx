import type { ReactNode } from "react";

interface SiteShellProps {
  children: ReactNode;
}

export function SiteShell({ children }: SiteShellProps) {
  return (
    <main id="main-content" className="min-h-screen bg-background">
      <div className="mx-auto flex min-h-screen w-full max-w-[1180px] flex-col px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        {children}
      </div>
    </main>
  );
}
