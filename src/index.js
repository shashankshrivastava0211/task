import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import app from './utils/app';

// Lazy-loaded components
const App = React.lazy(() => import('./App'));
const Login = React.lazy(() => import('./components/Login'));
const SelectPlan = React.lazy(() => import('./components/SelectPlan'));
const AddOns = React.lazy(() => import('./components/AddOns'));
const Summary = React.lazy(() => import('./components/Summary'));
const Checkout = React.lazy(() => import('./components/Checkout'));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Login />
          </Suspense>
        )
      },
      {
        path: "select",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <SelectPlan />
          </Suspense>
        )
      },
      {
        path:"addons",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <AddOns />
          </Suspense>
        )
      },
      {
        path:"summary",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Summary />
          </Suspense>
        )
      },
      {
        path:"/checkout",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Checkout />
          </Suspense>
        )
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={app}>
      <RouterProvider router={appRouter}>
        <Suspense fallback={<div>Loading...</div>}>
          <App />
        </Suspense>
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
