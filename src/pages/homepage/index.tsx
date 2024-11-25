// global
import React from 'react';
import { makeStyles, shorthands } from "@fluentui/react-components";
import { Button } from "@convergepoint/sass-ui-components";
import { IconAdd } from '@convergepoint/icons';
// local
import { WorkFlowHistory } from './components/workflowhistory/index';
import { LicenseDetails } from '@convergepoint/sass-ui-components';

const AdminLayoutClass = makeStyles({
    root: {
        ...shorthands.borderRadius("8px"),
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        height: "100%",
    },
});

function Home() {
    const LayoutStyle = AdminLayoutClass();
    const [showDashboard, setDashboard] = React.useState(true);

    return (
        <>
            <section
                className={`position-relative p-0 ${LayoutStyle.root}`}
            >
                {/* heading top */}
                <div className="p-20px">

                    <div className="d-flex justify-content-between row" >
                        <h1 tabIndex={0} className="col-sm-6 heading">
                            License Manager
                        </h1>
                        <div className="col-sm-6 text-end d-flex align-items-center justify-content-end">
                            <div className="d-inline-flex align-items-center cursor-pointer pe-4" onClick={() => setDashboard(!showDashboard)}>
                                <svg width="18" height="18" data-CPAutomation="icon_ObligationsCardView_Collapse" fill="none" className="___12fm75w f1w7gpdv fez10in fg4l7m0" aria-hidden="true" viewBox="0 0 19 18" role="presentation" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.2252 1.70713C18.6157 1.31662 18.6157 0.683453 18.2252 0.292916C17.8347 -0.0976207 17.2016 -0.0976414 16.811 0.29287L11.759 5.34452V1.96552C11.759 1.41323 11.3113 0.965517 10.759 0.965517C10.2067 0.965517 9.75903 1.41323 9.75903 1.96552V7.75863C9.75903 8.31091 10.2067 8.75863 10.759 8.75863H16.5525C17.1048 8.75863 17.5525 8.31091 17.5525 7.75863C17.5525 7.20634 17.1048 6.75863 16.5525 6.75863H13.1734L18.2252 1.70713ZM1.96558 9C1.4133 9 0.965582 9.44771 0.965582 10C0.965582 10.5523 1.4133 11 1.96558 11H5.34474L0.292916 16.0515C-0.0976207 16.442 -0.0976415 17.0752 0.29287 17.4657C0.683381 17.8562 1.31655 17.8563 1.70708 17.4658L6.75907 12.4141V15.7931C6.75907 16.3454 7.20678 16.7931 7.75907 16.7931C8.31135 16.7931 8.75907 16.3454 8.75907 15.7931V10C8.75907 9.44771 8.31135 9 7.75907 9H1.96558Z" fill="var(--brandColor600)"></path>
                                </svg>
                                <p className="brandColor600 fw-700 font-14 ms-2"> Hide Dashboard</p>
                            </div>
                            <Button
                                appearance="outline"
                                onClick={() => {
                                    console.log('clicked')
                                }}
                                tabIndex={0}
                                aria-label={"Activity History"}
                            >
                                Activate License
                            </Button>
                            <Button
                                appearance="primary"
                                icon={<IconAdd width={14} primaryFill="#ffffff" />}
                                iconPosition="after"
                                onClick={() => {
                                    console.log('clicked')
                                }}
                                tabIndex={0}
                                aria-label={"Activity History"}
                                className='ms-3'
                            >
                                Create License
                            </Button>
                        </div>
                    </div>

                    {showDashboard &&
                        <div className="mt-4">
                            <WorkFlowHistory />
                            <LicenseDetails/>
                        </div>
                    }
                </div>

                {/* table start */}
                <div className="wrapper">
                    table
                </div>
            </section>
        </>
    )
}

export default Home
