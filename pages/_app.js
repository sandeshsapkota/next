import "../src/sass/app.scss"
import UserProvider from "../src/UserProvider";
import Header from "../src/components/layout/Header";
import Nav from "../src/components/layout/Nav";
import Footer from "../src/components/layout/Footer";
import {Head} from "next/document";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
    dsn: "https://a53400c4978e4e7782e48ba9e89ee531@o1151964.ingest.sentry.io/6234829",
    integrations: [new BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
});



function MyApp({Component, pageProps}) {

    return (
        <UserProvider>
            <Header/>
            <Nav/>
            <div className="min-h-screen">
                <Component {...pageProps} />
            </div>
            <Footer/>
        </UserProvider>
    )
}

export default Sentry.withProfiler(MyApp);
