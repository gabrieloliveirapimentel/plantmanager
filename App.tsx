import React, { useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import * as Notifications from 'expo-notifications';

import {
  useFonts,
  Jost_600SemiBold,
  Jost_700Bold,
  Jost_400Regular
} from '@expo-google-fonts/jost';

import Routes from './src/routes';
import { PlantProps } from './src/libs/storage';

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
    Jost_700Bold
  });

  useEffect(() => {

    const subscription = Notifications.addNotificationReceivedListener(
      async notification => {
        const data = notification.request.content.data.plant as PlantProps;
        console.log(data);
      }
    );

    return () => subscription.remove();


    /*
    async function notification() {
      await Notifications.cancelAllScheduledNotificationsAsync();

      const data = await Notifications.getAllScheduledNotificationsAsync(); //Consegue ver todas as notificações agendadas
      console.log('###### NOTIFICAÇÕES AGENDADAS #######');
      console.log(data);
    }

    notification();
    */
  }, [])

  if (!fontsLoaded)
    return <AppLoading />

  return (
    <Routes />
  );
}
