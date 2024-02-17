import { ThemeProvider } from "@/components/context/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => {
    const queryClient = new QueryClient();

    return (
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
          <Outlet />
        </ThemeProvider>
      </QueryClientProvider>
    );
  },
});
