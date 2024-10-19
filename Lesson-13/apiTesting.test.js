import axios from "axios";
import expect from "expect";


describe('API testing', () =>  {
    const axiosInstance = axios.create({baseURL: "https://api.restful-api.dev", validateStatus: () => true});

    test('GET, List of all objects', async () => {
        const response = await axiosInstance.get('/objects');

        expect(response.status).toEqual(200);
        expect(Array.isArray(response.data)).toEqual(true);
        expect(response.data.length).toBeGreaterThan(0);
        response.data.forEach((obj) => {
            expect(typeof obj.id).toBe("string");
            expect(obj.name).toBeDefined();
            expect(typeof obj.name).toBe("string");
            expect(typeof obj.data).toBe("object");



        });
        console.log("GET. List of all objects:", response.data);
    })

    test('GET, List of objects by ids', async () => {
        const id_response = await axiosInstance.get("/objects?id=3&id=5&id=10");
        expect(id_response.status).toEqual(200);
        expect(Array.isArray(id_response.data)).toEqual(true);
        expect(id_response.data.length).toBeGreaterThan(0);
        id_response.data.forEach((obj) => {
            expect(typeof obj.id).toBe("string");
            expect(obj.name).toBeDefined();
            expect(typeof obj.name).toBe("string");
            expect(typeof obj.data).toBe("object");



        });
        console.log("GET. List of objects by ids:", id_response.data);
    })
    test ('GET, Single object', async () => {
        const objId = 3;
        const singleObject_response = await axiosInstance.get(`/objects/${objId}`);

        expect(singleObject_response.status).toEqual(200);
        expect(typeof singleObject_response.data.id).toBe('string');
        expect(typeof singleObject_response.data.name).toBe('string');
        expect(typeof singleObject_response.data.data).toBe('object');
        expect(typeof singleObject_response.data.data.color).toEqual('string');
        expect(typeof singleObject_response.data.data["capacity GB"]).toBe('number');
        console.log("GET. Single object", singleObject_response.data);

    })

    test ('POST, Add object', async () => {
        const params = {
    "name": "Apple MacBook Pro 16",
    "data": {
        "year": 2000,
        "price": 7849.99,
        "CPU model": "Intel Core i9",
        "Hard disk size": "5 TB"
    }
};

        const addObject_response = await axiosInstance.post("/objects", params, {validateStatus: () => true});
        expect(addObject_response.status).toEqual(200);
        expect(typeof addObject_response.data.id).toBe('string');
        expect(typeof addObject_response.data.name).toBe('string');
        expect(typeof addObject_response.data.data).toBe('object');
        expect(typeof addObject_response.data.data.year).toBe('number');
        expect(typeof addObject_response.data.data.price).toBe('number');
        expect(typeof addObject_response.data.data["CPU model"]).toBe('string');
        expect(typeof addObject_response.data.data["Hard disk size"]).toBe('string');
        console.log("POST. Add object:", addObject_response.data);
    })
    test ('PUT, Update object', async () => {
        const up_params = {
    "name": "Apple MacBook Pro",
    "data": {
        "year": 2024,
        "price": 10111.99,
        "CPU model": "Intel Core i9",
        "Hard disk size": "2 TB",
        "color": "violet"
    }
};
        const id = 'ff80818192925da701929a1f888916a8';
        const update_response = await axiosInstance.put(`/objects/${id}`, up_params);
        expect(update_response.status).toEqual(200);
        expect(update_response.data.data.price).toBe(10111.99);
        expect(update_response.data.data["Hard disk size"]).toBe('2 TB');
        expect(update_response.data.data.color).toBe('violet');
        console.log("PUT. Update object:", update_response.data);
    })

})



