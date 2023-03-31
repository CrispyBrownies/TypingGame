import React from "react";

const HealthBar = ({playerData}) => {

    const healthPercent = 98*((playerData.maxHealth-playerData.health)/playerData.maxHealth);
    // console.log(healthPercent);

    return (
        <div className="healthBar"
        style={{
            height:"30px",
            display:"flex",
            justifyContent:'center',
        }}>
            <div className="healthBarTotal"
            style={{
                position: "relative",
                width:"90%",
                height:"100%",
                backgroundColor: 'grey',
                borderRadius:"5px",
                display: "grid",
                alignContent:"center",
                flexWrap:"wrap",
                border:"1px solid black"
            }}>
                <div className="activeHealth"
            style={{
                position: "absolute",
                alignSelf:"center",
                width:"98%",
                height:"60%",
                marginLeft:"1%",
                borderRadius: "3px",
                background: "linear-gradient(90deg, rgba(236,18,18,1) 0%, rgba(108,121,9,1) 24%, rgba(0,226,255,1) 100%)",
            }}/>
                <div className="missingHealth"
                style={{
                    position: "absolute",
                    justifySelf: "right",
                    alignSelf: "center",
                    width:`${healthPercent}%`,
                    height:"80%",
                    marginRight:"1%",
                    background: "grey",
                }}/>
            </div>
        </div>
    )
}

export default HealthBar