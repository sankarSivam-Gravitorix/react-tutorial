import React from "react";
import { WithSpecialMsg } from "./HOC";
import { GoodBye, Greeting } from "./OriginalComp";

// A Higher-Order Component (HOC) in React is a pattern used to reuse component logic. It’s a function that takes a component as an argument and returns a new component with added functionality.

const GreetingWithMsg = WithSpecialMsg(Greeting)
const GoodByeWithMsg = WithSpecialMsg(GoodBye)

export function HOC(){
    return(
        <div>
            <GreetingWithMsg/>
            <GoodByeWithMsg/>
        </div>
    )
}