const wait = (time) => new Promise((res, rej) => {
    setTimeout(() => {
        res()
    }, time)
})

const messagingWithSusan = async () => {
    console.log('Susan: Hello:)')
    await wait(3000)
    console.log('Me: Hey:)')
    await wait(2000)
    console.log('Susan: How are you?:)')
    await wait(3000)
    console.log('Me: Good, thanks.')
}

messagingWithSusan()