import httpClient from "../config/httpClient";

class CategoryService {
    static getCategoriesByMenuPath(menuPath) {
        return httpClient.get("/api/category/by-menu-path", {
            params: {menuPath}
        })
    }
}

export default CategoryService