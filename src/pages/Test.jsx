import React from "react";
import ApplicationSidebar from "../containers/ApplicationSidebar";
import ApplicationMainContent from "../containers/ApplicationMainContent";
import NotificationPanelContainer from "../containers/NotificationPanelContainer";
import PageHeaderContainer from "../containers/PageHeaderContainer";
import PageHeader from "../components/PageHeader";
import styles from "../styles/Test.module.css";



function Test() {
  return (
    <>
    <div className={styles.HeaderContainer}>
        <PageHeaderContainer/>
    </div>
    <div className={styles.gridContainer}>
      <div className={styles.Sidebar}>
        {/* <NotificationPanelContainer/> */}
      </div>

      <div></div>
    </div>
    </>
  );
}

export default Test;

