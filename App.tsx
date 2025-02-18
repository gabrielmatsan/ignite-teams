import { Loading } from '@components/Loading';
import { ThemeProvider } from 'styled-components';

import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import theme from '@theme/theme-dark';

import { StatusBar } from 'react-native';
import { Players } from '@screens/Players';
import { Routes } from '@routes/index';


export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
      barStyle={'light-content'}
      backgroundColor="transparent"
      translucent
      />
      {/* Caso a fonte não esteja carregada, exibe um indicador de carregamento */}
      {fontsLoaded ? <Routes /> : <Loading/>}
    </ThemeProvider>
  );
}
