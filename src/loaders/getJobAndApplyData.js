import { getApplyJob } from "../Utils/FakeDb"


export const jobsAndApplyData = async()=>{
    const jobsData = await fetch('/jobs.json')
    const jobDatas = await jobsData.json()

    const savedApply = getApplyJob()

    let newArray = []
    for (const id in savedApply){
        const foundJob = jobDatas.find(job => job.id === id)
        if(foundJob){
            foundJob.appapplyTimes = savedApply[id]
            newArray.push(foundJob)
        }
    }
    return {newArray, jobDatas}

}
