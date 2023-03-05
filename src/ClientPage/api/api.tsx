class API{

    core = 'http://localhost:7139/';

    client = 'http://localhost:7099/';
    
    credit = 'http://localhost:7239/';

    //GET информация о ккредитах
    async getCreditRates(){
        const res = await fetch(this.credit + `api/CreditRate/AllCreditRates`).then(response => 
            response.json()
        );
        return res;
    };

    //GET информация о клиенте
    async getClientInformation(userId: string){
        const res = await fetch(this.client + `api/User/${userId}/ClientInformation`).then(response => 
            response.json()
        );
        return res;
    };

    //GET информация о всех счетах клиент
    async getAccountsAll(userId: string){
        const res = await fetch(this.core + `api/accounts/all?UserID=${userId}`).then(response => 
            response.json()
        );
        return res;
    };

    //GET информация о конкретном счете
    async getAccount(userId: string, id: number){
        const res = await fetch(this.core + `api/accounts/${id}?UserID=${userId}`).then(response => 
            response.json()
        );
        return res;
    };

    //GET история операций по счету
    async getHistory(userId: string, id: number, page: number){
        const res = await fetch(this.core + `api/account/${id}/operations/${page}?UserID=${userId}`).then(response => 
            response.json()
        );
        return res;
    };

    //POST создание счета
    async createAccount(userId: string, type: number){
        const body = {
            userID: userId,
            type: type,
        };
        const blob = new Blob([JSON.stringify(body, null, 2)], {type : 'application/json'});
		const res = await fetch(this.core + 'api/account/create', {method: 'post', body: blob }).then(res=>res.json());
        console.log(blob);
        return res;
	}

     //POST создать операцию
     async createOperation(userId: string, accountNumber: number, date: string, transactionAmount: number){
        const body = {
            userID: userId,
            accountNumber: accountNumber,
            dateTime: date,
            transactionAmount: transactionAmount,
        };
        const blob = new Blob([JSON.stringify(body, null, 2)], {type : 'application/json'});
		const res = await fetch(this.core + 'api/operation/create', {method: 'post', body: blob }).then(res=>res.json());
        console.log(blob);
        return res;
	}

    //PUT изменить статус счета
    async changeAccountState(userId: string, state: number, id: number){
		const res = await fetch(this.core + `api/account/${id}/edit?UserID=${userId}&accountState=${state}`, {method: 'put' }).then(res=>res.json());
        return res;
	}


}

export default new API()
