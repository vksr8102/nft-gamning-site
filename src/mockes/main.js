import axios from "axios";



class MainApi{
 
    async getTokenBalance(id){
         
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/v1/xumm/getUserTokenBalances?accountNo=${id}`,{
            method: "get",
            headers: { 
            "Authorization": `Bearer ${localStorage.getItem("AccessToken")}`
            }
        });
        console.log(response)
            if(response.status===200 ){ 
                return response.data;
            }else
            return false;
        } catch (error) {
            console.log(error);    
        }
        
    }
 

}


export const mainApi = new MainApi()