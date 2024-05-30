import httpClient from "@/api/httpClient";

const login = (email: string, password: string) => {
    return httpClient.post('/login', { login: email, password });
};

const logout = () => { return httpClient.post('/logout'); };

const getFiles = (limit: number) => { return httpClient.get(`/list?limit=${limit}`); };

const uploadFile = (file: any, filename: string) => {
    const formData = new FormData();
    formData.append('file', file);

    return httpClient.post(
        `/file?filename=${filename}`,
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
    );
};

const downloadFile = (filename: string) => {
    return httpClient.get(`/file?filename=${filename}`, {responseType: 'blob'});
};

const updateFile = (filename: string, fileData: any) => {
    return httpClient.put(`/file?filename=${filename}`, { ...fileData });
};

const deleteFile = (filename: string) => {
    return httpClient.delete(`/file?filename=${filename}`);
};

export {
    login, logout, getFiles, uploadFile, downloadFile, updateFile, deleteFile
};