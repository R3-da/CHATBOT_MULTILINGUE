const serverURL = 'http://a8e9efc636e9.ngrok.io/'// 'http://example.com:5000'

class DataSaver {
    chatHistory = {
    };
    component = [];
    c=null;
    constructor() {
    }

    load = () => {
        return fetch(serverURL+'/list')
            .then(res => res.json())
            .then(anser => {
                anser.map(a => {
                    this.chatHistory[a.name] = [
                        {
                            from: true,
                            text: 'Hello'
                        }
                    ];
                    this.component.push(a);
                    return true;
                })
            });
    };

    addMsgRequest = async (theme,text)=>{
        let a = [];
        let b =[];
        /*await fetch(serverURL+'/listcities/')
        .then(res=>res.json())
        .then(anser => b.push(anser.ans));*/
        await fetch(serverURL+'/ask/'+theme+'?query='+text)
            .then(res=>res.json())
            .then(anser => a.push(anser.ans));
        this.chatHistory[theme] = [
            ...this.chatHistory[theme],
            {
                from: false,
                text: text
            },
            {
                from: true,
                text: a
            }
        ];
        
    
    };

    loadModel = (theme) =>{
        fetch(serverURL+'/load/'+theme);
    };

    sendSuggestion = (theme,question,response)=>{
        fetch(serverURL+'/propose/'+theme+'?question='+question+'&response='+response)
    }

}
export default DataSaver;