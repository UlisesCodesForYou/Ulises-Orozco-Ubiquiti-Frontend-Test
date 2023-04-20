import DeviceList from '@components/DeviceList';
import DeviceGrid from '@components/DeviceGrid';
import NavigationBar from '@components/NagivationBar';
import { useState } from 'react';
import { ActionIcon, Flex, Container } from '@mantine/core';
import { IconLayoutGrid, IconList } from '@tabler/icons-react';
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
  };

  return (
    <>
      <NavigationBar />
      <Container size="xl">
        <Flex
          gap="lg"
          justify="flex-end"
          align="flex-start"
          direction="row"
          wrap="nowrap"
          m={120}
          mt={-90}
          mr={160}
        >
          <ActionIcon onClick={() => toggle()} color="blue">
            <IconLayoutGrid />
          </ActionIcon>
          <ActionIcon onClick={() => toggle()} color="blue">
            <IconList />
          </ActionIcon>
        </Flex>
        {!isGrid ? <DeviceList listData={devices} /> : <DeviceGrid gridData={devices} />}
      </Container>
    </>
  );
}
