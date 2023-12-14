import React from 'react'

const ColumnTitle = (props) => {
    return (
        <div style={{"display":"flex","paddingBottom":"0.75rem","justifyContent":"space-between","alignItems":"center","fontSize":"0.875rem","lineHeight":"1.25rem"}}>
            <div style={{"display":"flex","alignItems":"center"}}>
                <img src={props.group==="state" ? "/img/"+props.title+".svg" : "./img/Todo.svg"} style={{"borderRadius":"0.25rem","width":"0.875rem","height":"0.875rem"}} />
                <span style={{"marginRight":"0.75rem","marginLeft":"0.75rem","fontWeight":500}}>{props.title}</span>
                <span style={{"marginRight":"0.75rem","fontWeight":400,"color":"#9CA3AF"}}>{props.length}</span>
            </div>
            <div style={{"display":"flex","alignItems":"center"}}>
                <button style={{"display":"flex","justifyContent":"center","alignItems":"center",padding: "4px","borderRadius":"0.25rem","borderStyle":"none",":hover":{"backgroundColor":"#E5E7EB"}}}>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 12 16" style={{"width":"0.875rem","color":"#9CA3AF",":hover":{"color":"#374151"}}} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"></path>
                    </svg>
                </button>
                <button style={{"display":"flex","justifyContent":"center","alignItems":"center",padding: "4px","borderRadius":"0.25rem","borderStyle":"none",":hover":{"backgroundColor":"#E5E7EB"}}}>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" style={{"width":"0.875rem","color":"#9CA3AF",":hover":{"color":"#374151"}}} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M3 9.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" clipRule="evenodd"></path>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default ColumnTitle