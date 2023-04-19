import NavigationBar from '@components/NagivationBar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import DeviceList from '@components/DeviceList';
import DeviceGrid from '@components/DeviceGrid';

const queryClient = new QueryClient();
export default function HomePage() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NavigationBar />
        {/*<DeviceList />*/}
        <DeviceGrid />
      </QueryClientProvider>
    </>
  );
}
