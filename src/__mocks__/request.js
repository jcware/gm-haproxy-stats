/* const dataCsvStr = `# pxname,svname,qcur,qmax,scur,smax,slim,stot,bin,bout,dreq,dresp,ereq,econ,eresp,wretr,wredis,status,weight,act,bck,chkfail,chkdown,lastchg,downtime,qlimit,pid,iid,sid,throttle,lbtot,tracked,type,rate,rate_lim,rate_max,check_status,check_code,check_duration,hrsp_1xx,hrsp_2xx,hrsp_3xx,hrsp_4xx,hrsp_5xx,hrsp_other,hanafail,req_rate,req_rate_max,req_tot,cli_abrt,srv_abrt,comp_in,comp_out,comp_byp,comp_rsp,lastsess,last_chk,last_agt,qtime,ctime,rtime,ttime,
http-in,FRONTEND,,,2,58,20000,184262,156478673,3905526680,0,0,674,,,,,OPEN,,,,,,,,,1,2,0,,,,0,5,0,222,,,,0,172565,10489,1128,78,0,,5,224,184262,,,0,0,0,0,,,,,,,,
gmapp,jbossN1,0,0,0,9,,8523,5938546,271282030,,0,,0,0,0,0,UP,1,1,0,3,1,2829,17,,1,3,1,,486,,2,0,,166,L7OK,200,14,0,6708,1741,63,11,0,0,,,,6,0,,,,,2,OK,,0,0,112,128,
 */
/* const aDataCsv = ['# pxname,svname,qcur,qmax,scur,smax,slim,stot,bin,bout,dreq,dresp,ereq,econ,eresp,wretr,wredis,status,weight,act,bck,chkfail,chkdown,lastchg,downtime,qlimit,pid,iid,sid,throttle,lbtot,tracked,type,rate,rate_lim,rate_max,check_status,check_code,check_duration,hrsp_1xx,hrsp_2xx,hrsp_3xx,hrsp_4xx,hrsp_5xx,hrsp_other,hanafail,req_rate,req_rate_max,req_tot,cli_abrt,srv_abrt,comp_in,comp_out,comp_byp,comp_rsp,lastsess,last_chk,last_agt,qtime,ctime,rtime,ttime,',
'http-in,FRONTEND,,,1,86,20000,9661189,16377622022,221812016484,0,0,76884,,,,,OPEN,,,,,,,,,1,2,0,,,,0,0,0,391,,,,0,8989988,548864,105762,16162,389,,0,391,9661188,,,0,0,0,0,,,,,,,,',
'gmapp,jbossN1,0,0,0,34,,1022135,2673728277,25925998695,,0,,2,90,265,141,UP,1,1,0,387,52,18717,13538,,1,3,1,,65093,,2,0,,202,L7OK,200,15,9865,886889,129324,3782,1619,0,0,,,,637,74,,,,,254,OK,,0,0,290,518,']
 */

const dataCsvStr = `# pxname,svname,
  http-in,FRONTEND,
  admin,BACKEND,`

const request = (url) => {
  return new Promise((resolve, reject) => {
    process.nextTick(
      () =>
        dataCsvStr.length > 0
          ? resolve(dataCsvStr)
          : reject(new Error('HAProxy server not found.'))
    )
  })
}

export default request
