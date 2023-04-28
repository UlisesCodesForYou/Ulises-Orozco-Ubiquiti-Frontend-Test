import {
  ActionIcon,
  Card,
  Center,
  Container,
  Drawer,
  Grid,
  Image,
  ScrollArea,
  SimpleGrid,
  Table,
  Text,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import { IconChevronDown } from '@tabler/icons';
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
  const grid: JSX.Element[] = gridData.map((item: GridInfo, index: number) => (
    <Card
      key={`${item.icon} + ${item.line.name} +${index}`}
      radius="lg"
      className={classes.card}
      onClick={() => {
        setSelectedDevice(item);
        drawerOpen();
      }}
      p={0}
    >
      <Container>
        <Card.Section className={classes.imageContainer}>
          <Image
            className={classes.imagePadding}
            src={`https://static.ui.com/fingerprint/ui/icons/${item.icon.id}_${item.icon.resolutions[4][0]}x${item.icon.resolutions[4][1]}.png`}
          />
        </Card.Section>
      </Container>
      <Text size="md" transform="uppercase" weight={700} className={classes.nameContainer} mt={25}>
        {item.product.name}
      </Text>
      <Text className={classes.title} mt={10} mb={10} color="dimmed">
        {item.line.name}
      </Text>
    </Card>
  ));

  return (
    <>
      <ScrollArea className={classes.scrollArea}>
        <Container size="md">
          <SimpleGrid
            spacing="lg"
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
      <Drawer opened={opened} onClose={close} position="bottom" size="100%" withCloseButton={false}>
        <Drawer.Header>
          <Drawer.CloseButton>
            <ActionIcon>
              {' '}
              <IconChevronDown />
            </ActionIcon>
          </Drawer.CloseButton>
        </Drawer.Header>
        {selectedDevice && (
          <div>
            <Title order={1} size="h2" mb={10} color="dimmed" align="center">
              {selectedDevice.product.name}
            </Title>
            <div>
              <SimpleGrid cols={1}>
                <Grid>
                  <Grid.Col lg={6}>
                    <Center>
                      <Image
                        src={`https://static.ui.com/fingerprint/ui/icons/${selectedDevice.icon.id}_${selectedDevice.icon.resolutions[4][0]}x${selectedDevice.icon.resolutions[4][1]}.png`}
                        width={450}
                        height={450}
                      />
                    </Center>
                  </Grid.Col>
                  <Grid.Col lg={6} className={classes.detailContainer}>
                    <Table className={classes.tableContainer} fontSize="lg">
                      <tbody>
                        <tr
                          key={`${selectedDevice.icon} + ${selectedDevice.line.name} + ${selectedDevice.index}`}
                        >
                          <td>Product Line</td>
                          <td>
                            <Text className={classes.title}>{selectedDevice.line.name}</Text>
                          </td>
                        </tr>
                        <tr
                          key={`${selectedDevice.icon} + ${selectedDevice.line.name} + ${selectedDevice.index}`}
                        >
                          <td>ID</td>
                          <td>
                            <Text className={classes.title}>{selectedDevice.line.id}</Text>
                          </td>
                        </tr>
                        <tr
                          key={`${selectedDevice.icon} + ${selectedDevice.line.name} + ${selectedDevice.index}`}
                        >
                          <td>Name</td>
                          <td>
                            <Text className={classes.title}>{selectedDevice.product.name}</Text>
                          </td>
                        </tr>
                        <tr
                          key={`${selectedDevice.icon} + ${selectedDevice.line.name} + ${selectedDevice.index}`}
                        >
                          <td>Short name</td>
                          <td>
                            <Text className={classes.title}>{selectedDevice.shortnames}</Text>
                          </td>
                        </tr>
                        {selectedDevice?.unifi?.network?.radios?.na?.maxPower && (
                          <tr
                            key={`${selectedDevice.icon} + ${selectedDevice.line.name} + ${selectedDevice.index}`}
                          >
                            <td>Max Power</td>
                            <td>
                              <Text className={classes.title}>
                                {selectedDevice.unifi.network.radios.na.maxPower}W
                              </Text>
                            </td>
                          </tr>
                        )}
                        {selectedDevice?.unifi?.network?.radios?.na?.maxSpeedMegabitsPerSecond && (
                          <tr
                            key={`${selectedDevice.icon} + ${selectedDevice.line.name} + ${selectedDevice.index}`}
                          >
                            <td>Speed</td>
                            <td>
                              <Text className={classes.title}>
                                {selectedDevice.unifi.network.radios.na.maxSpeedMegabitsPerSecond}{' '}
                                Mbps
                              </Text>
                            </td>
                          </tr>
                        )}
                        {selectedDevice?.unifi?.network?.numberOfPorts && (
                          <tr
                            key={`${selectedDevice.icon} + ${selectedDevice.line.name} + ${selectedDevice.index}`}
                          >
                            <td>Number of Ports</td>
                            <td>
                              <Text className={classes.title}>
                                {selectedDevice.unifi.network.numberOfPorts}
                              </Text>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </Table>
                  </Grid.Col>
                </Grid>
              </SimpleGrid>
            </div>
          </div>
        )}
      </Drawer>
    </>
  );
};
