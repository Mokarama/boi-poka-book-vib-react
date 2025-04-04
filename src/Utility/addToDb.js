const getStoredReadList = ()=>{
    //read-list
    const storedListStr =localStorage.getItem('read-list');
    if(storedListStr){
        const storedList =JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }
}

const addToStoredReadList =(id) =>{
    const storedList =getStoredReadList();
    if(storedList.includes(id)){
        //already exists.do not add it
        console.log(id, 'already exists in the read list')
    }
    else{
        storedList.push(id);
        const storedListStr =JSON.stringify(storedList);
        localStorage.setItem('read-list',storedListStr)
    }
}

const getStoredWhiseList =() =>{
    const storedListstr =localStorage.getItem('whise-list');
    if(storedListstr){
     const storedList =JSON.parse(storedListstr);
     return storedList;
    }

    else{
        return [];
    }
}

const addToStoredWhiseList =(id)=>{
    const storedList =getStoredWhiseList();
    if(storedList.includes(id)){
        console.log(id, 'already exiest in the read list')
    }

    else{
        storedList.push(id);
        const storedListString =JSON.stringify(storedList);
        localStorage.setItem('whise-list', storedListString)
    }
}




export {addToStoredWhiseList}
export {addToStoredReadList};