(() => {

    function getMovieById( movieId: string ) {
        console.log({ movieId });
    }

    function getMovieActorsById( id: string ) {
        console.log({ id });
    }

    function getActorBioById( actorId: string ) {
        console.log({ actorId });
    }
    
    interface Movie {
        title: string,
        description: string,
        rating: number,
        cast: string[]    
    }

    function createMovie({title, description, rating, cast}: Movie ) {
        console.log({ title, description, rating, cast });
    }

    function createActor( fullName: string, birthdate: Date ): boolean {
        
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }

})();