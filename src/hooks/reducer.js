
const dummyData = [{
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
}, {
    "userId": 1,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
}, {
    "userId": 1,
    "id": 3,
    "title": "delectus aut autem",
    "completed": false
}]

export const initialState = {
    data: dummyData,
    mainPage: { currentData: dummyData, searchFor: 'title' },
    usId: [],
    titles: []
}

const searchFunction = (filter_type, value, data) => {
    switch(filter_type){
        case 'title':
            return data.filter(item =>item[filter_type].includes(value.toLowerCase()));
        case 'id':
            if (value === "") {
                return data
            }
            else {return data.filter(item =>parseInt(item[filter_type]) === parseInt(value));}
        case 'userId':
            if (value === "") {
                return data
            }
            else {return data.filter(item =>parseInt(item[filter_type]) === parseInt(value));}
    }
    
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'getData':
            const data = action.value;
            return { ...state, data: data , mainPage: {...state.mainPage, currentData: data}}
        case 'setType':
            const type = action.value;
            return { ...state, mainPage: { ...state.mainPage, searchFor: type } }
        case 'search':
            const filter_type = state.mainPage.searchFor
            const currentData = searchFunction(filter_type, action.value, state.data)
            return { ...state, mainPage: { ...state.mainPage, currentData: currentData }}
        default:
            return { ...state }
    }
}