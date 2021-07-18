import React, { useState } from 'react';
import { ThemeProvider, Toggle } from '@fluentui/react';
import { darkTheme, lightTheme } from './theme';
import { initializeIcons } from '@fluentui/react/lib/Icons';
import { Route, Switch, Redirect } from 'react-router-dom'
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PageNotFound from './shared/PageNotFound/PageNotFound';
import UserRoute from "./Routes/UserRoute";
import Home from "./components/Home/Home";

initializeIcons(undefined, { disableWarnings: true });



const App: React.FC = () => {
  const [useDarkMode, setUseDarkMode] = useState(false);


  return (
    <ThemeProvider
      applyTo='body'
      theme={useDarkMode ? darkTheme : lightTheme}
    >

      <Toggle
        onChange={() => setUseDarkMode(!useDarkMode)}
      />
      <Switch>
      <Route path='/' exact render={() => <Redirect to='/home' />} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <UserRoute path='/home' component={Home} />
      <Route path='/**' component={PageNotFound} />
      </Switch>
      
     


    </ThemeProvider>
  )
}
export default App;
