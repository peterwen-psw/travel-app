import  axios from  "./axios";

export  const  get = (url,params,headers)=>axios({method:"get",url,params,headers});
export const  post = (url,data)=>axios({method:"post",url,data});
export const patch = (url,data)=>axios({method:"patch",url,data});
export const put = (url,data)=>axios({method:"put",url,data});
export const del = (url)=> axios({method:"delete",url});

export  default  {
    get,
    post,
    patch,
    del,
    put,
}