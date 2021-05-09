import api from "./api";

const placeService = {
    getAll: async () => {
        return await api.get("/places");
    }
}

export default placeService;