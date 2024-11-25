import React from 'react'
import { CounterCard } from '@convergepoint/sass-ui-components';

export const WorkFlowHistory = () => {
    const [WorkFlowCount, setWorkFlowCount] = React.useState({
        activeCount: 0,
        expiredCount: 0,
        reniew90sCount: 0,
        reniew60sCount: 0,
        reniew30sCount: 0,
        Expire90sCount: 0,
        Expire60sCount: 0,
        Expire30sCount: 0,
        TotalExpired: 0
    });

    return (
        <>
            <CounterCard
                onSelectedItem={(key) => {
                    console.log("clicked",key)
                }}

                cardItem={[
                    {
                        status: "Active",
                        itemCount: WorkFlowCount.activeCount,
                        key: "Active",
                        customStatus: "Active",
                    },
                    {
                        status: "Expired",
                        itemCount: WorkFlowCount.expiredCount,
                        key: "Expired",
                        customStatus: "Expired",
                    },
                    {
                        status: "Renewing in 90 days",
                        itemCount: WorkFlowCount.reniew90sCount,
                        key: "Renewing in 90 days",
                        customStatus: "Renewing in 90 days",
                    },
                    {
                        status: "Renewing in 60 days",
                        itemCount: WorkFlowCount.reniew60sCount,
                        key: "Renewing in 60 days",
                        customStatus: "Renewing in 60 days",
                    },
                    {
                        status: "Renewing in 30 days",
                        itemCount: WorkFlowCount.reniew30sCount,
                        key: "Renewing in 30 days",
                        customStatus: "Renewing in 30 days",
                    },
                    {
                        status: "Expiring In 90 days",
                        itemCount: WorkFlowCount.Expire90sCount,
                        key: "Expiring In 90 days",
                        customStatus: "Expiring In 90 days",
                    },
                    {
                        status: "Expiring in 60 days",
                        itemCount: WorkFlowCount.Expire60sCount,
                        key: "Expiring In 60 days",
                        customStatus: "Expiring In 60 days",
                    },
                    {
                        status: "Expiring in 30 days",
                        itemCount: WorkFlowCount.Expire30sCount,
                        key: "Expiring In 30 days",
                        customStatus: "Expiring In 30 days",
                    },
                    {
                        status: "Total Expired",
                        itemCount: WorkFlowCount.TotalExpired,
                        key: "Total Expired",
                        customStatus: "Total Expired",
                    },

                ]}
            />
        </>
    )
}

