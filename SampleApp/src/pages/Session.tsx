import { IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';
import { DataCollectorSDK, DLEnvironment } from 'dl-data-collector-capacitor-plugin';
import { useState } from 'react';

const Session: React.FC = () => {
    const [sessionId, setSessionId] = useState("");

    useIonViewDidEnter(async () => {
        var result = await DataCollectorSDK.getSession();
        console.log(result);
        setSessionId(result.sessionId);
    });
  
  
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
        
        <IonContent>Session Id: {sessionId}</IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Session;
