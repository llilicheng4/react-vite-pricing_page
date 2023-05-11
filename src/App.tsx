import { Center, Grid, Title } from '@mantine/core';
import { PricingGrid } from './Cards/Pricing';
import { ThemeProvider } from './ThemeProvider';

export default function App() {
  return (
    <ThemeProvider>
      {/* <Welcome /> */}
      <main>



        <div className='centerCard'>
          <PricingGrid />
        </div>




      </main>


    </ThemeProvider >
  );
}
