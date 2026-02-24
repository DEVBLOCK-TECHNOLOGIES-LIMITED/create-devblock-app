import React from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import { Home, LayoutDashboard, Settings, User, Bell } from 'lucide-react';

const sidebarItems = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '/' },
  { name: 'Profile', icon: User, href: '/profile' },
  { name: 'Notifications', icon: Bell, href: '/notifications' },
  { name: 'Settings', icon: Settings, href: '/settings' },
];

export default function DashboardPage() {
  return (
    <Layout items={sidebarItems}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Summary Card */}
        <div className="bg-surface p-6 rounded-xl border border-border">
          <h3 className="text-sm font-medium text-text-muted uppercase tracking-wider">Total Sales</h3>
          <p className="text-3xl font-bold mt-2 text-foreground">$12,450.00</p>
          <div className="flex items-center mt-4 text-success text-sm font-medium">
            <span>+12% from last month</span>
          </div>
        </div>

        {/* Summary Card */}
        <div className="bg-surface p-6 rounded-xl border border-border">
          <h3 className="text-sm font-medium text-text-muted uppercase tracking-wider">New Users</h3>
          <p className="text-3xl font-bold mt-2 text-foreground">1,240</p>
          <div className="flex items-center mt-4 text-success text-sm font-medium">
            <span>+5% since yesterday</span>
          </div>
        </div>

        {/* Action Card */}
        <div className="bg-surface p-6 rounded-xl border border-border">
          <h3 className="text-sm font-medium text-text-muted uppercase tracking-wider">Quick Actions</h3>
          <div className="mt-4 flex flex-col gap-2">
            <Button variant="primary">Create Report</Button>
            <Button variant="outline">Invite User</Button>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-surface rounded-xl border border-border overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <h3 className="text-lg font-bold">Recent Activity</h3>
        </div>
        <div className="p-6">
          <p className="text-text-muted italic">No recent activity found. Get started by creating a new project!</p>
        </div>
      </div>
    </Layout>
  );
}
