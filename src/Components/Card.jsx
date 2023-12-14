import React from 'react'

const Card = (props) => {
    return (
        <div key={props.id} style={{"display":"flex","paddingTop":"0.125rem","flexDirection":"column","borderColor":"#E5E7EB","width":"100%"}}>
            <div style={{"display":"flex",flexDirection: "column","paddingTop":"0.75rem","paddingBottom":"0.75rem","paddingLeft":"1rem","paddingRight":"1rem","marginBottom":"0.5rem","flexDirection":"column","borderRadius":"0.5rem","width":"100%","backgroundColor":"#ffffff","cursor":"default"}}>
                <div style={{display: "flex","justifyContent":"space-between","width":"100%"}}>
                    <div style={{"display":"flex","flexDirection":"column"}}>
                        <span style={{"fontWeight":400,"color":"#6B7280", fontSize: "0.7rem"}}>{props.id}</span>
                        <span style={{"marginTop":"0.25rem","fontSize":"0.875rem","lineHeight":"1.25rem","fontWeight":500,"color":"#374151", fontSize: "0.8rem", textOverflow: "ellipsis"}}>{props.title}</span>
                    </div>
                    <div style={{flexShrink: 0}}>
                        <div style={{"position":"relative", "display":"inline-block"}}>
                            <img src={props.group!="state"? "/img/"+props.status+".svg" :"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"} alt="person" style={{"borderRadius":"9999px","width":"1.25rem","height":"1.25rem"}} />
                        </div>
                    </div>
                </div>
                <div style={{"display":"flex","marginTop":"0.625rem","alignItems":"center"}}>
                    <span style={{"display":"inline-block","marginRight":"0.75rem","fontSize":"0.75rem","lineHeight":"1rem","color":"#6B7280"}}>
                        {props.priority}
                    </span>
                    <span style={{display:"inline-block", "fontSize":"0.75rem","lineHeight":"1rem","color":"#6B7280"}}>
                        {props.tags}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Card