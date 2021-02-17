import React from 'react'
import AddEvents from './AddEvents';
import AlbumApproval from './AlbumApproval'
import Payments from './Payments';
import AddJob from './AddJob';
import {
    CTabs,
    CNav,
    CNavItem,
    CNavLink,
    CTabContent,
    CTabPane,
} from "@coreui/react";


export default function EventAdminHome() {
    return (
        <div className="cotainer" style={{marginTop: 20, marginLeft:30, marginRight:30}}>
        <CTabs activeTab="events">
          <CNav variant="tabs">
            <CNavItem>
              <CNavLink data-tab="events">
                Add Events
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink data-tab="jobs">
                Add Jobs
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink data-tab="albums">
                Albums
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink data-tab="payment">
                Payments
              </CNavLink>
            </CNavItem>
          </CNav>
          <CTabContent>
            <CTabPane data-tab="events">
              <AddEvents/>
            </CTabPane>
            <CTabPane data-tab="jobs">
              <AddJob/>
            </CTabPane>
            <CTabPane data-tab="albums">
            <AlbumApproval/>
            </CTabPane>
            <CTabPane data-tab="payment">
            <Payments/>
            </CTabPane>
          </CTabContent>
        </CTabs>
        </div>
      )    
}
