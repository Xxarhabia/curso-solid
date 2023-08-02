(() => {

    
    const temperaturesCelsius = [33.6, 12.34];


    const serverIp = '123.123.123.123';

    const users = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

    const emails = users.map( user => user.email );

    const isJump = false;
    const isRun = true;
    const hasItems = true;
    const isLoading = false;

    const initialTime = new Date().getTime();
    
    const finalTime = new Date().getTime() - initialTime;

    
    function getBooks() {
        throw new Error('Function not implemented.');
    }

    function getBooksByUrl( url: string) {
        throw new Error('Function not implemented.');
    }
    
    function squareArea( square: number ) {
        throw new Error('Function not implemented.');
    }

    function printJob() {
        throw new Error('Function not implemented.');
    }

})();