import {v2 as cloudianry} from 'cloudinary'
import fs from 'fs'

 cloudianry.config({ 
        cloud_name: process.env.CLOUDIANY_CLOUD_NAME, 
        api_key: process.env.CLOUDIANY_API_KEY, 
        api_secret: process.env.CLOUDIANY_SECRET_KEY // Click 'View API Keys' above to copy your API secret
    });

    const uploadOnCloudnairy  = async (localFilePath) =>{
        try {
            if(!localFilePath) return null;
            // upload file on cloudianary//
            const response = await cloudianry.uploader.upload(localFilePath, {
                resource_type: "auto",
            })
            console.info('file is uploaded on cloudaniary ', response.url);
            return response;
        } catch (error) {
            fs.unlinkSync(localFilePath); // remove the  locally saved tempary file on clouds //
            return null;
        }
    }