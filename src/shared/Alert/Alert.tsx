import React from "react";
import {MessageBar } from "@fluentui/react";
// import { MessageBarButton } from "@fluentui/react/lib/Button";
import { connect } from "react-redux";
import { resetAlertAction } from "../../actions/alertActions";

const Alert: React.FC = (props: any) => {
 
  const type = props.alert.type;
  const text = props.alert.text;

  setTimeout(() => props.dispatch(resetAlertAction()), 5000);

  if (type == null) {
    return <></>;
  }
  return (
    <div>
      <MessageBar
        // actions={
        //   <div>
        //     <MessageBarButton>Yes</MessageBarButton>
        //     <MessageBarButton>No</MessageBarButton>
        //   </div>
        // }
        messageBarType={type}
        isMultiline={false}
      >
        {text}
        {/* <Link href="www.bing.com" target="_blank" underline>
          Visit our website.
        </Link> */}
      </MessageBar>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    alert: state.alert,
  };
};

export default connect(mapStateToProps)(Alert);
