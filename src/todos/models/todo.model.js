

export class Todo {

    /**
     * 
     * @param {String} description 
     */
    constructor( description ) {
        if( !description ) throw new Error('')

        this.id = crypto.randomUUID();
        this.description = description;
        this.done = false;
        this.createdAt = new Date();

    }

}