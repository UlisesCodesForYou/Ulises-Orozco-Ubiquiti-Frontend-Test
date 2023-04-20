import DeviceList from '@components/DeviceList';
import DeviceGrid from '@components/DeviceGrid';
import NavigationBar from '@components/NagivationBar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { Button } from '@mantine/core';

const queryClient: QueryClient = new QueryClient();
export default function HomePage() {
  const [isGrid, setIsGrid] = useState(true);

  const toggle = () => {
    setIsGrid((prev) => !prev);
    console.debug('test');
  };

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NavigationBar />
        {/*<DeviceList />*/}
        <Button onClick={() => toggle()}>Toggle View</Button>
        {isGrid ? <DeviceList /> : <DeviceGrid />}
        {/*<DeviceGrid />*/}
      </QueryClientProvider>
    </>
  );
}
