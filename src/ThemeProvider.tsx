import { MantineProvider, MantineThemeOverride, Button } from '@mantine/core';

// export const theme: MantineThemeOverride = {
//   colorScheme: 'dark',

// };



interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{
      fontFamily: 'Source Sans Pro',
      fontSizes: {

      },

      globalStyles: (theme) => ({

        body: {
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
          lineHeight: theme.lineHeight,
          height: '100vh',
          width: '100vw',
          '#root': {
            height: '100vh', width: '100vw',
          },
        },

        main: {
          height: '100vh', width: '100vw',
          backgroundImage: theme.fn.gradient({ from: '#7863F9', to: '#989BB4', deg: 135 }),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

        }
        ,
        span: {
          fontSize: "60%",
          fontWeight: "normal",
          b: {
            fontSize: "3em",
          },

        }

        ,
        '.check': {
          backgroundColor: "transparent",

        }
        ,
        '.checkedline': {
          gap: 0,
        }, '.checkList': {

        }
        , '.pricingGrid': {
          display: "flex",
          flexWrap: "wrap",
          alignItems: "stretch"
        },
        ".button": {
          marginTop: "10px",
          position: "absolute",
          bottom: "10px",
          width: "60%",
        },

        '.pricing': {
          width: "25%",
          paddingBottom: "70px",
          borderRadius: "32px",

        },


        '.centerCard': {
          height: "70%",
          width: "80%",
          backgroundColor: "#F9F8FB",
          paddingTop: "30px",
          borderRadius: "32px",
        }




        // '.price': {
        //   ":before": {
        //     content: "$",
        //     position: "absolute", /* set the position of the pseudo-element to absolute */
        //     left: "-0.5em", /* adjust the left position of the pseudo-element to position it to the left of the price */
        //     top: "50%", /* adjust the top position of the pseudo-element to vertically center it with the price */
        //     transform: "translateY(-50%)",
        //   }
        // },
      }),
    }} >
      {children}
    </ MantineProvider >
  );
}
