
const baseURL = "http://localhost:3000/";


export const getInfoPersonal = async () => {
    try {
        const response = await fetch(`${baseURL}personalinfo`)
        const data = await response.json();
        return data;
    }
    catch (e) {
        if (e.response.status === 404) {
            console.log('Resource could not be found!');
        } else {
            console.log(e.message);
        }
    }

}

export const getInfoProyects = async () =>{

    try {
        const response = await fetch(`${baseURL}proyects`)
        const data = await response.json();
        return data;
    }
    catch (e) {
        if (e.response.status === 404) {
            console.log('Resource could not be found!');
        } else {
            console.log(e.message);
        }
    }
}
