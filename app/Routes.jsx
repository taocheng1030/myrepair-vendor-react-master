import React from 'react';
import { BrowserRouter, withRouter, Switch, Route, Redirect, Miss } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Base from './components/Layout/Base';
import BasePage from './components/Layout/BasePage';
import BaseHorizontal from './components/Layout/BaseHorizontal';

import DashboardV1 from './components/Dashboard/DashboardV1';
import DashboardV2 from './components/Dashboard/DashboardV2';
import DashboardV3 from './components/Dashboard/DashboardV3';

import Widgets from './components/Widgets/Widgets';

import Buttons from './components/Elements/Buttons';
import Notifications from './components/Elements/Notifications';
import SweetAlert from './components/Elements/SweetAlert';
import Tour from './components/Elements/Tour';
import BsCarousel from './components/Elements/Carousel';
import Spinner from './components/Elements/Spinner';
import Animation from './components/Elements/Animation';
import DropdownAnimation from './components/Elements/DropdownAnimation';
import Nestable from './components/Elements/Nestable';
import Sortable from './components/Elements/Sortable';
import Panels from './components/Elements/Panels';
import Grid from './components/Elements/Grid';
import GridMasonry from './components/Elements/GridMasonry';
import Typography from './components/Elements/Typography';
import FontIcons from './components/Elements/FontIcons';
import WeatherIcons from './components/Elements/WeatherIcons';
import Colors from './components/Elements/Colors';

import ChartFlot from './components/Charts/ChartFlot';
import ChartRadial from './components/Charts/ChartRadial';
import ChartChartJS from './components/Charts/ChartChartJS';
import ChartRickshaw from './components/Charts/ChartRickshaw';
import ChartMorris from './components/Charts/ChartMorris';
import ChartChartist from './components/Charts/ChartChartist';

import MapsGoogle from './components/Maps/MapsGoogle';
import MapsVector from './components/Maps/MapsVector';

import TableStandard from './components/Tables/TableStandard';
import TableExtended from './components/Tables/TableExtended';
import Datatable from './components/Tables/Datatable';
import JqGrid from './components/Tables/JqGrid';

import FormStandard from './components/Forms/FormStandard';
import FormExtended from './components/Forms/FormExtended';
import FormValidation from './components/Forms/FormValidation';
import FormWizard from './components/Forms/FormWizard';
import FormUpload from './components/Forms/FormUpload';
import FormXEditable from './components/Forms/FormXEditable';
import FormCropper from './components/Forms/FormCropper';

import Login from './components/Pages/Login';
import Register from './components/Pages/Register';
import Recover from './components/Pages/Recover';
import Lock from './components/Pages/Lock';
import NotFound from './components/Pages/NotFound';
import Error500 from './components/Pages/Error500';
import Maintenance from './components/Pages/Maintenance';

import Mailbox from './components/Extras/Mailbox';
import Timeline from './components/Extras/Timeline';
import Calendar from './components/Extras/Calendar';
//import Invoice from './components/Extras/Invoice';
import Search from './components/Extras/Search';
import Todo from './components/Extras/Todo';
import Profile from './components/Extras/Profile';
import BugTracker from './components/Extras/BugTracker';
import ContactDetails from './components/Extras/ContactDetails';
import Contacts from './components/Extras/Contacts';
import Faq from './components/Extras/Faq';
import FileManager from './components/Extras/FileManager';
import Followers from './components/Extras/Followers';
import HelpCenter from './components/Extras/HelpCenter';
import Plans from './components/Extras/Plans';
import ProjectDetails from './components/Extras/ProjectDetails';
import Projects from './components/Extras/Projects';
import Settings from './components/Extras/Settings';
import SocialBoard from './components/Extras/SocialBoard';
import TeamViewer from './components/Extras/TeamViewer';
import VoteLinks from './components/Extras/VoteLinks';

import EcommerceOrder from './components/Ecommerce/EcommerceOrders';
import EcommerceOrderView from './components/Ecommerce/EcommerceOrderView';
import EcommerceProduct from './components/Ecommerce/EcommerceProducts';
import EcommerceProductView from './components/Ecommerce/EcommerceProductView';
import EcommerceCheckout from './components/Ecommerce/EcommerceCheckout';

import BlogList from './components/Blog/BlogList';
import BlogPost from './components/Blog/BlogPost';
import BlogArticle from './components/Blog/BlogArticles';
import BlogArticleView from './components/Blog/BlogArticleView';

import ForumCategories from './components/Forum/ForumCategories';
import ForumTopic from './components/Forum/ForumTopics';
import ForumDiscussion from './components/Forum/ForumDiscussion';




import PostNewService0 from './components/Service/postNewService0'
import PostNewService1 from './components/Service/postNewService1'
import PostNewService2 from './components/Service/postNewService2'
import PostNewService3 from './components/Service/postNewService3'
import PostNewService4 from './components/Service/postNewService4'
import PostNewServiceSummary from './components/Service/postNewServiceSummary'
import ServiceHome from './components/Service/home'
import ServiceDetail from './components/Service/details'

import EventViewAll from './components/Event/eventViewAll'
import EventDetails from './components/Event/eventDetails'
import EventCreateNew0 from './components/Event/createNewEvent0'
import EventCreateNew1 from './components/Event/createNewEvent1'

import GoClubDetails from './components/Event/goClubDetails'
import GoClubViewAll from './components/Event/goClubViewAll'
import GoClubCreateNew0 from './components/Event/createNewGoclub0'
import GoClubCreateNew1 from './components/Event/createNewGoclub1'

import GoClubEventHome from './components/Event/home'

import JobsDetail from './components/Jobs/details'
import JobsHome from './components/Jobs/home'
import PostNewJob1 from './components/Jobs/postNewJob'
import PostNewJob2 from './components/Jobs/postNewJob2'
import PostNewQuickJob1 from './components/Jobs/postNewQuickJob'
import PostNewQuickJob2 from './components/Jobs/postNewQuickJob2'
import PostNewQuickJob3 from './components/Jobs/postNewQuickJob3'
import MakeAProposal from './components/Jobs/makeAProposal'
import PostNewQuickSummary from './components/Jobs/postNewQuickJobSummary'

import AppointmentConfirmed from './components/appointment/confirmed'
import AppointmentHistory from './components/appointment/history'
import AppointmentPendding from './components/appointment/pendding'
import AppointmentOutgoingJob2 from './components/appointment/outgoingJob2'
import AppointmentOutgoingJob3 from './components/appointment/outgoingJob3'
import AppointmentOutgoingJob6 from './components/appointment/outgoingJob6'
import AppointmentOutgoingJob8 from './components/appointment/outgoingJob8'
import AppointmentOutgoingJob10 from './components/appointment/outgoingJob10'
import AppointmentQuickJobProvider from './components/appointment/quickJobProvider'

import SelectVendor from './components/MyPages/selectVendor'
import SelectDevice from './components/MyPages/selectDevice'
import SelectMake from './components/MyPages/selectMake'
import SelectModel from './components/MyPages/selectModel'
import SelectService from './components/MyPages/selectService'
import Help from './components/MyPages/help'
import Contact from './components/MyPages/contact'
import FAQs from './components/MyPages/FAQs'
import Terms from './components/MyPages/terms'
import Policy from './components/MyPages/policy'
import Signin from './components/MyPages/Signin';
import Signup from './components/MyPages/Signup';
import Forgot from './components/MyPages/forgot';
import MyAccount from './components/MyPages/myaccount';
import MyCoin from './components/MyPages/mycoin';
import MyBookings from './components/MyPages/bookings';
import BookingNow from './components/MyPages/bookingNow';
import Submit from './components/MyPages/submit';
import SubmitResult from './components/MyPages/SubmitResult';
import Home from './components/MyPages/home'

import Jobs from './components/MyPages/jobs'
import Calendars from './components/MyPages/calendars'
import SearchForJobs from './components/MyPages/searchForJobs'
import OpeningTimes from './components/MyPages/openingTimes'
import Services from './components/MyPages/services'
import Pricing from './components/MyPages/pricing'
import Customers from './components/MyPages/customers'
import PersonalJobs from './components/MyPages/personalJobs'
import Invoice from './components/MyPages/invoice'

import SoldOut from './components/MyPages/soldout'
import Products from './components/MyPages/products'
import NewProduct from './components/MyPages/newProduct'


import Apis from './API/api'


import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from './reducer';
import { createStore, applyMiddleware, combineReducers } from 'redux';
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

// List of routes that uses the page layout
// listed here to Switch between layouts
// depending on the current pathname
const listofPages = [
    '/login',
    '/register',
    '/recover',
    '/lock',
    '/notfound',
    '/error500',
    '/maintenance'
];

const Routes = ({ location }) => {
    const currentKey = location.pathname.split('/')[1] || '/';
    const timeout = { enter: 500, exit: 500 };

    // Animations supported
    //      'rag-fadeIn'
    //      'rag-fadeInUp'
    //      'rag-fadeInDown'
    //      'rag-fadeInRight'
    //      'rag-fadeInLeft'
    //      'rag-fadeInUpBig'
    //      'rag-fadeInDownBig'
    //      'rag-fadeInRightBig'
    //      'rag-fadeInLeftBig'
    //      'rag-zoomBackDown'
    const animationName = 'rag-fadeIn'

    if (listofPages.indexOf(location.pathname) > -1) {
        return (
            // Page Layout component wrapper
            <BasePage>
                <Switch location={location}>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/recover" component={Recover} />
                    <Route path="/lock" component={Lock} />
                    <Route path="/notfound" component={NotFound} />
                    <Route path="/error500" component={Error500} />
                    <Route path="/maintenance" component={Maintenance} />
                </Switch>
            </BasePage>
        )
    }
    else {
        return (
            // Layout component wrapper
            // Use <BaseHorizontal> to change layout
            <Provider store={store}>
                <Base>
                    <TransitionGroup>
                        <CSSTransition key={currentKey} timeout={timeout} classNames={animationName}>
                            <div>
                                <Switch location={location}>

                                    {/*Dashboard*/}
                                    <Route path="/dashboard" component={DashboardV1} />
                                    <Route path="/dashboardv2" component={DashboardV2} />
                                    <Route path="/dashboardv3" component={DashboardV3} />

                                    {/*Widgets*/}
                                    <Route path="/widgets" component={Widgets} />

                                    {/*Elements*/}
                                    <Route path="/buttons" component={Buttons} />
                                    <Route path="/notifications" component={Notifications} />
                                    <Route path="/sweetalert" component={SweetAlert} />
                                    <Route path="/tour" component={Tour} />
                                    <Route path="/carousel" component={BsCarousel} />
                                    <Route path="/spinners" component={Spinner} />
                                    <Route path="/animations" component={Animation} />
                                    <Route path="/dropdown" component={DropdownAnimation} />
                                    <Route path="/nestable" component={Nestable} />
                                    <Route path="/sortable" component={Sortable} />
                                    <Route path="/panels" component={Panels} />
                                    <Route path="/grid" component={Grid} />
                                    <Route path="/grid-masonry" component={GridMasonry} />
                                    <Route path="/typography" component={Typography} />
                                    <Route path="/icons-font" component={FontIcons} />
                                    <Route path="/icons-weather" component={WeatherIcons} />
                                    <Route path="/colors" component={Colors} />

                                    {/*Forms*/}
                                    <Route path="/form-standard" component={FormStandard} />
                                    <Route path="/form-extended" component={FormExtended} />
                                    <Route path="/form-validation" component={FormValidation} />
                                    <Route path="/form-wizard" component={FormWizard} />
                                    <Route path="/form-upload" component={FormUpload} />
                                    <Route path="/form-xeditable" component={FormXEditable} />
                                    <Route path="/form-cropper" component={FormCropper} />

                                    {/*Charts*/}
                                    <Route path="/chart-flot" component={ChartFlot} />
                                    <Route path="/chart-radial" component={ChartRadial} />
                                    <Route path="/chart-chartjs" component={ChartChartJS} />
                                    <Route path="/chart-rickshaw" component={ChartRickshaw} />
                                    <Route path="/chart-morris" component={ChartMorris} />
                                    <Route path="/chart-chartist" component={ChartChartist} />

                                    {/*Table*/}
                                    <Route path="/table-standard" component={TableStandard} />
                                    <Route path="/table-extended" component={TableExtended} />
                                    <Route path="/table-datatable" component={Datatable} />
                                    <Route path="/table-jqgrid" component={JqGrid} />

                                    {/*Maps*/}
                                    <Route path="/map-google" component={MapsGoogle} />
                                    <Route path="/map-vector" component={MapsVector} />

                                    {/*Extras*/}
                                    <Route path="/mailbox" component={Mailbox} />
                                    <Route path="/timeline" component={Timeline} />
                                    <Route path="/calendar" component={Calendar} />
                                    {/* <Route path="/invoice" component={Invoice}/> */}
                                    <Route path="/search" component={Search} />
                                    <Route path="/todo" component={Todo} />
                                    <Route path="/profile" component={Profile} />
                                    <Route path="/ecommerce-orders" component={EcommerceOrder} />
                                    <Route path="/ecommerce-order-view" component={EcommerceOrderView} />
                                    <Route path="/ecommerce-products" component={EcommerceProduct} />
                                    <Route path="/ecommerce-product-view" component={EcommerceProductView} />
                                    <Route path="/ecommerce-checkout" component={EcommerceCheckout} />
                                    <Route path="/blog-list" component={BlogList} />
                                    <Route path="/blog-post" component={BlogPost} />
                                    <Route path="/blog-articles" component={BlogArticle} />
                                    <Route path="/blog-article-view" component={BlogArticleView} />
                                    <Route path="/forum-categories" component={ForumCategories} />
                                    <Route path="/forum-topics" component={ForumTopic} />
                                    <Route path="/forum-discussion" component={ForumDiscussion} />
                                    <Route path="/bug-tracker" component={BugTracker} />
                                    <Route path="/contact-details" component={ContactDetails} />
                                    <Route path="/contacts" component={Contacts} />
                                    <Route path="/faq" component={Faq} />
                                    <Route path="/file-manager" component={FileManager} />
                                    <Route path="/followers" component={Followers} />
                                    <Route path="/help-center" component={HelpCenter} />
                                    <Route path="/plans" component={Plans} />
                                    <Route path="/project-details" component={ProjectDetails} />
                                    <Route path="/projects" component={Projects} />
                                    <Route path="/settings" component={Settings} />
                                    <Route path="/social-board" component={SocialBoard} />
                                    <Route path="/team-viewer" component={TeamViewer} />
                                    <Route path="/vote-links" component={VoteLinks} />

                                    {/* My Pages */}



                                    {/* Service */}
                                    <Route path="/post-new-service0" component={PostNewService0} />
                                    <Route path="/post-new-service1" component={PostNewService1} />
                                    <Route path="/post-new-service2" component={PostNewService2} />
                                    <Route path="/post-new-service3" component={PostNewService3} />
                                    <Route path="/post-new-service4" component={PostNewService4} />
                                    <Route path="/post-new-service-summary" component={PostNewServiceSummary} />
                                    <Route path="/service-home" component={ServiceHome} />
                                    <Route path="/service-detail" component={ServiceDetail} />

                                    {/* Event */}
                                    <Route path="/event-view-all" component={EventViewAll} />
                                    <Route path="/event-details" component={EventDetails} />
                                    <Route path="/event-create-new0" component={EventCreateNew0} />
                                    <Route path="/event-create-new1" component={EventCreateNew1} />

                                    <Route path="/goclub-details" component={GoClubDetails} />
                                    <Route path="/goclub-view-all" component={GoClubViewAll} />
                                    <Route path="/goclub-create-new0" component={GoClubCreateNew0} />
                                    <Route path="/goclub-create-new1" component={GoClubCreateNew1} />

                                    <Route path="/goclub-event-home" component={GoClubEventHome} />

                                    {/* Job */}
                                    <Route path="/job-detail" component={JobsDetail} />
                                    <Route path="/job-home" component={JobsHome} />
                                    <Route path="/post-new-job" component={PostNewJob1} />
                                    <Route path="/post-new-job1" component={PostNewJob2} />
                                    <Route path="/post-new-quick-job1" component={PostNewQuickJob1} />
                                    <Route path="/post-new-quick-job2" component={PostNewQuickJob2} />
                                    <Route path="/post-new-quick-job3" component={PostNewQuickJob3} />
                                    <Route path="/post-new-quick-summary" component={PostNewQuickSummary} />
                                    <Route path="/make-a-proposal" component={MakeAProposal} />

                                    {/* Appointment */}
                                    <Route path="/app-history" component={AppointmentHistory} />
                                    <Route path="/app-confirmed" component={AppointmentConfirmed} />
                                    <Route path="/app-pendding" component={AppointmentPendding} />
                                    <Route path="/app-outgoingJob2" component={AppointmentOutgoingJob2} />
                                    <Route path="/app-outgoingJob3" component={AppointmentOutgoingJob3} />
                                    <Route path="/app-outgoingJob6" component={AppointmentOutgoingJob6} />
                                    <Route path="/app-outgoingJob8" component={AppointmentOutgoingJob8} />
                                    <Route path="/app-outgoingJob10" component={AppointmentOutgoingJob10} />
                                    <Route path="/app-quickJobProvider" component={AppointmentQuickJobProvider} />

                                    <Route path="/select-vendor" component={SelectVendor} />
                                    <Route path="/select-device" component={SelectDevice} />
                                    <Route path="/select-make" component={SelectMake} />
                                    <Route path="/select-model" component={SelectModel} />
                                    <Route path="/select-service" component={SelectService} />
                                    <Route path="/contact" component={Contact} />
                                    <Route path="/policy" component={Policy} />

                                    <Route path="/booking" component={MyBookings} />
                                    <Route path="/forgot" component={Forgot} />
                                    <Route path="/submit" component={Submit} />
                                    <Route path="/booking-now" component={BookingNow} />
                                    <Route path="/submit-result" component={SubmitResult} />
                                    <Route path="/home" component={Home} />

                                    <Route path="/help" component={Help} />
                                    <Route path="/terms" component={Terms} />
                                    <Route path="/faqs" component={FAQs} />
                                    <Route path="/signin" component={Signin} />
                                    {/* <Route path="/signup" component={Signup} /> */}
                                    <Route path="/myaccount" render={(props) => (!Apis.loggedIn() ? (<Redirect to="/signin" />) : (<MyAccount {...props} />))} />
                                    <Route path="/mycoin" render={(props) => (!Apis.loggedIn() ? (<Redirect to="/signin" />) : (<MyCoin {...props} />))} />
                                    <Route path="/jobs" render={(props) => (!Apis.loggedIn() ? (<Redirect to="/signin" />) : (<Jobs {...props}/>))} />
                                    <Route path="/calendars" render={(props) => (!Apis.loggedIn() ? (<Redirect to="/signin" />) : (<Calendars {...props} />))} />
                                    <Route path="/search-jobs" render={(props) => (!Apis.loggedIn() ? (<Redirect to="/signin" />) : (<SearchForJobs {...props} />))} />
                                    <Route path="/opening-times" render={(props) => (!Apis.loggedIn() ? (<Redirect to="/signin" />) : (<OpeningTimes {...props} />))} />
                                    <Route path="/services" render={(props) => (!Apis.loggedIn() ? (<Redirect to="/signin" />) : (<Services {...props} />))} />
                                    <Route path="/pricing" render={(props) => (!Apis.loggedIn() ? (<Redirect to="/signin" />) : (<Pricing {...props} />))} />
                                    <Route path="/customers" render={(props) => (!Apis.loggedIn() ? (<Redirect to="/signin" />) : (<Customers {...props} />))} />
                                    <Route path="/personal-jobs" render={(props) => (!Apis.loggedIn() ? (<Redirect to="/signin" />) : (<PersonalJobs {...props} />))} />
                                    <Route path="/invoice" render={(props) => (!Apis.loggedIn() ? (<Redirect to="/signin" />) : (<Invoice {...props} />))} />
                                    <Route path="/soldout" render={(props) => (!Apis.loggedIn() ? (<Redirect to="/signin" />) : (<SoldOut {...props} />))} />
                                    <Route path="/products" render={(props) => (!Apis.loggedIn() ? (<Redirect to="/signin" />) : (<Products {...props} />))} />
                                    <Route path="/new-product" render={(props) => (!Apis.loggedIn() ? (<Redirect to="/signin" />) : (<NewProduct {...props} />))} />

                                    <Redirect to="/calendars" />

                                </Switch>
                            </div>
                        </CSSTransition>
                    </TransitionGroup>
                </Base>
            </Provider>
        )
    }
}

export default withRouter(Routes);