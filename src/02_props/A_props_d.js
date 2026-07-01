import { memo } from "react";

const A_props_d = ({profile}) => {
    return(
        <>
            <p>Name : {profile.name}</p>
            <p>Home : {profile.home}</p>
            <p>Age : {profile.age}</p>
        </>
    )
} 

export default memo(A_props_d);