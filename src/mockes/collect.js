import axios from "axios";
import moment from "moment/moment";



class CollectApi{
    async getCollect(page=1,pageSize=10){
        try {
            const wallet_address = localStorage.getItem("WalletAddress")
            // console.log(wallet_address);
        const response = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/v1/xumm/fetchAvailableDGPforRent?wallet_address=${wallet_address}&page=${page}&pageSize=${pageSize}`,{
            method: "get",
            headers: { 
            "Authorization": `Bearer ${localStorage.getItem("AccessToken")}`
            }
        });
    //    console.log(localStorage.getItem("AccessToken"));
        // console.log(response);
        if(response.status===200 )
        return response.data;
        else
         return false;
        } catch (error) {
            console.log(error);    
        }
        
    }
    async getActiveCollect(page=1,pageSize=10){
        try {
            const wallet_address = localStorage.getItem("WalletAddress")
            // console.log(wallet_address);
        const response = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/v1/xumm/fetchActiveDGPforRent?wallet_address=${wallet_address}&page=${page}&pageSize=${pageSize}`,{
            method: "get",
            headers: { 
            "Authorization": `Bearer ${localStorage.getItem("AccessToken")}`
            }
        });
       console.log(localStorage.getItem("AccessToken"));
        // console.log(response);
        if(response.status===200 )
        return response.data;
        else
         return false;
        } catch (error) {
            console.log(error);    
        }
        
    }
    async getTotalCollectStats(){
        const currentTime = moment().utc();

// Format it as "YYYY-MM-DDTHH:MM:SSZ"
const time = currentTime.format('YYYY-MM-DDTHH:mm:ss[Z]');
        try {
            const wallet_address = localStorage.getItem("WalletAddress")
        const response = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/v1/xumm/getTotalRentStats?wallet_address=${wallet_address}&current_time=${time}`,{
            method: "get",
            headers: { 
            "Authorization": `Bearer ${localStorage.getItem("AccessToken")}`
            }
        });
       console.log(localStorage.getItem("AccessToken"));
        // console.log(response);
        if(response.status===200 )
        return response.data;
        else
         return false;
        } catch (error) {
            console.log(error);    
        }
        
    }
    async calculateCollectTotalCost(id,duration,is_pro,pro_type){
        const wallet_address = localStorage.getItem("WalletAddress")
        // console.log(wallet_address)
        try {
           
        const response = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/v1/xumm/calculateRentTotalCost?nft_ids=${id}&duration=${duration}&&wallet_address=${wallet_address}&is_pro=${is_pro}&pro_type=${pro_type}`,{
            method: "get",
            headers: { 
            "Authorization": `Bearer ${localStorage.getItem("AccessToken")}`
            }
        });
       
        console.log(response);
        if(response.status===200){
            return response.data;
        }else{
         return false;
        }
        } catch (error) {
            console.log(error);    
        }
        
    }
    async sendtoCollect(data){
        let response = null;
      
        try {
         response = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/v1/xumm/sendDGPtoColectRent`,data,{
            method: "post",
            headers: { 
            "Authorization": `Bearer ${localStorage.getItem("AccessToken")}`
            }
        });
        
            if(response.status===200){
                return response.data
            }else{
                return false;
            }    
        }catch(error){
            console.log(error?.response?.data );  
            return error?.response?.data ;  
        }
        
    }


    async getUserHasRentedBefore(){
        try {
            const wallet_address = localStorage.getItem("WalletAddress")
            console.log(wallet_address);
        const response = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/v1/xumm/userHasRentedBefore?wallet_address=${wallet_address}`,{
            method: "get",
            headers: { 
            "Authorization": `Bearer ${localStorage.getItem("AccessToken")}`
            }
        });
       console.log(localStorage.getItem("AccessToken"));
        // console.log(response);
        if(response.status===200 )
        return response.data;
        else
         return false;
        } catch (error) {
            console.log(error);    
        }
        
    }
}


export const collectApi = new CollectApi()