# dl-data-collector-capacitor-plugin

dLocal Data Collector SDK ionic plugin

## Install

```bash
npm install dl-data-collector-capacitor-plugin
npx cap sync
```

## API

<docgen-index>

* [`setUp(...)`](#setup)
* [`setUp(...)`](#setup)
* [`startSession()`](#startsession)
* [`getSession()`](#getsession)
* [Enums](#enums)

</docgen-index>

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
