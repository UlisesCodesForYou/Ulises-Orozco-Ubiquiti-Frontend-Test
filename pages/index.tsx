import DeviceList from '@components/DeviceList';
import DeviceGrid from '@components/DeviceGrid';
import NavigationBar from '@components/NagivationBar';
import { useState } from 'react';
import {
  ActionIcon,
  Container,
  CSSObject,
  Flex,
  LoadingOverlay,
  MantineTheme,
} from '@mantine/core';
import { IconLayoutGrid, IconList } from '@tabler/icons-react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import FilterDropdown from '@components/FilterDropdown';

export default function HomePage() {
  const [isGrid, setIsGrid] = useState<boolean>(true);

  const { isLoading, error, data } = useQuery({
    queryKey: ['productData'],
    queryFn: () =>
      axios.get('https://static.ui.com/fingerprint/ui/public.json').then((res) => res.data),
  });

  if (isLoading) {
    return <LoadingOverlay visible overlayBlur={2} loaderProps={{ size: 'xl' }} />;
  }

  if (error) {
    return <p>An error has occurred!</p>;
  }

  const { devices } = data;

  const toggle = () => {
    setIsGrid((prev) => !prev);
  };

  // Margin Adjuster was created to adjust the placement of the grid, list, and filter buttons.
  const marginAdjuster = (theme: MantineTheme): CSSObject => ({
    marginTop: -90, //This number represents pixels. So, this is -90px.  The same applies to the rest of the number values.
    marginRight: 115,

    [theme.fn.largerThan('sm')]: {
      marginTop: -90,
      marginRight: 60,
    },

    [theme.fn.largerThan('md')]: {
      marginTop: -90,
      marginRight: 190,
    },
  });

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
          sx={marginAdjuster}
        >
          <ActionIcon onClick={() => toggle()} color="blue" aria-label="Grid Layout">
            <IconLayoutGrid />
          </ActionIcon>
          <ActionIcon onClick={() => toggle()} color="blue" aria-label="List Layout">
            <IconList />
          </ActionIcon>
          <FilterDropdown />
        </Flex>
        {!isGrid ? <DeviceList listData={devices} /> : <DeviceGrid gridData={devices} />}
      </Container>
    </>
  );
}
