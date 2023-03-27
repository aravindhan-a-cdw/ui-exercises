export const processData = (url, callback) => {
    $.ajax({
        type: 'get',
        url: url,
        success: (response) => {
            console.log(url, response);
            callback(response);
        },
        error: (error) => {
            console.log(error);
        }
    })
}