import { v4 as uuidv4 } from 'uuid';

export const addImageInJSONData = (jsonData,imageData) => {
        return jsonData.map(d => {
            return {...d,_id: uuidv4(),image: imageData[Math.floor(Math.random() * (6 - 0 + 1) + 0)].Image}
        })
}