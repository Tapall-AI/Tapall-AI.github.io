$(document).ready(function(){
    const targetUrl='https://www.kuosanyinzi.com/tap-serve/tap/open/home/tags';
    $.ajax({
        url: targetUrl,
        type: "GET",
        success: (result) => {
            console.log(result);
            const list = $('#statistics .num');
            for(let i = 0; i < list.length; i+=4) {
                list[i].innerHTML = result.data['videoNum']+"+";
                list[i+1].innerHTML = result.data['materialNum']+"+";
                list[i+2].innerHTML = result.data['searchNum'];
                list[i+3].innerHTML = result.data['userNum']+"+";
            }
        },
        error: (e) => {
            console.log(`Error when try to get statistics: ${e}`);
        }
    })
})