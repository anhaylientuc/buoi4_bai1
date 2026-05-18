import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_URL + '/students';
const getAll = async () => {
    try {
        const res = await axios.get(BASE_URL);
        console.log(res);
        return res.data;
    } catch (error) {
        throw new Error(error.message);
    }
}
const insert = async (value) => {
    try {
        const res = await axios.post(BASE_URL, value);
        return res.data;
    } catch (error) {
        throw new Error(error.message);


    }
}
const remove = async (id) => {
    try {
        const url = BASE_URL + '/' + id;
        const res = await axios.delete(url);
        return res.data;
    } catch (error) {
        throw new Error(error.message);


    }
}
const edit = async (id, value) => {
    try {
        const url = BASE_URL + '/' + id;
        const res = await axios.put(url, value);
        return res.data;
    } catch (error) {
        throw new Error(error.message);
    }
}
const getById = async (id) => {
    try {
        const url=BASE_URL+'/'+id;
        const res=await axios.get(url);
        return res.data;
    } catch (error) {
        throw new Error(error.message);

    }
}
const search=async(keyword)=>{
    try {
        const url=BASE_URL+'?q='+keyword;
        const res=await axios.get(url);
        return res.data;
    } catch (error) {
        
    }
}
export const StudentService = { getAll, insert, remove, edit,getById,search };