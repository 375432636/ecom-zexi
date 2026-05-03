import { I18nProvider } from './contexts/I18nContext';
import AppRouter from './router/AppRouter';
import PageLayout from './components/layout/PageLayout';

function App() {
  return (
    <I18nProvider>
      <PageLayout>
        <AppRouter />
      </PageLayout>
    </I18nProvider>
  );
}

export default App;
