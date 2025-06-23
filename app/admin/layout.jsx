import AdminSidebar from "@/components/admin-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import UserNav from "@/components/user-nav";

export default function AdminLayout({ children }) {
  return (
    <div>
      <SidebarProvider>
        {/* Sidebar section 1 */}
        <AdminSidebar />

        {/* Main content section */}
        <SidebarInset>
          <header className="sticky top-0 z-50 border-b bg-background">
            <div className="flex h-16 items-center justify-between px-4">
              <h1 className="text-xl font-bold">Admin Dashboard</h1>
              
              {/* user dropdown navigation */}
              <UserNav />
            </div>
          </header>
          <div className="flex-1 p-4 md:p-8">{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
