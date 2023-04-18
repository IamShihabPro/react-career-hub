const addToDb = id=>{
    let applyJob = {}
    const storeApply = localStorage.getItem('apply-job')
    if(storeApply){
        applyJob = JSON.parse(storeApply)
    }

    const applyTimes = applyJob[id]
    if(applyTimes){
        const newApply = applyTimes + 1
        applyJob[id] = newApply
    }
    else{
        applyJob[id] = 1
    }

    localStorage.setItem('apply-job', JSON.stringify(applyJob))
}


const getApplyJob = ()=>{
    let applyJob = {}
    const storeApply = localStorage.getItem('apply-job')
    if(storeApply){
        applyJob = JSON.parse(storeApply)
    }
    return applyJob
}

const removeJobDb = id =>{
    const storeApply = localStorage.getItem('apply-job')
    if(storeApply){
        const applyJob = JSON.parse(storeApply)
        if (id in applyJob ){
            delete applyJob[id]
            localStorage.setItem('apply-job', JSON.stringify(applyJob))
        }
    }
}

export {addToDb, getApplyJob, removeJobDb}