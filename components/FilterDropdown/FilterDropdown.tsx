import { Button, Menu } from '@mantine/core';
import { IconSettings } from '@tabler/icons-react';
import { useState } from 'react';

export const FilterDropdown = () => {
  const [opened, setIsOpened] = useState(false);

  return (
    <Menu shadow="md" width={200} opened={opened} onChange={setIsOpened}>
      <Menu.Target>
        <Button size="xs">Filter</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Product Line</Menu.Label>
        <Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
