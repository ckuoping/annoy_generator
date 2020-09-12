// data from user might be: 
// { jobRole: 'des' },{ jobRole: 'eng' },{ jobRole: 'ent' }

function generateAnnoy(options) {

    // 定義原始資料 
    const target = ['工程師', '設計師', '企業家']
    const task = {
        engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
        designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
        entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']

    }
    const phrase = ['很簡單', '很容易', '很快', '很正常']
        // const options = { jobRole: 'des' }
    let result = ``

    // 判斷腳色
    if (options.jobRole === 'eng') {
        result = target[0] + sample(task.engineer) + sample(phrase)

    } else if (options.jobRole === 'des') {
        result = target[1] + sample(task.designer) + sample(phrase)
    } else {
        result = target[2] + sample(task.entrepreneur) + sample(phrase)
    }

    return result
}

// 產生隨機號碼
function sample(array) {
    const num = Math.floor(Math.random() * array.length)
    return array[num]
}

module.exports = generateAnnoy