import axios from "axios";



class AuthApi{
    async me(){
        try{
        const {data} = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/v1/xumm/verifyAccessToken?access_token=${localStorage.getItem("AccessToken")}`);
        if(data?.success){
         return true;
        } else {
            localStorage.removeItem("AccessToken");
            localStorage.removeItem("XummToken");
            localStorage.removeItem("WalletAddress");
            return false;
        }
        } catch(err){
            console.log(err);
            
        }
    }
    async userTotalBalance(){
        try {
            const wallet_address = localStorage.getItem("WalletAddress")
            console.log(wallet_address);
        const response = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/v1/xumm/getUserTokenBalances?accountNo=${wallet_address}`,{
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

export const authApi = new AuthApi();
