import { Card, Container, Image, ScrollArea, SimpleGrid, Text } from '@mantine/core';
import useStyles from './DeviceGrid.styles';
import { GridInfo } from './DeviceGrid.d';

export const DeviceGrid = (props: any) => {
  const { classes } = useStyles();

  const gridProps = props.gridData;
  const gridData = gridProps as GridInfo[];

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
