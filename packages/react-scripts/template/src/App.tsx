import * as React from 'react';
import * as styles from  './App.less';

import logo from './logo.svg';

class App extends React.Component<{}, {}> {
  public render() {
    return (
      <div className={styles.App}>
        <header className={styles.AppHeader}>
          <img src={logo} className={styles.AppLogo} alt="logo" />
          <h1 className={styles.AppTitle}>Welcome to React</h1>
        </header>
        <p className={styles.AppIntro}>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
