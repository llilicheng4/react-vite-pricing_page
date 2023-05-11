import { Card, Text, Button, Group, SimpleGrid, Center, Grid, Title, ThemeIcon, CheckIcon, Flex, Stack, } from '@mantine/core';
import { IconCircleCheck } from '@tabler/icons-react';

export function Pricing(props: any) {
    return (
        <Card padding="lg" radius="md" withBorder className='pricing'>
            <Text weight={600}>
                {props.PlanType}
            </Text>

            <Group spacing="xs">

                <span><a>$</a><b style={{ fontWeight: 600 }}>{props.PlanPrice}</b>/year</span>

            </Group>

            <Text>{props.summary}</Text>

            <CheckList data={props.details}></CheckList>
            <Center >
                <Button color="dark" radius="lg" className='button'>
                    <Text fz="xs" >Get Started</Text>
                </Button>
            </Center>

        </Card>
    );
}

export function PricingGrid() {
    return (

        <Stack align='center'>

            <Title weight={600}  >Pricing</Title>
            <Text color='dimmed' ta="center">Choose the right price for you and get started with you project</Text>

            <Flex gap="md" justify="center" >
                <Pricing summary="For organizing ever corner of you work & life" PlanType="Basic" PlanPrice="399" details={["Collaborative workspace", "7 day page history"]} />
                <Pricing summary="A place for small groups to plan and get organized" PlanType="Professional" PlanPrice="499" details={["All features on Basic", "Unlimited blocks for teams", "30 day page history"]} />
                <Pricing summary="For companies using our software to connect several teams and tools" PlanType="Enterprise" PlanPrice="599" details={["SAML SSO", "Private teamspaces", "Advanced page analytics", "90 day page history"]} />
            </Flex>
        </Stack>






    );
}

export function CheckedLine(props: any) {
    return (
        <Group spacing="xs" className='checkedline'>
            <ThemeIcon variant="light" radius="xl" color="orange" className='check' >
                <IconCircleCheck />
            </ThemeIcon>
            <Text>{props.details}</Text>
        </Group>


    );
}

export function CheckList(props: any) {
    const details = props.data.map((dets: string) => (
        <CheckedLine details={dets}></CheckedLine>
    ));

    return details;
}