import React from 'react'
import {
    CTabs,
    CNav,
    CNavLink,
    CTabContent,
    CTabPane,
    CNavItem
} from "@coreui/react";

import All from './Albums'
import Events from './Events'
import Trips from './Trips'
import Other from './Other'

export default function Main() {
    return (
        <div className="container" style={{marginTop: 20}}>
            <CTabs activeTab="all">
                    <CNav variant="tabs">
                        <CNavItem>
                        <CNavLink data-tab="all">
                            All
                        </CNavLink>
                        </CNavItem>
                        <CNavItem>
                        <CNavLink data-tab="events">
                            Events
                        </CNavLink>
                        </CNavItem>
                        <CNavItem>
                        <CNavLink data-tab="trips">
                            Trips
                        </CNavLink>
                        </CNavItem>
                        <CNavItem>
                        <CNavLink data-tab="other">
                            Other
                        </CNavLink>
                        </CNavItem>
                    </CNav>
                    <CTabContent>
                        <CTabPane data-tab="all">
                            <All />
                        </CTabPane>
                        <CTabPane data-tab="events">
                            <Events />
                        </CTabPane>
                        <CTabPane data-tab="trips">
                            <Trips />
                        </CTabPane>
                        <CTabPane data-tab="other">
                            <Other />
                        </CTabPane>
                    </CTabContent>
            </CTabs>
        </div>
    )
}
