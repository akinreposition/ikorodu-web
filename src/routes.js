import LocalGossips from "./pages/LocalGossips";
import LandingPage from './pages/LandingPage'
import LCDAs from './pages/LCDAs';
import ContactUs from './pages/ContactUs';
import Services from './pages/Services';
import Communities from './pages/Communities.js';
import MSMEs from './pages/MSMEs';
import Health from './pages/Health';

export default [
    {
        path: '/',
        name: 'Home',
        component: LandingPage,
        isPrivate: false
    },
    {
        path: '/news',
        name: 'Local Gossips',
        component: LocalGossips,
        isPrivate: false,
    },
    {
        path: '/lcda',
        name: 'cda',
        component: LCDAs,
        isPrivate: false
    },
    {
        path: '/contact-us',
        name: 'Contact',
        component: ContactUs,
        isPrivate: false
    },
    {
        path: '/services',
        name: 'Services',
        component: Services,
        isPrivate: false
    },
    {
        path: '/communities',
        name: 'Community',
        component: Communities,
        isPrivate: false
    },
    {
        path: '/communities/msme',
        name: 'MSME',
        component: MSMEs,
        isPrivate: false
    },
    {
        path: '/communities/health',
        name: 'Health',
        component: Health,
        isPrivate: false
    },
]