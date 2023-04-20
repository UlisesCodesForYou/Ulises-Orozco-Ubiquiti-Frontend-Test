import DeviceList from '@components/DeviceList';
import DeviceGrid from '@components/DeviceGrid';
import NavigationBar from '@components/NagivationBar';
import { useState } from 'react';
import { Button } from '@mantine/core';

export default function HomePage() {
  const [isGrid, setIsGrid] = useState(true);

  const toggle = () => {
    setIsGrid((prev) => !prev);
    console.debug('test');
  };

  return (
    <>
      <NavigationBar />
      {/*<DeviceList />*/}
      <Button onClick={() => toggle()}>Toggle View</Button>
      {isGrid ? <DeviceList /> : <DeviceGrid />}
      {/*<DeviceGrid />*/}
    </>
  );
}
