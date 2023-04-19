import { Button } from '@mantine/core';
import { useToggle } from '@mantine/hooks';
import DeviceGrid from '@components/DeviceGrid';
import DeviceList from '@components/DeviceList';

export const Toggle = () => {
    const [value, toggle] = useToggle([<DeviceGrid />, <DeviceList />]);

    return (
        <Button onClick={() => toggle()}>
            {value}
        </Button>
    );
};
