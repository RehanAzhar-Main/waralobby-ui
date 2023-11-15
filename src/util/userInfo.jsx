export const getUserInfowithToken = (token) => {
    const decodedPayload = atob(token.split('.')[1]);
    const payloadData = JSON.parse(decodedPayload);

    return {
        userID: payloadData.userId,
        username: payloadData.username,
        email: payloadData.email,
        rolename: payloadData.rolename,
        phoneNumber: payloadData.phoneNumber
    }
}