import { Card, Container, Grid, Image, ScrollArea, SimpleGrid, Text, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import useStyles from './DeviceGrid.styles';
import { GridInfo } from './DeviceGrid.d';

interface DeviceGridProps {
  gridData: GridInfo[];
}

export const DeviceGrid = (props: DeviceGridProps) => {
  const { classes } = useStyles();
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedDevice, setSelectedDevice] = useState<GridInfo | null>(null);

  const gridProps: GridInfo[] = props.gridData;
  const gridData: GridInfo[] = gridProps as GridInfo[];

  const drawerOpen = () => open();

  //This is the card holds the data tha is displayed in the cards in the scroll area.
  const grid: JSX.Element[] = gridData.map((item: GridInfo) => (
    <Card
      key={item.id}
      radius="md"
      className={classes.card}
      component="button"
      onClick={() => {
        setSelectedDevice(item);
        drawerOpen();
      }}
    >
      <div className={classes.imageContainer}>
        <Card.Section>
          <Image
            src={`https://static.ui.com/fingerprint/ui/icons/${item.icon.id}_${item.icon.resolutions[4][0]}x${item.icon.resolutions[4][1]}.png`}
            height="auto"
          />
        </Card.Section>
      </div>
      <Text size="md" transform="uppercase" weight={700} className={classes.nameContainer}>
        {item.product.name}
      </Text>
      <Text className={classes.title} mt={5} color="dimmed">
        {item.line.name}
      </Text>
    </Card>
  ));

  return (
    <>
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

      {/*The Product details are held within this drawer once the user clicks the item.*/}
      <Drawer opened={opened} onClose={close} position="right" size="100%">
        {selectedDevice && (
          <Container>
            <SimpleGrid cols={2}>
              <Grid>
                <Grid.Col span={6}>
                  <Image
                    src={`https://static.ui.com/fingerprint/ui/icons/${selectedDevice.icon.id}_${selectedDevice.icon.resolutions[4][0]}x${selectedDevice.icon.resolutions[4][1]}.png`}
                    height="auto"
                  />
                </Grid.Col>
                <Grid.Col span={6}>
                  <Text size="md" weight={700} className={classes.nameContainer}>
                    {selectedDevice.line.name}
                  </Text>
                  <Text className={classes.title} mt={5}>
                    {selectedDevice.product.name}
                  </Text>
                </Grid.Col>
              </Grid>
            </SimpleGrid>
          </Container>
        )}
      </Drawer>
    </>
  );
};
