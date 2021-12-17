import { IonButton, IonContent, IonHeader, IonLabel, IonPage, IonRouterOutlet, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { DataCollectorSDK, DLEnvironment } from 'dl-data-collector-capacitor-plugin';
import { Route } from 'react-router';
import Session from './Session';
import { IonReactRouter } from '@ionic/react-router';
import { useEffect } from 'react';

const Home: React.FC = () => {

  useEffect(() => {
    DataCollectorSDK.setUp({
      apiKey: "TEST",
      env: DLEnvironment.sandbox
    });

    DataCollectorSDK.startSession();
  }, []);
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
    
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Sample</IonTitle>
          </IonToolbar>
        </IonHeader>
    <IonButton routerLink="/session">Get session</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
