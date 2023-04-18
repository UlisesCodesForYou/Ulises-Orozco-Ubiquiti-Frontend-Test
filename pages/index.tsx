import NavigationBar from '@components/NagivationBar';
import { Welcome } from '@components/Welcome/Welcome';
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';

const queryClient = new QueryClient();
export default function HomePage() {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <NavigationBar />
                <Welcome />
            </QueryClientProvider>

        </>
    );
}
