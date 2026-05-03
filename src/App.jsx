import { I18nProvider } from './contexts/I18nContext';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import { PageLayout } from './components/layout/PageLayout';

function App() {
  return (
    <I18nProvider>
      <BrowserRouter>
        <PageLayout>
          <AppRouter />
        </PageLayout>
      </BrowserRouter>
    </I18nProvider>
  );
}

export default App;
