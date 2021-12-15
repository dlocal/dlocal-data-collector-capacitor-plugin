# dl-data-collector-capacitor-plugin

DLocal's Data Collector SDK capacitor plugin for ionic

This plugin is a wrapper of the native SDKs which can be found here [iOS](https://bitbucket.org/dlocal-public/data-collector-sdk-ios/src/master/), [Android](https://bitbucket.org/dlocal-public/data-collector-sdk-android/src/master/)

More info about the functionallity of the SDK on each platform can be found on those repositories.

## Install
### as a dependency:
- Add the following dependency to the package.json:
```json
    "dl-data-collector-capacitor-plugin": "https://bitbucket.org/dlocal-public/dlocal-data-collector-capacitor-plugin.git#v0.0.1"
  }
```

```bash
npm install

npx cap sync
```
### Manual
```bash
npm install https://bitbucket.org/dlocal-public/dlocal-data-collector-capacitor-plugin.git#v0.0.1

npx cap sync
```

## Usage
### Setup on app start
Add this to your app startup, 
```javascript
import { DataCollectorSDK, DLEnvironment } from 'dl-data-collector-capacitor-plugin';

    DataCollectorSDK.setUp({
      apiKey: "TEST",
      env: DLEnvironment.production
    });

    DatacollectorSDK.startSession();
```
Replacing `apiKey` with your key.

### Link the session to the transaction
When the user starts the checkout transaction, gather the session id like so:

```javascript
import { DataCollectorSDK } from 'dl-data-collector-capacitor-plugin';

    var sessionId = (await DataCollectorSDK.getSession()).sessionId;
```
Submit this value in the payment request within the `additional_risk_data.device.event_uuid` parameter. The `sessionId` can be `undefined` if a session is not available or an error occurred.

## API
* [`setUp(...)`](#setup)
* [`startSession()`](#startsession)
* [`getSession()`](#getsession)
* [Enums](#enums)

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### setUp(...)

```typescript
setUp(options: { apiKey: string; env: DLEnvironment; }) => Promise<void>
```

| Param         | Type                                                                              |
| ------------- | --------------------------------------------------------------------------------- |
| **`options`** | <code>{ apiKey: string; env: <a href="#dlenvironment">DLEnvironment</a>; }</code> |

--------------------


### setUp(...)

```typescript
setUp(options: { apiKey: string; }) => Promise<void>
```

| Param         | Type                             |
| ------------- | -------------------------------- |
| **`options`** | <code>{ apiKey: string; }</code> |

--------------------


### startSession()

```typescript
startSession() => Promise<void>
```

--------------------


### getSession()

```typescript
getSession() => Promise<{ sessionId: string; }>
```

**Returns:** <code>Promise&lt;{ sessionId: string; }&gt;</code>

--------------------


### Enums


#### DLEnvironment

| Members          | Value          |
| ---------------- | -------------- |
| **`production`** | <code>0</code> |
| **`sandbox`**    | <code>1</code> |

</docgen-api>
