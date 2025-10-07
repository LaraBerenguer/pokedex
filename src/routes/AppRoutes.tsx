import { Route, Routes } from 'react-router';
import { lazy, Suspense } from 'react';
import Spinner from '../components/ui/Spinner';
//import Loading from '../components/Loading/Loading';

const Home = lazy(() => import('../pages/Home'));
const Details = lazy(() => import('../pages/Details'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));
const Error500 = lazy(() => import('../pages/Error500'));

//wrapper so it's less code
const LazyWrapper = ({ component: Component }: { component: React.ComponentType }) => {
    return (
        <Suspense fallback={<Spinner />}>
            <Component />
        </Suspense >
    );
};

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<LazyWrapper component={Home} />} />
                <Route path="/pokemon/:id" element={<LazyWrapper component={Details} />} />
                <Route path='*' element={<LazyWrapper component={NotFoundPage} />} />
                <Route path="/500" element={<LazyWrapper component={Error500} />} />
            </Routes>
        </>
    )
};

export default AppRoutes;