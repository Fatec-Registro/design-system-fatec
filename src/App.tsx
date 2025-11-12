import { AppSidebar } from "@/components/custom/sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-muted">
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 bg-white">
          <SidebarTrigger className="-ml-1" />
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-4">
          <div className="bg-white min-h-[100vh] flex-1 rounded-xl md:min-h-min shadow" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
