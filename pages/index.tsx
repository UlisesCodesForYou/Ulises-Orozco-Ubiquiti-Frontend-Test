import DeviceList from '@components/DeviceList';
import DeviceGrid from '@components/DeviceGrid';
import NavigationBar from '@components/NagivationBar';
import { useState } from 'react';
import { Button } from '@mantine/core';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export default function HomePage() {
  const [isGrid, setIsGrid] = useState(true);
  const { isLoading, error, data } = useQuery({
    queryKey: ['productData'],
    queryFn: () =>
      axios.get('https://static.ui.com/fingerprint/ui/public.json').then((res) => res.data),
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>An error has occurred! </h1>;
  }

  const { devices } = data;

  const toggle = () => {
    setIsGrid((prev) => !prev);
    console.debug('test');
  };

  return (
    <>
      <NavigationBar />
      {/*<DeviceList />*/}
      <Button onClick={() => toggle()}>Toggle View</Button>
      {isGrid ? <DeviceList listData={devices} /> : <DeviceGrid gridData={devices} />}
      {/*<DeviceGrid />*/}
    </>
  );
}
