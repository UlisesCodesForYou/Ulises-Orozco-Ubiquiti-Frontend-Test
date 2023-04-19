import { Card, Container, Image, ScrollArea, SimpleGrid, Text } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useStyles from './DeviceGrid.styles';
import { GridInfo } from './DeviceGrid.d';

export const DeviceGrid = () => {
  const { classes } = useStyles();
  const { isLoading, error, data } = useQuery({
    queryKey: ['gridData'],
    queryFn: () =>
      axios.get('https://static.ui.com/fingerprint/ui/public.json').then((res) => res.data),
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>An error has occurred!</h1>;
  }
  const { devices } = data;

  const gridData = devices as GridInfo[];

  const grid: JSX.Element[] = gridData.map((grd: GridInfo) => (
    <Card key={grd.id} radius="md" className={classes.card}>
      <div className={classes.imageContainer}>
        {/*<AspectRatio ratio={5 / 4}>*/}
        {/* */}
        {/*</AspectRatio>*/}
        <Card.Section>
          <Image
            src={`https://static.ui.com/fingerprint/ui/icons/${grd.icon.id}_${grd.icon.resolutions[2][0]}x${grd.icon.resolutions[2][1]}.png`}
          />
        </Card.Section>
      </div>
      <Text size="md" transform="uppercase" weight={700} className={classes.nameContainer}>
        {grd.product.name}
      </Text>
      <Text className={classes.title} mt={5} color="dimmed">
        {grd.line.name}
      </Text>
    </Card>
  ));

  return (
    <ScrollArea className={classes.scrollArea}>
      <Container py="xl">
        <SimpleGrid
          cols={5}
          breakpoints={[
            { maxWidth: 'sm', cols: 1 },
            { maxWidth: 'md', cols: 2 },
          ]}
        >
          {grid}
        </SimpleGrid>
      </Container>
    </ScrollArea>
  );
};
