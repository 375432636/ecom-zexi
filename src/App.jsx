import { I18nProvider } from './contexts/I18nContext';
import { HashRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import { PageLayout } from './components/layout/PageLayout';

function App() {
  return (
    <I18nProvider>
      <HashRouter>
        <PageLayout>
          <AppRouter />
        </PageLayout>
      </HashRouter>
    </I18nProvider>
  );
}

export default App;
