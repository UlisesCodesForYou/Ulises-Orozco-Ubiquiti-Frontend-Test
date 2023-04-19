import DeviceList from '@components/DeviceList';
import DeviceGrid from '@components/DeviceGrid';
import NavigationBar from '@components/NagivationBar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient: QueryClient = new QueryClient();
export default function HomePage() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NavigationBar />
        <DeviceList />
        <DeviceGrid />
      </QueryClientProvider>
    </>
  );
}
