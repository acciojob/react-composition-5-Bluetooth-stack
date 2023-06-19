import React, { useState } from "react";

const Tabs = ({tabs, ids }) => {
    let [active, setActive] = useState('');

    return (
        <div>
            <ul>
                {
                    tabs.map((ele, ind) => (
                        <li key={`tab-${ids}-${ind}`} onClick={()=>{setActive(ele.content)}}>
                            {ele.title}
                        </li>
                    ))
                }
            </ul>
            {
                active?<p>{active}</p>:<p>{tabs[0].content}</p>
            }
        </div>
    )
}

export default Tabs;