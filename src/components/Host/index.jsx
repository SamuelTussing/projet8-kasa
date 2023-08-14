

function Host(hostInfos,hostPic){
//console.log("pic", hostInfos)

    return(
        <div className='host' key={"id"}>
            <p className='host_name'>{hostInfos.hostInfos}</p>
            <img src={hostInfos.hostPic} alt={hostInfos.hostInfos} className='host_img'/>
        </div>
    )
}

export default Host