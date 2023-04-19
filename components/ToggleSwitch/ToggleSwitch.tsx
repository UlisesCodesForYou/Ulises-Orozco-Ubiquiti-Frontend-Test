// import { Button } from '@mantine/core';
// import { useToggle } from '@mantine/hooks';
// import DeviceGrid from '@components/DeviceGrid';
// import DeviceList from '@components/DeviceList';
//
// export const Toggle = () => {
//   const [value, toggle] = useToggle([<DeviceGrid />, <DeviceList />]);
//
//   return <Button onClick={() => toggle()}>{value}</Button>;
// };
import { useState } from 'react';
import { Button } from '@mantine/core';
import DeviceGrid from '@components/DeviceGrid';
import DeviceList from '@components/DeviceList';

export const ToggleSwitch = () => {
  const [isGrid, setIsGrid] = useState(true);

  const toggle = () => {
    setIsGrid((prev) => !prev);

    return (
      <>
        <Button onClick={toggle}>Toggle View</Button>
        {isGrid ? <DeviceGrid /> : <DeviceList />}
      </>
    );
  };
};
