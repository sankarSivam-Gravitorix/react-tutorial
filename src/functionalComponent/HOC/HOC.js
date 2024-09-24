import React from "react";




export function WithSpecialMsg(WrappedComponent) {
  return function EnhancedComponent(props) {
    return (
      <div>
        <p>This is a Special Message:</p>
        <WrappedComponent {...props} />
      </div>
    );
  };
}
