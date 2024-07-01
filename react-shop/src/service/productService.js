import axios from "axios";
import { BASE_API_URL } from "../common/constants"
import authHeader from "./baseService";

const API_URL = BASE_API_URL + "/api/product";

class ProductService {
    saveProdict(product) {
        return axios.post(API_URL, product, {headers: authHeader()});
    }
    deleteProduct(product) {
        return axios.delete(API_URL + '/' + product.id, {headers:authHeader()});
    }
    getAllProducts() {
        return axios.get(API_URL);
    }
}

const productService = new ProductService();

export default productService;