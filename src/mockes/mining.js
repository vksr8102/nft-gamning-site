import axios from "axios";
import moment from "moment/moment";



class MiningApi{
    async getMining(page=1,pageSize=10){
        try {
            const wallet_address = localStorage.getItem("WalletAddress")
            console.log(wallet_address);
        const response = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/v1/xumm/fetchAvailableNFTsByWalletAddress?wallet_address=${wallet_address}&page=${page}&pageSize=${pageSize}`,{
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
    async getActiveMining(page=1,pageSize=10){
        try {
            const wallet_address = localStorage.getItem("WalletAddress")
            // console.log(wallet_address);
        const response = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/v1/xumm/fetchActiveNFTsByWalletAddress?wallet_address=${wallet_address}&page=${page}&pageSize=${pageSize}`,{
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
    async getTotalMiningStats(){
        try {
            
            const currentTime = moment().utc();

// Format it as "YYYY-MM-DDTHH:MM:SSZ"
const time = currentTime.format('YYYY-MM-DDTHH:mm:ss[Z]');
// console.log(time);
            const wallet_address = localStorage.getItem("WalletAddress")
        const response = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/v1/xumm/getTotalMiningStats?wallet_address=${wallet_address}&current_time=${time}`,{
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
    async calculateMiningTotalCost(id,duration,is_pro,pro_type){
        const wallet_address = localStorage.getItem("WalletAddress")
        try {
            // console.log("res",res);
            // console.log(res?.data?.data?.is_pro);
            // console.log(res?.data?.data?.pro_type);
        const response = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/v1/xumm/calculateMiningTotalCost?nft_ids=${id}&duration=${duration}&wallet_address=${wallet_address}&is_pro=${is_pro}&pro_type=${pro_type}`,{
            method: "get",
            headers: { 
            "Authorization": `Bearer ${localStorage.getItem("AccessToken")}`
            }
        });
       
        console.log(response);
        if(response.status===200 )
        return response.data;
        else
         return false;
        } catch (error) {
            console.log(error);    
        }
        
    }
    async sendtoMines(data){
        let response = null;
      
        try {
         response = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/v1/xumm/sendtoMines`,data,{
            method: "post",
            headers: { 
            "Authorization": `Bearer ${localStorage.getItem("AccessToken")}`
            }
        });
        // console.log(response);
        return response.data;

        } catch (error) {
            console.log(error?.response?.data );  
            return error?.response?.data ;  
        }
        
    }

    async getUserHasMinedBefore(){
        try {
            const wallet_address = localStorage.getItem("WalletAddress")
            console.log(wallet_address);
        const response = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/v1/xumm/userHasMinedBefore?wallet_address=${wallet_address}`,{
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


export const miningApi = new MiningApi()