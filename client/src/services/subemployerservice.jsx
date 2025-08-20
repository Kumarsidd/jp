import { del, get, post, put } from "./api";


export const subEmployerService = {
    async create(data) {
        const response = await post('sub-employers', data);
        return response.data;
    },

    async getSubEmployers() {
        const response = await get('sub-employers');
        return response.data;
    },

    async updateSubEmployerPermissions(id, permissions) {
        const response = await put(`sub-employers/${id}`, { 
            dashboardPermissions: permissions 
        });
        return response.data;
    }
}