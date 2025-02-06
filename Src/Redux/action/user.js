export const userCreateAction=(payload)=> {
    return {
        type: 'userCreate',
        payload: payload
    }
};
export const deleteUserAction=(payload)=> {
    return {
        type: 'deleteUser',
        payload: payload
    }
}