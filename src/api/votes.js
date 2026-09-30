

const delay = (ms) => new Promise((resolve => setTimeout(resolve,ms)))



export async function get_all_vote_functions(){
    console.log("Запрос к серверу")
    await delay(2000)
    console.log("Данные получены")
    
    return [
        {
            id: 1,
            name: "Запуск приложений по команде",
            count: 203
        },
        {
            id: 2,
            name: "Изменение громкости звука",
            count: 89
        },
        {
            id: 3,
            name: "Изменение яркости экрана",
            count: 22
        },
        {
            id: 4,
            name: "Вкладка гардероб и подбор одежды по погоде",
            count: 67
        }    ]
}
