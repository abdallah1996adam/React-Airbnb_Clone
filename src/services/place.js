import api from "./api";

const placeService = {
    getAll: async () => {
        return await api.get("/places");
    }, 
    addOne: async (name, description, rooms, bathrooms, max_guests, price_by_night, available, image_url ) => {
        const placeData = {name, description, rooms, bathrooms, max_guests,  price_by_night,  available, image_url}
        return await api.post("/places", placeData)
    }
}

export default placeService;