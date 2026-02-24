import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SidebarItem {
  name: string;
  icon: LucideIcon;
  href: string;
}

interface LayoutProps {
  children: React.ReactNode;
  items?: SidebarItem[];
}

const Layout: React.FC<LayoutProps> = ({ children, items }) => {
  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Sidebar Skeleton */}
      <aside className="hidden w-64 border-r border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900 md:block">
        <div className="flex h-16 items-center px-6">
          <span className="text-xl font-bold">DevBlock</span>
        </div>
        <nav className="mt-6 px-4 space-y-2">
          {items?.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2 text-zinc-600 rounded-lg hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
            >
              <item.icon size={20} />
              {item.name}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="h-16 border-b border-zinc-200 bg-white px-6 flex items-center justify-between dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="text-lg font-semibold">Dashboard</h2>
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-full bg-zinc-200 dark:bg-zinc-800" />
          </div>
        </header>
        <main className="p-6 flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
