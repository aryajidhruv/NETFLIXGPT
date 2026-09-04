import React from 'react'
import Body from './components/Body'
// Provider is a special React component from react-redux
// It makes your Redux store available to every component in your app,
// no matter how deeply nested — without needing to manually pass it down as props
import { Provider } from 'react-redux'

// This is the Redux store you created earlier — 
// the central place holding all your app's global state (like the logged-in user)
import appStore from './utils/appStore'

const App = () => {
  return (
    <div>

      {/* 
        Wrapping <Body/> (and everything inside it) with <Provider>
        gives every child component access to the Redux store.
        The "store" prop tells Provider WHICH store to connect —
        in this case, your appStore.

        Practically: any component inside <Body/> — even ones several 
        levels deep — can now use hooks like useSelector() to READ state,
        or useDispatch() to trigger actions like addUser/removeUser,
        without you having to manually pass that data down through props.
      */}
      <Provider store={appStore}>
        <Body/>
      </Provider>
      
    </div>
  )
}

export default App